import React from 'react';
import { PenTool, Monitor, Zap, Globe, Palette, BarChart2 } from 'lucide-react';

const WhatWeOffer = () => {
    const services = [
        {
            icon: Palette,
            title: "Brand Identity Design",
            description: "Crafting unique visual identities that tell your brand's story and stand out in the market.",
            color: "text-emerald-600"
        },
        {
            icon: Monitor,
            title: "Digital Branding",
            description: "Comprehensive digital strategy and design solutions for modern businesses.",
            color: "text-blue-600"
        },
        {
            icon: BarChart2,
            title: "Business Consulting",
            description: "Strategic insights and actionable recommendations to drive business growth.",
            color: "text-purple-600"
        },
        {
            icon: Globe,
            title: "Marketing Strategy",
            description: "Data-driven marketing approaches to expand your brand's reach and impact.",
            color: "text-indigo-600"
        },
        {
            icon: Zap,
            title: "Creative Strategy",
            description: "Innovative approaches to transform your brand's positioning and perception.",
            color: "text-orange-600"
        },
        {
            icon: PenTool,
            title: "Graphic Design",
            description: "High-end design solutions across print, digital, and interactive media.",
            color: "text-pink-600"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        Our <span className="text-emerald-600">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive solutions designed to elevate your brand and drive meaningful business transformation.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all group"
                        >
                            <div className={`mb-6 ${service.color}`}>
                                <service.icon className="w-12 h-12 mx-auto group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">
                                {service.title}
                            </h3>
                            <p className="text-center text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
