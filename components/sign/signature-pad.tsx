'use client';

import React, { useRef, useEffect, useState, forwardRef } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Trash2, Check } from 'lucide-react';

interface SignaturePadProps {
  onSignature?: (signature: string) => void;
  width?: number;
  height?: number;
  className?: string;
}

export const SignaturePad = forwardRef<HTMLCanvasElement, SignaturePadProps>(
  ({ onSignature, width = 400, height = 200, className = '' }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [hasSignature, setHasSignature] = useState(false);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set up canvas
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      // Configure drawing style
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Clear canvas with white background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }, []);

    const getEventPos = (e: React.MouseEvent | React.TouchEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };

      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
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
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!ctx || !canvas) return;

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      setHasSignature(false);
    };

    const saveSignature = () => {
      const canvas = canvasRef.current;
      if (!canvas || !hasSignature) return;

      const dataURL = canvas.toDataURL('image/png');
      onSignature?.(dataURL);
    };

    return (
      <Card className={`p-4 ${className}`}>
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Sign Here</h3>
            <p className="text-sm text-gray-600">
              Use your finger or stylus to sign in the box below
            </p>
          </div>
          
          <div className="relative border-2 border-dashed border-gray-300 rounded-lg overflow-hidden bg-white">
            <canvas
              ref={canvasRef}
              className="block w-full h-48 cursor-crosshair touch-none"
              style={{ width: width, height: height }}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />
            
            {!hasSignature && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-gray-400 text-center">
                  <div className="text-4xl mb-2">✎</div>
                  <div className="text-sm">Sign here</div>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-2 justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={clearSignature}
              disabled={!hasSignature}
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Clear
            </Button>
            <Button
              size="sm"
              onClick={saveSignature}
              disabled={!hasSignature}
              className="bg-pink-600 hover:bg-pink-700"
            >
              <Check className="w-4 h-4 mr-1" />
              Sign Contract
            </Button>
          </div>
        </div>
      </Card>
    );
  }
);

SignaturePad.displayName = 'SignaturePad'; 