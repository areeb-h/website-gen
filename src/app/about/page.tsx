"use client"

import React from 'react';
// import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import {
    Target, Users, Globe, Rocket
} from 'lucide-react';

const About = () => {
    const teamMembers = [
        {
            name: "Akram Adeel Saeed",
            role: "Founder & Chief Executive Officer",
            description: "With 5 years of digital marketing experience, Akram leads our innovative approach to brand transformation."
        },
        // {
        //     name: "Unknown",
        //     role: "Head of Analytics",
        //     description: "An expert who turns complex metrics into actionable marketing insights."
        // },
        // {
        //     name: "Unknown",
        //     role: "Head of Analytics",
        //     description: "A data science expert who turns complex metrics into actionable marketing insights."
        // },
        // {
        //     name: "Elena Rodriguez",
        //     role: "Global Expansion Director",
        //     description: "Specializes in creating cross-cultural marketing strategies for international brands."
        // }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24">
            {/* <PageHeader
                title="About Our Agency"
                subtitle="Driving Digital Innovation Through Strategic Marketing Solutions"
            /> */}

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-4 py-16  text-center"
            >
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 mb-6">
                    About Our Agency
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Driving Digital Innovation Through Strategic Marketing Solutions
                </p>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
                <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-12 shadow-lg">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Target className="w-16 h-16 text-blue-500 mb-6" />
                        <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h3>
                        <p className="text-lg text-gray-600">
                            We empower brands to unlock their digital potential through data-driven strategies,
                            creative innovation, and a deep understanding of global market dynamics.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-12 flex items-center justify-center h-full"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="text-center">
                            <Rocket className="w-24 h-24 mx-auto text-blue-600 mb-6" />
                            <h4 className="text-2xl font-bold text-blue-900 mb-4">
                                Accelerating Growth
                            </h4>
                            <p className="text-blue-800">
                                Transforming digital challenges into strategic opportunities for business expansion
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="text-center bg-white rounded-3xl p-16 shadow-lg">
                    <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Leadership Team</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 p-8 rounded-2xl"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <Users className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                                <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                                <p className="text-blue-600 mb-4">{member.role}</p>
                                <p className="text-gray-600">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="text-center bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-3xl p-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Globe className="w-16 h-16 mx-auto mb-6 text-white/80" />
                    <h2 className="text-4xl font-bold mb-6">Our Global Approach</h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8">
                        We believe in a holistic approach to digital marketing that transcends geographical
                        boundaries and cultural differences, creating strategies that resonate globally.
                    </p>
                    <motion.button
                        className="px-12 py-4 bg-white text-blue-600 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Connect With Us
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default About;

export const metadata = {
    title: "About Us - Oceloptic Network",
    description: "Learn about Oceloptic Network, our mission, vision, and the experts behind our innovative marketing solutions.",
    openGraph: {
        title: "About Us - Oceloptic Network",
        description: "Meet the team driving innovation at Oceloptic Network and our commitment to empowering businesses.",
        url: "https://oceloptic.com/about",
        siteName: "Oceloptic Network",
        images: [
            {
                url: "https://oceloptic.com/images/about-og-image.jpg", // Replace with your actual image URL
                width: 800,
                height: 600,
                alt: "Oceloptic Network About Page",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us - Oceloptic Network",
        description: "Discover the story of Oceloptic Network and our passion for delivering results.",
        images: ["https://oceloptic.com/images/about-og-image.jpg"], // Replace with your actual image URL
    },
};
