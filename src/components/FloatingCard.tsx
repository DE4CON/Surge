import { motion } from 'framer-motion';

interface FloatingCardProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FloatingCard({ children, delay = 0 }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-effect rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
    >
      {children}
    </motion.div>
  );
}