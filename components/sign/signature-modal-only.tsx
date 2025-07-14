 'use client';

import React, { useRef, useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Trash2, Check, PenTool } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SignatureModalOnlyProps {
  /** Controls the open state of the modal */
  open: boolean;
  /** Handler called when the open state changes */
  onOpenChange: (open: boolean) => void;
  /** Callback with the signature data URL once confirmed */
  onSignature?: (signature: string) => void;
  /** Modal title text */
  title?: string;
  /** Modal description text */
  description?: string;
}

/**
 * A standalone signature capture modal without a trigger button.
 */
export function SignatureModalOnly({
  open,
  onOpenChange,
  onSignature,
  title = 'Digital Signature',
  description = 'Sign below to agree to the terms and conditions',
}: SignatureModalOnlyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (open) {
      initializeCanvas();
    }
  }, [open]);

  function initializeCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#fafafa');
    gradient.addColorStop(1, '#f5f5f5');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function getEventPos(e: React.MouseEvent | React.TouchEvent) {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    if ('touches' in e && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else if ('clientX' in e) {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
    return { x: 0, y: 0 };
  }

  function startDrawing(e: React.MouseEvent | React.TouchEvent) {
    e.preventDefault();
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;
    const pos = getEventPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  }

  function draw(e: React.MouseEvent | React.TouchEvent) {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;
    const pos = getEventPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    setHasSignature(true);
  }

  function stopDrawing() {
    setIsDrawing(false);
  }

  function clearSignature() {
    initializeCanvas();
    setHasSignature(false);
    setIsComplete(false);
  }

  function saveSignature() {
    const canvas = canvasRef.current;
    if (!canvas || !hasSignature) return;
    const dataURL = canvas.toDataURL('image/png');
    onSignature?.(dataURL);
    setIsComplete(true);
    setTimeout(() => {
      onOpenChange(false);
      setIsComplete(false);
      setHasSignature(false);
    }, 1500);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {title}
          </DialogTitle>
          <DialogDescription className="text-base">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="p-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg -z-10 blur-xl opacity-50" />

            <div className="relative bg-white rounded-lg border-2 border-gray-200 shadow-inner overflow-hidden">
              <canvas
                ref={canvasRef}
                className="block w-full cursor-crosshair touch-none"
                style={{ height: '250px' }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
              />

              {!hasSignature && !isComplete && (
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <PenTool className="w-12 h-12 text-gray-300 mb-2" />
                  <p className="text-sm text-gray-400 font-medium">Draw your signature here</p>
                  <p className="text-xs text-gray-400 mt-1">Use your mouse or finger</p>
                </div>
              )}

              {isComplete && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-95">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-10 h-10 text-green-600" />
                    </div>
                    <p className="text-lg font-semibold text-gray-800">Signature Saved!</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 border-b-2 border-gray-300 border-dashed mx-8" />
          </div>
        </div>

        <DialogFooter className="p-6 pt-0 gap-2">
          <Button
            variant="outline"
            onClick={clearSignature}
            disabled={!hasSignature || isComplete}
            className="flex-1 sm:flex-none"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Clear
          </Button>
          <Button
            onClick={saveSignature}
            disabled={!hasSignature || isComplete}
            className={cn(
              "flex-1 sm:flex-none bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
            )}
          >
            <Check className="w-4 h-4 mr-2" />
            Confirm Signature
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
