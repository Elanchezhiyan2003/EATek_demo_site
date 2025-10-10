import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  Rocket, 
  Palette, 
  Bot, 
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Target,
  Code,
  Layers,
  Sparkles,
  MessageSquare
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web & App Development',
    intro: 'We design and build modern websites and applications — from landing pages to enterprise platforms — using React, Next.js, and scalable stacks.',
    why: 'Businesses need digital solutions that are fast, secure, and adaptable.',
    positioning: 'EAtek delivers experiences that don\'t just work — they inspire and last.',
    features: ['React & Next.js', 'Enterprise Platforms', 'Mobile-First Design', 'Performance Optimized'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Rocket,
    title: 'SaaS Development & Deployment',
    intro: 'Turning ideas into SaaS products, from MVPs to global-scale launches.',
    why: 'Great ideas often fail without proper execution. We ensure engineering, deployment, and scalability are handled end-to-end.',
    positioning: 'Your concept → our engineering → the world.',
    features: ['MVP Development', 'Scalable Architecture', 'Cloud Deployment', 'Global Launch'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'Branding & Creative Design',
    intro: 'Design is not about looks — it\'s about storytelling. We craft identities that speak.',
    why: 'A strong brand is the foundation of trust and connection.',
    positioning: 'Logos, systems, and narratives that make your brand unforgettable.',
    features: ['Brand Identity', 'Visual Systems', 'Storytelling', 'Brand Guidelines'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Bot,
    title: 'Automation & AI Integration',
    intro: 'Integrating AI to make workflows smarter, faster, and human-centric.',
    why: 'Time is valuable. Automation frees people to focus on what matters.',
    positioning: 'EAtek builds automations that power education, commerce, and enterprise ecosystems.',
    features: ['AI Integration', 'Workflow Automation', 'Smart Systems', 'Human-Centric AI'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: GraduationCap,
    title: 'Custom Learning Platforms (LMS)',
    intro: 'Education deserves better platforms — we create scalable and interactive LMS systems.',
    why: 'Schools, colleges, and companies need modern tools for learners.',
    positioning: 'Custom learning platforms that evolve with institutions and empower communities.',
    features: ['Interactive LMS', 'Scalable Systems', 'Modern Tools', 'Community Features'],
    color: 'from-indigo-500 to-purple-500',
  },
];

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Discovery & Strategy',
    description: 'We start by understanding your vision, goals, and challenges.',
  },
  {
    icon: Layers,
    title: 'Design & Architecture',
    description: 'Creating scalable solutions with user-centric design principles.',
  },
  {
    icon: Code,
    title: 'Development & Testing',
    description: 'Building with modern technologies and rigorous quality assurance.',
  },
  {
    icon: Rocket,
    title: 'Launch & Scale',
    description: 'Deploying your solution and supporting growth at every stage.',
  },
];

const stats = [
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Technologies Mastered', value: '20+' },
  { label: 'Years of Innovation', value: '3+' },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950/20 dark:via-background dark:to-blue-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative py-24 sm:py-32 text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-gray-100 to-blue-100 dark:from-gray-900/20 dark:to-blue-900/20 px-6 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-8">
              <Sparkles className="mr-2 h-4 w-4" />
              End-to-End Digital Solutions
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">From Ideas to</span>
              <span className="block bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-blue-400 bg-clip-text text-transparent">
                Scalable Platforms
              </span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              We transform your vision into reality through comprehensive digital services. 
              From web development to AI integration, we build solutions that scale with your ambitions.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-gray-900 to-blue-600 hover:from-gray-800 hover:to-blue-700 text-white">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Comprehensive digital solutions designed to transform your business and accelerate growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${service.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Intro */}
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">What We Do</h4>
                      <p className="text-muted-foreground leading-relaxed">{service.intro}</p>
                    </div>
                    
                    {/* Why */}
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Why It Matters</h4>
                      <p className="text-muted-foreground leading-relaxed">{service.why}</p>
                    </div>

                    {/* Positioning */}
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-medium text-sm mb-2">Our Approach</h4>
                      <p className="text-sm font-medium">{service.positioning}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3">Key Capabilities</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A proven methodology that ensures your project's success from concept to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                    <CardContent className="pt-8">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-blue-600 mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="mb-2 text-sm font-medium text-blue-600">
                        Step {index + 1}
                      </div>
                      <h3 className="font-semibold mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 hidden lg:block">
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose EAtek */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950/20 dark:to-blue-950/20">
              <CardContent className="pt-12 pb-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                    Why Choose EAtek?
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We don't just build software — we craft experiences that bridge technology and human emotion.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 mb-4">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Lightning Fast</h3>
                    <p className="text-sm text-muted-foreground">Rapid development with proven frameworks and methodologies.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 mb-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Collaborative</h3>
                    <p className="text-sm text-muted-foreground">We work as an extension of your team, not just a vendor.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 mb-4">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Results-Driven</h3>
                    <p className="text-sm text-muted-foreground">Every solution is designed to achieve your business objectives.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-24 sm:py-32 text-center">
            <div className="mx-auto max-w-3xl">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm text-white">
                  <Rocket className="mr-2 h-4 w-4" />
                  Ready to Get Started?
                </div>
              </div>
              
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Hire EAtek for Your Project
              </h2>
              
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                Transform your ideas into scalable digital solutions. Let's build something extraordinary together 
                that goes beyond the binary and creates lasting impact.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start a Project
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-300">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-400 mr-2" />
                  Free Consultation
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-400 mr-2" />
                  Custom Solutions
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-400 mr-2" />
                  Ongoing Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}