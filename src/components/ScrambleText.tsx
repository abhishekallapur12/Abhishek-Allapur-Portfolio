import React, { useState, useRef, useEffect } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const characters = 'ABCDEF';

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = '', style = {} }) => {
  const [displayText, setDisplayText] = useState('');
  const animationFrame = useRef<number>();

  const scramble = () => {
    const queue = text.split('').map((char, i) => ({
      to: char,
      start: Math.floor(Math.random() * 3),
      end: Math.floor(8 + i * 1.5),
    }));

    let frame = 0;

    const update = () => {
      let output = '';
      let complete = 0;

      queue.forEach(({ to, start, end }) => {
        if (frame >= end) {
          output += to;
          complete++;
        } else if (frame >= start) {
          output += characters[Math.floor(Math.random() * characters.length)];
        } else {
          output += ' ';
        }
      });

      setDisplayText(output);

      if (complete < queue.length) {
        frame++;
        animationFrame.current = requestAnimationFrame(update);
      }
    };

    cancelAnimationFrame(animationFrame.current!);
    animationFrame.current = requestAnimationFrame(update);
  };

  // 👇 Trigger scramble on initial mount
  useEffect(() => {
    scramble();
    return () => cancelAnimationFrame(animationFrame.current!);
  }, []);

  return (
    <span
      className={className}
      style={style}
      onMouseEnter={scramble}
      onMouseLeave={() => setDisplayText(text)}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;
