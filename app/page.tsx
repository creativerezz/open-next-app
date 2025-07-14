import Header1 from "@/components/layout/navigation/header-1";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, FileSignature, CreditCard, Clock, TrendingUp, Heart, ArrowRight, Sparkles, Smartphone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { MobileContractDemo } from "@/components/sign/mobile-contract-demo";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header1 />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-pink-100 text-pink-700 border-pink-200">
              <Sparkles className="w-3 h-3 mr-1" />
              Trusted by 200+ Wedding Vendors
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Stop Losing Bookings to
              <span className="text-pink-600 block">Contract Chaos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Wedding vendors using VendorSign get contracts signed 3x faster, reduce payment delays by 80%, 
              and increase bookings by 35%. Transform scattered emails into streamlined digital workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
                             <Button variant="outline" size="lg" className="px-8 py-3" asChild>
                 <a href="#demo">Watch Demo (2 min)</a>
               </Button>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                30-day free trial
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Hidden Cost of Manual Contracts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every week of contract delays costs wedding vendors an average of $2,847 in lost bookings and frustrated couples.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contract Ping-Pong</h3>
                  <p className="text-gray-600">Average 7 days for email back-and-forth. Couples book competitors while waiting for your paperwork.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Delays</h3>
                  <p className="text-gray-600">Waiting weeks for checks or bank transfers. Cash flow problems during peak wedding season.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Confusion</h3>
                  <p className="text-gray-600">Couples juggle 10-15 vendor contracts. Your paperwork gets lost in their wedding chaos.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">With VendorSign</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Contracts signed in 24 hours (avg)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Instant deposit payments via Stripe</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Automated reminders & follow-ups</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Legal compliance (ESIGN/UETA)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Couples love the organization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Close Deals Faster
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for wedding vendors who want to spend time on their craft, not chasing signatures.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <FileSignature className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle>Digital Contracts</CardTitle>
                <CardDescription>
                  Upload your existing contracts or use our wedding-specific templates. Legally binding e-signatures that hold up in court.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Instant Payments</CardTitle>
                <CardDescription>
                  Collect deposits immediately after signature. Stripe integration means money in your account within 2 business days.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Wedding Timeline</CardTitle>
                <CardDescription>
                  Couples see all vendor contracts in one dashboard. Your brand stays visible throughout their planning journey.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              <Smartphone className="w-3 h-3 mr-1" />
              Interactive Demo
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              See VendorSign in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the complete workflow: from contract review to digital signature to instant payment. 
              Try our live demo on any device.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contract Review</h3>
                  <p className="text-gray-600">Couples receive a clean, mobile-friendly contract with all event details, terms, and pricing clearly laid out.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Signature</h3>
                  <p className="text-gray-600">Touch-friendly signature pad works perfectly on any device. Legally binding and compliant with ESIGN/UETA laws.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Payment</h3>
                  <p className="text-gray-600">Secure Stripe integration processes deposits immediately. Money in your account within 2 business days.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h4 className="font-semibold text-gray-900 mb-3">Why Couples Love It:</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>No more printing, scanning, or mailing contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>All vendor contracts organized in one place</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Can sign and pay from anywhere, anytime</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <MobileContractDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple Pricing That Pays for Itself
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most vendors recover their subscription cost with their first signed contract.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 relative">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="text-4xl font-bold text-gray-900">
                  $29<span className="text-lg font-normal text-gray-500">/month</span>
                </div>
                <CardDescription className="text-lg">Perfect for solo vendors and small teams</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Up to 5 contracts/month</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>3% payment processing fee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Email support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Basic contract templates</span>
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
            
            <Card className="p-8 relative border-pink-200 bg-gradient-to-br from-pink-50 to-purple-50">
              <Badge className="absolute top-4 right-4 bg-pink-600 text-white">Most Popular</Badge>
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="text-4xl font-bold text-gray-900">
                  $79<span className="text-lg font-normal text-gray-500">/month</span>
                </div>
                <CardDescription className="text-lg">For established vendors who want to scale</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Unlimited contracts</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>1% payment processing fee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Priority support + phone</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Custom branding</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>CRM integration</span>
                </div>
                <Button className="w-full mt-6 bg-pink-600 hover:bg-pink-700">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Loved by Wedding Professionals
            </h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 ml-2">4.9/5 from 200+ vendors</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Went from 2 weeks to sign contracts to same-day bookings. My cash flow improved immediately and couples love how organized everything feels."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-sm text-gray-500">Wedding Photographer, SF</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The payment integration is a game-changer. No more chasing couples for deposits - everything happens automatically when they sign."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Marcus Rivera</div>
                    <div className="text-sm text-gray-500">Event Caterer, Austin</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Booked 40% more weddings this season. Couples actually thank me for how easy the process is compared to other vendors."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Emily Watson</div>
                    <div className="text-sm text-gray-500">Venue Owner, Nashville</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Stop Losing Deals to Slow Contracts?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 200+ wedding vendors who've transformed their booking process. 
            Start your free trial today - no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="max-w-sm bg-white text-gray-900"
            />
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-sm opacity-75">
            30-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}