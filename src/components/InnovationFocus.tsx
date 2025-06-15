
import { innovationFocusAreas } from '@/data/content';

const InnovationFocus = () => {
  return (
    <section id="innovation-focus" className="py-20 sm:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center">Innovation Focus Areas</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {innovationFocusAreas.map((area, index) => (
            <div key={index} className="card-border-gradient">
              <div className="bg-secondary/30 h-full p-8 rounded-lg">
                <h3 className="text-xl font-bold">{area.title}</h3>
                <p className="mt-4 text-muted-foreground">{area.description}</p>
                {area.product && <p className="mt-4 text-sm font-semibold text-blue-400">{area.product}</p>}
                {area.status && <p className="mt-4 text-sm font-semibold text-purple-400">{area.status}</p>}
                <p className="mt-4 text-sm text-foreground/80"><span className="font-semibold">Innovation:</span> {area.innovation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationFocus;
