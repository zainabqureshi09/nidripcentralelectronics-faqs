import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main gradient background - Vibrant Pink to Green */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #FF2F92 0%, #FF6FAE 35%, #8FD3A8 70%, #6BCF9B 100%)',
        }}
      />
      
      {/* Overlay for better readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%)',
        }}
      />

      {/* Floating blob 1 - Soft pink accent */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #FF6FAE 0%, transparent 65%)',
          top: '5%',
          left: '10%',
        }}
        animate={shouldReduceMotion ? {} : {
          y: [0, 25, 0],
          x: [0, 15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating blob 2 - Soft green accent */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full opacity-18 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #8FD3A8 0%, transparent 65%)',
          bottom: '15%',
          left: '15%',
        }}
        animate={shouldReduceMotion ? {} : {
          y: [0, -30, 0],
          x: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Floating blob 3 - Magenta highlight */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full opacity-15 blur-[80px]"
        style={{
          background: 'radial-gradient(circle, #FF2F92 0%, transparent 65%)',
          top: '40%',
          left: '5%',
        }}
        animate={shouldReduceMotion ? {} : {
          y: [0, 20, 0],
          x: [0, 20, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />

      {/* Glassmorphism floating cards */}
      <motion.div
        className="absolute w-72 h-48 rounded-3xl backdrop-blur-sm border border-white/40"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
          top: '12%',
          left: '8%',
        }}
        animate={shouldReduceMotion ? {} : {
          y: [0, 15, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-56 h-56 rounded-3xl backdrop-blur-sm border border-white/35"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
          bottom: '20%',
          left: '12%',
        }}
        animate={shouldReduceMotion ? {} : {
          y: [0, -20, 0],
          rotate: [2, -2, 2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Subtle geometric shapes */}
      <motion.div
        className="absolute w-28 h-28 border border-white/20 rounded-2xl"
        style={{ 
          top: '60%', 
          left: '22%',
          background: 'rgba(255, 255, 255, 0.1)',
        }}
        animate={shouldReduceMotion ? {} : {
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-20 h-20 border-2 border-white/25 rounded-full"
        style={{ 
          top: '25%', 
          left: '28%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
        }}
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(at 20% 20%, #FF2F9208 0%, transparent 50%),
            radial-gradient(at 80% 30%, #FF6FAE08 0%, transparent 50%),
            radial-gradient(at 40% 70%, #8FD3A808 0%, transparent 50%),
            radial-gradient(at 70% 80%, #6BCF9B08 0%, transparent 50%)
          `,
        }}
      />

      {/* Parallax effect based on mouse movement */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-8 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)',
            top: '35%',
            left: '25%',
          }}
          animate={{
            x: mousePosition.x * 0.015,
            y: mousePosition.y * 0.015,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
          }}
        />
      )}

      {/* Subtle shimmer effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.15) 50%, transparent 60%)',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['-100% 0', '200% 0'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Subtle dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(100, 100, 100, 1) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
}
