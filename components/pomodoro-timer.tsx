"use client";

import { useCallback, useEffect, useState } from "react";

interface PomodoroTimerProps {
  task: { id: string; title: string } | null;
  onSessionComplete: (taskId: string) => void;
}

export default function PomodoroTimer({ task, onSessionComplete }: PomodoroTimerProps) {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(workMinutes * 60);
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState<"work" | "break">("work");

  useEffect(() => {
    setSecondsLeft(workMinutes * 60);
  }, [workMinutes]);

  const handleComplete = useCallback(() => {
    try {
      if (Notification.permission === "granted") {
        new Notification(mode === "work" ? "Work session complete" : "Break finished");
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission();
      }
    } catch {}

    try {
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = 1000;
      osc.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {}

    if (mode === "work" && task) {
      onSessionComplete(task.id);
    }
    setMode(mode === "work" ? "break" : "work");
  }, [mode, task, onSessionComplete]);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s > 1) return s - 1;
        handleComplete();
        return mode === "work" ? breakMinutes * 60 : workMinutes * 60;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [running, mode, workMinutes, breakMinutes, handleComplete]);

  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setMode("work");
    setSecondsLeft(workMinutes * 60);
  };

  const minutes = Math.floor(secondsLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (secondsLeft % 60).toString().padStart(2, "0");

  return (
    <div className="mt-6 border rounded p-4">
      <h3 className="font-semibold mb-2">Pomodoro Timer {task ? `(Task: ${task.title})` : ""}</h3>
      <div className="flex items-center gap-4">
        <span className="text-3xl font-mono">
          {minutes}:{seconds}
        </span>
        {running ? (
          <button onClick={pause} className="px-2 py-1 border rounded">
            Pause
          </button>
        ) : (
          <button onClick={start} className="px-2 py-1 border rounded">
            Start
          </button>
        )}
        <button onClick={reset} className="px-2 py-1 border rounded">
          Reset
        </button>
      </div>
      <div className="flex gap-2 mt-2">
        <label className="flex items-center gap-1 text-sm">
          Work
          <input
            type="number"
            min={1}
            value={workMinutes}
            onChange={(e) => setWorkMinutes(Number(e.target.value))}
            className="w-16 border rounded p-1"
          />
        </label>
        <label className="flex items-center gap-1 text-sm">
          Break
          <input
            type="number"
            min={1}
            value={breakMinutes}
            onChange={(e) => setBreakMinutes(Number(e.target.value))}
            className="w-16 border rounded p-1"
          />
        </label>
      </div>
    </div>
  );
}
