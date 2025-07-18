"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

type Logo = {
    image: {
        url: string;
    };
    altText: string;
};

const localTechLogos: Logo[] = [
    // Logo yang sudah ada
    { image: { url: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF' }, altText: 'Next.js' },
    { image: { url: 'https://cdn.simpleicons.org/react/61DAFB' }, altText: 'React' },
    { image: { url: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' }, altText: 'Tailwind CSS' },
    { image: { url: 'https://cdn.simpleicons.org/typescript/3178C6' }, altText: 'TypeScript' },
    { image: { url: 'https://cdn.simpleicons.org/nodedotjs/339933' }, altText: 'Node.js' },
    { image: { url: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' }, altText: 'Vue.js' },
    { image: { url: 'https://cdn.simpleicons.org/graphql/E10098' }, altText: 'GraphQL' },
    { image: { url: 'https://cdn.simpleicons.org/docker/2496ED' }, altText: 'Docker' },
    { image: { url: 'https://cdn.simpleicons.org/git/F05032' }, altText: 'Git' },
    { image: { url: 'https://cdn.simpleicons.org/figma/F24E1E' }, altText: 'Figma' },
    { image: { url: 'https://cdn.simpleicons.org/go/00ADD8' }, altText: 'Go' },
    { image: { url: 'https://cdn.simpleicons.org/nestjs/E0234E' }, altText: 'NestJS' },
    { image: { url: 'https://cdn.simpleicons.org/laravel/FF2D20' }, altText: 'Laravel' },
    { image: { url: 'https://cdn.simpleicons.org/codeigniter/EF4223' }, altText: 'CodeIgniter' },
    { image: { url: 'https://cdn.simpleicons.org/openjdk/FFFFFF?style=for-the-badge' }, altText: 'Java' },
    { image: { url: 'https://cdn.simpleicons.org/kotlin/7F52FF' }, altText: 'Kotlin' },
    { image: { url: 'https://cdn.simpleicons.org/flutter/02569B' }, altText: 'Flutter' },
    { image: { url: 'https://cdn.simpleicons.org/dart/0175C2' }, altText: 'Dart' },
    { image: { url: `data:image/svg+xml,%3csvg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eNuxt.js%3c/title%3e%3cpath d='M7.87,1.72,12,9.59,16.13,1.72H20.3L12,14.31,3.7,1.72ZM12,14.31,3.7,1.72H7.87L12,9.59,16.13,1.72h4.17L12,14.31,3.7,1.72H.55L12,22.28,23.45,1.72h-3.15L12,14.31Z' fill='white'/%3e%3c/svg%3e` }, altText: 'Nuxt.js' },
    { image: { url: 'https://cdn.simpleicons.org/sentry/FB4226' }, altText: 'Sentry' },
    { image: { url: 'https://cdn.simpleicons.org/postgresql/4169E1' }, altText: 'PostgreSQL' },
    { image: { url: 'https://cdn.simpleicons.org/mysql/4479A1' }, altText: 'MySQL' },
    { image: { url: 'https://cdn.simpleicons.org/express/FFFFFF' }, altText: 'Express' },
];

const TechSlider = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const duplicatedLogos = [...localTechLogos, ...localTechLogos, ...localTechLogos];

    useEffect(() => {
        if (!sliderRef.current) return;

        const slider = sliderRef.current;
        const singleSetWidth = slider.scrollWidth / 3;
        
        const tween = gsap.to(slider, {
            x: -singleSetWidth,
            duration: 50,
            ease: 'none',
            repeat: -1,
        });

        const pauseAnimation = () => tween.pause();
        const playAnimation = () => tween.play();

        slider.addEventListener('mouseenter', pauseAnimation);
        slider.addEventListener('mouseleave', playAnimation);

        return () => {
            tween.kill();
            slider.removeEventListener('mouseenter', pauseAnimation);
            slider.removeEventListener('mouseleave', playAnimation);
        };
    }, []); 

    return (
        <section id="tech-stack-section" className="flex flex-col items-center justify-center py-16">
            <div className="w-full overflow-hidden bg-transparent relative">
                <div ref={sliderRef} className="flex items-center">
                    {duplicatedLogos.map((logo, index) => (
                        <div key={`${logo.altText}-${index}`} className="flex-shrink-0 mx-8 py-8">
                            <Image
                                src={logo.image.url}
                                alt={logo.altText}
                                width={126}
                                height={64}
                                className="h-12 w-auto object-contain sm:h-16 transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none"></div>
            </div>
        </section>
    );
};

export default TechSlider;
