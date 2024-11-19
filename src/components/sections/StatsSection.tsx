import React from 'react';
import { TrendingUp, Users, Award } from 'lucide-react';

const StatsSection = () => {
    const stats = [
        {
            number: "1500+",
            label: "Students Impacted",
            icon: Users,
            color: "bg-blue-100",
            textColor: "text-blue-600",
            borderColor: "border-blue-200"
        },
        {
            number: "100%",
            label: "Pass Rate",
            icon: TrendingUp,
            color: "bg-emerald-100",
            textColor: "text-emerald-600",
            borderColor: "border-emerald-200"
        },
        {
            number: "13",
            label: "Years of Excellence",
            icon: Award,
            color: "bg-indigo-100",
            textColor: "text-indigo-600",
            borderColor: "border-indigo-200"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className={`relative overflow-hidden ${stat.color} border ${stat.borderColor} rounded-xl p-8`}
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center justify-center mb-4">
                                        <Icon className={`w-8 h-8 ${stat.textColor}`} />
                                    </div>
                                    <div className={`text-5xl font-bold ${stat.textColor} mb-2 text-center`}>
                                        {stat.number}
                                    </div>
                                    <div className="text-sm font-medium text-gray-600 text-center uppercase tracking-wide">
                                        {stat.label}
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
