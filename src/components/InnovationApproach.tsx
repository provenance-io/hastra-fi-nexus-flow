
import { innovationApproach } from '@/data/content';

const InnovationApproach = () => {
    return (
        <section className="py-20 sm:py-24">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tight text-center">Our Innovation Approach</h2>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {innovationApproach.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-header-glow/20 to-crypto-accent/20 mb-6">
                                <item.icon className="w-8 h-8 text-header-glow" />
                            </div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="mt-2 text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InnovationApproach;
