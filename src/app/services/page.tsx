'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    PieChart, Globe, Target,
    BarChart2, Award, ArrowRight, CheckCircle
} from 'lucide-react';

export default function Services() {
    const serviceDetails = [
        {
            icon: PieChart,
            title: "Strategic Marketing",
            description: "Data-driven strategies that transform your marketing approach and drive measurable growth.",
            features: [
                "Advanced Market Research",
                "Competitive Intelligence",
                "Precision Campaign Design"
            ],
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            gradient: "from-blue-100 to-indigo-200"
        },
        {
            icon: Globe,
            title: "Digital Expansion",
            description: "Amplify your brand's global reach with sophisticated multi-platform marketing strategies.",
            features: [
                "International Market Penetration",
                "Omnichannel Engagement",
                "Cultural Marketing Adaptation"
            ],
            image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            gradient: "from-teal-100 to-cyan-200"
        },
        {
            icon: BarChart2,
            title: "Performance Analytics",
            description: "Harness the power of data with advanced analytics that turn insights into actionable strategies.",
            features: [
                "Real-Time Performance Tracking",
                "Predictive Intelligence",
                "Continuous Optimization"
            ],
            image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            gradient: "from-purple-100 to-pink-200"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 pt-24 to-gray-100 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-4 py-16  text-center"
            >
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                    Elevate Your Digital Potential
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Cutting-edge marketing solutions designed to transform your brand's digital landscape and drive unprecedented growth.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-4 space-y-16"
            >
                {serviceDetails.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`
                            grid md:grid-cols-2 gap-12 items-center 
                            bg-white rounded-3xl p-12 shadow-2xl 
                            transition-all duration-300 
                            hover:shadow-3xl hover:-translate-y-2
                        `}
                    >
                        <div className={`${index % 2 === 1 ? 'md:order-last' : ''} space-y-6`}>
                            <div className="flex items-center space-x-4">
                                <service.icon className="w-16 h-16 text-blue-500" />
                                <h3 className="text-4xl font-bold text-gray-900">{service.title}</h3>
                            </div>
                            <p className="text-lg text-gray-600">{service.description}</p>
                            <div className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center space-x-3 text-gray-700"
                                    >
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="
                                    flex items-center space-x-2 
                                    px-6 py-3 bg-blue-600 text-white 
                                    rounded-xl hover:bg-blue-700 
                                    transition-colors group
                                "
                            >
                                <span>Learn More</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>
                        <motion.div
                            className={`
                                bg-gradient-to-br ${service.gradient} 
                                rounded-2xl p-4 relative overflow-hidden
                            `}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                ))}

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="
        text-center bg-gradient-to-r from-blue-600 to-purple-600 
        text-white rounded-3xl p-16 relative overflow-hidden
    "
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-20 -z-10 animate-pulse"></div>
                    <Award className="w-16 h-16 mx-auto mb-6 text-white/80" />
                    <h2 className="text-4xl font-bold mb-6 relative z-10">Bespoke Digital Strategies</h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8 relative z-10">
                        Your brand deserves more than generic solutions. We craft precision-engineered digital strategies
                        that are as unique as your business, driving transformative results.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="
            px-12 py-4 bg-white text-blue-600 
            rounded-xl text-lg font-semibold 
            shadow-2xl hover:shadow-3xl 
            transition-all group relative z-10
        "
                    >
                        <span className="flex items-center space-x-2">
                            <span>Start Your Journey</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
}