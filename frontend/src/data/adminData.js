// src/data/adminData.js
export const adminStats = {
  totalUsers: 12456,
  totalOrganizers: 342,
  totalTemples: 1289,
  totalBookings: 45678,
  totalRevenue: 9876543, // INR
  pendingApprovals: 18,
  activeTemples: 1120,
  flaggedUsers: 23,
};

export const recentAdminActions = [
  { id: 501, action: "Approved new organizer", user: "Ramesh Temple Trust", date: "2026-03-02", time: "10:15 AM" },
  { id: 502, action: "Blocked user", user: "fakeuser123", reason: "Spam bookings", date: "2026-03-01", time: "14:30 PM" },
  { id: 503, action: "Updated temple details", temple: "Kashi Vishwanath", by: "Admin", date: "2026-02-28", time: "09:45 AM" },
  { id: 504, action: "Rejected darshan type", organizer: "Vaishno Devi Org", reason: "Invalid pricing", date: "2026-03-03", time: "11:20 AM" },
];