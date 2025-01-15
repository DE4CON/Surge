import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StatCounter from './StatCounter';

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.h1
              className="text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="animate-gradient-text">
                SURGE
              </span>
              <br />
              <span className="text-4xl text-gray-300">Next Gen Technology</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-400 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Experience unparalleled power and security with our cutting-edge solution.
            </motion.p>

            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                onClick={() => document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-bold text-xl">
                  Get Started
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-200"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-8 py-4 rounded-xl text-xl font-bold text-gray-300 border border-gray-700 hover:border-purple-500 transition-colors duration-300"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <StatCounter end={7000} label="Active Users" suffix="+" />
              <StatCounter end={100} label="Updates" suffix="+" />
              <StatCounter end={99.9} label="Uptime" suffix="%" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative perspective-1000"
          >
            <div className="relative w-full h-[600px] animate-float model-container">
              <spline-viewer url="https://prod.spline.design/dgzAknA2evuzNxmv/scene.splinecode"></spline-viewer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
