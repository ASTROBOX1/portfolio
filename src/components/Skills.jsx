import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Machine Intelligence",
        skills: ["Classification", "Regression", "Gradient Boosting", "Neural Architectures"],
        icon: "🤖"
    },
    {
        title: "Analytical Operations",
        skills: ["Exploratory Data Analysis", "Feature Engineering", "Statistical Modeling", "Data Synthesis"],
        icon: "📊"
    },
    {
        title: "Health-Tech Vertical",
        skills: ["Clinical Diagnostics", "Predictive Healthcare", "Medical Signal Processing"],
        icon: "🏥"
    },
    {
        title: "Toolchain",
        skills: ["Python", "TensorFlow", "Scikit-Learn", "SQL", "Streamlit", "Tableau"],
        icon: "⚙️"
    }
];

const Skills = () => {
    return (
        <section id="about" className="section relative overflow-hidden">
            <div className="container">
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold heading mb-6"
                    >
                        TECHNICAL <span className="text-primary-accent">COGNITION</span>
                    </motion.h2>
                    <p className="text-muted max-w-xl mx-auto text-sm uppercase tracking-widest font-medium">
                        Architecting high-fidelity intelligence. My research focus lies at the intersection of medical diagnostics and advanced predictive modeling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 glass rounded-xl border-white-soft relative group"
                        >
                            <div className="text-3xl mb-6">{cat.icon}</div>
                            <h3 className="heading text-lg mb-4 text-white group-hover-text-accent transition-colors">
                                {cat.title}
                            </h3>
                            <ul className="space-y-2">
                                {cat.skills.map(skill => (
                                    <li key={skill} className="text-micro text-text-muted flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-soft" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
