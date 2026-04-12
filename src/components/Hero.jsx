import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Mesh Background */}
            <div className="mesh-bg">
                <div className="mesh-circle mesh-1"></div>
                <div className="mesh-circle mesh-2"></div>
            </div>

            <div className="hero-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block px-4 py-mini mb-6 glass rounded-full border-white-soft"
                >
                    <span className="text-micro font-medium tracking-widest text-primary-accent uppercase">
                        Architecting the Future of Intelligence
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="text-7xl md:text-9xl font-bold heading leading-tightest mb-8"
                >
                    MOHAMED <br />
                    <span className="text-gradient">SAYED</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-muted font-light leading-relaxed mb-12"
                >
                    Data Science & AI Engineer specializing in high-impact machine learning solutions, from healthcare diagnostics to predictive analytics.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <a href="#projects" className="btn-premium primary">
                        Explore Research Work
                    </a>
                    <a href="#contact" className="btn-premium secondary">
                        Get In Touch
                    </a>
                </motion.div>
            </div>
        </section>
    );
};


export default Hero;
