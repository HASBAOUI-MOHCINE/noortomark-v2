// src/data/services.js
import { 
  FaBullhorn, 
  FaCode, 
  FaChartLine, 
  FaInstagram, 
  FaPencilAlt, 
  FaRocket 
} from 'react-icons/fa';

export const services = [
  {
    icon: FaBullhorn,
    title: 'marketing-services',
    description: 'marketing-services-desc',
    features: [
      'meta-ads-feature',
      'tiktok-ads-feature',
      'funnel-feature',
      'social-media-management-feature',
      'content-strategy-feature',
      'marketing-audit-feature',
      'competition-analysis-feature',
      'action-plan-feature'
    ],
    duration: '30 Days Plan'
  },
  {
    icon: FaCode,
    title: 'frontend-development',
    description: 'frontend-development-desc',
    features: [
      'landing-pages-feature',
      'mini-sites-feature',
      'react-components-feature',
      'animations-feature',
      'responsive-design-feature',
      'seo-technical-feature',
      'debug-maintenance-feature'
    ],
    duration: 'Flexible'
  },
  {
    icon: FaPencilAlt,
    title: 'copywriting-services',
    description: 'copywriting-services-desc',
    features: [
      'posts-copywriting-feature',
      'ads-copywriting-feature',
      'emails-copywriting-feature',
      'landing-pages-content-feature'
    ],
    duration: '7-14 Days'
  },
  {
    icon: FaInstagram,
    title: 'social-optimization',
    description: 'social-optimization-desc',
    features: [
      'instagram-optimization-feature',
      'tiktok-optimization-feature',
      'content-calendar-feature',
      'engagement-strategy-feature'
    ],
    duration: 'Monthly'
  },
  {
    icon: FaChartLine,
    title: 'reporting-analysis',
    description: 'reporting-analysis-desc',
    features: [
      'monthly-reporting-feature',
      'performance-tracking-feature',
      'roi-analysis-feature',
      'recommendations-feature'
    ],
    duration: 'Monthly'
  },
  {
    icon: FaRocket,
    title: 'strategic-coaching',
    description: 'strategic-coaching-desc',
    features: [
      'marketing-strategy-feature',
      'campaign-creation-feature',
      'growth-consulting-feature',
      'personalized-coaching-feature'
    ],
    duration: 'Flexible'
  }
];