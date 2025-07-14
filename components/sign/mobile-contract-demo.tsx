'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { SignaturePad } from './signature-pad';
import { 
  FileText, 
  User, 
  CreditCard, 
  Check, 
  ArrowRight, 
  Calendar,
  MapPin,
  DollarSign,
  Clock
} from 'lucide-react';

interface ContractDemoProps {
  className?: string;
}

type DemoStep = 'contract' | 'signature' | 'payment' | 'complete';

export function MobileContractDemo({ className = '' }: ContractDemoProps) {
  const [currentStep, setCurrentStep] = useState<DemoStep>('contract');
  const [signature, setSignature] = useState<string>('');

  const handleSignature = (signatureData: string) => {
    setSignature(signatureData);
    setTimeout(() => {
      setCurrentStep('payment');
    }, 1000);
  };

  const handlePayment = () => {
    setCurrentStep('complete');
  };

  const resetDemo = () => {
    setCurrentStep('contract');
    setSignature('');
  };

  const renderContractStep = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
          <FileText className="w-5 h-5 text-pink-600" />
        </div>
        <div>
          <h3 className="font-semibold">Wedding Photography Contract</h3>
          <p className="text-sm text-gray-600">Sarah Chen Photography</p>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-sm">June 15, 2024 • 2:00 PM - 11:00 PM</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span className="text-sm">Napa Valley Vineyard</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-gray-500" />
          <span className="text-sm">$3,500 total • $1,500 deposit due</span>
        </div>
      </div>

      <div className="border rounded-lg p-4 max-h-40 overflow-y-auto">
        <h4 className="font-medium mb-2">Contract Terms</h4>
        <div className="text-sm text-gray-600 space-y-2">
          <p>• Full wedding day coverage (9 hours)</p>
          <p>• 500+ edited high-resolution photos</p>
          <p>• Online gallery with download rights</p>
          <p>• 50% deposit required to secure date</p>
          <p>• Cancellation policy: 30 days notice</p>
        </div>
      </div>

      <Button 
        className="w-full bg-pink-600 hover:bg-pink-700"
        onClick={() => setCurrentStep('signature')}
      >
        Review & Sign Contract
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );

  const renderSignatureStep = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold">Digital Signature Required</h3>
          <p className="text-sm text-gray-600">Sign to proceed with booking</p>
        </div>
      </div>

      <SignaturePad onSignature={handleSignature} />
      
      <div className="text-xs text-gray-500 text-center">
        By signing, you agree to the terms and conditions outlined in the contract
      </div>
    </div>
  );

  const renderPaymentStep = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <CreditCard className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <h3 className="font-semibold">Secure Your Date</h3>
          <p className="text-sm text-gray-600">Pay deposit to confirm booking</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-3">
          <span className="font-medium">Deposit Amount</span>
          <span className="text-2xl font-bold text-green-600">$1,500</span>
        </div>
        <div className="text-sm text-gray-600">
          Remaining balance ($2,000) due 30 days before event
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 border rounded-lg bg-white">
          <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
            VISA
          </div>
          <span className="text-sm">•••• •••• •••• 4242</span>
          <Badge variant="secondary" className="ml-auto">Default</Badge>
        </div>
      </div>

      <Button 
        className="w-full bg-green-600 hover:bg-green-700"
        onClick={handlePayment}
      >
        Pay $1,500 Deposit
        <CreditCard className="w-4 h-4 ml-2" />
      </Button>

      <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
        <div className="w-4 h-4 bg-gray-200 rounded flex items-center justify-center">
          🔒
        </div>
        Secured by Stripe • SSL encrypted
      </div>
    </div>
  );

  const renderCompleteStep = () => (
    <div className="space-y-4 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <Check className="w-8 h-8 text-green-600" />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-green-600 mb-2">Booking Confirmed!</h3>
        <p className="text-gray-600">Your wedding photography is officially booked</p>
      </div>

      <div className="bg-green-50 p-4 rounded-lg space-y-2">
        <div className="flex justify-between text-sm">
          <span>Contract Status:</span>
          <Badge className="bg-green-600">Signed & Paid</Badge>
        </div>
        <div className="flex justify-between text-sm">
          <span>Deposit Paid:</span>
          <span className="font-medium">$1,500</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Next Payment:</span>
          <span>May 15, 2024 ($2,000)</span>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-gray-600">
          ✅ Contract emailed to both parties<br/>
          ✅ Calendar invites sent<br/>
          ✅ Payment receipt generated
        </p>
      </div>

      <Button 
        variant="outline" 
        className="w-full"
        onClick={resetDemo}
      >
        Try Demo Again
      </Button>
    </div>
  );

  const getStepTitle = () => {
    switch (currentStep) {
      case 'contract': return 'Contract Review';
      case 'signature': return 'Digital Signature';
      case 'payment': return 'Secure Payment';
      case 'complete': return 'All Done!';
    }
  };

  const getStepNumber = () => {
    switch (currentStep) {
      case 'contract': return 1;
      case 'signature': return 2;
      case 'payment': return 3;
      case 'complete': return 4;
    }
  };

  return (
    <Card className={`max-w-sm mx-auto ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">
            Step {getStepNumber()} of 3
          </Badge>
          <div className="flex items-center gap-1 ml-auto">
            <Clock className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-500">~2 min</span>
          </div>
        </div>
        <CardTitle className="text-lg">{getStepTitle()}</CardTitle>
      </CardHeader>
      
      <CardContent>
        {currentStep === 'contract' && renderContractStep()}
        {currentStep === 'signature' && renderSignatureStep()}
        {currentStep === 'payment' && renderPaymentStep()}
        {currentStep === 'complete' && renderCompleteStep()}
      </CardContent>
    </Card>
  );
} 