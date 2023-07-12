import { useState, useEffect } from 'react';
import { TicketService, Ticket } from '../services/TicketService';

// Custom hook for managing tickets in state and fetching tickets from API
export const useTickets = (ticketService: TicketService) => {
  // State variable for tickets
  const [tickets, setTickets] = useState<Ticket[]>([]);

  // Function to get tickets and set state
  const getTickets = async () => {
    const data = await ticketService.getTickets();
    setTickets(data);
  };

  // Fetch tickets on component mount
  useEffect(() => {
    getTickets();
  }, []);

  return { tickets, getTickets };
};
