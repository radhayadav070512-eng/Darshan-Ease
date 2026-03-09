// src/data/organizerDarshans.js
export const organizerDarshans = [
  {
    id: 'normal',
    name: "Normal Darshan",
    price: 0,
    maxPeoplePerSlot: 500,
    availableSlots: ["6:00 AM - 8:00 AM", "10:00 AM - 12:00 PM", "4:00 PM - 6:00 PM"],
    description: "Free entry for general public. Long queues expected.",
    status: "Active"
  },
  {
    id: 'vip',
    name: "VIP Darshan",
    price: 300,
    maxPeoplePerSlot: 100,
    availableSlots: ["7:00 AM - 8:00 AM"],
    description: "Priority entry with shorter wait time.",
    status: "Active"
  },
  {
    id: 'special',
    name: "Special Seva Darshan",
    price: 5000,
    maxPeoplePerSlot: 50,
    availableSlots: ["5:00 AM - 6:00 AM"],
    description: "Exclusive seva with special rituals and close darshan.",
    status: "Active"
  },
  {
    id: 'night',
    name: "Night Darshan",
    price: 100,
    maxPeoplePerSlot: 200,
    availableSlots: ["8:00 PM - 10:00 PM"],
    description: "Evening special entry for devotees.",
    status: "Inactive"
  }
];