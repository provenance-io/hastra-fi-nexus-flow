
const BrandOverview = () => {
  return (
    <section className="py-20 relative">
      <div className="container relative">
        <div className="max-w-5xl mx-auto">
          <div className="card-gradient rounded-3xl p-8 md:p-12 card-bottom-static border border-transparent">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">Brand Overview</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-hastra-teal/10 flex items-center justify-center">
                  <div className="w-8 h-8 bg-hastra-teal rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-hastra-teal mb-4">Mission</h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Bridge traditional finance with decentralized innovation, creating elite DeFi products backed by real-world assets.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-auburn-primary/10 flex items-center justify-center">
                  <div className="w-8 h-8 bg-auburn-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-auburn-primary mb-4">Vision</h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Be the premier platform where traditional finance meets cutting-edge blockchain technology.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-crypto-accent/10 flex items-center justify-center">
                  <div className="w-8 h-8 bg-crypto-accent rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-crypto-accent mb-4">Values</h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Innovation, Security, Transparency, Accessibility, Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandOverview;
