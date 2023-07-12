import React from 'react';
import { Box, Switch, TextField } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import moment from 'moment';
import { lightGreen, red, yellow } from '@mui/material/colors';
import { Ticket, TicketService } from '../services/TicketService';

interface TicketComponentProps {
  index: number;
  ticket: Ticket;
  ticketService: TicketService;
  getTickets: () => void;
}
// Component for individual ticket items
export const TicketComponent: React.FC<TicketComponentProps> = ({
  index,
  ticket,
  ticketService,
  getTickets,
}) => {
  // Function to determine color of ticket status based on deadline
  const deadlineColor = ({
    status,
    deadline,
  }: {
    status: string;
    deadline: Date;
  }): string => {
    if (status === 'closed') {
      return lightGreen[600];
    } else if (moment(new Date()).isBefore(deadline)) {
      return yellow[700];
    } else {
      return red[500];
    }
  };
  // Function to handle status change (open/closed)
  const handleChangeStatus = async () => {
    const newStatus = ticket.status === 'open' ? 'closed' : 'open';
    await ticketService.updateTicket(ticket._id, newStatus);
    getTickets();
  };
  // Render ticket with status switch and deadline color indication
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>{`${index + 1}.  ${ticket.client}`}</Box>
        <Box>{moment(ticket.deadline).format('DD/MM/YYYY')}</Box>
        <Box>
          <Switch
            checked={ticket.status === 'closed'}
            onChange={handleChangeStatus}
            value={ticket._id}
          />
          <RadioButtonCheckedIcon
            sx={{
              color: deadlineColor({
                status: ticket.status,
                deadline: ticket.deadline,
              }),
            }}
          />
        </Box>
      </Box>

      <Box>
        <TextField label='Message' multiline rows={4} value={ticket.issue} />
      </Box>
    </Box>
  );
};
