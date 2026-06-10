export interface Room {
  id: number
  tag: string
  name: string
  desc: string
  features: string[]
  price: number
  image: string
}

export interface Amenity {
  name: string
  desc: string
  icon: string
}

export interface GalleryItem {
  id: number
  label: string
  image: string
  span?: 'wide' | 'tall' | 'both'
}

// Unsplash images — free to use, no key required
export const ROOMS: Room[] = [
  {
    id: 1,
    tag: 'Most Popular',
    name: 'Deluxe Room',
    desc: 'A beautifully appointed room with garden views, handcrafted furniture and a luxurious marble bathroom.',
    features: ['32 m²', 'King Bed', 'Garden View', 'Free WiFi'],
    price: 180,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    tag: 'Premium',
    name: 'Junior Suite',
    desc: 'A spacious suite with a separate living area, premium minibar, and stunning panoramic views.',
    features: ['52 m²', 'King Bed', 'Panoramic View', 'Lounge Area'],
    price: 280,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    tag: 'Exclusive',
    name: 'Presidential Suite',
    desc: 'The pinnacle of luxury — a private residence with personal butler, terrace, and bespoke amenities.',
    features: ['110 m²', '2 Bedrooms', 'Private Terrace', 'Butler Service'],
    price: 650,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80&auto=format&fit=crop',
  },
]

export const AMENITIES: Amenity[] = [
  { name: 'Infinity Pool', desc: 'A heated pool with panoramic views, open from sunrise to sunset.', icon: 'pool' },
  { name: 'Luxury Spa', desc: 'Expert therapists offering bespoke treatments with premium botanicals.', icon: 'spa' },
  { name: 'Fitness Centre', desc: 'State-of-the-art equipment with personalised training on request.', icon: 'fitness' },
  { name: 'Concierge', desc: '24-hour personalised concierge to arrange every detail of your stay.', icon: 'concierge' },
  { name: 'Business Suite', desc: 'Fully equipped meeting rooms and event spaces for corporate retreats.', icon: 'business' },
  { name: 'Valet Parking', desc: 'Complimentary valet parking with secure, monitored facilities.', icon: 'parking' },
  { name: 'Yoga & Wellness', desc: 'Daily yoga sessions and mindfulness in our serene garden studio.', icon: 'yoga' },
  { name: 'Airport Transfer', desc: 'Chauffeur-driven luxury transfers available at any hour.', icon: 'transfer' },
]

export const GALLERY: GalleryItem[] = [
  {
    id: 1,
    label: 'Lobby & Entrance',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80&auto=format&fit=crop',
    span: 'both',
  },
  {
    id: 2,
    label: 'The Pool',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    label: 'Spa & Wellness',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 4,
    label: 'Fine Dining',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 5,
    label: 'Suite Interior',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80&auto=format&fit=crop',
  },
]
