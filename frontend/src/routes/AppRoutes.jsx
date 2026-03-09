// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';

import LandingPage from '../pages/public/LandingPage';
import LoginPage from '../pages/public/LoginPage';
import SignupPage from '../pages/public/SignupPage';
// We'll add more pages here later

import OrganizerDashboard from '../pages/organizer/OrganizerDashboard';
import MyTemplePage from '../pages/organizer/MyTemplePage';
import AdminDashboard from '../pages/admin/AdminDashboard';
import UsersPage from '../pages/admin/UsersPage';
import OrganizersPage from '../pages/admin/OrganizersPage';
import ProtectedRoute from '../components/common/ProtectedRoute';
import TempleListPage from '../pages/user/TempleListPage';
import TempleDetailsPage from '../pages/user/TempleDetailsPage';
import MyBookingsPage from '../pages/user/MyBookingsPage';
import UpdateTemplePage from '../pages/organizer/UpdateTemplePage';
import MyDarshansPage from '../pages/organizer/MyDarshansPage';
import UpdateDarshanPage from '../pages/organizer/UpdateDarshanPage';
import DarshanBookingPage from '../pages/user/DarshanBookingPage';
import ProfilePage from '../pages/user/ProfilePage';

function AppRoutes() {
  return (
    <Routes>
  {/* Public routes - anyone can see */}
  <Route path="/" element={<LandingPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/signup" element={<SignupPage />} />

  <Route path="/temples" element={<TempleListPage />} />
  <Route path="/temples/:id" element={<TempleDetailsPage />} />

  {/* Authenticated routes */}
  <Route element={<ProtectedRoute allowedRoles={['USER', 'organizer', 'admin']} />}>
    <Route path="/profile" element={<ProfilePage />} />
  </Route>

  {/* User-only routes */}
  <Route element={<ProtectedRoute allowedRoles={['USER']} />}>
    <Route path="/my-bookings" element={<MyBookingsPage />} />
    <Route path="/darshan-booking" element={<DarshanBookingPage />} />
  </Route>

  {/* Organizer-only routes */}
  <Route element={<ProtectedRoute allowedRoles={['organizer']} />}>
    <Route path="/organizer/dashboard" element={<OrganizerDashboard />} />
    <Route path="/organizer/my-temple" element={<MyTemplePage />} />
    <Route path="/organizer/update-temple" element={<UpdateTemplePage />} />
    <Route path="/organizer/my-darshans" element={<MyDarshansPage />} />
    <Route path="/organizer/update-darshan/:id" element={<UpdateDarshanPage />} />
    {/* Add more organizer pages here later */}
  </Route>

  {/* Admin-only routes */}
  <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    <Route path="/admin/users" element={<UsersPage />} />
    <Route path="/admin/organizers" element={<OrganizersPage />} />
  </Route>

  {/* 404 for unknown paths */}
  <Route path="*" element={<div><h1>404 - Page Not Found</h1></div>} />
</Routes>
  );
}

export default AppRoutes;