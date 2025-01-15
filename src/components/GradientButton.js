import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function GradientButton({ children, onClick, className = '' }: GradientButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative group overflow-hidden ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-bold">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-75 blur group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.button>
  );
}
