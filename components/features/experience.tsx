"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { CardBody, CardContainer, CardItem } from '../ui/3D-card';

gsap.registerPlugin(ScrollTrigger);

// Type definition remains the same
type ExperienceItem = {
    date: string;
    role: string;
    company: string;
    description: string[];
    alignment: 'left' | 'right';
    labels: string[];
    imageUrl?: string;
};

// Experience data remains the same
const experiences: ExperienceItem[] = [
    {
        date: 'Februari 2025 - Present',
        role: 'Frontend Engineer',
        company: 'cmlabs',
        description: [
            'Built reusable components and pages using React.js and Next.js for 4 projects.',
            'Translated Figma/design mockups into pixel-perfect, responsive interfaces with Tailwind CSS.',
            'Enhanced Core Web Vitals (LCP, FID, CLS) for SEO-critical pages.',
        ],
        alignment: 'right',
        labels: ['React.js', 'Next.js', 'Tailwind CSS', 'Core Web Vitals', 'SEO', 'Frontend'],
        imageUrl: 'https://placehold.co/600x400/1a202c/94a3b8?text=cmlabs+Project',
    },
    {
        date: 'Desember 2024 - Januari 2025',
        role: 'AI/ Machine Learning',
        company: 'Brainwave Matrix Solutions',
        description: [
            'Researched and implemented state-of-the-art ML algorithms.',
            'Preprocessed and analyzed large datasets using Pandas and Numpy.',
            'Developed and optimized neural network models using TensorFlow and PyTorch.',
        ],
        alignment: 'left',
        labels: ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'Numpy', 'Machine Learning'],
        imageUrl: 'https://placehold.co/600x400/1a202c/94a3b8?text=AI/ML+Project',
    },
    {
        date: 'September 2024 - November 2024',
        role: 'Full-stack Developer',
        company: 'Pekerja Lepas',
        description: [
            'Developed a database management system for investment licensing for the East Java Provincial Government.',
            'Architected and implemented a full-stack solution using Laravel.',
            'Automated over 86% of manual licensing processes.',
        ],
        alignment: 'right',
        labels: ['Laravel', 'PHP', 'MySQL', 'Full-stack', 'Government Tech'],
        imageUrl: 'https://placehold.co/600x400/1a202c/94a3b8?text=Gov+Licensing+System',
    },
    {
        date: 'Juni 2024 - Agustus 2024',
        role: 'Android Developer',
        company: 'Pekerja Lepas',
        description: [
            'Developed a native Android application using Flutter for real-time attendance management.',
            'Implemented secure API integration with an existing Laravel backend.',
            'Reduced attendance processing time by over 90% through QR code scanning.',
        ],
        alignment: 'left',
        labels: ['Flutter', 'Dart', 'Android', 'API Integration', 'Mobile Development'],
        imageUrl: 'https://placehold.co/600x400/1a202c/94a3b8?text=ASIK+8+Android+App',
    },
    {
        date: 'Maret 2024 - Mei 2024',
        role: 'Full-stack Developer',
        company: 'Pekerja Lepas',
        description: [
            'Led full-stack development of a school management platform (ASIK 8) using Laravel.',
            'Designed responsive UI/UX with role-based dashboards for admins, teachers, and students.',
            'Built key modules covering 90% of school administrative needs.',
        ],
        alignment: 'right',
        labels: ['Laravel', 'PHP', 'Full-stack', 'UI/UX', 'EdTech'],
        imageUrl: 'https://placehold.co/600x400/1a202c/94a3b8?text=ASIK+8+Web+Platform',
    },
    {
        date: 'Juli 2023 - Desember 2023',
        role: 'Intern Programmer Division',
        company: 'CV Hummasoft Komputindo',
        description: [
            'Developed and maintained backend systems for web applications using Laravel.',
            'Assisted in Android app development using Flutter.',
            'Successfully built Website Play Music (MusiCave) and Management Operational Team Base On Office (HummaTask).',
        ],
        alignment: 'left',
        labels: ['Laravel', 'Flutter', 'PHP', 'Dart', 'Collaboration'],
        imageUrl: 'https://placehold.co/600x400/1a202c/94a3b8?text=Hummasoft+Projects',
    },
];

// The MacbookFrame component remains the same
const MacbookFrame = ({ imageUrl, altText }: { imageUrl: string; altText: string }) => {
    return (
        <div className="mt-5 rounded-lg border border-gray-700/50 bg-gray-900/50 p-2 shadow-2xl shadow-black/30">
            <div className="mb-2 flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="overflow-hidden rounded-b-md">
                <img
                    src={imageUrl}
                    alt={altText}
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    );
};

// ## Refactored `ExperienceCard` for Responsiveness
const ExperienceCard = ({ item, isMobile }: { item: ExperienceItem, isMobile: boolean }) => {
    // On mobile, force alignment to the right for a consistent single-column layout
    const alignment = isMobile ? 'right' : item.alignment;

    const cardContent = (
        <CardContainer containerClassName="py-0">
            <CardBody className="bg-gray-800/40 backdrop-blur-lg w-auto h-auto rounded-lg shadow-lg border border-gray-700/50 p-6 relative group/card">
                <CardItem translateZ="50" className="text-sm text-gray-400 mb-1">{item.date}</CardItem>
                <CardItem translateZ="60" className="text-xl font-bold text-white">{item.role}</CardItem>
                <CardItem translateZ="55" className="text-md text-gray-300 mb-4">{item.company}</CardItem>
                
                <CardItem translateZ="40">
                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                        {item.description.map((point, index) => <li key={index}>{point}</li>)}
                    </ul>
                </CardItem>

                <CardItem translateZ="30">
                    <div className="mt-4 flex flex-wrap gap-2">
                        {item.labels.map((label, index) => (
                            <span key={index} className="bg-blue-900/60 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
                                {label}
                            </span>
                        ))}
                    </div>
                </CardItem>
                
                {item.imageUrl && (
                    <CardItem translateZ="20" className="w-full">
                        <MacbookFrame imageUrl={item.imageUrl} altText={`Project image for ${item.company}`} />
                    </CardItem>
                )}
            </CardBody>
        </CardContainer>
    );

    return (
        // The main container is now responsive
        <div className="flex justify-between items-start w-full experience-card">
            {/* Left Pane: Shows only on larger screens if alignment is 'left' */}
            <div className="hidden md:block md:w-5/12">
                {alignment === 'left' && cardContent}
            </div>
            
            {/* Timeline Centerpiece */}
            <div className="relative w-full md:w-1/12 flex justify-center">
                <div className="h-4 w-4 bg-white rounded-full z-10 timeline-circle"></div>
                {/* The vertical line is now part of the parent grid, not here. */}
            </div>

            {/* Right Pane: Shows for 'right' alignment on desktop, and for ALL cards on mobile */}
            <div className="w-full md:w-5/12">
                 {alignment === 'right' && cardContent}
            </div>
        </div>
    );
};

// ## Refactored `Experience` Component
const Experience = () => {
    const sectionRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const visibleExperiences = isExpanded ? experiences : experiences.slice(0, 3);

    // Effect for checking screen size
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    // Effect for GSAP animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".timeline-circle", {
                scale: 1.5,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                stagger: 0.3
            });

            const cards = gsap.utils.toArray('.experience-card');
            cards.forEach((card: any) => {
                // Determine animation direction based on screen size and alignment
                const isRightAligned = card.children[2]?.children.length > 0;
                
                gsap.from(card, {
                    opacity: 0,
                    // On mobile (single column), all cards slide in from the right
                    // On desktop, they slide from left or right based on alignment
                    x: isMobile ? 100 : (isRightAligned ? 100 : -100),
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    },
                });
            });

            ScrollTrigger.refresh();

        }, sectionRef);

        return () => ctx.revert();
    }, [isExpanded, isMobile]);

    return (
        <section ref={sectionRef} className="text-white py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">WHAT I HAVE DONE SO FAR</p>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">Work Experiences</h2>
                </div>

                {/* The main timeline container */}
                <div className="relative">
                    {/* The vertical timeline bar, now hidden on mobile */}
                    <div className="absolute left-1/2 h-full w-0.5 bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>
                    
                    {/* The container for the experience cards */}
                    <div className="space-y-8 md:space-y-16">
                        {visibleExperiences.map((exp, index) => (
                            <ExperienceCard key={index} item={exp} isMobile={isMobile} />
                        ))}
                    </div>
                </div>

                {experiences.length > 3 && (
                    <div className="text-center mt-16">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="bg-gray-800/60 backdrop-blur-lg text-white font-semibold py-3 px-8 rounded-lg border border-gray-700/50 hover:bg-gray-700/60 transition-all duration-300"
                        >
                            {isExpanded ? 'View Less' : 'View More'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;