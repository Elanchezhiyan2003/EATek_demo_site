import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  GraduationCap, 
  Palette, 
  Cpu, 
  Heart, 
  Target, 
  Eye, 
  Package, 
  BookOpen, 
  Users,
  Rocket,
  Lightbulb,
  Sprout,
  Handshake,
  Globe,
  Calendar,
  ArrowRight
} from 'lucide-react';

const storyElements = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Learning that transforms minds and opens possibilities',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Art',
    description: 'Creativity that brings soul to every solution',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Innovation that scales and empowers',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Heart,
    title: 'Emotion',
    description: 'The human connection that makes it all meaningful',
    color: 'from-red-500 to-orange-500',
  },
];

const frameworkElements = [
  {
    icon: Package,
    title: 'Product',
    description: 'SaaS tools, platforms, and services that scale with people\'s needs.',
    color: 'from-blue-600 to-purple-600',
  },
  {
    icon: BookOpen,
    title: 'Narrative',
    description: 'Story-driven design and branding that connect emotionally.',
    color: 'from-purple-600 to-pink-600',
  },
  {
    icon: Users,
    title: 'Distribution',
    description: 'Communities, mentorship, and ecosystems that carry ideas forward.',
    color: 'from-pink-600 to-blue-600',
  },
];

const milestones = [
  {
    year: '2024',
    title: 'Foundation',
    description: 'EAtek founded by Elanchezhiyan Mahendiran with the vision "Beyond the Binary"',
    status: 'completed',
  },
  {
    year: '2024-25',
    title: 'Fellowship Launch',
    description: 'Launched ELAN 20\' BuildVerse Fellowship, training school & college learners',
    status: 'completed',
  },
  {
    year: '2025',
    title: 'Product Suite',
    description: 'Introduced SaaS products Portli & FlowBox, and Stasis Artis for creative commerce',
    status: 'current',
  },
  {
    year: '2025',
    title: 'Service Expansion',
    description: 'Expanded into agency-style services with BrandOS',
    status: 'current',
  },
  {
    year: 'Future',
    title: 'Global Scale',
    description: 'Scaling products globally while empowering the next generation of learners & creators',
    status: 'future',
  },
];

const teamMembers = [
  { name: 'Elanchezhiyan Mahendiran', role: 'Founder & CEO' },
  { name: 'Asmiya Bincy', role: 'Co-Founder' },
  { name: 'Promod', role: 'Academic Coordinator' },
  { name: 'HariHaran', role: 'Python Developer' },
  { name: 'Prasanth P', role: 'HR' },
  { name: 'Rathenavel', role: 'Designer' },
  { name: 'Arul Hepzi', role: 'Data Analyst' },
  { name: 'Jebastin Johnson', role: 'Domain Specialist (Web Development)' },
  { name: 'Rahul', role: 'React Developer' },
];

const values = [
  {
    icon: Rocket,
    title: 'Innovation with Purpose',
    description: 'Every product must solve real human needs',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Lightbulb,
    title: 'Creativity at the Core',
    description: 'Technology and art are inseparable in our work',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sprout,
    title: 'Mentorship & Learning',
    description: 'Growth comes from sharing knowledge and guidance',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Handshake,
    title: 'Community First',
    description: 'We build for people, not just for markets',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Globe,
    title: 'Beyond the Binary',
    description: 'We question conventions and design for a limitless future',
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative py-24 sm:py-32 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">About</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EAtek
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              We exist at the intersection of Education, Art, and Technology, powered by the spark of Emotion. 
              Building technology that doesn't just function — it connects, inspires, and transforms.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Education + Art + Technology + Emotion
            </p>
          </div>

          <div className="mx-auto max-w-4xl mb-16">
            <div className="rounded-2xl bg-muted/50 p-8 lg:p-12 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At EAtek, we believe that technology is more than just code — it's an experience shaped by creativity, learning, and human emotion.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Traditional solutions often feel mechanical. We're building something different — a space where design meets function, 
                where learning meets innovation, and where every project carries a soul.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {storyElements.map((element) => {
              const Icon = element.icon;
              return (
                <Card key={element.title} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${element.color} mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{element.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {element.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  To empower learners, creators, and businesses with soulful technology, blending education, 
                  art, and innovation into solutions that create real-world impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  To evolve into a global creative-tech ecosystem, redefining how people learn, build, 
                  and collaborate — always "Beyond the Binary."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Synchronicity Framework */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Synchronicity Framework
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A unique model that brings harmony between Product, Narrative, and Distribution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {frameworkElements.map((element, index) => {
              const Icon = element.icon;
              return (
                <div key={element.title} className="relative">
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="pt-8">
                      <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${element.color} mb-6`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{element.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {element.description}
                      </p>
                    </CardContent>
                  </Card>
                  {index < frameworkElements.length - 1 && (
                    <div className="absolute top-1/2 -right-4 hidden lg:block">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-8 lg:p-12 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Together, these create a cycle where innovation isn't just built — it's lived.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey & Milestones */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Journey & Milestones
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our path from vision to reality
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden lg:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 lg:pr-8">
                    <Card className={`border-0 shadow-lg ${index % 2 === 0 ? 'lg:ml-auto lg:mr-8' : 'lg:mr-auto lg:ml-8'} max-w-md`}>
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-4">
                          <Badge 
                            variant={milestone.status === 'completed' ? 'default' : milestone.status === 'current' ? 'secondary' : 'outline'}
                            className={
                              milestone.status === 'completed' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' 
                                : milestone.status === 'current'
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                                : ''
                            }
                          >
                            <Calendar className="mr-1 h-3 w-3" />
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="hidden lg:flex items-center justify-center w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-background shadow-lg z-10" />
                  
                  <div className="flex-1 lg:pl-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Core Team + Advisory Circle
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The passionate individuals driving EAtek's mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                <CardContent className="pt-6">
                  <Avatar className="mx-auto h-16 w-16 mb-4">
                    <AvatarImage src={`/api/placeholder/64/64`} alt={member.name} />
                    <AvatarFallback className="text-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-muted px-6 py-3">
              <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium">
                Supported by a fractional advisory circle of mentors & industry specialists who guide our growth
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Culture & Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${value.color} flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}