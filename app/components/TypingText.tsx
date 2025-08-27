// "use client";
// import { useState, useEffect, useRef } from "react";

// interface TypingTextProps {
//   text: string;
// }

// const TypingText: React.FC<TypingTextProps> = ({ text }) => {
//   const [isBlinking, setIsBlinking] = useState(true);
//   const storyTextRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const storyText = storyTextRef.current;

//     if (storyText) {
//       const textLength = storyText.textContent?.length || 0;

//       const handleAnimationEnd = () => {
//         storyText.style.width = "0";
//         setTimeout(() => {
//           storyText.style.width = `${textLength}ch`;
//         }, 100);
//       };

//       storyText.addEventListener("animationend", handleAnimationEnd);

//       return () => {
//         storyText.removeEventListener("animationend", handleAnimationEnd);
//       };
//     }
//   }, []);

//   useEffect(() => {
//     setIsBlinking(true);
//   }, [text]);

//   return (
//     <div className="story-container">
//       <div
//         ref={storyTextRef}
//         className={`story-text ${
//           isBlinking ? "blink-caret" : ""
//         } overflow-hidden border-r-2 border-black`}
//       >
//         {text}
//       </div>
//     </div>
//   );
// };

// export default TypingText;
