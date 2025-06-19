'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Send from '../../public/images/sendicon.svg';

type Message = {
    sender: 'user' | 'bot';
    text: string;
};

export default function InfoBot() {
    const [messages, setMessages] = useState<Message[]>([
        {
            sender: 'bot',
            text: 'Hello, User! Welcome to InfoBot! Looking for some out-of-the-box information about the country?'
        }
    ]);
    const [input, setInput] = useState('');

    const apiUrl = process.env.NEXT_PUBLIC_GEMINI_API;

    const handleSend = async () => {
        if (!input.trim()) return;

        setMessages((prev) => [...prev, { sender: 'user', text: input }]);
        setInput('');

        const res = await fetch(`${apiUrl}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: `You are a helpful assistant that ONLY answers questions related to countries or nations (such as geography, culture, population, government, etc.).

If the user's question is NOT related to any country or nation information, respond exactly with:
"Sorry, that's not a valid question. Please ask something related to a country."

If the question IS related, answer in a paragraph or a sentence, and do NOT provide any other information.

DO NOT correct the user's grammar, spelling, or wording.

DO NOT rephrase the question.

Answer based on the intent of the question — even if it contains spelling mistakes, grammar errors, or abbreviations (e.g., "indias pm", "usa popltn", "jpn flag").

Here is the user's question:

${input}`
                            }
                        ]
                    }
                ]
            })
        });

        const data = await res.json();
        const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't get that. Try again.";
        setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    };

    return (
        <div className="w-full h-[80vh] flex flex-col bg-white px-4 pt-4 mb-[4px]">
            <div className="text-2xl font-bold text-center text-emerald-900 mb-4">InfoBot</div>

            <div className="flex flex-col flex-grow overflow-hidden">
                <div className="border rounded-md p-3 space-y-3 bg-gray-50 overflow-y-auto flex-grow">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}
                        >
                            <div
                                className={`max-w-[70%] px-4 py-2 rounded-lg text-sm ${msg.sender === 'user'
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-emerald-900 text-white'
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-2 w-full flex gap-2 items-center px-1 sm:px-0 min-w-0 overflow-x-hidden">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type a message..."
                        className="flex-1 border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-emerald-500 h-[7vh]"
                    />
                    <button
                        onClick={handleSend}
                        className="p-2 bg-emerald-600 hover:bg-emerald-700 rounded-md transition h-[7vh]"
                    >
                        <Image src={Send} alt="Send" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
