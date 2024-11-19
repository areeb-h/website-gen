'use client';

import React from 'react';
import { Rocket, PenTool, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="relative overflow-hidden min-h-screen flex items-center bg-gray-950 py-16">
            {/* Gradient Background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"
            />

            {/* Animated Geometric Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1.5, ease: "anticipate" }}
                    className="absolute top-1/4 -left-8 sm:-left-12 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/10 rounded-3xl blur-2xl"
                />
                <motion.div
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "anticipate" }}
                    className="absolute bottom-1/4 -right-8 sm:-right-12 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-3xl blur-2xl"
                />
            </div>

            <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="text-center">
                    {/* Animated Badge */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 rounded-full mb-4 sm:mb-6 border border-white/10"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-emerald-400 mr-2"
                        />
                        <span className="text-xs sm:text-sm text-gray-300">Transforming Brands, Elevating Businesses</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white mb-4 sm:mb-6 leading-tight"
                    >
                        Oceloptic Network <br />
                        <span className="text-3xl sm:text-4xl md:text-6xl text-emerald-400">Creative Strategy</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-10 px-4"
                    >
                        Crafting <span className="text-white font-semibold">Innovative Solutions</span> that Propel Your Business Forward
                    </motion.p>

                    {/* Call to Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row justify-center gap-4 mb-12 sm:mb-16 px-4"
                    >
                        <Link href="/services">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 text-white rounded-lg font-bold shadow-lg hover:bg-emerald-600 transition-all"
                            >
                                <Rocket className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Explore Services
                            </motion.button>
                        </Link>
                        <Link href="/consultation">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white rounded-lg font-bold hover:bg-white/10"
                            >
                                <PenTool className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Book Consultation
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
                            { icon: Zap, number: "3+", text: "Successful Projects" },
                            { icon: Rocket, number: "98%", text: "Client Satisfaction" },
                            { icon: PenTool, number: "1+", text: "Years of Expertise" }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.text}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 + (index * 0.1) }}
                                className="flex flex-col items-center"
                            >
                                <stat.icon className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-400 mb-2" />
                                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                                <div className="text-xs sm:text-sm text-gray-400">{stat.text}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;