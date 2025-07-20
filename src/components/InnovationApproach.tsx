
import { innovationApproach } from '@/data/content';

const InnovationApproach = () => {
    return (
        <section className="pt-0 pb-8 sm:pb-12">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent mb-16 relative">
                        <div className="relative z-10">
                            <div className="text-center mb-12">
                                <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-platinum/80 leading-relaxed mb-6 md:mb-8" 
                                   style={{ 
                                     textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' 
                                   }}>
                                  Our Innovation Approach
                                </p>
                            </div>
                            
                            <div className="grid gap-8 md:grid-cols-3">
                                {innovationApproach.map((item, index) => (
                                    <div key={index} className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-hastra-teal/20 to-hastra-teal-dark/30 border border-hastra-teal/30 mb-6 shadow-[0_0_15px_hsl(var(--hastra-teal)/0.2)]">
                                            <item.icon className="w-8 h-8 text-hastra-teal" />
                                        </div>
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnovationApproach;
