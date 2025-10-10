import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Workflow, Palette, Settings, ExternalLink, ArrowRight } from 'lucide-react';

const products = [
  {
    icon: Briefcase,
    name: 'Portli',
    tagline: 'Portfolio SaaS',
    description: 'Create stunning, professional portfolios that showcase your work and attract opportunities.',
    features: ['Drag & Drop Builder', 'Custom Domains', 'Analytics Dashboard', 'SEO Optimized'],
    color: 'from-blue-500 to-cyan-500',
    status: 'Live',
  },
  {
    icon: Workflow,
    name: 'FlowBox',
    tagline: 'Automation SaaS',
    description: 'Streamline your workflows with intelligent automation and seamless integrations.',
    features: ['Visual Workflow Builder', 'API Integrations', 'Real-time Monitoring', 'Team Collaboration'],
    color: 'from-purple-500 to-pink-500',
    status: 'Beta',
  },
  {
    icon: Palette,
    name: 'Stasis Artis',
    tagline: 'Creative Commerce',
    description: 'Empower artists and creators with tools to monetize their creativity and build communities.',
    features: ['Creator Marketplace', 'NFT Support', 'Community Tools', 'Revenue Analytics'],
    color: 'from-green-500 to-emerald-500',
    status: 'Coming Soon',
  },
  {
    icon: Settings,
    name: 'BrandOS',
    tagline: 'Service Suite',
    description: 'Complete brand management platform for agencies and enterprises.',
    features: ['Brand Guidelines', 'Asset Management', 'Team Workflows', 'Client Portals'],
    color: 'from-orange-500 to-red-500',
    status: 'Development',
  },
];

export function ProductShowcase() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Product Showcase
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Innovative SaaS solutions designed to transform how you work, create, and connect.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card key={product.name} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-5`} />
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${product.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{product.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{product.tagline}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={product.status === 'Live' ? 'default' : 'secondary'}
                      className={product.status === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : ''}
                    >
                      {product.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{product.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                    {product.status === 'Live' && (
                      <Button size="sm" className={`bg-gradient-to-r ${product.color} hover:opacity-90`}>
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Try Now
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}