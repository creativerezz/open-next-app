import Header1 from "@/components/layout/navigation/header-1";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header1 />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Your App
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            This is a clean starting point for your application. Start building something amazing!
          </p>
        </div>
      </section>
    </div>
  );
}