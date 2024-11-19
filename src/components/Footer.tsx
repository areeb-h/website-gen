'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Twitter, LinkedinIcon as LinkedIn, Facebook } from 'lucide-react';
import Link from 'next/link';

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-gray-400 hover:text-gray-500 transition-colors"
        aria-label={label}
    >
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
    </motion.a>
);

const Footer = () => {
    const socialLinks = [
        { href: '#', icon: Facebook, label: 'Facebook' },
        { href: '#', icon: Instagram, label: 'Instagram' },
        { href: '#', icon: Twitter, label: 'Twitter' },
        { href: '#', icon: LinkedIn, label: 'LinkedIn' },
    ];

    const solutions = ['Digital Marketing', 'Branding', 'Web Design', 'Social Media'];
    const company = ['About', 'Services', 'Contact'];

    return (
        <footer className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Overview */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href="/" className="inline-block">
                                <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                                    <span className="text-base sm:text-xl font-bold">Oceloptic Network</span>
                                </div>
                            </Link>
                            <p className="mt-3 text-sm sm:text-base text-gray-500">
                                Transforming brands through innovative digital strategies and creative solutions.
                            </p>
                        </motion.div>
                        <motion.div
                            className="flex space-x-4 sm:space-x-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {socialLinks.map(({ href, icon, label }) => (
                                <SocialLink key={label} href={href} icon={icon} label={label} />
                            ))}
                        </motion.div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-6 md:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FooterLinks title="Solutions" links={solutions} />
                            <FooterLinks title="Company" links={company} />
                        </div>
                        <ContactInfo />
                    </div>
                </div>

                {/* Footer Bottom */}
                <motion.div
                    className="mt-8 sm:mt-12 border-t border-gray-200 pt-6 sm:pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <p className="text-xs sm:text-base text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} Oceloptic Network Pvt Ltd. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

const FooterLinks = ({ title, links }: { title: string; links: string[] }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <h3 className="text-xs sm:text-sm font-semibold text-gray-400 tracking-wider uppercase">{title}</h3>
        <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-4">
            {links.map((link) => (
                <li key={link}>
                    <Link href="#" className="text-xs sm:text-base text-gray-500 hover:text-gray-900">
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
    </motion.div>
);

const ContactInfo = () => (
    <div>
        <h3 className="text-xs sm:text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
        <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-4">
            <li className="flex items-start">
                <MapPin className="flex-shrink-0 h-4 w-4 sm:h-6 sm:w-6 text-gray-400 mt-1" aria-hidden="true" />
                <span className="ml-2 sm:ml-3 text-xs sm:text-base text-gray-500">
                    Ma. Perihelion, Ameenee Magu, Male&apos;, Maldives
                </span>
            </li>
            <li className="flex items-center">
                <Phone className="flex-shrink-0 h-4 w-4 sm:h-6 sm:w-6 text-gray-400" aria-hidden="true" />
                <span className="ml-2 sm:ml-3 text-xs sm:text-base text-gray-500">(960) 925 925 4</span>
            </li>
            <li className="flex items-center">
                <Mail className="flex-shrink-0 h-4 w-4 sm:h-6 sm:w-6 text-gray-400" aria-hidden="true" />
                <span className="ml-2 sm:ml-3 text-xs sm:text-base text-gray-500 break-words">
                    connect@ocelopticnetwork.com
                </span>
            </li>
        </ul>
    </div>
);

export default Footer;