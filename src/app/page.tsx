import Header from "./components/header";
import WelcomeSection from "./components/welcome";
import AboutSection from "./components/about";
import EquipmentSection from "./components/equipment";
import { ServicesSection } from "./components/services";
import { AnimatedTestimonialsSection } from "./components/testimonios";
import RegisterForm from "./components/form.register";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Header></Header>
      <WelcomeSection></WelcomeSection>
      <AboutSection></AboutSection>
      <EquipmentSection></EquipmentSection>
      <ServicesSection></ServicesSection>
      <AnimatedTestimonialsSection></AnimatedTestimonialsSection>
      <RegisterForm></RegisterForm>
      <Footer></Footer>
    </div>
  );
}
