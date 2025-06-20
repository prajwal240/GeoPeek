'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Send from '../../public/images/sendicon.svg';
import ReactMarkdown from 'react-markdown';

type Message = {
    sender: 'user' | 'bot';
    text: string;
};

export default function InfoBot() {
    const [messages, setMessages] = useState<Message[]>([
        {
            sender: 'bot',
            text: 'Hello, User! Welcome to **InfoBot**! Looking for some out-of-the-box information about the country?'
        }
    ]);
    const [input, setInput] = useState('');

    const apiUrl = process.env.NEXT_PUBLIC_GEMINI_API;

    const handleSend = async () => {
        if (!input.trim()) return;

        setMessages((prev) => [...prev, { sender: 'user', text: input }]);
        setInput('');

        try {
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
                                    text: `Answer like you are a chatbot named InfoBot which only answers to questions related to any nation or provides information related to nation
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
        } catch (err) {
            setMessages((prev) => [...prev, { sender: 'bot', text: "Something went wrong. Please try again." }]);
        }
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
                                className={`max-w-[70%] px-4 py-2 rounded-lg text-sm whitespace-pre-wrap ${msg.sender === 'user'
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-emerald-900 text-white'
                                    }`}
                            >
                                {msg.sender === 'bot' ? (
                                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                                ) : (
                                    msg.text
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-2 w-full flex items-center gap-2 px-2 sm:px-0 overflow-hidden">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type a message..."
                        className="flex-1 border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-emerald-500 h-[7vh] min-w-0"
                    />
                    <button
                        onClick={handleSend}
                        className="p-2 bg-emerald-600 hover:bg-emerald-700 rounded-md transition h-[7vh] flex items-center justify-center"
                    >
                        <Image src={Send} alt="Send" width={20} height={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
