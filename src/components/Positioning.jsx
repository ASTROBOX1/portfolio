import { motion } from 'framer-motion';
import { Target, TrendingUp, PiggyBank, BarChart3 } from 'lucide-react';

const positions = [
    {
        title: "Better Decisions",
        description: "Move from gut feelings to data-backed strategies. I build models that uncover hidden patterns in your data.",
        icon: <Target className="w-8 h-8 text-primary-accent" />
    },
    {
        title: "Revenue Optimization",
        description: "Identify high-value clients, optimize pricing strategies, and forecast demand to maximize your topline.",
        icon: <TrendingUp className="w-8 h-8 text-primary-accent" />
    },
    {
        title: "Cost Reduction",
        description: "Automate manual reporting pipelines and optimize resource allocation using predictive analytics.",
        icon: <PiggyBank className="w-8 h-8 text-primary-accent" />
    },
    {
        title: "Real-Time Insights",
        description: "Live, interactive dashboards that give you a bird's-eye view of your metrics, exactly when you need them.",
        icon: <BarChart3 className="w-8 h-8 text-primary-accent" />
    }
];

const Positioning = () => {
    return (
        <section className="section bg-bg-color-alt relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-micro font-bold tracking-mega text-secondary-accent uppercase block mb-4"
                    >
                        The Value Proposition
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold heading"
                    >
                        What I Help Companies <span className="text-gradient">Achieve</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {positions.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl border-white-mini hover:border-primary-accent/50 transition-colors group"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-glass-light inline-block group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-muted text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Positioning;
