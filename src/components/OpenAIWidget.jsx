'use client';
import { useState } from 'react';

export default function OpenAIWidget() {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleAsk() {
    setLoading(true);
    const res = await fetch('/api/ai', {
      method: 'POST',
      body: JSON.stringify({ prompt: input }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setAnswer(data.answer);
    setLoading(false);
  }

  return (
    <div className="p-4 rounded shadow bg-white max-w-md mx-auto">
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder="Ställ en fråga..."
      />
      <button onClick={handleAsk} disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded">
        {loading ? 'Tänker...' : 'Fråga AI'}
      </button>
      {answer && <div className="mt-4 border-t pt-2">{answer}</div>}
    </div>
  );
}
