'use client'

import { motion } from 'framer-motion'
import { Instagram, LinkedinIcon as LinkedIn, Facebook, X } from 'lucide-react'

const socialLinks = [
    { href: 'https://facebook.com/ocelopticnetwork', icon: Facebook, label: 'Facebook', color: 'text-[#1877F2]' },
    { href: 'https://instagram.com/ocelopticnetwork', icon: Instagram, label: 'Instagram', color: 'text-[#E1306C]' },
    { href: 'https://twitter.com/ocelopticnetwork', icon: X, label: 'Twitter', color: 'text-[#000000]' },
    { href: 'https://linkedin.com/company/ocelopticnetwork', icon: LinkedIn, label: 'LinkedIn', color: 'text-[#0A66C2]' },
]

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-orange-100">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 /md:grid-cols-2 gap-8">
                    {/* Contact Details */}
                    <div className="flex flex-col space-y-4 /text-center md:text-left">
                        <div>
                            <a
                                href="mailto:connect@ocelopticnetwork.com"
                                className="text-base md:text-xl border-b-4 font-bold text-orange-600 hover:text-orange-700 transition-colors"
                            >
                                connect@ocelopticnetwork.com
                            </a>
                        </div>
                        <div>
                            <a
                                href="tel:+960925925404"
                                className="text-base md:text-lg text-gray-700 hover:text-orange-600 transition-colors"
                            >
                                +960 925 925 4
                            </a>
                        </div>
                        <div>
                            <span className="text-base text-gray-700">
                                Ma. Perihelion, Ameenee Magu,
                                <br />
                                Male&apos;, Maldives
                            </span>
                        </div>



                    </div>

                    {/* Social Links */}
                    <div className="flex justify-end md:justify-end items-start">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4 bg-gray-100 w-fit rounded-full">
                            {socialLinks.map(({ href, icon: Icon, label, color }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`${color} hover:opacity-80 transition-all duration-300 flex items-center space-x-2`}
                                    aria-label={label}
                                >
                                    <Icon className="h-5 w-5" />
                                    {/* <span className="text-sm">{label}</span> */}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-orange-100 text-center text-sm text-gray-500">
                    <span className="/text-orange-500">&copy;</span> {new Date().getFullYear()} Oceloptic Network. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer