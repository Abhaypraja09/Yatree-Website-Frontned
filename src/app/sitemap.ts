import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yatreedestination.com'

  const routes = [
    '',
    '/about',
    '/contact',
    '/taxi-service-in-udaipur',
    '/corporate-travel-udaipur',
    '/wedding-car-rental-udaipur',
    '/event-transportation-udaipur',
    '/airport-taxi-udaipur',
    '/tempo-traveller-udaipur',
    '/innova-crysta-rental-udaipur',
    '/rajasthan-tour-packages',
    '/booking'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route === '/taxi-service-in-udaipur' ? 0.9 : 0.8,
  }))

  return routes
}
