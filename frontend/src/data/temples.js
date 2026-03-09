// src/data/temples.js
export const temples = [
  {
    id: 1,
    name: "Tirupati Balaji Temple",
    location: "Tirupati, Andhra Pradesh",
    region: "South",
    deity: "Lord Venkateswara",
    description: "One of the richest and most visited temples in the world, renowned for its Dravidian architecture and spiritual significance.",
    image: "/temples/Tirupati Balaji.jpg",   
    darshans: [
      { id: 'normal', name: "Normal Darshan", price: 0 },
      { id: 'vip', name: "VIP Darshan", price: 300 }
    ]
  },
  {
    id: 2,
    name: "Vaishno Devi Temple",
    location: "Katra, Jammu & Kashmir",
    region: "North",
    deity: "Goddess Vaishno Devi",
    description: "A major pilgrimage site located in a cave shrine on the Trikuta Mountains, symbolizing the power of Shakti.",
    image: "/temples/Vaishno Devi.jpg",
    darshans: [
      { id: 'normal', name: "Normal Darshan", price: 0 },
      { id: 'helicopter', name: "Helicopter Darshan", price: 4500 }
    ]
  },
  {
    id: 3,
    name: "Kashi Vishwanath Temple",
    location: "Varanasi, Uttar Pradesh",
    region: "North",
    deity: "Lord Shiva",
    description: "One of the 12 Jyotirlingas, this sacred shrine on the banks of the Ganges is the soul of spiritual India.",
    image: "/temples/Kashi Vishwanath.jpg",
    darshans: [
      { id: 'normal', name: "Normal Darshan", price: 0 },
      { id: 'vip', name: "VIP Darshan", price: 250 }
    ]
  },
  {
    id: 4,
    name: "Meenakshi Amman Temple",
    location: "Madurai, Tamil Nadu",
    region: "South",
    deity: "Goddess Meenakshi",
    description: "An architectural marvel featuring 14 gateway towers (Gopurams) covered in thousands of colorful stone figures.",
    image: "/temples/Meenakshi Amman.jpg",
    darshans: [
      { id: 'normal', name: "Normal Darshan", price: 0 },
      { id: 'vip', name: "VIP Darshan", price: 500 }
    ]
  },
  {
    id: 7,
    name: "Kedarnath Temple",
    location: "Rudraprayag, Uttarakhand",
    region: "North",
    deity: "Lord Shiva",
    description: "Nestled in the Garhwal Himalayas, this ancient temple is one of the holiest Chota Char Dham sites.",
    image: "/temples/Kedarnath.jpg",
    darshans: [
        { id: 'normal', name: "Normal Darshan", price: 0 },
        { id: 'special', name: "Special Puja", price: 2100 }
    ]
  },
  {
    id: 8,
    name: "Badrinath Temple",
    location: "Chamoli, Uttarakhand",
    region: "North",
    deity: "Lord Vishnu",
    description: "A prominent Char Dham pilgrimage site, dedicated to Lord Vishnu and known for its vibrant architecture.",
    image: "/temples/Badrinath.jpg",
    darshans: [
        { id: 'normal', name: "Normal Darshan", price: 0 }
    ]
  },
  {
    id: 9,
    name: "Mahakaleshwar Temple",
    location: "Ujjain, Madhya Pradesh",
    region: "North",
    deity: "Lord Shiva",
    description: "One of the twelve Jyotirlingas, famous for its Bhasma Aarti and spiritual aura.",
    image: "/temples/Mahakaleshwar.jpg",
    darshans: [
        { id: 'normal', name: "Normal Darshan", price: 0 },
        { id: 'vip', name: "Bhasma Aarti", price: 1500 }
    ]
  },
  {
    id: 10,
    name: "Golden Temple",
    location: "Amritsar, Punjab",
    region: "North",
    deity: "Guru Granth Sahib",
    description: "The holiest Gurudwara of Sikhism, symbolizing equality and tranquility with its golden structure and Amrit Sarovar.",
    image: "/temples/Golden Temple.jpg",
    darshans: [
        { id: 'normal', name: "General Entry", price: 0 }
    ]
  },
  {
    id: 11,
    name: "Somnath Temple",
    location: "Prabhas Patan, Gujarat",
    region: "North",
    deity: "Lord Shiva",
    description: "The eternal shrine, believed to be the first among the twelve Jyotirlinga shrines of Lord Shiva.",
    image: "/temples/Somnath Temple.jpg",
    darshans: [
        { id: 'normal', name: "Normal Darshan", price: 0 }
    ]
  },
  {
    id: 12,
    name: "Ramanathaswamy Temple",
    location: "Rameswaram, Tamil Nadu",
    region: "South",
    deity: "Lord Shiva",
    description: "Famous for its magnificent corridors and sacred wells, it is a key site in both the Char Dham and 12 Jyotirlingas.",
    image: "/temples/Ramanathaswamy.jpg",
    darshans: [
        { id: 'normal', name: "Normal Darshan", price: 0 }
    ]
  },
  {
    id: 13,
    name: "Sabarimala Temple",
    location: "Pathanamthitta, Kerala",
    region: "South",
    deity: "Lord Ayyappa",
    description: "Located within the Periyar Tiger Reserve, this hilltop shrine is one of the world's largest annual pilgrimage sites.",
    image: "/temples/Sabarimala.jpg",
    darshans: [
        { id: 'normal', name: "Digital Queue", price: 0 }
    ]
  },
  {
    id: 14,
    name: "Brihadeeswarar Temple",
    location: "Thanjavur, Tamil Nadu",
    region: "South",
    deity: "Lord Shiva",
    description: "A UNESCO World Heritage site and Chola architectural masterpiece, carved entirely from granite.",
    image: "/temples/Brihadeeswarar.jpg",
    darshans: [
        { id: 'normal', name: "General Entry", price: 0 }
    ]
  },
  {
    id: 15,
    name: "Dwarkadhish Temple",
    location: "Dwarka, Gujarat",
    region: "North",
    deity: "Lord Krishna",
    description: "A major Char Dham pilgrimage site, this 2500-year-old temple is dedicated to the King of Dwarka, Lord Krishna.",
    image: "/temples/Dwarkadhish.jpg",
    darshans: [
      { id: 'normal', name: "Normal Darshan", price: 0 },
      { id: 'shringar', name: "Shringar Darshan", price: 100 }
    ]
  },
  {
    id: 16,
    name: "Padmanabhaswamy Temple",
    location: "Thiruvananthapuram, Kerala",
    region: "South",
    deity: "Lord Vishnu",
    description: "The world's richest temple, known for its intricate gold work and the majestic reclining posture of Lord Vishnu.",
    image: "/temples/Padmanabhaswamy.jpg",
    darshans: [
      { id: 'normal', name: "General Darshan", price: 0 }
    ]
  },
  {
    id: 17,
    name: "Jagannath Temple",
    location: "Puri, Odisha",
    region: "North",
    deity: "Lord Jagannath",
    description: "Famous for its annual Ratha Yatra, this holy shrine is a part of the Char Dham pilgrimage sites.",
    image: "/temples/Jagannath.jpg",
    darshans: [
      { id: 'normal', name: "Normal Darshan", price: 0 }
    ]
  },
  {
    id: 18,
    name: "Guruvayur Temple",
    location: "Guruvayur, Kerala",
    region: "South",
    deity: "Lord Krishna",
    description: "Often referred to as the Bhuloka Vaikunta (Holy Abode of Vishnu on Earth), it is a major spiritual hub in Kerala.",
    image: "/temples/Guruvayur.jpg",
    darshans: [
      { id: 'normal', name: "General Darshan", price: 0 }
    ]
  }
];