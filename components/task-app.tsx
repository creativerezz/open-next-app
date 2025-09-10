"use client";

import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format, isSameDay } from "date-fns";
import PomodoroTimer from "./pomodoro-timer";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  category: string;
  scheduled: string | null; // ISO string
  completed: boolean;
  pomodoros: number;
}

const HOURS = Array.from({ length: 12 }, (_, i) => i + 8); // 8am-7pm

const emptyForm = {
  title: "",
  description: "",
  priority: "medium" as const,
  category: "",
};

export default function TaskApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);

  // PWA service worker registration
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js").catch(() => {});
    }
  }, []);

  // load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setTasks((t) =>
        t.map((task) =>
          task.id === editingId ? { ...task, ...form } : task
        )
      );
      setEditingId(null);
    } else {
      const newTask: Task = {
        id: crypto.randomUUID(),
        ...form,
        scheduled: null,
        completed: false,
        pomodoros: 0,
      };
      setTasks((t) => [...t, newTask]);
    }
    setForm(emptyForm);
  };

  const startEdit = (task: Task) => {
    setForm({
      title: task.title,
      description: task.description,
      priority: task.priority,
      category: task.category,
    });
    setEditingId(task.id);
  };

  const deleteTask = (id: string) => {
    setTasks((t) => t.filter((task) => task.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTasks((t) =>
      t.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDropToUnscheduled = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    setTasks((t) =>
      t.map((task) => (task.id === id ? { ...task, scheduled: null } : task))
    );
  };

  const handleDropToSlot = (e: React.DragEvent<HTMLDivElement>, hour: number) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const date = new Date(selectedDate);
    date.setHours(hour, 0, 0, 0);
    setTasks((t) =>
      t.map((task) =>
        task.id === id ? { ...task, scheduled: date.toISOString() } : task
      )
    );
  };

  const unscheduled = tasks.filter((t) => !t.scheduled);
  const scheduledForDay = tasks.filter(
    (t) => t.scheduled && isSameDay(new Date(t.scheduled), selectedDate)
  );

  const tasksForHour = (hour: number) =>
    scheduledForDay.filter(
      (t) => new Date(t.scheduled as string).getHours() === hour
    );

  const handlePomodoroComplete = (taskId: string) => {
    setTasks((t) =>
      t.map((task) =>
        task.id === taskId ? { ...task, pomodoros: task.pomodoros + 1 } : task
      )
    );
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Time Blocking Task Manager</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Task list */}
        <div>
          <h2 className="font-semibold mb-2">Tasks</h2>
          <form onSubmit={handleSubmit} className="space-y-2 mb-4">
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
              className="w-full border rounded p-2"
            />
            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full border rounded p-2"
            />
            <div className="flex gap-2">
              <select
                value={form.priority}
                onChange={(e) =>
                  setForm({ ...form, priority: e.target.value as "low" | "medium" | "high" })
                }
                className="border rounded p-2"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <input
                type="text"
                placeholder="Category"
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
                className="flex-1 border rounded p-2"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 border rounded bg-blue-500 text-white"
            >
              {editingId ? "Update" : "Add"} Task
            </button>
          </form>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDropToUnscheduled}
            className="min-h-[200px] bg-muted p-2 rounded"
          >
            {unscheduled.map((task) => (
              <div
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
                className="mb-2 p-2 border rounded bg-white flex flex-col gap-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleComplete(task.id)}
                    />
                    <span className={task.completed ? "line-through" : ""}>
                      {task.title}
                    </span>
                  </div>
                  <span className="text-xs">{task.priority}</span>
                </div>
                {task.description && (
                  <p className="text-sm text-muted-foreground">
                    {task.description}
                  </p>
                )}
                <div className="flex gap-2 text-sm mt-1">
                  <button
                    onClick={() => startEdit(task)}
                    className="px-2 py-1 border rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="px-2 py-1 border rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setActiveTaskId(task.id)}
                    className="px-2 py-1 border rounded"
                  >
                    Focus
                  </button>
                </div>
                <div className="text-xs mt-1">Pomodoros: {task.pomodoros}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div>
          <h2 className="font-semibold mb-2">Schedule</h2>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={(date) => date && setSelectedDate(date)}
            className="mb-2"
          />
          <div className="space-y-2">
            {HOURS.map((hour) => (
              <div
                key={hour}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDropToSlot(e, hour)}
                className="border rounded p-2 min-h-[60px] bg-muted"
              >
                <div className="text-xs text-muted-foreground">
                  {format(new Date().setHours(hour, 0, 0, 0), "HH:mm")}
                </div>
                {tasksForHour(hour).map((task) => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id)}
                    className="mt-1 p-2 border rounded bg-white flex items-center justify-between"
                  >
                    <span className={task.completed ? "line-through" : ""}>
                      {task.title}
                    </span>
                    <button
                      onClick={() => setActiveTaskId(task.id)}
                      className="px-2 py-1 border rounded text-xs"
                    >
                      Focus
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <PomodoroTimer
        task={tasks.find((t) => t.id === activeTaskId) || null}
        onSessionComplete={handlePomodoroComplete}
      />
    </div>
  );
}
