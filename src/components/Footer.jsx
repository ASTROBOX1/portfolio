import { ExternalLink, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="section pb-12 border-t border-white-soft">
            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold heading mb-6">
                            LET'S SCALE YOUR <span className="text-primary-accent">BUSINESS.</span>
                        </h2>
                        <p className="text-muted max-w-lg mx-auto leading-relaxed">
                            I am currently accepting new data consulting projects for Q2 2026. Let's discuss how data can drive your next big growth phase.
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4 mb-20">
                        <a href="mailto:mhmmdaljaky2@gmail.com" className="contact-pill group">
                            <Mail size={18} className="text-primary-accent" />
                            <span>Email Me</span>
                        </a>
                        <a href="https://www.linkedin.com/in/mohamed-elgaki" target="_blank" className="contact-pill group">
                            <ExternalLink size={18} className="text-primary-accent" />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/ASTROBOX1" target="_blank" className="contact-pill group">
                            <ExternalLink size={18} className="text-primary-accent" />
                            <span>GitHub</span>
                        </a>
                    </div>

                    <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white-soft text-micro tracking-extra uppercase text-muted font-bold">
                        <p>© 2026 Mohamed Sayed. Data Science Consulting.</p>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <a href="#" className="hover-text-white transition-colors">Privacy</a>
                            <a href="#" className="hover-text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
