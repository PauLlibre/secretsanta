"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaGift, FaSleigh, FaTrash } from 'react-icons/fa';

export default function Participants() {
  const router = useRouter();

  const [participants, setParticipants] = useState([
    { username: 'user1', email: 'user1@example.com', wishlist: '', budget: '' }
  ]);

  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [wishlist, setWishlist] = useState('');
  const [budget, setBudget] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fixedBudget, setFixedBudget] = useState(true);
  const [globalBudget, setGlobalBudget] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUsername && newEmail) {
      setParticipants([
        ...participants,
        {
          username: newUsername,
          email: newEmail,
          wishlist: wishlist,
          budget: fixedBudget ? globalBudget : budget,
        },
      ]);
      setNewUsername('');
      setNewEmail('');
      setWishlist('');
      if (!fixedBudget) {
        setBudget('');
      }
    }
  };

  const handleDelete = (index: number) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  const assignSecretSanta = async () => {
    if (participants.length < 2) {
      alert('You need at least 2 participants to start the exchange.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/assign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ participants }),
      });

      if (!response.ok) throw new Error('Failed to assign Secret Santa');
      
      alert('Secret Santa assignment successful!');
      router.push('/done');
    } catch (error) {
      alert('There was an error assigning Secret Santa.');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-green-50">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => router.back()}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2 shadow-md"
          >
            <FaSleigh className="text-xl" /> Return
          </button>
        </div>

        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center gap-4">
          <FaGift className="text-red-600 text-3xl" />
          Secret Santa
          <FaGift className="text-green-600 text-3xl" />
        </h1>
        
        <div className="bg-white p-8 rounded-xl shadow-xl mb-12 backdrop-blur-sm bg-opacity-90">
          <h2 className="text-2xl mb-6 text-center text-gray-800 font-semibold">Add Participant</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200"
              />
              <input
                type="email"
                placeholder="Email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200"
              />
            </div>
            <textarea
              placeholder="Wishlist"
              value={wishlist}
              onChange={(e) => setWishlist(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200"
              rows={3}
            />
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="fixedBudget"
                  checked={fixedBudget}
                  onChange={(e) => setFixedBudget(e.target.checked)}
                  className="w-4 h-4"
                />
                <label htmlFor="fixedBudget" className="text-gray-700">Fixed Budget</label>
              </div>
              {fixedBudget ? (
                <input
                  type="text"
                  placeholder="Global Budget"
                  value={globalBudget}
                  onChange={(e) => {
                    setGlobalBudget(e.target.value);
                    setParticipants(participants.map(p => ({...p, budget: e.target.value})));
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200"
                />
              ) : (
                <input
                  type="text"
                  placeholder="Individual Budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200"
                />
              )}
            </div>
            <button 
              type="submit" 
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
            >
              <FaGift className="text-xl" /> Submit
            </button>
          </form>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-xl backdrop-blur-sm bg-opacity-90">
          <h2 className="text-2xl mb-6 text-center text-gray-800 font-semibold">Participant List</h2>
          <div className="grid gap-6">
            {participants.map((participant, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700"><span className="font-semibold">Name:</span> {participant.username}</p>
                    <p className="text-gray-700"><span className="font-semibold">Email:</span> {participant.email}</p>
                  </div>
                  <div>
                    {participant.wishlist && (
                      <p className="text-gray-700"><span className="font-semibold">Wishlist:</span> {participant.wishlist}</p>
                    )}
                    {participant.budget && (
                      <p className="text-gray-700"><span className="font-semibold">Budget Range:</span> {participant.budget}</p>
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => handleDelete(index)}
                  className="mt-4 bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors duration-200 flex items-center gap-2"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            ))}
          </div>

          {participants.length >= 2 && (
            <button
              onClick={assignSecretSanta}
              disabled={isLoading}
              className={`mt-8 w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-3 shadow-md text-lg font-semibold ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <FaSleigh className="text-2xl" />
              {isLoading ? 'Loading...' : 'Start Exchange'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
