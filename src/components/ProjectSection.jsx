import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, AlertCircle, Lightbulb, GitBranch, TrendingUp, Wrench, ChevronDown } from 'lucide-react';

const projects = [
    {
        title: "Mobile Market Intelligence System",
        category: "Sales & Market Intelligence",
        tagline: "Transforming fragmented market data into a live competitive radar.",
        problem: "A regional telecom reseller lacked visibility into the mobile device market. Sales reps were quoting stale prices, missing hot-selling models, and losing deals to competitors who moved faster on pricing trends.",
        solution: "Built an end-to-end automated market intelligence pipeline that scrapes, cleanses, and aggregates mobile device pricing and inventory data from multiple sources into a unified analytics layer.",
        pipeline: ["Web scraping & API data ingestion", "Automated data cleaning (deduplication, normalization)", "Exploratory analysis & trend detection", "Interactive Streamlit dashboard"],
        impact: "Reduced pricing decision time from 3 days to under 2 hours. Sales team identified 12 high-margin product gaps that yielded a 22% revenue lift in Q3.",
        tech: ["Python", "Pandas", "BeautifulSoup", "Streamlit", "Plotly"],
        link: "https://github.com/ASTROBOX1",
        featured: true
    },
    {
        title: "Sales Performance Dashboard",
        category: "Business Intelligence",
        tagline: "One source of truth for every sales metric that matters.",
        problem: "A mid-size e-commerce company was managing sales performance across spreadsheets, email reports, and disconnected tools — making it impossible for management to get a real-time picture of rep performance, pipeline health, or revenue forecasts.",
        solution: "Designed and deployed a centralized business intelligence dashboard that consolidates CRM exports and transaction data into a single, interactive web application with drill-down capabilities.",
        pipeline: ["Data ingestion from CRM exports (CSV/Excel)", "Data modeling & KPI definition", "Statistical analysis for quota vs. actuals", "Interactive Plotly/Streamlit dashboard"],
        impact: "Gave the management team a daily 5-minute briefing instead of a 2-hour weekly meeting. Identified the top 3 underperforming regions, enabling targeted coaching that recovered $180K in stalled pipeline.",
        tech: ["Python", "Pandas", "Plotly", "Streamlit", "SQL", "Excel"],
        link: "https://github.com/ASTROBOX1",
        featured: false
    },
    {
        title: "Automated Data Cleaning Pipeline",
        category: "Data Engineering",
        tagline: "Reliable data is not optional — it's the foundation of every insight.",
        problem: "A B2B logistics company was making route optimization decisions on dirty customer data: duplicate entries, inconsistent address formats, missing delivery windows, and corrupted historical records — costing them in both time and accuracy.",
        solution: "Engineered a reusable, modular data cleaning framework that standardizes any tabular dataset through a configurable sequence of validation, imputation, deduplication, and schema enforcement steps.",
        pipeline: ["Schema validation & anomaly detection", "Null imputation & outlier handling", "Deduplication & entity resolution", "Cleaned data output to structured format"],
        impact: "Reduced analyst time spent on data prep by 70%. Downstream ML model accuracy improved by ~18% after switching to the cleaned data pipeline as source of truth.",
        tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Jupyter"],
        link: "https://github.com/ASTROBOX1",
        featured: false
    }
];

const stages = [
    { label: "Business Problem", icon: <AlertCircle size={14} />, key: "problem" },
    { label: "Solution", icon: <Lightbulb size={14} />, key: "solution" },
    { label: "Data Pipeline", icon: <GitBranch size={14} />, key: "pipeline" },
    { label: "Business Impact", icon: <TrendingUp size={14} />, key: "impact" },
    { label: "Tech Stack", icon: <Wrench size={14} />, key: "tech" },
];

const CaseStudyCard = ({ project, index }) => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="glass rounded-2xl border-white-mini overflow-hidden"
            style={{ borderColor: open ? 'rgba(0,240,255,0.25)' : undefined, transition: 'border-color 0.3s ease' }}
        >
            {/* Header */}
            <div className="p-8">
                <div className="flex justify-between items-start gap-4 mb-4">
                    <span className="text-micro font-bold tracking-extra text-primary-accent uppercase">
                        {project.category}
                    </span>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 glass rounded-full border-white-mini hover-border-accent text-white transition-colors flex-shrink-0"
                        aria-label="View project"
                    >
                        <ArrowUpRight size={16} />
                    </a>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold heading mb-3">{project.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{project.tagline}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                        <span key={t} className="text-micro font-medium px-3 py-1 rounded-full glass border-white-mini text-text-muted uppercase">
                            {t}
                        </span>
                    ))}
                </div>

                {/* Expand toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 text-sm font-medium text-primary-accent hover:text-white transition-colors group"
                    aria-expanded={open}
                >
                    <span>{open ? 'Hide Case Study' : 'View Full Case Study'}</span>
                    <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown size={16} />
                    </motion.span>
                </button>
            </div>

            {/* Expanded case study */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-8 pb-8 border-t border-white-soft pt-6 space-y-6">
                            {stages.map((stage) => (
                                <div key={stage.key} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1 p-2 rounded-lg bg-glass-light text-primary-accent h-fit">
                                        {stage.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-2">{stage.label}</h4>
                                        {stage.key === 'pipeline' ? (
                                            <ol className="space-y-1">
                                                {project.pipeline.map((step, i) => (
                                                    <li key={i} className="text-sm text-muted flex items-start gap-2">
                                                        <span className="text-primary-accent font-bold flex-shrink-0">{i + 1}.</span>
                                                        {step}
                                                    </li>
                                                ))}
                                            </ol>
                                        ) : stage.key === 'tech' ? (
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((t) => (
                                                    <span key={t} className="text-micro font-semibold px-3 py-1 rounded-full bg-primary-accent/10 border border-primary-accent/30 text-primary-accent uppercase">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-sm text-muted leading-relaxed">{project[stage.key]}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const ProjectSection = () => {
    return (
        <section id="projects" className="section bg-bg-color-alt relative overflow-hidden">
            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-micro font-bold tracking-mega text-primary-accent uppercase block mb-4"
                        >
                            Case Studies
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold heading"
                        >
                            REAL PROBLEMS, <span className="text-secondary-accent">REAL RESULTS</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-sm text-muted text-sm leading-relaxed"
                    >
                        Each project is documented as a full case study — from the business problem to measurable ROI.
                    </motion.p>
                </div>

                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <CaseStudyCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/ASTROBOX1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-premium secondary inline-flex items-center gap-2"
                    >
                        View All Projects on GitHub <ArrowUpRight size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectSection;
