// src/context/BookingsContext.jsx
import { createContext, useState, useContext } from 'react';

const BookingsContext = createContext();

export function BookingsProvider({ children }) {
  const [bookings, setBookings] = useState([]);
  const [latestBooking, setLatestBooking] = useState(null);

  const addBooking = (bookingData) => {
    const newBooking = { 
      ...bookingData, 
      id: Date.now(), 
      status: 'Confirmed', 
      createdAt: new Date().toISOString() 
    };
    setBookings(prev => [newBooking, ...prev]);
    setLatestBooking(newBooking);
  };

  const cancelBooking = (id) => {
    setBookings(prev => prev.filter(b => b.id !== id));
    if (latestBooking?.id === id) {
      setLatestBooking(null);
    }
  };

  const updateBookingDate = (id, newDate) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, date: newDate } : b));
    if (latestBooking?.id === id) {
      setLatestBooking(prev => ({ ...prev, date: newDate }));
    }
  };

  return (
    <BookingsContext.Provider value={{ bookings, latestBooking, addBooking, cancelBooking, updateBookingDate }}>
      {children}
    </BookingsContext.Provider>
  );
}

export const useBookings = () => useContext(BookingsContext);