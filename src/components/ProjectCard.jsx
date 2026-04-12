import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, isFeatured = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`group relative overflow-hidden rounded-xl glass border-white-soft transition-all duration-500 hover-border-accent-soft`}
        >
            {/* Project Image Overlay */}
            <div className="relative overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover-scale blur-subtle opacity-60 group-hover-unblur group-hover-opaque"
                />
                <div className="absolute inset-0 bg-glass-dark opacity-80" />
            </div>

            {/* Content */}
            <div className="p-8 relative">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-micro tracking-extra text-primary-accent uppercase font-bold">
                        {project.category}
                    </span>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full border-white-mini hover-border-accent text-white transition-colors">
                        <ArrowUpRight size={16} />
                    </a>
                </div>

                <h3 className={`heading mb-4 group-hover-text-accent transition-colors ${isFeatured ? 'text-3xl' : 'text-xl'}`}>
                    {project.title}
                </h3>

                <div className="space-y-4 mb-6">
                    <p className="text-sm text-white/70 leading-relaxed">
                        <span className="text-primary-accent font-medium">Problem:</span> {project.problem}
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed">
                        <span className="text-white font-medium">Outcome:</span> {project.outcome}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span key={t} className="text-micro font-medium px-2 py-1 rounded bg-white-soft border border-white-mini text-text-muted uppercase tracking-tighter hover-border-accent-soft hover-text-white transition-colors">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};


export default ProjectCard;
