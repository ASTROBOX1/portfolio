import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className={`fixed top-0 left-0 w-full z-overlay border-b transition-all duration-500 ${
                scrolled 
                ? 'py-4 glass border-white-mini' 
                : 'py-8 border-transparent'
            }`}
        >
            <div className="nav-container">
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold heading text-gradient cursor-pointer"
                >
                    MS.
                </motion.div>

                <ul className="nav-links group">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a 
                                href={link.href}
                                className="nav-link text-muted hover:text-white transition-colors uppercase tracking-widest relative"
                            >
                                {link.name}
                                <motion.span 
                                    className="absolute -bottom-1 left-0 w-0 h-pixel bg-primary-accent"
                                    whileHover={{ width: '100%' }}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};


export default Navbar;
