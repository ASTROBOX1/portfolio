import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const highlights = [
    "✓ Move faster: Cut decision-making cycles from weeks to hours with smart dashboards",
    "✓ Reduce risk: Predictive models identify problems before they cost you revenue",
    "✓ Grow revenue: Data-driven strategies unlock customer insights competitors miss",
    "✓ Build trust: Clear insights that business leaders actually understand and act on",
];

const About = () => {
    return (
        <section id="about" className="section bg-bg-color relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary-accent/10 blur-extravagant pointer-events-none -translate-y-1/2" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-micro font-bold tracking-mega text-secondary-accent uppercase block mb-4"
                        >
                            About Mohamed
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold heading mb-8"
                        >
                            DATA STRATEGY THAT <span className="text-gradient">MOVES COMPANIES</span>
                        </motion.h2>

                        <div className="space-y-6 text-muted leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                I'm Mohamed Sayed, a Data Consultant and fractional analytics leader. I partner with companies and founders to turn raw data into competitive advantages. Every dashboard I build, every analysis I deliver, and every model I train is designed with one goal: measurable business impact.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Unlike typical data scientists, I think like a business consultant. I don't optimize for model accuracy—I optimize for ROI. Whether it's a revenue dashboard that cuts decision-making time by 70%, a churn model that prevents million-dollar losses, or a market intelligence system that gives you first-mover advantage, I focus on what actually moves the needle for your business.
                            </motion.p>
                        </div>

                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 space-y-3"
                        >
                            {highlights.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                                    <CheckCircle size={16} className="text-primary-accent flex-shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </motion.ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-10"
                        >
                            <a href="#contact" className="btn-premium primary">
                                Let's Work Together
                            </a>
                        </motion.div>
                    </div>

                    {/* Stats / Authority Panel */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { value: "5+", label: "Projects Delivered" },
                            { value: "3+", label: "Active Clients Served" },
                            { value: "70%", label: "Avg Time Saved on Data Prep" },
                            { value: "∞", label: "Curiosity for the Problem" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-8 rounded-2xl border-white-mini text-center"
                            >
                                <div className="text-4xl font-bold heading text-gradient mb-2">{stat.value}</div>
                                <div className="text-xs text-muted uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}

                        {/* Availability badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="col-span-2 glass p-6 rounded-2xl border-primary-accent/30 flex items-center gap-4"
                        >
                            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                            <div>
                                <div className="font-bold text-sm text-white">Currently Available for Projects</div>
                                <div className="text-xs text-muted mt-0.5">Upwork · Contra · Direct Engagement</div>
                            </div>
                            <a href="#contact" className="ml-auto btn-premium primary !py-2 !px-5 text-sm flex-shrink-0">
                                Hire Now
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
