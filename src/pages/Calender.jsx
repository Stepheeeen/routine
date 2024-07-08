// src/pages/Calender.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import 'react-calendar/dist/Calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import { v4 as uuidv4 } from 'uuid';
import { useCalendar, CalendarProvider } from '../context/CalendarContext';

// Event Form Component
const EventForm = ({ title = '', date = new Date(), onSubmit }) => {
  const [eventTitle, setEventTitle] = useState(title);
  const [eventDate, setEventDate] = useState(date);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(eventTitle, eventDate);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div>
        <label className="block">Title</label>
        <input
          type="text"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter event title"
          required
        />
      </div>
      <div className="mt-4">
        <label className="block">Date</label>
        <DatePicker
          selected={eventDate}
          onChange={(date) => setEventDate(date)}
          className="border p-2 w-full"
          dateFormat="yyyy/MM/dd"
          required
        />
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        Save Event
      </button>
    </form>
  );
};

// Calender Page Component
const Calender = () => {
  const { events, addEvent, deleteEvent, updateEvent } = useCalendar();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [editEvent, setEditEvent] = useState(null);

  const filteredEvents = events.filter(event => {
    return (
      new Date(event.date).toDateString() === selectedDate.toDateString()
    );
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setEditEvent(null); // Clear the edit form
  };

  const handleCreateEvent = (title, date) => {
    addEvent({ id: uuidv4(), title, date });
    setShowForm(false);
  };

  const handleEditEvent = (title, date) => {
    if (editEvent) {
      updateEvent({ ...editEvent, title, date });
      setEditEvent(null);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Calender Event Scheduler</h1>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        className="my-4"
      />
      <button
        onClick={() => {
          setEditEvent(null);
          setShowForm(true);
        }}
        className="text-blue-500 mb-4 block"
      >
        Create New Event
      </button>
      {showForm && (
        <EventForm
          title={editEvent ? editEvent.title : ''}
          date={editEvent ? new Date(editEvent.date) : new Date()}
          onSubmit={editEvent ? handleEditEvent : handleCreateEvent}
        />
      )}
      <ul className="space-y-4 mt-4">
        {filteredEvents.length === 0 ? (
          <p>No events for this date. Create one to get started!</p>
        ) : (
          filteredEvents.map(event => (
            <li key={event.id} className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p>{new Date(event.date).toDateString()}</p>
              <button 
                onClick={() => {
                  setEditEvent(event);
                  setShowForm(true);
                }}
                className="mt-2 text-yellow-500"
              >
                Edit
              </button>
              <button 
                onClick={() => deleteEvent(event.id)} 
                className="mt-2 text-red-500"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

const CalenderWithProvider = () => (
  <CalendarProvider>
    <Calender />
  </CalendarProvider>
);

export default CalenderWithProvider;
