import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, ExternalLink, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', project: '', budget: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real deployment, you'd post this to a form service (e.g. Formspree, Netlify Forms)
        const subject = `New Project Inquiry from ${formState.name}`;
        const body = `Name: ${formState.name}%0AEmail: ${formState.email}%0AProject: ${formState.project}%0ABudget: ${formState.budget}`;
        window.location.href = `mailto:mhmmdaljaky2@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <section id="contact" className="section bg-bg-color-alt relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-accent/10 blur-extravagant pointer-events-none" />

            <div className="container relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-micro font-bold tracking-mega text-primary-accent uppercase block mb-4"
                    >
                        Start Your Data Transformation
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold heading mb-6"
                    >
                        LET'S GROW YOUR BUSINESS <span className="text-gradient">WITH DATA</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted leading-relaxed"
                    >
                        Ready to turn your data into competitive advantage? Share your project details, and I'll send you a personalized proposal within 24 hours.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl border-white-mini"
                    >
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <CheckCircle size={48} className="text-primary-accent mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-muted text-sm">I'll review your project and get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted block mb-2" htmlFor="contact-name">Your Name</label>
                                        <input
                                            id="contact-name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            placeholder="Jane Smith"
                                            className="contact-input"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted block mb-2" htmlFor="contact-email">Business Email</label>
                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            placeholder="jane@company.com"
                                            className="contact-input"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted block mb-2" htmlFor="contact-project">Tell Me About Your Project</label>
                                    <textarea
                                        id="contact-project"
                                        name="project"
                                        required
                                        rows={4}
                                        value={formState.project}
                                        onChange={handleChange}
                                        placeholder="I need a dashboard that shows me real-time sales performance by region..."
                                        className="contact-input resize-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted block mb-2" htmlFor="contact-budget">Estimated Budget</label>
                                    <select
                                        id="contact-budget"
                                        name="budget"
                                        value={formState.budget}
                                        onChange={handleChange}
                                        className="contact-input"
                                    >
                                        <option value="">Select a range...</option>
                                        <option value="Under $500">Under $500</option>
                                        <option value="$500 – $1,500">$500 – $1,500</option>
                                        <option value="$1,500 – $5,000">$1,500 – $5,000</option>
                                        <option value="$5,000+">$5,000+</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn-premium primary w-full flex items-center justify-center gap-2">
                                    <Send size={16} /> Send Project Brief
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="glass p-6 rounded-2xl border-white-mini">
                            <h3 className="font-bold text-lg mb-4">Direct Channels</h3>
                            <div className="space-y-4">
                                <a href="mailto:mhmmdaljaky2@gmail.com" className="flex items-center gap-4 text-muted hover:text-white transition-colors group">
                                    <div className="p-3 glass rounded-lg border-white-mini group-hover:border-primary-accent transition-colors">
                                        <Mail size={18} className="text-primary-accent" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-widest text-muted mb-1">Email</div>
                                        <div className="text-sm font-medium text-white">mhmmdaljaky2@gmail.com</div>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/mohamed-elgaki" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted hover:text-white transition-colors group">
                                    <div className="p-3 glass rounded-lg border-white-mini group-hover:border-primary-accent transition-colors">
                                        <ExternalLink size={18} className="text-primary-accent" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-widest text-muted mb-1">LinkedIn</div>
                                        <div className="text-sm font-medium text-white">Mohamed Elgaki</div>
                                    </div>
                                </a>
                                <a href="https://github.com/ASTROBOX1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted hover:text-white transition-colors group">
                                    <div className="p-3 glass rounded-lg border-white-mini group-hover:border-primary-accent transition-colors">
                                        <ExternalLink size={18} className="text-primary-accent" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-widest text-muted mb-1">GitHub</div>
                                        <div className="text-sm font-medium text-white">ASTROBOX1</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Trust signals */}
                        <div className="glass p-6 rounded-2xl border-white-mini space-y-4">
                            <h3 className="font-bold text-lg">Why companies hire me</h3>
                            {[
                                "🎯 Results-focused: You pay for business impact, not hours spent",
                                "⚡ Fast turnaround: Most projects deliver first insights within 1 week",
                                "💼 Consultant mindset: I speak your language, not technical jargon",
                                "🤝 Collaborative: Your team stays informed at every milestone",
                            ].map((item) => (
                                <div key={item} className="text-sm text-muted">{item}</div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
