// components/Typewriter.tsx
"use client"
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const Typewriter = ({user}:{user:string}) => {
  const messages = [
    `Welcome ${user} to kuhesmedlab!`,
    "I am glad to have you onboard.",
    "From now on,",
    "I will be your helper.",
    "We will know each other better",
    "as we interact.",
    "Oh! Please log in to continue.",
  ];

  const [currentMessage, setCurrentMessage] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      if (currentCharIndex < messages[currentMessageIndex].length) {
        const timeoutId = setTimeout(() => {
          setCurrentMessage(
            (prev) => prev + messages[currentMessageIndex][currentCharIndex]
          );
          setCurrentCharIndex((prev) => prev + 1);
        }, 150);
        return () => clearTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => {
          setCurrentMessage('');
          setCurrentCharIndex(0);
          setCurrentMessageIndex((prev) => prev + 1);
        }, 1000);
        return () => clearTimeout(timeoutId);
      }
    } else {
      setIsFinished(true);
    }
  }, [currentCharIndex, currentMessageIndex, messages]);

  return (
    <div className=" bg-gradient-to-br from-[#ff6b6b] to-[#ffa500] flex flex-col items-center justify-center h-screen p-4">
      <p
        className="text-2xl text-white font-bold typewriter"
        style={{ width: `${currentMessage.length}ch` }}
      >
        {currentMessage}
      </p>
      {isFinished && (
        <Link href="/signin">
        <Button className="mt-4 px-20 bg-transparent border hover:bg-gradient-to-tr from-transparent to-purple-300 border-white text-white font-bold py-2 rounded">
          Login for the first time
        </Button>
        </Link>
      )}
    </div>
  );
};

export default Typewriter;
