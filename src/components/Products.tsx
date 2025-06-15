
import { products } from '@/data/content';
import { Button } from '@/components/ui/button';

const Products = () => {
  return (
    <section className="py-20 sm:py-24 bg-secondary/20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center">Current Products</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="card-border-gradient">
            <div className="bg-background h-full p-8 rounded-lg flex flex-col">
              <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold">{products.live.name}</h3>
                  <div className="bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full">{products.live.status}</div>
              </div>
              <p className="mt-2 text-lg text-muted-foreground">{products.live.tagline}</p>
              <p className="mt-4 text-sm text-foreground/80">{products.live.description}</p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  {products.live.stats.map(stat => (
                      <div key={stat.label}>
                          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                  ))}
              </div>
              <Button className="w-full mt-auto pt-6 btn-gradient font-semibold">{products.live.cta}</Button>
            </div>
          </div>
           <div className="card-border-gradient">
            <div className="bg-background h-full p-8 rounded-lg flex flex-col justify-center items-center text-center">
                <h3 className="text-xl font-bold">{products.comingSoon.title}</h3>
                <p className="mt-4 text-muted-foreground">{products.comingSoon.description}</p>
                <Button variant="outline" className="w-full mt-6">{products.comingSoon.cta}</Button>
            </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
