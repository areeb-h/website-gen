'use client';

import { Linkedin, Instagram, Twitter } from 'lucide-react';

const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/oceloptic' },
    { icon: Instagram, href: 'https://instagram.com/oceloptic' },
    { icon: Twitter, href: 'https://twitter.com/oceloptic' },
];

export default function SocialLinks() {
    return (
        <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.href}
                    className="p-2 rounded-lg text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <social.icon className="w-5 h-5" />
                </a>
            ))}
        </div>
    );
}
