'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
}

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
}

interface AnimatedCounterProps {
  value: number | string
  duration?: number
  delay?: number
}

export const AnimatedCounter = ({ value, delay = 0 }: AnimatedCounterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onAnimationStart={() => {}}
        >
          {value}
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

interface GlowingButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  delay?: number
}

export const GlowingButton = ({ children, onClick, className = '', delay = 0 }: GlowingButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent-purple to-accent-orange rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
      <div className="relative px-8 py-3 bg-gradient-to-r from-primary to-accent-purple rounded-lg leading-none flex items-center">
        {children}
      </div>
    </motion.button>
  )
}

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
  offset?: number
}

export const FloatingElement = ({ 
  children, 
  delay = 0, 
  duration = 6, 
  offset = 20 
}: FloatingElementProps) => {
  return (
    <motion.div
      animate={{ y: [0, offset, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

interface TextRevealProps {
  text: string
  delay?: number
}

export const TextReveal = ({ text, delay = 0 }: TextRevealProps) => {
  const words = text.split(' ')

  return (
    <div className="flex flex-wrap">
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
            ease: 'easeOut',
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

interface ParallaxProps {
  children: ReactNode
  offset?: number
}

export const Parallax = ({ children, offset = 50 }: ParallaxProps) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileInView={{ y: -offset }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 'some' }}
    >
      {children}
    </motion.div>
  )
}

interface GlassmorphicCardProps {
  children: ReactNode
  delay?: number
  className?: string
  hoverable?: boolean
}

export const GlassmorphicCard = ({ 
  children, 
  delay = 0, 
  className = '',
  hoverable = true
}: GlassmorphicCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 'some' }}
      whileHover={hoverable ? { scale: 1.05, y: -5 } : {}}
      className={`relative rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-6 transition-all hover:border-white/40 ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 pointer-events-none"></div>
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
