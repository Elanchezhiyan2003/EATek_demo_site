import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Zap, Shield, Users, Rocket, Heart } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Development',
    description: 'Rapid prototyping and deployment with our proven frameworks and methodologies.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Built with security-first principles and industry best practices.',
  },
  {
    icon: Users,
    title: 'Collaborative Approach',
    description: 'We work as an extension of your team, not just a vendor.',
  },
  {
    icon: Rocket,
    title: 'Scalable Solutions',
    description: 'Architecture designed to grow with your business needs.',
  },
  {
    icon: Heart,
    title: 'Human-Centered Design',
    description: 'Technology that connects with users on an emotional level.',
  },
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    description: 'Successful projects across education, commerce, and enterprise sectors.',
  },
];

const stats = [
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Fellowship Alumni', value: '100+' },
  { label: 'Years of Innovation', value: '3+' },
];

export function WhyEAtek() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose EAtek?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We don't just build software - we craft experiences that bridge the gap 
            between technology and human emotion.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold">{feature.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}