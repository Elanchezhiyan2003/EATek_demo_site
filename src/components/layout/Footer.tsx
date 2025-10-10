// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Instagram, Linkedin, Github, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const navigationSections = [
//   { title: 'Company', links: [{ name: 'About Us', href: '/about' }, { name: 'Culture & Values', href: '/about' }, { name: 'Careers', href: '/careers' }, { name: 'Contact', href: '/contact' }] },
//   { title: 'Programs', links: [{ name: 'BuildVerse Fellowship', href: '/programs' }, { name: 'Bootcamps & Workshops', href: '/programs' }, { name: 'Mentorship', href: '/programs' }] },
//   { title: 'Services', links: [{ name: 'Web & App Development', href: '/services' }, { name: 'SaaS Development', href: '/services' }, { name: 'Branding & Design', href: '/services' }, { name: 'Automation & AI', href: '/services' }, { name: 'Learning Platforms (LMS)', href: '/services' }] },
//   { title: 'Products', links: [{ name: 'Portli', href: '/products' }, { name: 'FlowBox', href: '/products' }, { name: 'Stasis Artis', href: '/products' }, { name: 'BrandOS', href: '/products' }] },
//   // { title: 'Community', links: [{ name: 'Fellowship Network', href: '/community' }, { name: 'Mentorship Circle', href: '/community' }, { name: 'Open Source', href: '/community' }, { name: 'Impact Stories', href: '/community' }] },
//   // { title: 'Insights', links: [{ name: 'Blog', href: '/insights' }, { name: 'Case Studies', href: '/insights' }, { name: 'Research & Whitepapers', href: '/insights' }, { name: 'News & Updates', href: '/insights' }] },
// ];

// const socialLinks = [
//   { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/eatek.in', color: 'hover:text-pink-500' },
//   { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/eatek', color: 'hover:text-blue-600' },
//   { name: 'GitHub', icon: Github, href: 'https://github.com/eatek-org', color: 'hover:text-gray-900 dark:hover:text-gray-100' },
//   { name: 'X (Twitter)', icon: Twitter, href: 'https://twitter.com/eatek_in', color: 'hover:text-gray-900 dark:hover:text-gray-100' },
//   { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@eatek', color: 'hover:text-red-600' },
// ];

// const cultureSnippets = [
//   { emoji: '🚀', text: 'Innovation with Purpose' },
//   { emoji: '🎨', text: 'Creativity at the Core' },
//   { emoji: '🌱', text: 'Mentorship & Learning' },
//   { emoji: '🤝', text: 'Community First' },
//   { emoji: '🌐', text: 'Beyond the Binary' },
// ];

// export function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//           <div className="lg:col-span-4 mb-6">
//             <Link to="/" className="flex items-center space-x-3 mb-4">
//               <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">E</span>
//               </div>
//               <div>
//                 <div className="text-xl font-bold">EAtek</div>
//                 <div className="text-sm text-gray-400">Beyond the Binary</div>
//               </div>
//             </Link>
//             <p className="text-gray-300 leading-relaxed mb-6">A creative-tech company blending Education, Art, Technology, and Emotion into soulful solutions. We build technology that goes beyond the binary to create meaningful impact.</p>
//             <div className="space-y-3 text-sm text-gray-400">
//               <div className="flex items-center space-x-3"><Mail className="h-4 w-4" /><a href="mailto:connect@eatek.in" className="hover:text-white transition-colors">connect@eatek.in</a></div>
//               <div className="flex items-center space-x-3"><Phone className="h-4 w-4" /><a href="tel:+91XXXXXXXXXX" className="hover:text-white transition-colors">+91-XXXXXXXXXX</a></div>
//               <div className="flex items-center space-x-3"><MapPin className="h-4 w-4" /><span>Hybrid HQ: India</span></div>
//             </div>
//           </div>
//           <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//             {navigationSections.map((section) => (
//               <div key={section.title}>
//                 <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
//                 <ul className="space-y-3">
//                   {section.links.map((link) => (
//                     <li key={link.name}><Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">{link.name}</Link></li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-16 pt-12 border-t border-gray-800 grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-3">Stay ahead with EAtek insights, stories, and launches.</h3>
//             <div className="flex gap-3 mb-2">
//               <Input type="email" placeholder="your.email@example.com" className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400" />
//               <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">Subscribe <ArrowRight className="ml-2 h-4 w-4" /></Button>
//             </div>
//             <p className="text-xs text-gray-400">No spam, ever. Unsubscribe anytime.</p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-3">Join the Fellowship Community</h3>
//             <p className="text-gray-300 mb-4">Learn, Build, Grow with peers & mentors.</p>
//             <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">Join Community <ArrowRight className="ml-2 h-4 w-4" /></Button>
//           </div>
//         </div>
//         <div className="mt-12 pt-8 border-t border-gray-800 flex justify-center space-x-6">
//           {socialLinks.map((social) => { const Icon = social.icon; return (<a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={`text-gray-400 transition-colors ${social.color}`} aria-label={social.name}><Icon className="h-5 w-5" /></a>); })}
//         </div>
//       </div>
//       <div className="bg-gray-950 py-4">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-sm">
//           {cultureSnippets.map((snippet, index) => (<div key={index} className="flex items-center space-x-2 text-gray-400"><span className="text-base">{snippet.emoji}</span><span>{snippet.text}</span></div>))}
//         </div>
//       </div>
//       <div className="bg-black py-6">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
//           <div className="mb-4 sm:mb-0">© 2025 EAtek. All rights reserved.</div>
//           <div className="flex items-center space-x-6">
//             <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
//             <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
//           </div>
//         </div>
//         <div className="mt-4 text-center text-xs text-gray-500 flex items-center justify-center">Built with <Heart className="h-3 w-3 mx-1 text-red-500" /> at the intersection of Education, Art & Technology.</div>
//       </div>
//     </footer>
//   );
// }

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Instagram,
  Linkedin,
  Github,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const navigationSections = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Culture & Values', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { name: 'BuildVerse Fellowship', href: '/programs' },
      { name: 'Bootcamps & Workshops', href: '/programs' },
      { name: 'Mentorship', href: '/programs' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Web & App Development', href: '/services' },
      { name: 'SaaS Development', href: '/services' },
      { name: 'Branding & Design', href: '/services' },
      { name: 'Automation & AI', href: '/services' },
      { name: 'Learning Platforms (LMS)', href: '/services' },
    ],
  },
  {
    title: 'Products',
    links: [
      { name: 'Portli', href: '/products' },
      { name: 'FlowBox', href: '/products' },
      { name: 'Stasis Artis', href: '/products' },
      { name: 'BrandOS', href: '/products' },
    ],
  },
];

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/eatek.in',
    color: 'hover:text-pink-500',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/company/eatek',
    color: 'hover:text-blue-600',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/eatek-org',
    color: 'hover:text-gray-900 dark:hover:text-gray-100',
  },
  {
    name: 'X (Twitter)',
    icon: Twitter,
    href: 'https://twitter.com/eatek_in',
    color: 'hover:text-gray-900 dark:hover:text-gray-100',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    href: 'https://youtube.com/@eatek',
    color: 'hover:text-red-600',
  },
];

const cultureSnippets = [
  { emoji: '🚀', text: 'Innovation with Purpose' },
  { emoji: '🎨', text: 'Creativity at the Core' },
  { emoji: '🌱', text: 'Mentorship & Learning' },
  { emoji: '🤝', text: 'Community First' },
  { emoji: '🌐', text: 'Beyond the Binary' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Brand + Nav */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Block */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-3 mb-4 no-underline">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <div className="text-xl font-bold">EAtek</div>
                <div className="text-sm text-gray-400">Beyond the Binary</div>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              A creative-tech company blending Education, Art, Technology, and
              Emotion into soulful solutions. We build technology that goes
              beyond the binary to create meaningful impact.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:connect@eatek.in"
                  className="hover:text-white transition-colors no-underline break-all"
                >
                  connect@eatek.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 shrink-0" />
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="hover:text-white transition-colors no-underline"
                >
                  +91-XXXXXXXXXX
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Hybrid HQ: India</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {navigationSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors no-underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter + Community */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-800 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Newsletter */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
              Stay ahead with EAtek insights, stories, and launches.
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 mb-2">
              <Input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full sm:w-auto">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-400">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>

          {/* Community CTA */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
              Join the Fellowship Community
            </h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Learn, Build, Grow with peers & mentors.
            </p>
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 w-full sm:w-auto"
            >
              Join Community <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap justify-center gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-colors no-underline ${social.color}`}
                aria-label={social.name}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Culture Snippets */}
      {/* <div className="bg-gray-950 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
          {cultureSnippets.map((snippet, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-400"
            >
              <span className="text-base">{snippet.emoji}</span>
              <span>{snippet.text}</span>
            </div>
          ))}
        </div>
      </div> */}

      {/* Legal */}
      {/* <div className="bg-black py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 gap-3 sm:gap-0">
          <div>© 2025 EAtek. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <Link
              to="/privacy"
              className="hover:text-white transition-colors no-underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-white transition-colors no-underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500 flex items-center justify-center">
          Built with <Heart className="h-3 w-3 mx-1 text-red-500" /> at the
          intersection of Education, Art & Technology.
        </div>
      </div> */}
    </footer>
  );
}
