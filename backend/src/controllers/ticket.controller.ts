import { Request, Response } from 'express';
import TicketService from '../services/ticket.service';

export const getAllTickets = async (req: Request, res: Response) => {
  const tickets = await TicketService.getAllTickets();
  res.json(tickets);
};

export const createTicket = async (req: Request, res: Response) => {
  const ticket = await TicketService.createTicket(req.body);
  res.status(201).json(ticket);
};

export const updateTicket = async (req: Request, res: Response) => {
  const ticket = await TicketService.updateTicket(req.params.id, req.body);
  if (!ticket) {
    return res.status(404).send('Ticket not found');
  }
  res.json(ticket);
};
