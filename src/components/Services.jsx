import { motion } from 'framer-motion';
import { Database, LineChart, LayoutDashboard, Globe, Cpu } from 'lucide-react';

const services = [
    {
        title: "Revenue Intelligence & Forecasting",
        description: "Predictive models that forecast trends, identify expansion opportunities, and predict customer churn before it happens. Transform data into revenue growth strategies.",
        icon: <Cpu className="w-6 h-6 text-primary-accent" />,
        audience: "C-Suite & Growth Teams"
    },
    {
        title: "Decision-Making Dashboards",
        description: "Purpose-built interactive dashboards and web applications that give your team real-time visibility into what matters. One glance = clear decision.",
        icon: <LayoutDashboard className="w-6 h-6 text-primary-accent" />,
        audience: "Executives & Operations"
    },
    {
        title: "Competitive & Market Intelligence",
        description: "Systematic analysis of market trends, competitor positioning, and customer behavior to uncover untapped opportunities and move faster than the market.",
        icon: <Globe className="w-6 h-6 text-primary-accent" />,
        audience: "Sales, Marketing & Strategy"
    },
    {
        title: "Business Analytics Consultation",
        description: "Partner with me to extract actionable insights from your data. I analyze patterns, identify bottlenecks, and recommend concrete business decisions—not just reports.",
        icon: <LineChart className="w-6 h-6 text-primary-accent" />,
        audience: "Founders & Leadership"
    },
    {
        title: "Data Pipeline & Quality",
        description: "Reliable, clean data is the foundation of every good decision. I architect data pipelines that ensure data integrity and speed up decision-making cycles.",
        icon: <Database className="w-6 h-6 text-primary-accent" />,
        audience: "Technical & Data Teams"
    }
];

const Services = () => {
    return (
        <section id="services" className="section bg-bg-color relative">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-micro font-bold tracking-mega text-primary-accent uppercase block mb-4"
                        >
                            Freelance Services
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold heading"
                        >
                            HOW I <span className="text-secondary-accent">HELP</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div 
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl border-white-mini flex flex-col h-full hover:border-primary-accent transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-glass-light rounded-lg border border-white-soft group-hover:border-primary-accent/50 transition-colors">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">{service.title}</h3>
                                    <span className="text-micro text-primary-accent font-medium uppercase tracking-widest block mt-1">
                                        For: {service.audience}
                                    </span>
                                </div>
                            </div>
                            <p className="text-muted text-sm leading-relaxed flex-grow">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                    
                    {/* Call to action card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-primary-accent/20 to-secondary-accent/20 border border-primary-accent/30 flex flex-col justify-center items-center text-center h-full relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-glass-dark backdrop-blur-sm z-0"></div>
                        <div className="relative z-10">
                            <h3 className="font-bold text-2xl mb-4 heading text-white">Need a Custom Solution?</h3>
                            <p className="text-white/70 text-sm mb-6">
                                Let's discuss your specific data challenges and build a roadmap.
                            </p>
                            <a href="#contact" className="btn-premium primary !py-2 !px-6 text-sm">
                                Book a Call
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
