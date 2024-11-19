import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="bg-gray-900 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your <span className="text-emerald-400">Business?</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-12">
                        Let's discuss how Oceloptic Network can help you unlock your brand's full potential with our innovative strategies and creative solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center px-10 py-4 bg-emerald-500 text-white rounded-lg font-bold hover:bg-emerald-600 transition-colors">
                            Book a Consultation
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                        <button className="inline-flex items-center px-10 py-4 border border-white/20 text-white rounded-lg font-bold hover:bg-white/10 transition-colors">
                            View Our Portfolio
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
