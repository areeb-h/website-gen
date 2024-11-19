'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    // { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname(); // Get the current pathname

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                setScrolled(window.scrollY > window.innerHeight * 0.8)
            }
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 ${scrolled ? '/py-0' : '/py-5'}`}
            initial={pathname === '/' ? { y: -100 } : { y: 0 }}
            animate={{ y: 0 }}
        // transition={pathname === '/' ? {
        //     type: 'spring',
        //     stiffness: 100,
        //     damping: 30
        // } : undefined}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className={`flex justify-between items-center pr-3 backdrop-blur-xl ${scrolled ? 'bg-white/90 /shadow-lg /rounded-b-2xl rounded-2xl' : 'bg-white/50 rounded-2xl'
                        }`}
                    layout
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`bg-gradient-to-r from-blue-500 to-teal-500 px-4 p-3 ${scrolled ? '/rounded-b-2xl rounded-2xl' : 'rounded-2xl'
                                }`}
                        >
                            <span className="text-2xl font-bold text-white">Oceloptic</span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-4">
                        {navLinks.map((link) => (
                            <motion.div
                                key={link.href}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center"
                            >
                                <Link
                                    href={link.href}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${pathname === link.href
                                        ? 'bg-black/5 text-black'
                                        : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="ml-2 px-6 py-2 rounded-xl text-sm font-medium bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                                Let&apos;s Talk!
                            </motion.button>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </motion.button>
                </motion.div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden absolute left-0 right-0 top-full mt-2 px-4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                        >
                            <motion.div
                                className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden"
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                            >
                                {navLinks.map((link) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium ${pathname === link.href
                                                ? 'bg-gray-50 text-blue-600'
                                                : 'text-gray-600 hover:bg-gray-50'
                                                }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                            <span>{link.name}</span>
                                        </Link>
                                    </motion.div>
                                ))}
                                {/* Add Let's Talk button */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                                >
                                    <Link
                                        href="/contact"
                                        className="flex items-center space-x-2 px-4 py-3 text-sm font-medium 
        bg-gradient-to-r from-blue-500 to-teal-500 
        text-white rounded-xl 
        hover:from-blue-600 hover:to-teal-600 
        transition-all duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <ChevronRight className="h-4 w-4" />
                                        <span>Let&apos;s Talk!</span>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
