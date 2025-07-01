
import React, { useState } from 'react';
import { Shield, Wallet, Lock, Zap, CheckCircle, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    // Simulate wallet connection
    if (window.ethereum) {
      try {
        // This is a mock implementation - in production you'd use actual wallet connection
        const mockAddress = '0x1234...5678';
        setWalletAddress(mockAddress);
        setIsWalletConnected(true);
        console.log('Wallet connected:', mockAddress);
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    } else {
      alert('Please install MetaMask or another Web3 wallet');
    }
  };

  const services = [
    {
      icon: Shield,
      title: 'Smart Contract Audits',
      description: 'Comprehensive security audits for your smart contracts and DeFi protocols',
      features: ['Code Review', 'Vulnerability Assessment', 'Gas Optimization', 'Compliance Check']
    },
    {
      icon: Lock,
      title: 'DeFi Security Solutions',
      description: 'Advanced protection for decentralized finance applications and protocols',
      features: ['Flash Loan Protection', 'MEV Protection', 'Liquidity Security', 'Oracle Security']
    },
    {
      icon: Wallet,
      title: 'Wallet Security Services',
      description: 'Multi-signature wallets and advanced security infrastructure',
      features: ['Multi-Sig Setup', 'Cold Storage', 'Recovery Solutions', '24/7 Monitoring']
    }
  ];

  const features = [
    { icon: Shield, title: 'Military-Grade Security', description: 'Enterprise-level protection for your crypto assets' },
    { icon: Zap, title: 'Real-Time Monitoring', description: '24/7 automated threat detection and response' },
    { icon: Users, title: 'Expert Team', description: 'Certified security professionals with proven track record' },
    { icon: Award, title: 'Industry Recognition', description: 'Trusted by leading DeFi protocols and institutions' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            CryptoSecure
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          {isWalletConnected ? (
            <div className="flex items-center space-x-2 bg-green-900/30 px-4 py-2 rounded-lg border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-mono">{walletAddress}</span>
            </div>
          ) : (
            <Button 
              onClick={connectWallet}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
            >
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-blue-900/50 text-blue-300 border-blue-500/30">
            Trusted by 1000+ DeFi Protocols
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Secure Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Crypto Future
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional blockchain security solutions for smart contracts, DeFi protocols, 
            and institutional crypto infrastructure. Protect your assets with military-grade security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg"
            >
              Get Security Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Security Solutions</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive security services designed to protect your blockchain assets and infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6 bg-slate-800 hover:bg-slate-700 text-white border-slate-600">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20 bg-slate-900/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose CryptoSecure?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Industry-leading expertise and cutting-edge technology to safeguard your digital assets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-12 text-center border border-blue-500/20">
          <h2 className="text-4xl font-bold mb-4">Ready to Secure Your Protocol?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust us with their blockchain security needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg"
            >
              Start Security Audit
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CryptoSecure
            </span>
          </div>
          
          <div className="text-slate-400 text-center md:text-right">
            <p>&copy; 2024 CryptoSecure. All rights reserved.</p>
            <p className="text-sm mt-1">Securing the future of decentralized finance</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
