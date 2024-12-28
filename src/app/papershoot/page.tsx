'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ArrowRightCircle } from 'lucide-react';

export default function PapershootGallery() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const galleryItems = [
        {
            title: "Papershoot Whole Set",
            category: "Camera",
            image: "/papershoot/products/1.jpeg?height=400&width=400",
        },
        {
            title: "Papershoot Camera",
            category: "Camera",
            image: "/papershoot/products/2.jpeg?height=400&width=400",
        },
        {
            title: "Paper Case",
            category: "Accessory",
            image: "/papershoot/products/3.jpeg?height=400&width=400",
        },
        {
            title: "Paper Case",
            category: "Accessory",
            image: "/papershoot/products/4.jpeg?height=400&width=400",
        },
        {
            title: "Paper Case",
            category: "Accessory",
            image: "/papershoot/products/5.jpeg?height=400&width=400",
        },
        {
            title: "Paper Case",
            category: "Accessory",
            image: "/papershoot/products/6.jpeg?height=400&width=400",
        },
        {
            title: "Paper Case",
            category: "Accessory",
            image: "/papershoot/products/7.jpeg?height=400&width=400",
        },
        {
            title: "Paper Case",
            category: "Accessory",
            image: "/papershoot/products/8.jpeg?height=400&width=400",
        }
    ];

    const sampleImages = [
        { url: "/papershoot/samples/1.jpeg?height=600&width=800", caption: "Urban Landscape" },
        { url: "/papershoot/samples/3.jpeg?height=600&width=800", caption: "Street Photography" },
        { url: "/papershoot/samples/4.jpeg?height=600&width=800", caption: "Architectural Details" },
        { url: "/papershoot/samples/5.jpeg?height=600&width=800", caption: "Architectural Details" },
        { url: "/papershoot/samples/6.jpeg?height=600&width=800", caption: "Cityscape" },
        { url: "/papershoot/samples/8.jpeg?height=600&width=800", caption: "Architectural Details" },
        { url: "/papershoot/samples/9.jpeg?height=600&width=800", caption: "Architectural Details" },
        { url: "/papershoot/samples/10.jpeg?height=600&width=800", caption: "Sunset" },
        { url: "/papershoot/samples/11.jpeg?height=600&width=800", caption: "Portrait" },
        { url: "/papershoot/samples/12.jpeg?height=600&width=800", caption: "Macro Photography" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sampleImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + sampleImages.length) % sampleImages.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextImage();
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gray-100  py-16 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-4 py-16 text-center"
            >
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-pink-600 mb-6">
                    Papershoot Gallery
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                    Explore our unique cameras, accessories, and the stunning photos they capture
                </p>
            </motion.div>

            {/* Sample Images Carousel */}
            <div className="container mx-auto px-4 mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Captured with Papershoot</h2>
                <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video">
                    <AnimatePresence initial={false} custom={currentImageIndex}>
                        <motion.div
                            key={currentImageIndex}
                            custom={currentImageIndex}
                            initial={{ opacity: 0, x: 300 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -300 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={sampleImages[currentImageIndex].url}
                                alt={sampleImages[currentImageIndex].caption}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                <p className="text-white text-xl font-semibold">{sampleImages[currentImageIndex].caption}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
                        aria-label="Previous image"
                    >
                        <ArrowLeft className="w-6 h-6 text-gray-800" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
                        aria-label="Next image"
                    >
                        <ArrowRight className="w-6 h-6 text-gray-800" />
                    </button>
                </div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-4 mb-16"
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white rounded-lg shadow-lg overflow-hidden group"
                        >
                            <div className="relative aspect-square">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                    <ArrowRightCircle className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 mb-16"
            >
                <div className="bg-gradient-to-r from-amber-600 to-pink-600 text-white rounded-xl p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Find Your Perfect Papershoot</h2>
                    <p className="text-xl mb-6">
                        Discover the full range of Papershoot cameras and accessories
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 bg-white text-amber-600 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all"
                    >
                        <span>Explore All Products</span>
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.button>
                </div>
            </motion.div> */}
        </div>
    );
}

