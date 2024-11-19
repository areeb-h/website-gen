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
        <Icon className="h-6 w-6" />
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
    const company = ['About', 'Blog', 'Jobs', 'Press'];

    return (
        <footer className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Company Overview */}
                    <div className="space-y-8 xl:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href="/" className="flex items-center">
                                <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full">
                                    <span className="text-xl font-bold">Oceloptic Network</span>
                                </div>
                            </Link>
                            <p className="mt-4 text-base text-gray-500">
                                Transforming brands through innovative digital strategies and creative solutions.
                            </p>
                        </motion.div>
                        <motion.div
                            className="flex space-x-6"
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
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <FooterLinks title="Solutions" links={solutions} />
                            <FooterLinks title="Company" links={company} />
                        </div>
                        <motion.div
                            className="md:grid md:grid-cols-2 md:gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <ContactInfo />
                        </motion.div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <motion.div
                    className="mt-12 border-t border-gray-200 pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <p className="text-base text-gray-400 xl:text-center">
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
        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{title}</h3>
        <ul className="mt-4 space-y-4">
            {links.map((link) => (
                <li key={link}>
                    <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
    </motion.div>
);

const ContactInfo = () => (
    <div>
        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
        <ul className="mt-4 space-y-4">
            <li className="flex">
                <MapPin className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                <span className="ml-3 text-base text-gray-500">123 Innovation Drive, Tech City</span>
            </li>
            <li className="flex">
                <Phone className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                <span className="ml-3 text-base text-gray-500">(123) 456-7890</span>
            </li>
            <li className="flex">
                <Mail className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                <span className="ml-3 text-base text-gray-500">hello@ocelopticnetwork.com</span>
            </li>
        </ul>
    </div>
);

export default Footer;
