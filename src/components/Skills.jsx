import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Predictive Analytics",
        skills: ["Customer Churn Prediction", "Revenue Forecasting", "Anomaly Detection", "Risk Scoring"],
        icon: "🔮"
    },
    {
        title: "Data Engineering",
        skills: ["ETL Pipelines", "Data Quality & Validation", "Database Architecture", "Real-time Processing"],
        icon: "⚙️"
    },
    {
        title: "Business Intelligence",
        skills: ["KPI Development", "Competitive Analysis", "Market Intelligence", "Scenario Modeling"],
        icon: "📈"
    },
    {
        title: "Tools & Platforms",
        skills: ["Python | SQL | Streamlit", "Tableau | Plotly | React", "TensorFlow | Scikit-Learn", "AWS | GCP | APIs"],
        icon: "🛠️"
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
                        MY <span className="text-primary-accent">EXPERTISE</span>
                    </motion.h2>
                    <p className="text-muted max-w-xl mx-auto text-sm uppercase tracking-widest font-medium">
                        I combine advanced statistical techniques, machine learning, and business acumen to solve real problems that generate measurable ROI.
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
