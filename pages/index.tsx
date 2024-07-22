// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={fetchMessage}>Fetch Message</button>
      <p>{message}</p>
    </div>
  );
}
