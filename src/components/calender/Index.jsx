import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'tailwindcss/tailwind.css';
import PageContainer from '../../pages/Index';
import addIcon from '../../assets/icons/addIcon.svg';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [eventToEdit, setEventToEdit] = useState(null);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const openEditModal = (event) => {
    setEventToEdit(event);
    setNewEvent({ title: event.title, start: moment(event.start).format('YYYY-MM-DDTHH:mm'), end: moment(event.end).format('YYYY-MM-DDTHH:mm') });
    setEditOpen(true);
  };

  const closeEditModal = () => {
    setEventToEdit(null);
    setEditOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = () => {
    setEvents([...events, {
      ...newEvent,
      start: new Date(newEvent.start),
      end: new Date(newEvent.end),
    }]);
    closeModal();
  };

  const handleUpdateEvent = () => {
    setEvents(events.map(event => 
      event === eventToEdit ? { ...newEvent, start: new Date(newEvent.start), end: new Date(newEvent.end) } : event
    ));
    closeEditModal();
  };

  const handleDeleteEvent = (event) => {
    setEvents(events.filter(e => e !== event));
    closeEditModal();
  };

  const eventStyleGetter = (event) => ({
    style: {
      backgroundColor: '#028960',
    },
  });

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 500,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  return (
    <PageContainer
      pageTitle="Calendar"
      topbarStyling="mb-[-20px]"
      addStyle="hidden"
    >
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <button
          onClick={openModal}
          className="fixed right-4 bottom-20 z-10 cursor-pointer bg-transparent"
        >
          <img src={addIcon} alt="addIcon" />
        </button>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(100vh - 150px)' }}
          eventPropGetter={eventStyleGetter}
          views={['month', 'week', 'day']}
          toolbar={true}
          onSelectEvent={openEditModal}
        />

        <Modal
          open={open}
          onClose={closeModal}
          aria-labelledby="add-event-modal-title"
          aria-describedby="add-event-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography variant="h6" component="h2" gutterBottom>
              Add New Event
            </Typography>
            <form className="space-y-4">
              <TextField
                label="Title"
                name="title"
                value={newEvent.title}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                required
              />
              <TextField
                label="Start Date"
                name="start"
                type="datetime-local"
                value={newEvent.start}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="End Date"
                name="end"
                type="datetime-local"
                value={newEvent.end}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
              />
              <Button
                onClick={handleAddEvent}
                variant="contained"
                color="success"
                fullWidth
              >
                Add Event
              </Button>
            </form>
            <Button
              onClick={closeModal}
              variant="contained"
              color="error"
              fullWidth
              sx={{ mt: 2 }}
            >
              Close
            </Button>
          </Box>
        </Modal>

        <Modal
          open={editOpen}
          onClose={closeEditModal}
          aria-labelledby="edit-event-modal-title"
          aria-describedby="edit-event-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography variant="h6" component="h2" gutterBottom>
              Edit Event
            </Typography>
            <form className="space-y-4">
              <TextField
                label="Title"
                name="title"
                value={newEvent.title}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                required
              />
              <TextField
                label="Start Date"
                name="start"
                type="datetime-local"
                value={newEvent.start}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="End Date"
                name="end"
                type="datetime-local"
                value={newEvent.end}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
              />
              <Button
                onClick={handleUpdateEvent}
                variant="contained"
                color="success"
                fullWidth
              >
                Update Event
              </Button>
              <Button
                onClick={() => handleDeleteEvent(eventToEdit)}
                variant="contained"
                color="error"
                fullWidth
                sx={{ mt: 2 }}
              >
                Delete Event
              </Button>
            </form>
            <Button
              onClick={closeEditModal}
              variant="contained"
              color="error"
              fullWidth
              sx={{ mt: 2 }}
            >
              Close
            </Button>
          </Box>
        </Modal>
      </div>
    </PageContainer>
  );
};

export default MyCalendar;
