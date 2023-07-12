import mongoose, { Schema, Document, Model } from 'mongoose';

interface ITicket extends Document {
  client: string;
  issue: string;
  status: 'open' | 'closed';
  deadline: Date;
}

interface TicketModel extends Model<ITicket> {}

const TicketSchema = new Schema<ITicket>({
  client: { type: String, required: true },
  issue: { type: String, required: true },
  status: { type: String, enum: ['open', 'closed'], required: true },
  deadline: { type: Date, required: true },
});

const Ticket = mongoose.model<ITicket, TicketModel>('Ticket', TicketSchema);

export { Ticket, ITicket, TicketModel };
