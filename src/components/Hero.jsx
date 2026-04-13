import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Mesh Background */}
            <div className="mesh-bg">
                <div className="mesh-circle mesh-1"></div>
                <div className="mesh-circle mesh-2"></div>
            </div>

            <div className="hero-container relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-mini mb-8 glass rounded-full border-white-soft"
                >
                    <span className="w-2 h-2 rounded-full bg-primary-accent shadow-[0_0_8px_var(--primary-accent)]"></span>
                    <span className="text-micro font-medium tracking-widest text-text-main uppercase">
                        Freelance Data Analytics Consultant
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold heading leading-tightest mb-8"
                >
                    TURNING DATA INTO <br />
                    <span className="text-gradient">BUSINESS GROWTH</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-muted font-light leading-relaxed mb-12"
                >
                    I build predictive models, interactive dashboards, and automated pipelines that help companies unlock insights, optimize revenue, and reduce operational costs.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a href="#contact" className="btn-premium primary w-full sm:w-auto">
                        Hire Me
                    </a>
                    <a href="#projects" className="btn-premium secondary w-full sm:w-auto">
                        View Case Studies
                    </a>
                </motion.div>
            </div>
        </section>
    );
};


export default Hero;
