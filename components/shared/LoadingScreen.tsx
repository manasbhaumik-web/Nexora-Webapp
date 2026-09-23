'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap } from 'lucide-react'

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Progress increment simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        const diff = Math.floor(Math.random() * 15) + 10
        return Math.min(prev + diff, 100)
      })
    }, 120)

    // Complete load listener
    const handleLoad = () => {
      setProgress(100)
    }

    if (document.readyState === 'complete') {
      setProgress(100)
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      clearInterval(interval)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setLoading(false)
      }, 400)
      return () => clearTimeout(timeout)
    }
  }, [progress])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="global-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0F172A] font-sans selection:bg-violet-500 selection:text-white pointer-events-auto"
        >
          {/* Background Grid & Ambient Blur Orbs */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0 pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] bg-violet-600/25 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
          <div className="absolute w-[450px] h-[450px] bg-[#00D4FF]/20 rounded-full blur-[130px] pointer-events-none mix-blend-screen" />

          {/* Loader Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-sm w-full">
            {/* Logo Ring Spinner Container */}
            <div className="relative flex items-center justify-center mb-8">
              {/* Outer Pulsing Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                className="w-24 h-24 rounded-3xl border-2 border-dashed border-violet-500/40 p-1"
              />

              {/* Inner Counter-Spinning Glow Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                className="absolute w-20 h-20 rounded-2xl border border-cyan-400/50 shadow-[0_0_20px_rgba(0,212,255,0.4)]"
              />

              {/* Central Logo Box */}
              <div className="absolute flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-[#00D4FF] text-2xl font-black text-white shadow-[0_0_30px_rgba(139,92,246,0.8)]">
                N
              </div>
            </div>

            {/* Brand Title */}
            <h1 className="font-heading text-2xl font-black tracking-tight text-white mb-1">
              Nexora <span className="text-[#00D4FF]">Technologies</span>
            </h1>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-6 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
              Enterprise Solutions
            </p>

            {/* Progress Bar Container */}
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden border border-white/10 mb-3 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>

            {/* Percentage Indicator */}
            <div className="flex items-center justify-between w-full text-xs font-mono text-gray-400 font-medium px-1">
              <span>Loading experience...</span>
              <span className="text-[#00D4FF] font-bold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
