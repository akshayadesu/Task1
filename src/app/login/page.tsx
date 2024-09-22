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
    password: '1234',
  };

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.username === hardCodedValues.username &&
      formData.password === hardCodedValues.password
    ) {
      router.push('/example');
    } else {
      setMessage('Invalid username or password.');
    }
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white relative">
      <div className="max-w-lg mx-auto p-6 bg-red-400 shadow-md rounded-lg"> {/* Changed max-w-md to max-w-lg */}
        <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="username" className="text-gray-200">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              className="mt-1 bg-white text-black"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password" className="text-gray-200">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="mt-1 bg-white text-black"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full mt-4 bg-white text-red-400 hover:bg-white">
            Login
          </Button>
        </form>
        {message && (
          <p className={`mt-4 ${message.startsWith('Invalid') ? 'text-white-500' : 'text-green-500'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
