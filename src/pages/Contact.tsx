import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  GraduationCap,
  Briefcase,
  Palette,
  ArrowRight,
  Instagram,
  Linkedin,
  Github,
  Twitter,
  Send,
  Heart,
  Sparkles,
  Users,
  Globe,
  Handshake
} from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'connect@eatek.in',
    description: 'Drop us a line anytime',
    action: 'mailto:connect@eatek.in',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Phone/WhatsApp',
    value: '+91-XXXXXXXXXX',
    description: 'Call or message us directly',
    action: 'tel:+91XXXXXXXXXX',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    title: 'Office',
    value: 'Chennai, India',
    description: 'Hybrid + Remote-friendly',
    action: '#',
    color: 'from-purple-500 to-pink-500',
  },
];

const collaborationChannels = [
  {
    icon: GraduationCap,
    title: 'For Learners',
    description: 'Fellowship, workshops, and mentorship opportunities.',
    opportunities: ['ELAN 20\' BuildVerse Fellowship', 'Bootcamps & Workshops', 'Mentorship Programs', 'Community Access'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Briefcase,
    title: 'For Businesses',
    description: 'Web, SaaS, branding, and AI-powered solutions.',
    opportunities: ['Custom Web Development', 'SaaS Product Development', 'Brand Identity Design', 'AI Integration Services'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Palette,
    title: 'For Creators',
    description: 'Partnerships in design, art, and storytelling.',
    opportunities: ['Creative Collaborations', 'Art & Design Projects', 'Storytelling Partnerships', 'Portfolio Development'],
    color: 'from-purple-500 to-pink-500',
  },
];

const socialLinks = [
  {
    icon: Instagram,
    name: 'Instagram',
    handle: '@eatek.in',
    url: 'https://instagram.com/eatek.in',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    handle: 'EAtek',
    url: 'https://linkedin.com/company/eatek',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: Github,
    name: 'GitHub',
    handle: 'eatek-org',
    url: 'https://github.com/eatek-org',
    color: 'from-gray-700 to-gray-900',
  },
  {
    icon: Twitter,
    name: 'X (Twitter)',
    handle: '@eatek_in',
    url: 'https://twitter.com/eatek_in',
    color: 'from-gray-800 to-black',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-blue-50 dark:from-teal-950/20 dark:via-background dark:to-blue-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative py-24 sm:py-32 text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/20 dark:to-blue-900/20 px-6 py-2 text-sm font-medium text-teal-700 dark:text-teal-300 mb-8">
              <Handshake className="mr-2 h-4 w-4" />
              Open for Collaboration
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">Let's Build</span>
              <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Whether you're a learner, creator, or business — EAtek is always open for collaboration. 
              Great ideas grow faster when shared. This isn't just a contact page — it's an open door to meaningful conversations.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700">
                Start a Conversation
                <MessageCircle className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Opportunities
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                👉 Contact isn't the end — it's the beginning of collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Methods */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-muted-foreground">
                  Tell us about your project, idea, or how you'd like to collaborate. We'll get back to you within 24 hours.
                </p>
              </div>

              <Card className="border-0 shadow-xl">
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What's this about?" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project, idea, or how you'd like to collaborate..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Ways to Reach Us */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Ways to Reach Us
                </h2>
                <p className="text-lg text-muted-foreground">
                  Simple, direct, and human. Choose the method that works best for you.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <Card key={method.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="pt-6">
                        <div className="flex items-center space-x-4">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${method.color}`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{method.title}</h3>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                            <a 
                              href={method.action}
                              className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
                            >
                              {method.value}
                            </a>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Quick Response Promise */}
              <Card className="mt-8 border-0 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950/20 dark:to-blue-950/20">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-blue-600">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Quick Response Promise</h4>
                      <p className="text-sm text-muted-foreground">We typically respond within 24 hours, often much sooner.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Channels */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Collaboration Channels
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Whatever your path, EAtek has a space for you. Here's how we can work together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collaborationChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <Card key={channel.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${channel.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{channel.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{channel.description}</p>
                    
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3">Opportunities</h4>
                      <div className="space-y-2">
                        {channel.opportunities.map((opportunity) => (
                          <div key={opportunity} className="flex items-center text-sm">
                            <Sparkles className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                            {opportunity}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full group">
                      Get Started
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Stay Connected
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Be part of our journey "Beyond the Binary." Follow our updates, insights, and community stories.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Card key={social.name} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6 text-center">
                    <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${social.color} mb-3`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{social.name}</h3>
                    <a 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-teal-600 transition-colors"
                    >
                      {social.handle}
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Newsletter Signup */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950/20 dark:to-blue-950/20">
            <CardContent className="pt-8 pb-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
                <p className="text-muted-foreground">
                  Get updates, insights, and community stories delivered to your inbox.
                </p>
              </div>
              
              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="flex-1"
                  />
                  <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-blue-600 to-teal-800">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-24 sm:py-32 text-center">
            <div className="mx-auto max-w-3xl">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm text-white">
                  <Users className="mr-2 h-4 w-4" />
                  Ready to Collaborate?
                </div>
              </div>
              
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Start the Conversation
              </h2>
              
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-teal-100">
                Whether you have a project in mind, want to join our community, or simply want to say hello — 
                we're here and excited to hear from you.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-teal-600 hover:bg-teal-50 font-semibold px-8 py-3 text-lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send a Message
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-teal-100">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-400 mr-2" />
                  Quick response guaranteed
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-yellow-400 mr-2" />
                  No commitment required
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-400 mr-2" />
                  Always human, never automated
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}