"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const LetsTalk = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    return (
        <div className="bg-gray-50">
            <PageHeader
                title="Let's Transform Your Vision"
                subtitle="Partner with Oceloptic Network to unlock innovative digital strategies tailored to your unique business goals."
                bgGradient="from-emerald-500 to-teal-600"
            />

            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white shadow-2xl rounded-3xl p-10 border border-gray-100"
                    >
                        {!submitted ? (
                            <>
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">Start Your Project Journey</h2>
                                <p className="text-gray-600 mb-8">
                                    Share your project details, and our team will craft a custom digital solution that elevates your brand.
                                </p>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                                        />
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder="Company Name"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                                        />
                                    </div>
                                    <textarea
                                        name="message"
                                        placeholder="Describe your project goals and challenges..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center px-6 py-4 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors group"
                                    >
                                        <Send className="mr-2 w-5 h-5 group-hover:rotate-6 transition-transform" /> Send Message
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-12">
                                <Check className="mx-auto w-20 h-20 text-emerald-500 mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Received!</h3>
                                <p className="text-gray-600 mb-6">
                                    We've got your message. Our team will review and reach out soon.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="px-6 py-3 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-colors"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        )}
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Partner With Us?</h3>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start gap-3">
                                    <Check className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                                    <span>Tailored digital strategies that align with your unique business objectives</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                                    <span>Innovative solutions driven by cutting-edge technology and creative insights</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                                    <span>Collaborative approach with transparent communication and measurable results</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Details</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <MapPin className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                                    <span className="text-gray-600">123 Innovation Drive, Tech City, CA 90210</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                                    <span className="text-gray-600">(123) 456-7890</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                                    <span className="text-gray-600">hello@oceloptic.com</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LetsTalk;