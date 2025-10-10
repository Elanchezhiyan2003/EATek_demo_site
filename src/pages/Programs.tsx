import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Users, 
  Code, 
  Briefcase, 
  Zap, 
  GitBranch, 
  Palette, 
  Brain,
  ArrowRight,
  Calendar,
  Clock,
  Target,
  Heart,
  Lightbulb,
  Rocket,
  Star,
  CheckCircle
} from 'lucide-react';

const fellowshipPhases = [
  {
    icon: Zap,
    name: 'Ignition',
    duration: '2 weeks',
    description: 'Spark curiosity with workshops & live sessions',
    details: 'Interactive workshops, tech talks, and hands-on sessions to ignite your passion for technology and creativity.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    name: 'Cohort Circle',
    duration: '4 weeks',
    description: 'Build a peer-learning community',
    details: 'Form lasting connections with fellow learners, collaborate on projects, and create your support network.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Code,
    name: 'BuildVerse',
    duration: '60 days',
    description: 'Intensive hands-on projects',
    details: 'Dive deep into real-world projects, build your portfolio, and develop skills that matter in the industry.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Briefcase,
    name: 'Internship Curve',
    duration: '3-6 months',
    description: 'Guided, real-world work experience',
    details: 'Apply your skills in professional settings with mentorship and guidance from industry experts.',
    color: 'from-green-500 to-emerald-500',
  },
];

const bootcamps = [
  {
    icon: GitBranch,
    title: 'DevTools + GitHub Flow Mastery',
    description: 'From CLI to GitHub Actions, master developer tools & workflows',
    duration: '3 days',
    level: 'Beginner to Intermediate',
    topics: ['Command Line Interface', 'Git & GitHub', 'GitHub Actions', 'CI/CD Pipelines', 'Code Review Process'],
    color: 'from-gray-600 to-gray-800',
  },
  {
    icon: Code,
    title: 'React + Firebase Crash Course',
    description: 'Build scalable apps with modern stacks',
    duration: '5 days',
    level: 'Intermediate',
    topics: ['React Fundamentals', 'Firebase Setup', 'Authentication', 'Real-time Database', 'Deployment'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Creative Tech Sessions',
    description: 'Where imagination meets execution - Design, SaaS, AI',
    duration: '4 days',
    level: 'All Levels',
    topics: ['Design Thinking', 'SaaS Architecture', 'AI Integration', 'Creative Coding', 'Product Design'],
    color: 'from-purple-500 to-pink-500',
  },
];

const mentorshipTracks = [
  {
    icon: Code,
    title: 'Tech Mentorship',
    description: 'Hands-on coding & project guidance',
    features: ['1-on-1 code reviews', 'Project architecture guidance', 'Technical skill development', 'Industry best practices'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Career Mentorship',
    description: 'Resume, portfolio, and industry prep',
    features: ['Resume optimization', 'Portfolio development', 'Interview preparation', 'Career path planning'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Palette,
    title: 'Creative Mentorship',
    description: 'Art, storytelling, and design-driven learning',
    features: ['Design critique sessions', 'Creative project guidance', 'Storytelling workshops', 'Brand development'],
    color: 'from-purple-500 to-pink-500',
  },
];

const testimonials = [
  {
    name: 'Arjun Patel',
    role: 'ELAN 20 Alumni',
    company: 'Software Engineer at TechCorp',
    quote: 'The fellowship transformed my understanding of technology. The mentorship and real-world projects prepared me for my career in ways I never expected.',
    image: '/api/placeholder/60/60',
  },
  {
    name: 'Priya Sharma',
    role: 'BuildVerse Graduate',
    company: 'Frontend Developer at StartupXYZ',
    quote: 'Beyond the Binary isn\'t just a tagline - it\'s a mindset that changed how I approach problems and build solutions.',
    image: '/api/placeholder/60/60',
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-purple-950/20 dark:via-background dark:to-blue-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative py-24 sm:py-32 text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 px-6 py-2 text-sm font-medium text-purple-700 dark:text-purple-300 mb-8">
              <GraduationCap className="mr-2 h-4 w-4" />
              Empowering the Next Generation
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">Beyond the Binary</span>
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Fellowship
              </span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              A transformative journey for 9th–12th grade students, freshers, and passionate learners. 
              Bridge the gap between learning and real-world building through mentorship, community, and hands-on experience.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Apply for Fellowship
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                💡 Beyond the Binary isn't just a tagline — it's a journey you live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ELAN 20' BuildVerse Fellowship */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              ELAN 20' BuildVerse Fellowship
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A comprehensive program designed to bridge the gap between learning and real-world building
            </p>
          </div>

          {/* Fellowship Overview */}
          <div className="mx-auto max-w-4xl mb-16">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
              <CardContent className="pt-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white font-semibold">
                    <Calendar className="mr-2 h-5 w-5" />
                    20-Week Transformative Journey
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  A program for 9th–12th grade students, freshers, and passionate learners, designed to bridge 
                  the gap between learning and real-world building through four carefully crafted phases.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Fellowship Phases */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 hidden lg:block" />
            
            <div className="space-y-12">
              {fellowshipPhases.map((phase, index) => (
                <div key={phase.name} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 lg:pr-8">
                    <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${index % 2 === 0 ? 'lg:ml-auto lg:mr-8' : 'lg:mr-auto lg:ml-8'} max-w-md`}>
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${phase.color}`}>
                            <phase.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{phase.name}</CardTitle>
                            <Badge variant="outline">
                              <Clock className="mr-1 h-3 w-3" />
                              {phase.duration}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <h3 className="font-semibold mb-2">{phase.description}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {phase.details}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="hidden lg:flex items-center justify-center w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full border-4 border-background shadow-lg z-10">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="flex-1 lg:pl-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bootcamps & Workshops */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Bootcamps & Workshops
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Each bootcamp is practical, short, and impact-driven
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bootcamps.map((bootcamp) => {
              const Icon = bootcamp.icon;
              return (
                <Card key={bootcamp.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${bootcamp.color} mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{bootcamp.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{bootcamp.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">
                        <Clock className="mr-1 h-3 w-3" />
                        {bootcamp.duration}
                      </Badge>
                      <Badge variant="outline">{bootcamp.level}</Badge>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">What You'll Learn:</h4>
                      <div className="space-y-1">
                        {bootcamp.topics.map((topic) => (
                          <div key={topic} className="flex items-center text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      Register Now
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm font-medium text-muted-foreground mb-4">
              👉 Each bootcamp is practical, short, and impact-driven.
            </p>
            <Button variant="outline" size="lg">
              View All Workshops
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mentorship & Cohort Learning */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Mentorship & Cohort Learning
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We believe mentorship is the backbone of growth. Every learner at EAtek is paired with mentors, 
              peers, and guides who create an ecosystem of support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {mentorshipTracks.map((track) => {
              const Icon = track.icon;
              return (
                <Card key={track.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${track.color} mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{track.title}</CardTitle>
                    <p className="text-muted-foreground">{track.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {track.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm">
                          <Heart className="h-3 w-3 text-red-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 px-6 py-3">
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                👉 Learn together, grow together, thrive together.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Alumni Stories
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Hear from our graduates who are now building the future
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-24 sm:py-32 text-center">
            <div className="mx-auto max-w-3xl">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm text-white">
                  <Rocket className="mr-2 h-4 w-4" />
                  Applications Open Now
                </div>
              </div>
              
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Ready to Go Beyond the Binary?
              </h2>
              
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-purple-100">
                Join hundreds of passionate learners who are building the future through our fellowship programs, 
                bootcamps, and mentorship opportunities.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-3 text-lg"
                >
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Apply for Fellowship
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
                >
                  Join a Bootcamp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-purple-100">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-400 mr-2" />
                  Rolling Admissions
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-yellow-400 mr-2" />
                  Scholarship Available
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-400 mr-2" />
                  Mentorship Included
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}