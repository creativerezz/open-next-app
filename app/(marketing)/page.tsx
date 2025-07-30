
import HeroSection from "@/components/hero-sections/hero-main";
import { Footer } from "@/components/footer";



export default function Home() {
  return (
    <>
      {/* Navigation Header */}


      {/* Main Content */}
        <div className="min-h-screen bg-background">
          <HeroSection />

          {/* <section className="py-16 ">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Our AI Automation Services</h2>
                <p className="text-lg text-muted-foreground ">
                  Transform your business operations with cutting-edge AI solutions designed to increase efficiency and drive growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 place-items-center mx-auto">
                {cardData.map((card, index) => (
                  <CardFlip
                    key={index}
                    title={card.title}
                    subtitle={card.subtitle}
                    description={card.description}
                    features={card.features}
                  />
                ))}
              </div>
            </div>
          </section> */}

          {/* Testimonials Section */}
          {/* <TestimonialsCarousel /> */}

        </div>
      <Footer />
    </>
  );
}