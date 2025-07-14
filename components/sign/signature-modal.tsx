'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '../ui/dialog';
import { Trash2, Check, Sparkles, PenTool } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SignatureModalProps {
  onSignature?: (signature: string) => void;
  triggerText?: string;
  triggerClassName?: string;
  title?: string;
  description?: string;
}

export function SignatureModal({ 
  onSignature, 
  triggerText = "Sign Contract",
  triggerClassName,
  title = "Digital Signature",
  description = "Sign below to agree to the terms and conditions"
}: SignatureModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [open, setOpen] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (open) {
      initializeCanvas();
    }
  }, [open]);

  const initializeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Configure drawing style
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Clear canvas with subtle gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#fafafa');
    gradient.addColorStop(1, '#f5f5f5');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const getEventPos = (e: React.MouseEvent | React.TouchEvent) => {
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
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDrawing(true);
    
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    const pos = getEventPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    const pos = getEventPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    setHasSignature(true);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    initializeCanvas();
    setHasSignature(false);
    setIsComplete(false);
  };

  const saveSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas || !hasSignature) return;

    const dataURL = canvas.toDataURL('image/png');
    onSignature?.(dataURL);
    setIsComplete(true);
    
    // Close modal after a short delay
    setTimeout(() => {
      setOpen(false);
      setIsComplete(false);
      setHasSignature(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          className={cn(
            "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200",
            triggerClassName
          )}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          {triggerText}
        </Button>
      </DialogTrigger>
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
            {/* Decorative frame */}
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
            
            {/* Signature line */}
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
            className="flex-1 sm:flex-none bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
          >
            <Check className="w-4 h-4 mr-2" />
            Confirm Signature
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}