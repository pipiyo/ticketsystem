import { Router } from 'express';
import { body } from 'express-validator';
import * as TicketController from '../controllers/ticket.controller';
import { validateRequest } from '../validation/validate-request';

const router = Router();

router.get('/', TicketController.getAllTickets);

router.post(
  '/',
  [
    body('client').notEmpty(),
    body('issue').notEmpty(),
    body('status').isIn(['open', 'closed']),
    body('deadline').isDate(),
  ],
  validateRequest,
  TicketController.createTicket
);

router.put('/:id', TicketController.updateTicket);

export default router;
