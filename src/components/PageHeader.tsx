"use client"

import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    subtitle: string;
    bgGradient?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, bgGradient = 'from-blue-500 to-teal-500' }) => {
    return (
        <motion.div
            className={`relative bg-gradient-to-r ${bgGradient} text-white py-16 sm:py-32 sm:pt-36 overflow-hidden`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-10" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        className="text-base sm:text-lg md:text-xl max-w-3xl text-white/90"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>

            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 sm:h-2 bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            />
        </motion.div>
    );
};

export default PageHeader;
