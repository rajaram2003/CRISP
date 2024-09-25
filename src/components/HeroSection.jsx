import video from "../assets/hero.mp4"; 
import logo from "../assets/logo3.png";
import hero from "../assets/hero.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full overflow-hidden">
        <video src={video} className="h-full w-full object-cover" muted autoPlay loop playsInline poster={hero}></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
      <div className="relative z-20 flex h-screen flex-col items-center justify-end pb-20 text-center">
        <motion.img 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y:0 }} 
        transition={{ duration: 2, ease: "easeInOut" }} 
        src={logo} 
        alt="crisp" 
        className="w-full p-4" />
        <p className="p-4 text-lg tracking-tighter text-white">Crisp Flavors, The Finest of Odisha!</p>
      </div>
    </section>
  )
}

export default HeroSection;