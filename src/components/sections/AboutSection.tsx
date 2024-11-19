import React from 'react';
import { Zap, PenTool, Monitor, Globe, Award, ArrowUpRight } from 'lucide-react';

const AboutSection = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content Side */}
                    <div className="relative">
                        {/* Section Label */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-900/5 text-gray-900 text-sm font-medium mb-6">
                            <Globe className="w-4 h-4 mr-2" />
                            Our Vision
                        </div>

                        {/* Main Content */}
                        <h2 className="text-4xl font-bold mb-6 leading-tight">
                            Transforming Brands
                            <span className="relative ml-2 z-20">
                                Digitally
                                <div className="absolute bottom-1 -z-10 left-0 w-full h-2 bg-emerald-100 -rotate-1" />
                            </span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-8">
                            We are a creative strategy firm dedicated to elevating businesses through innovative design, strategic branding, and cutting-edge digital solutions that drive meaningful growth and impact.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            {[
                                { icon: PenTool, text: "Creative Design", desc: "Innovative visual solutions" },
                                { icon: Monitor, text: "Digital Strategy", desc: "Comprehensive brand development" },
                                { icon: Zap, text: "Brand Acceleration", desc: "Rapid market positioning" },
                                { icon: Globe, text: "Global Perspectives", desc: "International design insights" }
                            ].map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <feature.icon className="w-6 h-6 text-emerald-600 mb-3" />
                                    <h3 className="font-semibold text-gray-900 mb-1">{feature.text}</h3>
                                    <p className="text-sm text-gray-500">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Link */}
                        <a href="#" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                            Explore Our Approach
                            <ArrowUpRight className="w-4 h-4 ml-1" />
                        </a>
                    </div>

                    {/* Image Side */}
                    <div className="relative lg:h-[600px]">
                        {/* Main Image */}
                        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                                alt="Oceloptic Network Creative Studio"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                        </div>

                        {/* Stats Card */}
                        {/* <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-emerald-50 rounded-lg">
                                    <Award className="w-8 h-8 text-emerald-600" />
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">10+</p>
                                    <p className="text-sm text-gray-600">Years of Innovation</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Experience Badge */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md">
                            <p className="text-sm font-medium text-gray-900">
                                Trusted by 10+ Businesses
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
