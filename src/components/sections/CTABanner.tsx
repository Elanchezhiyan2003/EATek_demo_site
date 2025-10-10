import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-24 sm:py-32 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm text-white">
                <Sparkles className="mr-2 h-4 w-4" />
                Ready to transform your ideas?
              </div>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Let's Build Beyond
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                the Binary
              </span>
            </h2>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Join us in creating the future of technology, education, and innovation. 
              Whether you're a student, entrepreneur, or enterprise, we're here to help 
              you build something extraordinary.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 text-lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
              >
                Schedule a Call
              </Button>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-blue-100">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-400 mr-2" />
                Free Consultation
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-yellow-400 mr-2" />
                Custom Solutions
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-purple-400 mr-2" />
                Expert Mentorship
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}