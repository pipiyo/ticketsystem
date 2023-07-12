import React, { Fragment } from 'react';
import { Button, Box } from '@mui/material';
import moment from 'moment';
import { useTickets } from './hooks/useTickets';
import { TicketComponent } from './components/TicketComponent';
import { TicketService } from './services/TicketService';
import { RandomUserService } from './services/RandomUserService';

const ticketService = new TicketService();
const randomUserService = new RandomUserService();

const App: React.FC = () => {
  // Use custom hook to manage tickets
  const { tickets, getTickets } = useTickets(ticketService);
  // Function to generate a random date within a 4-day window around the current day
  const randomDate = () => {
    const start = moment().subtract(2, 'days');
    const end = moment().add(2, 'days');
    return moment(
      start.add(Math.random() * end.diff(start), 'milliseconds')
    ).format('YYYY/MM/DD');
  };
  // Function to create a random ticket using a random user from the JSONPlaceholder API
  const handleCreateRandomTicket = async () => {
    const randomUser = await randomUserService.getRandomUser();
    // Use TicketService to create new ticket
    await ticketService.createTicket(
      randomUser.name,
      randomUser.company.bs,
      'open',
      randomDate()
    );
    // Update tickets after creation
    getTickets();
  };

  // Render component with a button to create a new random ticket and a list of current tickets
  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 2,
        borderColor: 'primary.main',
        margin: 2,
        padding: 2,
      }}
    >
      {tickets.map((ticket, i) => (
        <Fragment key={i}>
          <TicketComponent
            index={i}
            ticket={ticket}
            ticketService={ticketService}
            getTickets={getTickets}
          />
        </Fragment>
      ))}

      <Box>
        <Button
          onClick={handleCreateRandomTicket}
          variant='contained'
          color='primary'
        >
          Generate Random Ticket
        </Button>
      </Box>
    </Box>
  );
};

export default App;
