'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, Zap, Lightbulb, BarChart, Camera } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
    { name: 'Home', href: '/', icon: Zap },
    { name: 'Papershoot', href: '/papershoot', icon: Camera },
    { name: 'Services', href: '/services', icon: Lightbulb },
    { name: 'About', href: '/about', icon: BarChart },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

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
                        className={`flex justify-between items-center border-white/10 p-2 rounded-[27px] transition-all duration-300 ${scrolled
                            ? 'bg-white shadow-xl border'
                            : (isHomePage
                                ? 'backdrop-blur-md bg-transparent border'
                                : 'bg-white shadow-xl border')
                            }`}
                    >
                        {/* <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${scrolled
                                ? 'bg-gradient-to-r from-orange-400 to-red-400 /from-gray-800 /to-gray-900 text-white'
                                : (isHomePage
                                    ? 'bg-gradient-to-r from-orange-400 to-red-400  /from-purple-600 /to-pink-500 text-white'
                                    : 'bg-gradient-to-r from-orange-400 to-red-400 /from-gray-800 /to-gray-900 text-white')
                                } px-4 py-2 rounded-full`}
                        >
                            <span className="text-xl font-bold">Oceloptic Network</span>
                        </motion.div> */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src="/favicon.svg"
                                alt="Oceloptic Network Logo"
                                width={45}
                                height={45}
                                className="object-contain"
                            />
                        </motion.div>
                    </Link>

                    <div className={`hidden md:flex items-center space-x-2 border-white/10 p-2 rounded-[27px] /rounded-full transition-all duration-300 ${scrolled
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
                                    className={`flex items-center px-4 py-2 rounded-[17px] /rounded-full text-sm font-medium transition-all duration-200 ${scrolled
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
                                    {/* <link.icon className={`w-4 h-4 mr-2 ${scrolled
                                        ? 'text-gray-600'
                                        : (isHomePage ? 'text-white/70' : 'text-gray-600')}`}
                                    /> */}
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/contact"
                                className={`/mx-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${scrolled
                                    ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl'
                                    : (isHomePage
                                        ? 'bg-gradient-to-r from-gray-50 to-gray-100 /from-purple-600 /to-pink-500 text-gray-800 /text-white shadow-2xl hover:shadow-xl'
                                        : 'bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl')
                                    }`}
                            >
                                Let&apos;s Talk!
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile menu button remains the same */}
                    {/* <div className='md:hidden flex justify-center items-center /p-1 bg-white rounded-full '> */}

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        // className={`md:hidden /mr-4 bg-white/90 backdrop-blur-md rounded-full p-3  transition-all duration-200 text-gray-600 hover:bg-gray-100`}
                        className={`md:hidden flex justify-between items-center p-[17px] rounded-[27px] transition-all duration-300 ${scrolled
                            ? '/bg-white /shadow-xl backdrop-blur-md'
                            : (isHomePage
                                ? 'backdrop-blur-md bg-transparent text-white/50'
                                : '/bg-white /shadow-xl text-black/50')
                            }`}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                    </motion.button>
                    {/* </div> */}

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
                                        {/* <link.icon className={`h-5 w-5 ${scrolled
                                            ? 'text-gray-600'
                                            : (isHomePage ? 'text-white/70' : 'text-gray-600')}`}
                                        /> */}
                                        <span>{link.name}</span>
                                    </Link>
                                ))}
                                <Link
                                    href="/contact"
                                    className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-all duration-200 ${scrolled
                                        ? 'bg-gray-900 text-white'
                                        : (isHomePage
                                            ? 'bg-gradient-to-r from-white to-gray-100 /from-purple-600 /to-pink-500 text-black'
                                            : 'bg-gray-900 text-white')
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <ChevronRight className="h-5 w-5" />
                                    <span>Let&apos;s Talk!</span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div >
        </motion.header >
    )
}