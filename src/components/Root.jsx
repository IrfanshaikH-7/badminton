// // Import necessary modules
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import shuttle from '../assets/shuttle.png';

// const RootComponent = () => {
//   const [fromLeft, setFromLeft] = useState(true);
//   const [shuttleVisible, setShuttleVisible] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFromLeft(Math.random() > 0.5);
//       setShuttleVisible(true);

//       // Hide the shuttle after 2 seconds
//       setTimeout(() => setShuttleVisible(false), 2000);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-screen h-screen flex items-center justify-center bg-blue-600 overflow-hidden">
//       {shuttleVisible && (
//         <motion.div
//           initial={{ 
//             x: fromLeft ? '-180%' : '180%', // Start completely off-screen
//             y: '50%', // Start at the vertical center
//             scale: 1, // Full scale to start
//             opacity: 0 
//           }}
//           animate={{ 
//             opacity: 1, // Fade in
//           }}
//           exit={{ 
//             x: fromLeft ? '-100%' : '100%', // Exit back off-screen
//             opacity: 0 
//           }}
//           transition={{ duration: 0.5 }} // Shorter transition for popping effect
//           className="absolute bg-white shadow-lg rounded-full"
//           style={{
//             width: "200px", // Set the shuttle width
//             height: "200px", // Set the shuttle height
//             backgroundImage: `url(${shuttle})`,
//             backgroundSize: "contain",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             position: 'absolute',
//             top: '50%', // Center vertically
//             transform: 'translateY(-50%)' // Adjust to keep it vertically centered
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default RootComponent;
// Import necessary modules
// Import necessary modules
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import shuttle from '../assets/shuttle.png';

// const RootComponent = () => {
//   const [fromLeft, setFromLeft] = useState(true);
//   const [shuttleVisible, setShuttleVisible] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFromLeft(Math.random() > 0.5);
//       setShuttleVisible(true);

//       // Hide the shuttle after 2 seconds
//       setTimeout(() => setShuttleVisible(false), 2000);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-screen h-screen flex items-center justify-center bg-blue-600 overflow-hidden">
//       {shuttleVisible && (
//         <motion.div
//           initial={{ 
//             x: fromLeft ? '-200%' : '200%', // Start completely off-screen
//             scale: 0.5, // Start small for "coming from afar" effect
//             opacity: 0 
//           }}
//           animate={{ 
//             x: fromLeft ? '-200%' : '200%', // Pop up just off the edge
//             scale: 1, // Full scale
//             opacity: 1, // Fade in
//           }}
//           exit={{ 
//             x: fromLeft ? '-200%' : '200%', // Exit back off-screen
//             scale: 0.5, // Scale down on exit
//             opacity: 0 
//           }}
//           transition={{ duration: 1 }} // Transition duration
//           className="absolute bg-white shadow-lg rounded-full"
//           style={{
//             width: "200px", // Set the shuttle width
//             height: "200px", // Set the shuttle height
//             backgroundImage: `url(${shuttle})`,
//             backgroundSize: "contain",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             position: 'absolute',
//             top: '50%', // Keep it vertically centered
//             transform: 'translateY(-50%)' // Adjust to keep it vertically centered
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default RootComponent;

// Import necessary modules
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import shuttle from '../assets/shuttle.png';

const RootComponent = () => {
  const [fromLeft, setFromLeft] = useState(true);
  const [shuttleVisible, setShuttleVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFromLeft(Math.random() > 0.5);
      setShuttleVisible(true);

      // Hide the shuttle after 2 seconds
      setTimeout(() => setShuttleVisible(false), 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-blue-600 overflow-hidden">
      {shuttleVisible && (
        <motion.div
          initial={{ 
            x: fromLeft ? '-200%' : '200%', // Start completely off-screen
            scale: 0.5, // Start small for "coming from afar" effect
            opacity: 0 
          }}
          animate={{ 
            x: fromLeft ? '-10px' : '10px', // Pop up just off the edge with a slight wiggle
            scale: 1, // Full scale
            opacity: 1, // Fade in
          }}
          exit={{ 
            x: fromLeft ? '-200%' : '200%', // Exit back off-screen
            scale: 0.5, // Scale down on exit
            opacity: 0 
          }}
          transition={{ duration: 1 }} // Transition duration
          className="absolute bg-white shadow-lg rounded-full"
          style={{
            width: "200px", // Set the shuttle width
            height: "200px", // Set the shuttle height
            backgroundImage: `url(${shuttle})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: 'absolute',
            top: '50%', // Keep it vertically centered
            transform: 'translateY(-50%)' // Adjust to keep it vertically centered
          }}
        />
      )}
    </div>
  );
};

export default RootComponent;

