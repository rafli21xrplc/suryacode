"use client";

import React, { useState, useMemo } from 'react';

type Category = 'Frontend' | 'Full-stack' | 'AI' | 'Mobile';
const categories: Category[] = ['Frontend', 'Full-stack', 'AI', 'Mobile'];

interface ExperienceItem {
    id: string;
    category: Category;
    role: string;
    company: string;
    date: string;
    description: string[];
    labels: string[];
    imageUrl: string;
}

const experiences: ExperienceItem[] = [
    {
        id: 'cmlabs-frontend',
        category: 'Frontend',
        date: 'Februari 2025 - Present',
        role: 'Frontend Engineer',
        company: 'cmlabs',
        description: [
            'Built reusable components and pages using React.js and Next.js.',
            'Translated Figma mockups into pixel-perfect, responsive interfaces.',
            'Enhanced Core Web Vitals (LCP, FID, CLS) for SEO.',
        ],
        labels: ['React.js', 'Next.js', 'Tailwind CSS', 'Core Web Vitals', 'SEO'],
        imageUrl: 'https://placehold.co/800x600/1e40af/ffffff?text=Frontend+Project',
    },
    {
        id: 'brainwave-ai',
        category: 'AI',
        date: 'Desember 2024 - Januari 2025',
        role: 'AI/Machine Learning',
        company: 'Brainwave Matrix Solutions',
        description: [
            'Researched and implemented state-of-the-art ML algorithms.',
            'Preprocessed and analyzed large datasets using Pandas and Numpy.',
            'Developed and optimized neural network models.',
        ],
        labels: ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'Numpy'],
        imageUrl: 'https://placehold.co/800x600/6d28d9/ffffff?text=AI/ML+Project',
    },
    {
        id: 'gov-fullstack',
        category: 'Full-stack',
        date: 'September 2024 - November 2024',
        role: 'Full-stack Developer',
        company: 'Freelance',
        description: [
            'Developed a licensing management system for the East Java Gov.',
            'Architected and implemented a full-stack solution using Laravel.',
            'Automated over 86% of manual licensing processes.',
        ],
        labels: ['Laravel', 'PHP', 'MySQL', 'Full-stack', 'Gov-Tech'],
        imageUrl: 'https://placehold.co/800x600/be123c/ffffff?text=Gov+System',
    },
    {
        id: 'asik8-mobile',
        category: 'Mobile',
        date: 'Juni 2024 - Agustus 2024',
        role: 'Android Developer',
        company: 'Freelance',
        description: [
            'Developed a native Android app using Flutter for attendance.',
            'Implemented secure API integration with a Laravel backend.',
            'Reduced processing time by over 90% via QR code scanning.',
        ],
        labels: ['Flutter', 'Dart', 'Android', 'API Integration', 'Mobile'],
        imageUrl: 'https://placehold.co/800x600/047857/ffffff?text=Mobile+App',
    },
    {
        id: 'asik8-fullstack',
        category: 'Full-stack',
        date: 'Maret 2024 - Mei 2024',
        role: 'Full-stack Developer',
        company: 'Freelance',
        description: [
            'Led development of a school management platform (ASIK 8).',
            'Designed responsive UI/UX with role-based dashboards.',
            'Built key modules covering 90% of school administrative needs.',
        ],
        labels: ['Laravel', 'PHP', 'Full-stack', 'UI/UX', 'EdTech'],
        imageUrl: 'https://placehold.co/800x600/b45309/ffffff?text=EdTech+Platform',
    },
    {
        id: 'hummasoft-intern',
        category: 'Full-stack',
        date: 'Juli 2023 - Desember 2023',
        role: 'Intern Programmer',
        company: 'CV Hummasoft Komputindo',
        description: [
            'Developed and maintained backend systems using Laravel.',
            'Assisted in Android app development using Flutter.',
            'Built MusiCave (Music) and HummaTask (Task Management) apps.',
        ],
        labels: ['Laravel', 'Flutter', 'PHP', 'Dart', 'Collaboration'],
        imageUrl: 'https://placehold.co/800x600/374151/ffffff?text=Internship+Projects',
    },
];

export const Experience = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('Frontend');

    const activeExperiences = useMemo(
        () => experiences.filter((p) => p.category === activeCategory),
        [activeCategory]
    );

    return (
    <div className="bg-gray-50 text-gray-900 font-sans flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="w-full max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12">
                <p className="text-sm text-gray-500">MY EXPERTISE</p>
                <h1 className="text-4xl md:text-5xl font-bold mt-1 text-black">
                    Portfolio by Domain
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="flex flex-col justify-between space-y-8">
                    <div className="space-y-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`flex items-center text-2xl md:text-3xl font-medium transition-all duration-300 group ${
                                    activeCategory === category
                                        ? 'text-blue-600'
                                        : 'text-gray-400 hover:text-black'
                                }`}
                            >
                                <span
                                    className={`mr-4 transition-all duration-300 ${
                                        activeCategory === category
                                            ? 'opacity-100 text-blue-600'
                                            : 'opacity-0 group-hover:opacity-100'
                                    }`}
                                >
                                    →
                                </span>
                                {category.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-y-12 md:gap-y-16">
                    {activeExperiences.length > 0 ? (
                        activeExperiences.map((item) => (
                            <div key={item.id} className="flex flex-col gap-8">
                                <div className="relative w-full h-80 rounded-lg overflow-hidden flex-shrink-0 shadow-lg">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.role}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4 text-left p-2">
                                        <h2 className="text-3xl font-bold text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">{item.role}</h2>
                                        <p className="text-gray-200 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">{item.company}</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col justify-between self-stretch">
                                    <div>
                                        <div className="mb-6">
                                            <h3 className="text-sm text-gray-500 mb-3 tracking-wider uppercase">KEY CONTRIBUTIONS</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                                {item.description.map(desc => <li key={desc}>{desc}</li>)}
                                            </ul>
                                        </div>
                                        <div className="mb-6">
                                            <h3 className="text-sm text-gray-500 mb-3 tracking-wider uppercase">TECHNOLOGIES USED</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {item.labels.map((label) => (
                                                    <span
                                                        key={label}
                                                        className="text-xs text-gray-700 bg-gray-100 border border-gray-300 rounded-full py-1 px-3"
                                                    >
                                                        {label}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-sm text-gray-500 mb-2 tracking-wider uppercase">DATE</h3>
                                            <p className="font-semibold text-gray-800">{item.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No projects found in this category.</p>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};