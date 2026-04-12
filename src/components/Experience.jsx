import { motion } from 'framer-motion';

const experience = [
    {
        role: "Data Science & ML Trainee",
        company: "Creativa Innovation Hub (MCIT)",
        period: "Dec 2025 – Present",
        highlights: [
            "Architected classification pipelines for clinical diagnostic tools.",
            "Implemented end-to-end EDA and feature engineering for regression systems.",
            "Optimized ensemble learning models for real-world production accuracy.",
            "Visualized complex data patterns via high-performance BI dashboards."
        ]
    }
];

const education = [
    {
        degree: "B.Sc. Computer Science & Artificial Intelligence",
        school: "Benha University",
        status: "In Progress",
        detail: "Focusing on Neural Networks, Statistical Inference, and Algorithmic Complexity."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section relative">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Sidebar / Title */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="sticky top-32"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold heading mb-6 leading-tight">
                                TRAJECTORY & <br /> <span className="text-primary-accent">INSIGHT</span>
                            </h2>
                            <p className="text-muted text-sm max-w-xs leading-relaxed">
                                Bridging the gap between academic theory and high-stakes industrial AI application.
                            </p>
                        </motion.div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-20">
                        {/* Experience */}
                        <div className="space-y-12">
                            {experience.map((exp, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative pl-8 border-l border-white-mini group"
                                >
                                    <div className="absolute top-0 left-negative w-2.5 h-2.5 rounded-full bg-primary-accent transition-transform group-hover-scale" />
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold heading text-white">{exp.role}</h3>
                                        <div className="flex justify-between items-center mt-1">
                                            <span className="text-primary-accent text-sm font-medium">{exp.company}</span>
                                            <span className="text-muted text-micro tracking-widest uppercase">{exp.period}</span>
                                        </div>
                                    </div>
                                    <ul className="space-y-3">
                                        {exp.highlights.map((h, j) => (
                                            <li key={j} className="text-text-muted text-sm leading-relaxed flex gap-3 italic">
                                                <span className="text-primary-accent select-none">/</span> {h}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        {/* Education */}
                        <div className="space-y-8 pt-12 border-t border-white-soft">
                            <h4 className="text-micro font-bold tracking-ultra text-muted uppercase mb-8">Academic Foundation</h4>
                            {education.map((edu, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="p-6 glass rounded-lg border-white-soft"
                                >
                                    <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-muted">{edu.school}</span>
                                        <span className="px-2 py-tiny rounded-full bg-glass-light text-micro text-primary-accent border hover-border-accent-soft">{edu.status}</span>
                                    </div>
                                    <p className="mt-4 text-micro text-text-muted leading-relaxed font-light">{edu.detail}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
