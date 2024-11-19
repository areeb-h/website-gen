'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Rocket, CodeIcon, Award, ArrowRight, CheckCircle
} from 'lucide-react';

export default function Projects() {
    const projectDetails = [
        {
            icon: Rocket,
            title: "Global E-Commerce Transformation",
            category: "Retail Strategy",
            description: "Comprehensive digital overhaul for an international retail brand, increasing online sales by 250%.",
            technologies: ["React", "AI Analytics", "Cloud Infrastructure"],
            image: "https://images.unsplash.com/photo-1556761175-4b46a3fb44de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            gradient: "from-blue-100 to-indigo-200"
        },
        {
            icon: CodeIcon,
            title: "SaaS Marketing Acceleration",
            category: "Technology Marketing",
            description: "Multi-channel digital marketing strategy that drove 180% growth in customer acquisition for a tech startup.",
            technologies: ["Digital Advertising", "SEO", "Content Marketing"],
            image: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80",
            gradient: "from-teal-100 to-cyan-200"
        },
        {
            icon: Award,
            title: "Healthcare Digital Branding",
            category: "Healthcare Innovation",
            description: "Developed a cohesive digital brand strategy that enhanced patient engagement and trust.",
            technologies: ["UX Design", "Social Media Marketing", "Data Visualization"],
            image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8610?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
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
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-4 py-16 text-center"
            >
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                    Our Digital Success Stories
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Transformative projects that showcase our commitment to innovation, strategic thinking, and exceptional results.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-4 space-y-16"
            >
                {projectDetails.map((project, index) => (
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
                                <project.icon className="w-16 h-16 text-blue-500" />
                                <h3 className="text-4xl font-bold text-gray-900">{project.title}</h3>
                            </div>
                            <p className="text-lg text-gray-600 italic">{project.category}</p>
                            <p className="text-lg text-gray-700">{project.description}</p>
                            <div className="space-y-3">
                                <h4 className="text-xl font-semibold text-gray-800">Technologies Used</h4>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
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
                                <span>View Case Study</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>
                        <motion.div
                            className={`
                                bg-gradient-to-br ${project.gradient} 
                                rounded-2xl p-4 relative overflow-hidden
                            `}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={project.image}
                                    alt={project.title}
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
                    <CheckCircle className="w-16 h-16 mx-auto mb-6 text-white/80" />
                    <h2 className="text-4xl font-bold mb-6 relative z-10">Ready to Transform Your Digital Landscape?</h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8 relative z-10">
                        Every project is a unique journey of innovation, strategy, and measurable impact. Let&apos;s write your success story together.
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
                            <span>Start Your Project</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
}