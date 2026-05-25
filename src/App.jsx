import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";
import DemoClassesSection from "./components/DemoClassesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen"
        style={{ backgroundColor: "var(--theme-bg)" }}
      >
        <Navbar />
        <main>
          <HeroSection />
          <CoursesSection />
          <DemoClassesSection />
          <WhyChooseUs />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </ThemeProvider>
  );
}

export default App;
