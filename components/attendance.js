import React, { useState } from 'react';

const AttendanceScreen = () => {
  const [status, setStatus] = useState('');

  const handleMarkAttendance = async () => {
    try {
      // Send a request to the Flask API to start marking attendance
      const response = await fetch('http://localhost:5000/mark_attendance', {
        method: 'GET',
      });

      const result = await response.json();

      if (response.ok) {
        setStatus(`Attendance marked successfully: ${result.message}`);
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Mark Attendance</h1>
      <button onClick={handleMarkAttendance}>Start Attendance</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default AttendanceScreen;
