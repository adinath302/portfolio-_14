import React from 'react'
import { BiEnvelope } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import PortfolioStore from './useStore';

const Bio = () => {
    const theme = PortfolioStore((state) => state.theme);
    return (
        <section className='px-6'>
            <div className='flex flex-col '>
                <p className={`${theme ? 'text-black ' : 'text-[#A6A6A6]'} mt-10.5 bb`}>
                    I design and build high-performance web applications with a strong focus on user experience, scalability, and clean architecture. Specializing in React and modern JavaScript, I turn complex ideas into intuitive digital products.
                    Focused on real-world problem solving, I continuously refine my craft by building production-level projects and staying aligned with industry best practices.
                    Open to collaborating with ambitious teams and startups to create meaningful, high-impact products.</p>
            </div>
        </section>
    )
}

export default Bio;

 