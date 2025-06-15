
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-900/10 to-purple-900/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-60"></div>
      <div className="container relative text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Pushing Forward the Future of Finance
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Developing innovative use cases and cutting-edge financial solutions that redefine how the world interacts with money.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="btn-gradient font-bold px-8 py-3 rounded-lg text-base" asChild>
            <a href="#innovation-focus">Explore Our Innovation</a>
          </Button>
          <Button size="lg" variant="outline" className="font-bold px-8 py-3 rounded-lg text-base bg-background/50 hover:bg-background/80" asChild>
            <a href="#products">View Products</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
