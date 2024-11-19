'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, Zap, Lightbulb, BarChart } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
    { name: 'Home', href: '/', icon: Zap },
    { name: 'Services', href: '/services', icon: Lightbulb },
    { name: 'About', href: '/about', icon: BarChart },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isHomePage = pathname === '/'

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
            <div className="max-w-7xl mx-auto px-4 /sm:px-6 /lg:px-8">
                <motion.nav
                    className={`flex justify-between items-center border-white/10 rounded-full transition-all duration-300`}
                    layout
                >
                    <Link href="/"
                        className={`flex justify-between items-center border-white/10 /p-2 rounded-full transition-all duration-300 ${scrolled
                            ? 'bg-white shadow-xl border'
                            : (isHomePage
                                ? 'backdrop-blur-md bg-transparent border'
                                : 'bg-white shadow-xl border')
                            }`}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${scrolled
                                ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white'
                                : (isHomePage
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                                    : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white')
                                } px-4 py-2 rounded-full`}
                        >
                            <span className="text-xl font-bold">Oceloptic</span>
                        </motion.div>
                    </Link>

                    <div className={`hidden md:flex items-center space-x-1 border-white/10 p-2 rounded-full transition-all duration-300 ${scrolled
                        ? 'bg-white shadow-xl border'
                        : (isHomePage
                            ? 'backdrop-blur-md bg-transparent border'
                            : 'bg-white shadow-xl border')
                        }`}
                    >
                        {navLinks.map((link) => (
                            <motion.div key={link.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href={link.href}
                                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${scrolled
                                        ? (pathname === link.href
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-600 hover:bg-gray-100')
                                        : (isHomePage
                                            ? (pathname === link.href
                                                ? 'bg-white/10 text-white'
                                                : 'text-white/70 hover:bg-white/10 hover:text-white')
                                            : (pathname === link.href
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-600 hover:bg-gray-100'))
                                        }`}
                                >
                                    <link.icon className={`w-4 h-4 mr-2 ${scrolled
                                        ? 'text-gray-600'
                                        : (isHomePage ? 'text-white/70' : 'text-gray-600')}`}
                                    />
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/contact"
                                className={`mx-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${scrolled
                                    ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl'
                                    : (isHomePage
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-2xl hover:shadow-xl'
                                        : 'bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl')
                                    }`}
                            >
                                Let's Create!
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile menu button remains the same */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`md:hidden mr-4 rounded-full p-2 transition-all duration-200 ${scrolled
                            ? 'text-gray-600 hover:bg-gray-100'
                            : (isHomePage ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100')
                            }`}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </motion.button>
                </motion.nav>

                {/* Mobile menu remains largely the same */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden absolute left-4 right-4 top-full mt-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.div
                                className={`${scrolled
                                    ? 'bg-white border shadow-xl'
                                    : (isHomePage
                                        ? 'bg-black/80 backdrop-blur-xl border border-white/10'
                                        : 'bg-white border shadow-xl')
                                    } rounded-2xl overflow-hidden`}
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* Mobile menu items remain the same */}
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-all duration-200 ${scrolled
                                            ? (pathname === link.href
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-600 hover:bg-gray-100')
                                            : (isHomePage
                                                ? (pathname === link.href
                                                    ? 'bg-white/10 text-white'
                                                    : 'text-white/70 hover:bg-white/10 hover:text-white')
                                                : (pathname === link.href
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-600 hover:bg-gray-100'))
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <link.icon className={`h-5 w-5 ${scrolled
                                            ? 'text-gray-600'
                                            : (isHomePage ? 'text-white/70' : 'text-gray-600')}`}
                                        />
                                        <span>{link.name}</span>
                                    </Link>
                                ))}
                                <Link
                                    href="/contact"
                                    className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-all duration-200 ${scrolled
                                        ? 'bg-gray-900 text-white'
                                        : (isHomePage
                                            ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                                            : 'bg-gray-900 text-white')
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <ChevronRight className="h-5 w-5" />
                                    <span>Let's Create!</span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}