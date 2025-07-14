'use client';

import { ArrowRight, ArrowUpRight, FileSignature } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SignatureModal } from "@/components/sign/signature-modal";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface HeroWithSignatureProps {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      useSignature?: boolean;
      onSignature?: (signature: string) => void;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
  className?: string;
}

const HeroWithSignature = ({
  badge = "✨ Sign Digitally",
  heading = "Sign Contracts Instantly",
  description = "Experience the future of digital agreements. Sign documents securely with our beautiful signature interface - no printing required.",
  buttons = {
    primary: {
      text: "Sign Your Contract",
      useSignature: true,
    },
    secondary: {
      text: "Learn More",
      url: "#features",
    },
  },
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "Digital signature interface demonstration",
  },
  className,
}: HeroWithSignatureProps) => {
  const [signatureData, setSignatureData] = useState<string>("");
  
  const handleSignature = (signature: string) => {
    setSignatureData(signature);
    if (buttons.primary?.onSignature) {
      buttons.primary.onSignature(signature);
    } else {
      // Default behavior - could send to API, store in state, etc.
      console.log('Signature captured:', signature.substring(0, 50) + '...');
    }
  };

  return (
    <section className={cn("relative py-20 md:py-32 overflow-hidden", className)}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      
      <div className="container relative">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center text-center">
            {badge && (
              <Badge 
                variant="outline" 
                className="mb-4 border-pink-200 bg-pink-50 text-pink-700 hover:bg-pink-100 transition-colors"
              >
                <FileSignature className="mr-2 h-3.5 w-3.5" />
                {badge}
                <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
              </Badge>
            )}
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight lg:text-6xl xl:text-7xl">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {heading.split(' ').slice(0, -1).join(' ')}{' '}
              </span>
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {heading.split(' ').slice(-1)[0]}
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-muted-foreground lg:text-xl text-center">
              {description}
            </p>
            
            <div className="flex w-full flex-col justify-center gap-4 sm:flex-row items-center">
              {buttons.primary && (
                buttons.primary.useSignature ? (
                  <SignatureModal
                    onSignature={handleSignature}
                    triggerText={buttons.primary.text}
                    triggerClassName="sm:w-auto shadow-lg hover:shadow-xl transition-all duration-200"
                  />
                ) : (
                  <Button className="w-full sm:w-auto">
                    {buttons.primary.text}
                  </Button>
                )
              )}
              
              {buttons.secondary && (
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 hover:bg-gray-50"
                >
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
            
            {signatureData && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg mx-auto">
                <p className="text-sm text-green-700 font-medium">
                  ✓ Contract signed successfully!
                </p>
              </div>
            )}
          </div>
          
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-100 to-purple-100 rounded-2xl -z-10 blur-2xl opacity-30" />
            <img
              src={image.src}
              alt={image.alt}
              className="relative w-full max-h-[500px] rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroWithSignature };