import { Card, CardContent } from '@/components/ui/card';
import { Heart, Lightbulb, Users, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Emotion',
    description: 'We believe technology should connect hearts, not just devices.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pushing boundaries through creative problem-solving and cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Education',
    description: 'Empowering the next generation through mentorship and hands-on learning.',
  },
  {
    icon: Target,
    title: 'Purpose',
    description: 'Every project we build serves a greater mission of positive impact.',
  },
];

export function AboutEAtek() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About EAtek
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Born from the intersection of Education, Art, Technology, and Emotion, 
            EAtek represents a new paradigm in digital innovation.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl bg-muted/50 p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To bridge the gap between traditional education and modern technology by creating 
              innovative solutions that inspire, educate, and empower. We believe in building 
              beyond the binary - where logic meets creativity, where code meets art, and where 
              technology serves humanity's deepest aspirations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}