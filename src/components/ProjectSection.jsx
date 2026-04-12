import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Clinical Stroke Diagnosis System",
        category: "Healthcare AI / Research",
        problem: "Critical delays in ER diagnostics lead to irreversible neurological damage in stroke patients.",
        outcome: "Orchestrated an end-to-end ML pipeline that autonomously identifies high-risk pathology with 98% accuracy, reducing wait-to-triage time.",
        tech: ["Python", "XGBoost", "Scikit-Learn", "Streamlit"],
        link: "https://github.com/ASTROBOX1/Stroke-Risk-Prediction",
        image: "pics/stroke.png",
        featured: true
    },
    {
        title: "Predictive Alzheimer's Diagnostics",
        category: "Deep Learning / Healthcare",
        problem: "Cognitive screening is traditionally slow, subjective, and prone to early-stage diagnostic gaps.",
        outcome: "Quantified subtle neural biomarkers to deliver high-precision diagnostic scores, enabling proactive intervention strategies.",
        tech: ["TensorFlow", "Pandas", "Neuro-Science", "EDA"],
        link: "https://github.com/ASTROBOX1/final-project-creativa",
        image: "pics/Alzheimer.png",
        featured: false
    },
    {
        title: "Diamond Value Intelligence",
        category: "Regression / Fintech",
        problem: "Opaque pricing models in the gem market hinder fair-value trade and risk assessment.",
        outcome: "Engineered a multi-dimensional regression engine that maps quality metrics to market values for institutional-grade transparency.",
        tech: ["Python", "Regression", "Data Visualization", "Pandas"],
        link: "https://github.com/ASTROBOX1/Diamond-Price-Prediction-ML",
        image: "pics/diamond.png",
        featured: false
    }
];

const ProjectSection = () => {
    return (
        <section id="projects" className="section bg-black/20">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-micro font-bold tracking-mega text-primary-accent uppercase block mb-4"
                        >
                            Selected Research
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold heading"
                        >
                            ENGINEERING <span className="text-secondary-accent">IMPACT</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="projects-grid auto-rows-fr">
                    {projects.map((project) => (
                        <ProjectCard 
                            key={project.title} 
                            project={project} 
                            isFeatured={project.featured}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};


export default ProjectSection;
