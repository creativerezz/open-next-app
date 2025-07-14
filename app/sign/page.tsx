'use client';

import { HeroWithSignature } from "@/components/mvpblocks/hero-with-signature";

export default function SignatureDemoPage() {
  return (
    <main className="min-h-screen">
      <HeroWithSignature
        badge="✨ Digital Contract Platform"
        heading="Sign Your Agreement Today"
        description="Join thousands who have simplified their contract process. Our secure digital signature solution makes signing documents fast, legal, and beautiful."
        buttons={{
          primary: {
            text: "Sign Contract Now",
            useSignature: true,
            onSignature: (signature) => {
              // In a real app, you'd send this to your backend
              console.log('Contract signed with signature:', signature.substring(0, 50) + '...');
            }
          }
        }}
        image={{
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
          alt: "Digital signature interface demonstration",
        }}
      />
      
      {/* Additional sections could go here */}
      <section id="sample" className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our digital signature process is simple, secure, and legally binding.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Click to Sign</h3>
                <p className="text-sm text-muted-foreground">
                  Click the &quot;Sign Contract&quot; button to open the signature interface
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Draw Signature</h3>
                <p className="text-sm text-muted-foreground">
                  Use your mouse or finger to create your digital signature
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Confirm & Save</h3>
                <p className="text-sm text-muted-foreground">
                  Review and confirm your signature to complete the process
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}