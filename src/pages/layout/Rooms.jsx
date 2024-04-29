import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/Rooms.css'

export default function Rooms() {
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(new Date().getTime() + 86400000)); // Adding 1 day (86400000 milliseconds)
  const [availabilityMessage, setAvailabilityMessage] = useState('');

  const checkAvailability = () => {
    if (startDate && endDate) {
      // Perform availability check logic here, for example:
      // Let's assume availability is checked against a hardcoded date range for demonstration purposes
      const availableStartDate = new Date('2024-05-01');
      const availableEndDate = new Date('2024-05-10');

      if (startDate >= availableStartDate && endDate <= availableEndDate) {
        setAvailabilityMessage('Rooms are available for the selected dates!');
      } else {
        setAvailabilityMessage('Sorry, rooms are not available for the selected dates.');
      }
    } else {
      setAvailabilityMessage('Please select both check-in and check-out dates.');
    }
  };

  return (
    <>
      <form action="">
        <h2>Select Dates for Availability</h2>
        <div className="check-dates-container">
          <div className='check-dates'>
            <label>Arrival</label>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          </div>
          <div className='check-dates'>
            <label>Depature</label>
            <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
          </div>
        </div>
        <button className='check-avaiability-form-btn' onClick={checkAvailability}>Check Availability</button>
      </form>
      <div className='explore-rooms'>
        <h1>Explore Our Rooms</h1>
        <div className="room-img">
          <i className="fa-solid fa-chevron-left"></i>
          <div className="img-container"><img src="/src/Images/Classic.png" alt="" /><span>Classic Rooms</span></div>
          <div className="img-container"><img src="/src/Images/Deluxe.png" alt="" /><span>Executive Rooms</span></div>
          <div className="img-container"><img src="/src/Images/Ultra_Deluxe.png" alt="" /><span>Deluxe Rooms</span></div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div className="rooms-testimonials">
        <img src="/src/Images/palm-leaves.png" alt="" />
        <h1>“Sollicitudin pulvinar eu consectetur tortor. At consequat cursus convallis vestibulum proin eget. Sit iaculis nec sed nisl urna purus lectus eget accumsan lectus ultrices quam.”</h1>
        <p>- Jason Hook, USA</p>
      </div>
    </>
  )
}
