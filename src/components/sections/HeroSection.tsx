'use client'

import React, { useEffect, useState } from 'react'
import { Rocket, PenTool, Star, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const updateWindowSize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            }

            updateWindowSize()
            window.addEventListener('resize', updateWindowSize)
            return () => window.removeEventListener('resize', updateWindowSize)
        }
    }, [])

    return (
        <section className="relative overflow-hidden min-h-screen flex items-center bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://cdn.mos.cms.futurecdn.net/AoWXgnHSxAAPxqymPQMQYL-1200-80.jpg"
                    alt="Strategic Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="opacity-30 mix-blend-soft-light"
                />
            </div>

            {/* Gradient Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-purple-900/40 to-black/80"
            />

            {/* Particle Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            x: windowSize.width ? Math.random() * windowSize.width : 0,
                            y: windowSize.height ? Math.random() * windowSize.height : 0,
                            scale: Math.random() * 2
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            x: windowSize.width
                                ? [
                                    Math.random() * windowSize.width,
                                    Math.random() * windowSize.width,
                                    Math.random() * windowSize.width
                                ]
                                : [0, 0, 0],
                            y: windowSize.height
                                ? [
                                    Math.random() * windowSize.height,
                                    Math.random() * windowSize.height,
                                    Math.random() * windowSize.height
                                ]
                                : [0, 0, 0]
                        }}
                        transition={{
                            duration: Math.random() * 100 + 5,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                        className="absolute w-1 h-1 rounded-full bg-white/50"
                    />
                ))}
            </div>

            <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-md"
                    >
                        <div className="w-3 h-3 rounded-full bg-white/70 mr-3 animate-pulse"></div>
                        <span className="text-sm text-white/80 font-medium tracking-wider">
                            Innovative Solutions, Strategic Approach
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
                    >
                        Oceloptic Network
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                            Turning Ideas Into Timeless Memories
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 px-4 leading-relaxed"
                    >
                        Delivering <span className="text-white font-semibold">Innovative Solutions</span> with Precision and Expertise
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row justify-center gap-4 mb-20 px-4"
                    >
                        <Link href="/services" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-orange-400 to-red-400 text-white rounded-xl font-bold shadow-2xl backdrop-blur-md"
                            >
                                <Rocket className="mr-3 w-6 h-6" />
                                <span className="text-shadow-sm">Explore Services</span>

                            </motion.button>
                        </Link>
                        <Link href="/consultation" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-white/10 text-white rounded-xl font-bold backdrop-blur-md border border-white/20"
                            >
                                <PenTool className="mr-3 w-6 h-6" /> Request Consultation
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Performance Metrics */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto text-center px-4"
                    >
                        {[
                            { icon: Star, number: "3+", text: "Strategic Projects" },
                            { icon: Zap, number: "100%", text: "Client Satisfaction" },
                            { icon: Rocket, number: "1+", text: "Years of Expertise" }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.text}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 + (index * 0.1) }}
                                className="flex flex-col items-center"
                            >
                                <stat.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white/70 mb-2" />
                                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                                <div className="text-xs sm:text-sm text-white/50">{stat.text}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection