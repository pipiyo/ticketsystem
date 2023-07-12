// Definition of the Ticket interface
export interface Ticket {
  _id: string;
  client: string;
  issue: string;
  deadline: Date;
  status: 'open' | 'closed';
}

// Service class for managing API calls related to tickets
export class TicketService {
  // Fetch all tickets from API
  async getTickets() {
    const response = await fetch('http://localhost:3000/tickets');
    const data = await response.json();
    return data;
  }

  // Update status of a ticket
  async updateTicket(id: string, status: 'open' | 'closed') {
    await fetch(`http://localhost:3000/tickets/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
  }

  // Create a new ticket
  async createTicket(
    client: string,
    issue: string,
    status: 'open' | 'closed',
    deadline: string
  ) {
    await fetch(`http://localhost:3000/tickets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client,
        issue,
        status,
        deadline,
      }),
    });
  }
}
