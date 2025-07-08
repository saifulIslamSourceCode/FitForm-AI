import { useEffect, useState } from 'react';

interface User {
  id: number;
  email: string;
  height?: number | null;
  weight?: number | null;
  location?: string | null;
}

function App() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const createUser = async () => {
      await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'new@example.com',
          password: 'secret',
          height: 172,
          weight: 70,
          location: 'Dhaka',
        }),
      });
    };

    createUser();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/users');
        const data: User[] = await res.json();
        console.log('✅ Fetched users:', data);  // This is all you need
        setUsers(data);
      } catch (err) {
        console.error('❌ Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  return null; // nothing to show
}

export default App;