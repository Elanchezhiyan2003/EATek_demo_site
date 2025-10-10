import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Code, 
  Palette, 
  GraduationCap, 
  TrendingUp,
  ArrowRight,
  Users,
  Globe,
  Lightbulb,
  Target,
  MessageCircle,
  FileText,
  Coffee,
  Zap,
  Award,
  Rocket,
  Mail,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';

const openRoles = [
  {
    icon: Code,
    title: 'Developers',
    subtitle: 'React, Next.js, SaaS Engineering',
    description: 'Build scalable applications and contribute to our open-source ecosystem.',
    skills: ['React/Next.js', 'TypeScript', 'Node.js', 'Cloud Platforms'],
    type: 'Full-time',
    location: 'Remote/Hybrid',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Designers',
    subtitle: 'UI/UX, Creative Systems',
    description: 'Craft beautiful, intuitive experiences that bridge technology and emotion.',
    skills: ['UI/UX Design', 'Design Systems', 'Figma', 'Creative Direction'],
    type: 'Full-time',
    location: 'Remote/Hybrid',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: GraduationCap,
    title: 'Educators & Mentors',
    subtitle: 'Learning Experience Design',
    description: 'Shape the future of education through innovative learning programs.',
    skills: ['Curriculum Design', 'Mentorship', 'Educational Technology', 'Community Building'],
    type: 'Full-time',
    location: 'Hybrid',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'Community & Growth Managers',
    subtitle: 'Building Ecosystems',
    description: 'Grow our community and drive engagement across all platforms.',
    skills: ['Community Management', 'Content Strategy', 'Growth Marketing', 'Analytics'],
    type: 'Full-time',
    location: 'Remote/Hybrid',
    color: 'from-orange-500 to-red-500',
  },
];

const cultureHighlights = [
  {
    icon: Globe,
    title: 'Flexible & Remote-Friendly',
    description: 'Work from anywhere with flexible hours that respect your life balance.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Cross-Functional Squads',
    description: 'Real ownership in small, autonomous teams that ship meaningful products.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Lightbulb,
    title: 'Learning-First Environment',
    description: 'Continuous growth through mentorship, workshops, and real-world projects.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Sparkles,
    title: 'Innovation + Artistry',
    description: 'Where technical excellence meets creative expression in everything we build.',
    color: 'from-orange-500 to-red-500',
  },
];

const growthOpportunities = [
  {
    icon: Heart,
    title: 'Internal Mentorship & Peer-Learning',
    description: 'Learn from experienced team members and grow alongside passionate peers.',
    benefits: ['1-on-1 mentoring', 'Peer learning circles', 'Knowledge sharing sessions', 'Cross-team collaboration'],
  },
  {
    icon: Target,
    title: 'Real-World Products & Services',
    description: 'Work on live products used by thousands and services that impact real businesses.',
    benefits: ['Product ownership', 'Customer interaction', 'Market feedback', 'Scalable impact'],
  },
  {
    icon: Rocket,
    title: 'Leadership & Entrepreneurship Pathways',
    description: 'Develop leadership skills and explore entrepreneurial opportunities within EAtek.',
    benefits: ['Leadership training', 'Project ownership', 'Startup exposure', 'Innovation labs'],
  },
];

const applicationSteps = [
  {
    icon: FileText,
    title: 'Share Your Story',
    description: 'Send us your resume + portfolio/ideas that showcase your passion and creativity.',
    tip: 'We value curiosity and creativity over perfect credentials.',
  },
  {
    icon: MessageCircle,
    title: 'Have a Conversation',
    description: 'Join us for a friendly chat about your goals, our mission, and potential collaboration.',
    tip: 'It\'s a conversation, not an interrogation.',
  },
  {
    icon: Coffee,
    title: 'Join the Team',
    description: 'Start your journey with us where your skills find purpose and your growth is our priority.',
    tip: 'Welcome to the EAtek family!',
  },
];

const benefits = [
  'Competitive salary & equity',
  'Health & wellness support',
  'Learning & development budget',
  'Flexible working arrangements',
  'Annual team retreats',
  'Open source contribution time',
];

export default function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-purple-50 dark:from-orange-950/20 dark:via-background dark:to-purple-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative py-24 sm:py-32 text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-100 to-purple-100 dark:from-orange-900/20 dark:to-purple-900/20 px-6 py-2 text-sm font-medium text-orange-700 dark:text-orange-300 mb-8">
              <Heart className="mr-2 h-4 w-4" />
              Mission-Driven Careers
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">Work With</span>
              <span className="block bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                Purpose
              </span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              At EAtek, careers aren't just jobs — they're journeys where education, art, technology, and emotion converge. 
              Join a mission-driven company building soulful technology "Beyond the Binary."
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-700 hover:to-purple-700">
                View Open Roles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn About Culture
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                💡 People thrive when they align work with meaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Open Roles
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We're a growing team looking for passionate learners, creators, and builders. 
              Roles that shape both your career and the future of tech-education ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openRoles.map((role) => {
              const Icon = role.icon;
              return (
                <Card key={role.title} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${role.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{role.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{role.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                    
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {role.type}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {role.location}
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm">
                        Apply Now
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a perfect match? We're always open to exceptional talent.
            </p>
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Send Us Your Story
            </Button>
          </div>
        </div>
      </section>

      {/* Life at EAtek */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Life at EAtek
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We're not a hierarchy — we're a creative circle where every voice matters. 
              A culture built on innovation, creativity, and shared growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureHighlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <Card key={highlight.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <CardContent className="pt-8">
                    <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${highlight.color} mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Benefits */}
          <div className="mt-16">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-purple-50 dark:from-orange-950/20 dark:to-purple-950/20">
              <CardContent className="pt-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
                  <p className="text-muted-foreground">
                    Comprehensive benefits that support your growth and well-being.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center text-sm">
                      <Award className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth & Learning */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Growth & Learning
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Your career at EAtek is a fellowship in itself. We grow together — personally, professionally, and purposefully.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {growthOpportunities.map((opportunity) => {
              const Icon = opportunity.icon;
              return (
                <Card key={opportunity.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-600 to-purple-600">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{opportunity.description}</p>
                    
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3">Opportunities Include</h4>
                      <div className="space-y-2">
                        {opportunity.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center text-sm">
                            <Zap className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How to Apply
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We look for curiosity, creativity, and commitment — not just resumes. 
              Simple, human, and transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applicationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                    <CardContent className="pt-8">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-600 to-purple-600 mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="mb-2 text-sm font-medium text-orange-600">
                        Step {index + 1}
                      </div>
                      <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-900/20 px-3 py-1 text-xs text-orange-700 dark:text-orange-300">
                        💡 {step.tip}
                      </div>
                    </CardContent>
                  </Card>
                  {index < applicationSteps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 hidden md:block">
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-purple-600 to-orange-800">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-24 sm:py-32 text-center">
            <div className="mx-auto max-w-3xl">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm text-white">
                  <Rocket className="mr-2 h-4 w-4" />
                  Join Our Mission
                </div>
              </div>
              
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Ready to Build With Us?
              </h2>
              
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-100">
                Join a team where your skills find purpose, your growth is our priority, and together we're building 
                technology that goes beyond the binary to create meaningful impact.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-3 text-lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Ask Questions
                </Button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-orange-100">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-400 mr-2" />
                  Equal opportunity employer
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-yellow-400 mr-2" />
                  Remote-friendly culture
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-400 mr-2" />
                  Growth-focused environment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}