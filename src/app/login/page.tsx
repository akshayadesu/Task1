'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const router = useRouter();

  const hardCodedValues = {
    username: 'akshaya',
    password: '1230',
  };
  // State to store form input values
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     // Check if entered details match static credentials
     if (
      formData.username === hardCodedValues.username &&
      formData.password === hardCodedValues.password
    ) {
      
      router.push('/example');
    } else {
      setMessage('Invalid username or password.');
    }
    console.log('Form Submitted:', formData);
    // You can send this data to an API or handle it as needed
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mt-16">
      <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="username" className="text-gray-700 dark:text-black-300">Username</Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            className="mt-1 text-black"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="password" className="text-gray-700 dark:text-black-300">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            className="mt-1 text-black"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="w-full mt-4">
          Login
        </Button>
      </form>
      {message && (
        <p className={`mt-4 ${message.startsWith('Invalid') ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Login;
