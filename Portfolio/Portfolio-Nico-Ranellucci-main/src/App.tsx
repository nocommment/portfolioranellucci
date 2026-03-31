import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Github, Linkedin, ChevronDown, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

const SidebarIcon = ({ icon, text, sectionId, active }: { icon: React.ReactNode, text: string, sectionId: string, active: boolean }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`sidebar-icon-wrapper group ${active ? 'text-darkred scale-110' : ''}`} 
      onClick={() => scrollToSection(sectionId)}
    >
      {icon}
      {active && <div className="absolute -left-1 w-1 h-4 bg-darkred rounded-full" />}
      <span className="sidebar-tooltip">
        {text}
      </span>
    </div>
  );
};

const ProjectSection = ({ title, description, children, id, number, bgColor = "bg-transparent" }: { title: string, description: string, children: React.ReactNode, id?: string, number: string, bgColor?: string }) => (
  <motion.section 
    id={id} 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`py-32 px-8 md:px-24 ${bgColor}`}
  >
    <div className="max-w-[1800px] mx-auto">
      <div className="grid lg:grid-cols-4 gap-32">
        <div className="lg:col-span-2 sticky top-32 h-fit">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-darkred/20 text-7xl font-bold font-mono">{number}</span>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">{title}</h2>
          </div>
          <p className="text-charcoal/70 leading-relaxed text-lg max-w-md">
            {description}
          </p>
        </div>
        <div className="lg:col-span-2">
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex gap-8 min-w-max">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'works', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-eggshell">
      {/* Sidebar Navigation */}
      <nav className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col bg-white text-charcoal shadow-xl z-50">
        <div className="flex flex-col items-center py-8 space-y-4">
          <div className="mb-8">
            <div className="w-10 h-10 bg-darkred rounded-xl flex items-center justify-center text-white font-bold text-xl">
              N
            </div>
          </div>
          <SidebarIcon icon={<Home size={24} />} text="Home" sectionId="home" active={activeSection === 'home'} />
          <SidebarIcon icon={<Briefcase size={24} />} text="Arbeitsproben" sectionId="works" active={activeSection === 'works'} />
          <SidebarIcon icon={<Mail size={24} />} text="Kontakt" sectionId="contact" active={activeSection === 'contact'} />
        </div>
        <div className="mt-auto pb-8 flex flex-col items-center space-y-4">
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="ml-20 flex-1">
        {/* Header Section */}
        <section id="home" className="pt-24 pb-12 px-8 md:px-24 max-w-[1800px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="grid lg:grid-cols-4 gap-x-32 items-start mb-24"
          >
            <div className="lg:col-span-3">
              <h1 className="text-7xl md:text-9xl font-bold mb-4 tracking-tighter">Portfolio. 2026</h1>
              <h2 className="text-4xl font-medium text-charcoal/80 mb-2">Nico Ranellucci</h2>
              <p className="text-2xl text-charcoal/60">UX/ UI/ Information Designer</p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="w-full aspect-[4/3] bg-neutral-200 rounded-2xl overflow-hidden relative group">
                <img 
                  src="C:\Users\ranel\OneDrive\Dokumente\Bewerbung\Neu\Portfolio\Portfolio\bilder\ich.png" 
                  alt="Nico Ranellucci" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-2 border-white/20 rounded-2xl pointer-events-none"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Info Grid (Lebenslauf) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-32 gap-y-4 mb-32"
          >
            {/* Headings Row */}
            <h3 className="text-base uppercase tracking-widest font-bold text-darkred/40">Erfahrung</h3>
            <h3 className="text-base uppercase tracking-widest font-bold text-darkred/40 hidden lg:block">Ausbildung</h3>
            <h3 className="text-base uppercase tracking-widest font-bold text-darkred/40 hidden lg:block">Skills</h3>
            <h3 className="text-base uppercase tracking-widest font-bold text-darkred/40 hidden lg:block">Interests</h3>

            {/* Content Row */}
            <div className="flex flex-col gap-6 text-base">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-lg">UX/ UI Designer</p>
                <p className="text-charcoal/60">DZR</p>
                <p className="text-charcoal/40 italic text-sm">2025</p>
              </div>
            </div>

            <div className="flex flex-col gap-8 text-base">
              <h3 className="text-base uppercase tracking-widest font-bold text-darkred/40 lg:hidden">Ausbildung</h3>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-lg">Hochschule Aalen</p>
                <p className="text-charcoal/60">Information Design</p>
                <p className="text-charcoal/40 italic text-sm">2022 - laufend</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-lg">Hochschule Aalen</p>
                <p className="text-charcoal/60">User Experience</p>
                <p className="text-charcoal/40 italic text-sm">2020 - 2022</p>
              </div>
            </div>

            <div className="flex flex-col gap-8 text-base">
              <h3 className="text-base uppercase tracking-widest font-bold text-darkred/40 lg:hidden">Skills</h3>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Digital</p>
                <p className="text-charcoal/60 leading-relaxed">Figma, Office, Adobe, Axure, Blender, CAD</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Sprache</p>
                <p className="text-charcoal/60 leading-relaxed">Deutsch, Englisch</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Keys</p>
                <p className="text-charcoal/60 leading-relaxed">Nutzerzentriert, elegant, ästhetisch-pragmatisch, teamorientiert, UX-Research, Prototyping, Interaction Design, neugierig, vielseitig</p>
              </div>
            </div>

            <div className="flex flex-col gap-6 text-base">
              <h3 className="text-base uppercase tracking-widest font-bold text-darkred/40 lg:hidden">Interests</h3>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-lg">DLRG</p>
                <p className="text-charcoal/60">Rettungsschwimmer Silber</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-lg">American Football</p>
                <p className="text-charcoal/60">QB</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-lg">Fußball</p>
                <p className="text-charcoal/60">ZM</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-lg">Andere</p>
                <p className="text-charcoal/60">Fitness, Kochen, Lesen, Gaming</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center pb-12">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-darkred cursor-pointer"
              onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ChevronDown size={32} />
            </motion.div>
          </div>
        </section>

        {/* Arbeitsproben Section */}
        <div id="works">
          <div className="pt-24 px-8 md:px-24 max-w-[1800px] mx-auto mb-12">
            <h2 className="text-6xl font-bold">Arbeitsproben</h2>
          </div>

          {/* Project 1: Tree's and more */}
          <ProjectSection 
            number="01"
            title="Tree's and more" 
            bgColor="bg-white"
            description="Dieses Projekt entstand aus eigenem Antrieb und diente als Experimentierraum zur Erforschung alternativer Interaktionsformen, insbesondere des horizontalen Scrollens. Mich interessiert dabei vor allem, wie sich neue Navigations- und Bewegungsmuster entwickeln lassen, die sich trotz ihrer Ungewohntheit intuitiv und selbstverständlich anfühlen."
          >
            <div className="w-[820px] h-[1180px] shrink-0 rounded-3xl overflow-hidden bg-white border border-charcoal/5">
              <iframe 
                style={{ border: 'none' }} 
                width="100%" 
                height="100%" 
                src="https://embed.figma.com/proto/w3BkClzcwuocXmZcyWsrwX/tree-s-and-more?page-id=0%3A1&node-id=3-5&viewport=1087%2C403%2C0.32&scaling=contain&content-scaling=fixed&embed-host=share" 
                allowFullScreen
              ></iframe>
            </div>
          </ProjectSection>

          {/* Project 2: Lucha Libre */}
          <ProjectSection 
            number="02"
            title="Lucha Libre" 
            bgColor="bg-eggshell"
            description="Auch dieses Projekt entstand aus eigenem Antrieb und ist stärker im Illustration Design verortet als in einem klassischen UX-Kontext. Ziel war es, visuell zu experimentieren und gestalterische Prinzipien jenseits klarer funktionaler Anforderungen zu erkunden. Besonderes Augenmerk lag auf horizontalem Scrollen, da ich diese Interaktionsform als ästhetisch reizvoll empfinde und sie zugleich stärker mit Bildformaten arbeitet, wie sie aus der Kamera- und Filmästhetik bekannt sind. Dadurch entsteht eine eher erzählerische, fließende Wahrnehmung des Inhalts."
          >
            <div className="w-[820px] h-[1180px] shrink-0 rounded-3xl overflow-hidden bg-white border border-charcoal/5">
              <iframe 
                style={{ border: 'none' }} 
                width="100%" 
                height="100%" 
                src="https://embed.figma.com/proto/w3BkClzcwuocXmZcyWsrwX/tree-s-and-more?page-id=7%3A225&node-id=7-321&viewport=-2368%2C-78%2C0.63&scaling=min-zoom&content-scaling=fixed&embed-host=share" 
                allowFullScreen
              ></iframe>
            </div>
          </ProjectSection>

          {/* Project 3: Earth, Wind and Fire */}
          <ProjectSection 
            number="03"
            title="Earth, Wind and Fire" 
            bgColor="bg-white"
            description="Die Idee entstand aus einem Pinterest-Post, der ein reduziertes Vier-Punkte-Menü zeigte. Daraus entwickelte sich der Gedanke, die Navigation konsequent über Symbole zu organisieren und visuell zu verknüpfen. Aus reiner Neugier und Freude am Experiment habe ich mich anschließend daran gesetzt, eine kleine Animation für das Aufklappen des Menüs zu gestalten. Ziel war es, dem ansonsten sehr reduzierten Interface eine subtile Dynamik zu verleihen, ohne die Ruhe des Gesamtkonzepts zu stören."
          >
            <div className="w-[820px] h-[1180px] shrink-0 rounded-3xl overflow-hidden bg-white border border-charcoal/5">
              <iframe 
                style={{ border: 'none' }} 
                width="100%" 
                height="100%" 
                src="https://embed.figma.com/proto/w3BkClzcwuocXmZcyWsrwX/tree-s-and-more?page-id=3%3A84&node-id=3-95&viewport=1068%2C601%2C0.51&scaling=min-zoom&content-scaling=fixed&embed-host=share" 
                allowFullScreen
              ></iframe>
            </div>
          </ProjectSection>

          {/* Project 4: Just Read */}
          <ProjectSection 
            number="04"
            title="Just Read" 
            bgColor="bg-eggshell"
            description="Just Read ist eine Tablet-App, die ich in meiner Freizeit als eigenständiges Projekt entwickelt habe. Ausgangspunkt war mein persönlicher Wunsch, wieder bewusster und häufiger zu lesen. Lesen bedeutet für mich Ruhe, Entschleunigung und eine gewisse Nähe zur Natur. Qualitäten, die im digitalen Alltag zunehmend verloren gehen."
          >
            <div className="w-[820px] h-[1180px] shrink-0 rounded-3xl overflow-hidden bg-white border border-charcoal/5">
              <iframe 
                style={{ border: 'none' }} 
                width="100%" 
                height="100%" 
                src="https://embed.figma.com/proto/w3BkClzcwuocXmZcyWsrwX/tree-s-and-more?page-id=7%3A226&node-id=7-558&viewport=528%2C-17%2C0.33&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7%3A558&embed-host=share" 
                allowFullScreen
              ></iframe>
            </div>
          </ProjectSection>

          {/* Project 5: Quick-Start-Guide */}
          <ProjectSection 
            number="05"
            title="Quick-Start-Guide" 
            bgColor="bg-white"
            description="Mein neuestes Studioprojekt. Hintergrund war eine interaktive Präsentation eines 3D-Stifts auf einem 3D-Bildschirm. Das Ziel war eine nutzerzentrierte Informationsprodukt zu erstellen."
          >
            <div className="flex flex-col gap-8 w-[820px] shrink-0">
              <div className="rounded-3xl overflow-hidden border border-charcoal/5 bg-white">
                <img 
                  src="C:\Users\ranel\OneDrive\Dokumente\Bewerbung\Neu\Portfolio\Portfolio\bilder\vorder.png" 
                  alt="Quick-Start-Guide Vorderseite" 
                  className="w-full h-auto" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="rounded-3xl overflow-hidden border border-charcoal/5 bg-white">
                <img 
                  src="C:\Users\ranel\OneDrive\Dokumente\Bewerbung\Neu\Portfolio\Portfolio\bilder\innenseite.png" 
                  alt="Quick-Start-Guide Innenseite" 
                  className="w-full h-auto" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            </div>
          </ProjectSection>
        </div>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="py-64 px-8 md:px-24 bg-eggshell min-h-[80vh] flex flex-col justify-center"
        >
          <div className="max-w-[1800px] mx-auto w-full">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold mb-24 max-w-none md:whitespace-nowrap"
            >
              Ein Interface ist kein Gemälde, sondern ein Dialog.
            </motion.h2>
            <div className="grid lg:grid-cols-4 gap-32 items-end mb-24">
              <div className="lg:col-span-2">
                <h3 className="text-6xl font-bold">Kontakt</h3>
              </div>
              <div className="lg:col-span-2 space-y-4 text-right">
                <div className="flex justify-end items-baseline gap-4">
                  <span className="text-charcoal/40 text-2xl">mail:</span>
                  <a href="mailto:ranellucci.n@gmail.com" className="text-4xl md:text-5xl font-bold hover:text-darkred transition-colors">ranellucci.n@gmail.com</a>
                </div>
                <div className="flex justify-end items-baseline gap-4">
                  <span className="text-charcoal/40 text-2xl">Mobil:</span>
                  <span className="text-4xl md:text-5xl font-bold">0179 76 08 969</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center pb-12">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-darkred cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <ArrowUp size={32} />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Simple Footer */}
        <footer className="py-12 px-8 md:px-24 text-center text-charcoal/20 text-sm uppercase tracking-[0.5em]">
          Portfolio 2026 • Nico Ranellucci
        </footer>
      </main>
    </div>
  );
}
