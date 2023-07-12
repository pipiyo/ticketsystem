import { Ticket, ITicket } from '../models/ticket.model';

class TicketService {
  static async getAllTickets() {
    return Ticket.find().sort('-deadline');
  }

  static async createTicket(ticket: ITicket) {
    return new Ticket(ticket).save();
  }

  static async updateTicket(id: string, ticket: Partial<ITicket>) {
    return Ticket.findByIdAndUpdate(id, ticket, { new: true });
  }
}

export default TicketService;
