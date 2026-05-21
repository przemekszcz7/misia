import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  ArrowRight, 
  Clock, 
  Menu as MenuIcon, 
  X, 
  ExternalLink,
  ChevronRight,
  Heart
} from 'lucide-react';
import { 
  RESTAURANT_INFO, 
  REGULAR_MENU_ITEMS, 
  MENU_CATEGORIES, 
  FACEBOOK_REVIEWS 
} from './data/menuData';
import { 
  BearFaceSvg, 
  BearPawSvg, 
  SunflowerSvg, 
  SteamWispsSvg, 
  WheatStalkSvg, 
  SparkleStarSvg, 
  HeartSvg 
} from './components/MisiaSvgs';
import { ScrollReveal, ScrollTriggeredUnderline } from './components/ScrollReveal';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'glowne' | 'zupy' | 'dodatki' | 'napoje'>('glowne');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Identify today's day from 0 to 6 (0 = Sunday, 1 = Monday...)
  const todayDayIndex = new Date().getDay();

  // Filter menu items by active tab
  const filteredMenuItems = REGULAR_MENU_ITEMS.filter(item => item.category === activeCategory);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8EE] text-[#2C2416] font-sans selection:bg-[#F5C842] selection:text-[#2C2416]">
      
      {/* 1. TOP ACCENT BAR (STRICT ACCENT RULE 1 - 6px yellow top bar) */}
      <div className="h-[6px] w-full bg-[#F5C842] sticky top-0 z-50" />

      {/* STICKY HEADER */}
      <header className="sticky top-[6px] z-45 bg-[#FDF8EE]/90 backdrop-blur-md border-b border-[#2C2416]/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              {/* STRICT ACCENT RULE 2 - Logo bear: yellow fill */}
              <BearFaceSvg className="w-10 h-10 antialiased" color="#F5C842" />
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-handwritten text-3xl font-bold text-[#2C2416] leading-none">Misia</span>
                </div>
                <div className="font-display text-xs tracking-wider uppercase font-semibold text-[#7A6845] -mt-1">
                  Obiady Domowe
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('danie-dnia')} 
                className="font-sans font-semibold text-sm text-[#2C2416]/80 hover:text-[#2C2416] transition-colors flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A420] animate-pulse"></span>
                Danie Dnia
              </button>
              <button 
                onClick={() => scrollToSection('pełne-menu')} 
                className="font-sans font-semibold text-sm text-[#2C2416]/80 hover:text-[#2C2416] transition-colors"
              >
                Karta Menu
              </button>
              <button 
                onClick={() => scrollToSection('godziny-otwarcia')} 
                className="font-sans font-semibold text-sm text-[#2C2416]/80 hover:text-[#2C2416] transition-colors"
              >
                Godziny
              </button>
              <button 
                onClick={() => scrollToSection('opinie')} 
                className="font-sans font-semibold text-sm text-[#2C2416]/80 hover:text-[#2C2416] transition-colors"
              >
                Opinie
              </button>
              <button 
                onClick={() => scrollToSection('kontakt')} 
                className="font-sans font-semibold text-sm text-[#2C2416]/80 hover:text-[#2C2416] transition-colors"
              >
                Kontakt
              </button>
            </nav>

            {/* Call Action Button */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href={`tel:${RESTAURANT_INFO.phoneFormatted}`}
                className="flex items-center gap-2 border-2 border-[#2C2416] px-4.5 py-1.5 rounded-full font-sans font-semibold text-sm hover:bg-[#2C2416] hover:text-[#FDF8EE] transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
            </div>

            {/* Mobile Hamburger menu */}
            <div className="flex md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#2C2416] hover:text-[#D4A420] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDF8EE] border-b border-[#2C2416]/10 px-4 pt-2 pb-6 space-y-3">
            <button 
              onClick={() => scrollToSection('danie-dnia')}
              className="block w-full text-left py-2 font-display text-lg font-bold text-[#2C2416] border-b border-[#2C2416]/5 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4A420] inline-block animate-pulse"></span>
              Dzisiejsze Danie Dnia
            </button>
            <button 
              onClick={() => scrollToSection('pełne-menu')}
              className="block w-full text-left py-2 font-display text-lg font-bold text-[#2C2416] border-b border-[#2C2416]/5"
            >
              Karta Menu
            </button>
            <button 
              onClick={() => scrollToSection('godziny-otwarcia')}
              className="block w-full text-left py-2 font-display text-lg font-bold text-[#2C2416] border-b border-[#2C2416]/5"
            >
              Godziny Otwarcia
            </button>
            <button 
              onClick={() => scrollToSection('opinie')}
              className="block w-full text-left py-2 font-display text-lg font-bold text-[#2C2416] border-b border-[#2C2416]/5"
            >
              Opinie Gości
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="block w-full text-left py-2 font-display text-lg font-bold text-[#2C2416] pb-4"
            >
              Kontakt & Lokalizacja
            </button>
            <a 
              href={`tel:${RESTAURANT_INFO.phoneFormatted}`}
              className="flex items-center justify-center gap-3 w-full bg-[#F5C842] text-[#2C2416] font-sans font-bold py-3.5 rounded-xl border border-[#2C2416]/10"
            >
              <Phone className="w-5 h-5" />
              <span>Zadzwoń: {RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-gingham">
        
        {/* Sparkle Stars Animation in Hero - STRICT ACCENT RULE 6 particles with twinkling parameters */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <SparkleStarSvg className="absolute w-5 h-5 top-[15%] left-[10%]" style={{ animation: 'twinkle 2s ease-in-out infinite' }} />
          <SparkleStarSvg className="absolute w-4 h-4 top-[35%] right-[15%]" style={{ animation: 'twinkle 2.8s ease-in-out infinite 0.5s' }} />
          <SparkleStarSvg className="absolute w-6 h-6 bottom-[40%] left-[25%]" style={{ animation: 'twinkle 3.2s ease-in-out infinite 1.2s' }} />
          <SparkleStarSvg className="absolute w-3 h-3 top-[65%] left-[8%]" style={{ animation: 'twinkle 2.4s ease-in-out infinite 0.8s' }} />
          <SparkleStarSvg className="absolute w-5 h-5 bottom-[25%] right-[22%]" style={{ animation: 'twinkle 4s ease-in-out infinite 1.5s' }} />
          <SparkleStarSvg className="absolute w-4 h-4 top-[10%] right-[38%]" style={{ animation: 'twinkle 3.5s ease-in-out infinite 0.2s' }} />
        </div>

        {/* Slow rotating Sunflower SVG - STRICT SEC 4 - Rotating sunflower */}
        <div className="absolute right-[-20px] top-[40px] md:right-[5%] md:top-[80px] pointer-events-none z-10 hidden sm:block">
          <div className="p-4 bg-[#F7F0DC]/40 rounded-full border border-[#2C2416]/5 backdrop-blur-sm">
            <SunflowerSvg className="w-20 h-20 md:w-32 md:h-32" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl lg:max-w-4xl text-left">
            
            {/* Soft decorative human detail */}
            <span className="inline-block px-3.5 py-1 bg-[#F5C842]/12 border border-[#F5C842]/30 rounded-full font-sans font-semibold text-[#7A6845] text-xs tracking-wide uppercase mb-6">
              Najlepszy Bar Mleczny & Domowy w Szczecinie
            </span>
            
            {/* Hero Heading - clamp formula requested, elegant serif */}
            <h1 className="font-display text-[40px] sm:text-[60px] md:text-[85px] font-extrabold text-[#2C2416] tracking-tight leading-[1.05] mb-6">
              Obiady <span className="font-display italic font-normal text-[#8B6A3A]">jak u mamy</span>, najlepsze w Szczecinie
            </h1>

            {/* STRICT ACCENT RULE 3 - One yellow horizontal line 50px, 3px under heading */}
            <div className="w-[50px] h-[3px] bg-[#F5C842] rounded-full mb-8" />

            <p className="font-sans text-lg sm:text-xl md:text-2xl text-[#7A6845] leading-relaxed mb-10 max-w-2xl">
              Tradycyjne polskie smaki przygotowywane według przepisów przekazywanych z pokolenia na pokolenie. Prawdziwe masło, świeże warzywa z rynku i serce wkładane w każdy talerz.
            </p>

            {/* Hero buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* STRICT ACCENT RULE 5 - CTA Primary: --yellow bg, --dark text */}
              <button 
                onClick={() => scrollToSection('danie-dnia')}
                className="bg-[#F5C842] hover:bg-[#D4A420] text-[#2C2416] font-sans font-bold px-8 py-4.5 rounded-xl shadow-lg shadow-[#F5C842]/10 transition-colors text-center cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Zobacz dzisiejsze Danie Dnia</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('pełne-menu')}
                className="bg-transparent border-2 border-[#2C2416] hover:bg-[#2C2416] hover:text-[#FDF8EE] text-[#2C2416] font-sans font-semibold px-8 py-4.5 rounded-xl transition-all duration-300 text-center cursor-pointer"
              >
                Przeglądaj całą kartę
              </button>
            </div>

            {/* Human handcrafted accent notes */}
            <div className="mt-14 pt-10 border-t border-[#2C2416]/10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
              <div>
                <span className="block font-display text-2xl font-bold text-[#2C2416]">100%</span>
                <span className="font-sans text-xs text-[#7A6845] uppercase tracking-wider">Naturalne Surowce</span>
              </div>
              <div>
                <span className="block font-display text-2xl font-bold text-[#2C2416]">Codziennie</span>
                <span className="font-sans text-xs text-[#7A6845] uppercase tracking-wider">Nowe Danie Dnia</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-display text-2xl font-bold text-[#2C2416]">Plac Kilińskiego</span>
                <span className="font-sans text-xs text-[#7A6845] uppercase tracking-wider">Szczecińska Tradycja</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PROSE SECTION (Dlaczego My?) - Tight padding, 3 columns, NO icons */}
      <section id="dlaczego-my" className="bg-[#F7F0DC] py-14 border-t border-b border-[#2C2416]/5 bg-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
            
            {/* Column 1: Abonament */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8B6A3A]">Poręczny Abonament</span>
              <h3 className="font-display text-2xl font-bold text-[#2C2416] leading-snug">
                Jedz zdrowo, oszczędzaj mądrze
              </h3>
              <p className="font-sans text-[#7A6845] leading-relaxed">
                Stworzyliśmy elastyczny system abonamentowy z myślą o osobach jedzących regularnie. Wybierz swój pakiet obiadów miesięcznie i ciesz się domowymi smakami w obniżonej, optymalnej cenie. Bez gotowania, bez zmywania!
              </p>
            </div>

            {/* Column 2: Danie dnia */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8B6A3A]">Codzienna Niespodzianka</span>
              <h3 className="font-display text-2xl font-bold text-[#2C2416] leading-snug">
                Danie dnia, które cieszy i syci
              </h3>
              <p className="font-sans text-[#7A6845] leading-relaxed">
                Codziennie od rana nasi kucharze przygotowują unikalne, świeże kompozycje złożone z puszystej zupy oraz obfitego drugiego dania. Szybki, pyszny i zrównoważony posiłek codziennie dopasowany do pory roku i humoru kuchni.
              </p>
            </div>

            {/* Column 3: Catering */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8B6A3A]">Catering dla Szczecina</span>
              <h3 className="font-display text-2xl font-bold text-[#2C2416] leading-snug">
                Smak „Misi” na Twojej uroczystości
              </h3>
              <p className="font-sans text-[#7A6845] leading-relaxed">
                Dostarczamy pełnowartościowy, gorący catering do biur, zakładów pracy oraz na domowe chrzciny, komunie czy rodzinne spotkania. Zadbamy o to, aby nikt przy stole nie wyszedł głodny. Przygotujemy potrawy dokładnie pod Twoje wytyczne.
              </p>
            </div>

          </div>
          
        </div>
      </section>

      {/* 4. CHALKBOARD / DZISIAJ DANIE DNIA (Full width, warm dark, wood grain texture, chalkboard style) */}
      <section id="danie-dnia" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-wood text-[#FDF8EE] overflow-hidden">
        
        <div className="max-w-4xl mx-auto relative z-20">
          
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="font-handwritten text-[#F5C842] text-xl antialiased">Domowa Kuchnia na Dziś</span>
              <h2 className="font-display text-4xl font-bold text-[#FDF8EE] mt-2 tracking-tight">
                Tablica Dzisiejszych Specjałów
              </h2>
              <div className="w-[100px] h-[1px] bg-[#F5C842]/30 mx-auto mt-4" />
            </div>

            {/* Chalkboard Card with deliberate imperfection: box shadow 4px 4px 0 --yellow */}
            <div className="bg-[#1C160F] border-4 border-[#3A3020] rounded-2xl p-6 sm:p-10 relative overflow-hidden" style={{ boxShadow: '5px 5px 0px #F5C842' }}>
              
              {/* Wooden chalk tray aesthetic lines at the top */}
              <div className="absolute top-0 inset-x-0 h-2 bg-[#2D2316] opacity-80" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Chalk Details */}
                <div className="lg:col-span-8 text-left space-y-6">
                  
                  {/* Handwritten Special highlight ONLY IN THE CHALKBOARD */}
                  <div className="inline-block bg-[#F5C842]/10 border border-[#F5C842]/30 px-3 py-1 rounded-md">
                    <span className="font-handwritten text-[#F5C842] text-lg">Dzisiaj serwujemy słoneczny obiad:</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#FDF8EE] tracking-tight leading-tight">
                    {RESTAURANT_INFO.todaySpecial.mainDish}
                  </h3>

                  <div className="space-y-3">
                    <span className="block font-sans text-xs uppercase tracking-wider text-[#FDF8EE]/60">W cenie dwie zupy domowe do wyboru:</span>
                    <div className="flex flex-wrap gap-3">
                      {RESTAURANT_INFO.todaySpecial.soups.map((zupa, idx) => (
                        <div key={idx} className="bg-[#FDF8EE]/10 rounded-full px-4 py-1.5 border border-[#FDF8EE]/15 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F5C842]" />
                          <span className="font-sans text-sm sm:text-base font-semibold text-[#FDF8EE]">{zupa}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bullet Tags */}
                  <div className="pt-4 flex flex-wrap gap-2 text-xs text-[#FDF8EE]/70">
                    {RESTAURANT_INFO.todaySpecial.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white/5 px-2.5 py-1 rounded">#{tag}</span>
                    ))}
                  </div>

                </div>

                {/* Chalk Price Column */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#251E14] rounded-xl border border-[#FDF8EE]/10 text-center relative">
                  
                  <span className="font-sans text-xs uppercase tracking-widest text-[#FDF8EE]/50 mb-2">Kompletny Zestaw</span>
                  
                  {/* Price in precise DM Mono as requested */}
                  <div className="font-mono text-4xl sm:text-5xl font-bold text-[#F5C842] mb-1">
                    31 zł
                  </div>
                  
                  <span className="font-handwritten text-[#F5C842]/80 text-base leading-none">najlepsza cena w mieście</span>
                  
                  <div className="w-full border-t border-[#FDF8EE]/10 my-4" />
                  
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneFormatted}`}
                    className="w-full bg-[#F5C842] hover:bg-[#D4A420] text-[#2C2416] font-sans font-bold py-3 px-4 rounded-lg text-sm block transition-colors shadow-md"
                  >
                    Zarezerwuj obiad
                  </a>
                </div>

              </div>

              {/* Handcrafted little note */}
              <div className="mt-8 pt-6 border-t border-[#FDF8EE]/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FDF8EE]/50 gap-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#F5C842]" />
                  Rozpoczęcie wydawania od godziny 11:00 aż do wyczerpania zapasów.
                </span>
                <span className="italic font-sans text-right">Zadzwoń i dowiedz się, co ugotowaliśmy jutro!</span>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 5. KULINARNA KARTA (Pełne menu) */}
      <section id="pełne-menu" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FDF8EE] relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col items-center text-center justify-center mb-14 relative">
            {/* Inline SVG - STEAM WISPS above heading */}
            <div className="absolute top-[-30px] flex gap-1 opacity-70">
              <SteamWispsSvg className="w-6 h-10 text-[#F5C842]" />
              <SteamWispsSvg className="w-6 h-10 text-[#F5C842] scale-x-[-1] translate-y-3" />
            </div>

            <span className="font-sans text-xs uppercase tracking-widest font-bold text-[#8B6A3A] mt-8 mb-2">Tradycyjny Jadłospis</span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#2C2416] tracking-tight">
              Nasza Stała Karta Dań
            </h2>
            <div className="w-[120px] h-[1px] bg-[#2C2416]/10 mt-4" />
          </div>

          {/* Menu Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto mb-10">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-5 py-2.5 rounded-lg font-sans font-bold text-sm transition-all cursor-pointer ${
                  activeCategory === cat.id 
                    ? 'bg-[#2C2416] text-[#FDF8EE] shadow-md shadow-[#2C2416]/10' 
                    : 'bg-[#F7F0DC] text-[#2C2416]/80 hover:bg-[#F0E6C8] hover:text-[#2C2416]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Grid - One card slightly wider/highlighted for deliberate imperfection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
            {filteredMenuItems.map((item, idx) => {
              // Deliberate imperfection: One card in the menu is slightly wider or styled differently (e.g., index 0)
              const isHighlight = idx === 0 && activeCategory === 'glowne';

              return (
                <div 
                  key={item.id}
                  className={`bg-[#FDF8EE] p-6 rounded-xl border border-[#2C2416]/10 transition-all duration-300 relative group flex flex-col justify-between ${
                    isHighlight 
                      ? 'lg:col-span-2 border-2 border-[#F5C842] shadow-md shadow-[#F5C842]/5' 
                      : 'shadow-sm shadow-[#2C2416]/3'
                  }`}
                  style={{
                    // STRICT ACCENT RULE 6 - Card top border on light sections (if not highlight)
                    borderTop: !isHighlight ? '2px solid #F5C842' : undefined
                  }}
                >
                  {/* STRICT ACCENT RULE 7 - Hover border left: 3px --yellow on cards */}
                  <div className="absolute left-0 top-0 bottom-0 w-0 bg-[#F5C842] transition-all duration-300 group-hover:w-[3px]" />

                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h4 className="font-display text-xl font-bold text-[#2C2416] group-hover:text-[#8B6A3A] transition-colors leading-tight">
                        {item.name}
                      </h4>
                      {/* STRICT ACCENT RULE 8 - Price is DM Mono --yellow-deep */}
                      <span className="font-mono text-lg font-bold text-[#D4A420] shrink-0 bg-[#F7F0DC] px-2.5 py-0.5 rounded">
                        {item.price} zł
                      </span>
                    </div>

                    <p className="font-sans text-sm text-[#7A6845] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#2C2416]/5 flex items-center justify-between text-xs text-[#7A6845]">
                    <span className="font-sans uppercase tracking-wider text-[10px]">Lokalne składniki</span>
                    <span className="bg-[#F7F0DC]/80 px-2 py-0.5 rounded text-[10px]">Codziennie rano lepione</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call-to-action note below the menu list */}
          <div className="mt-12 bg-[#F7F0DC] border border-[#2C2416]/5 rounded-xl p-6 text-center max-w-2xl mx-auto relative z-10 bg-linen">
            <span className="block font-display text-lg font-bold mb-2">Abonamenty Obiadowe Szczecin</span>
            <p className="font-sans text-sm text-[#7A6845] leading-relaxed">
              Zajrzyj do nas, żeby zapytać o aktualne równe stawki abonamentu miesięcznego. Oferujemy pełne drugie dania z zupą już od <b>26 zł</b> za zestaw w abonamencie!
            </p>
          </div>

        </div>
      </section>



      {/* STRICT ACCENT RULE 9 - One sparkle row separating two sections */}
      <div className="bg-[#FDF8EE] py-4 border-t border-b border-[#2C2416]/5 flex justify-center items-center gap-7 text-[#F5C842] overflow-hidden">
        <SparkleStarSvg className="w-3.5 h-3.5 animate-pulse" />
        <span className="font-display text-sm tracking-widest text-[#7A6845] uppercase font-semibold">Tradycja • Smak • Rodzina</span>
        <SparkleStarSvg className="w-3.5 h-3.5 animate-pulse" />
        <span className="hidden sm:inline font-display text-sm tracking-widest text-[#7A6845] uppercase font-semibold">Plac Kilińskiego Szczecin</span>
        <SparkleStarSvg className="hidden sm:inline w-3.5 h-3.5 animate-pulse" />
      </div>

      {/* 7. GODZINY OTWARCIA (Hours of Operation - minimal, almost no design, clear information) */}
      <section id="godziny-otwarcia" className="py-20 bg-[#FDF8EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="font-sans text-xs uppercase tracking-widest font-bold text-[#8B6A3A]">Kiedy Gotujemy</span>
              
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#2C2416] mt-1 relative inline-block">
                Nasze Godziny Pracy
              </h2>
              
              {/* Scoll Triggered Underline - Section 1 */}
              <ScrollTriggeredUnderline className="mx-auto mt-3" />
            </div>

            <div className="bg-[#F7F0DC]/70 border border-[#2C2416]/5 rounded-2xl p-6 sm:p-10 max-w-xl mx-auto bg-linen">
              
              <div className="space-y-4">
                {RESTAURANT_INFO.hours.map((item) => {
                  // Identify if this item represents the day of today to add highlight
                  const isCurrentDay = todayDayIndex === item.index;

                  return (
                    <div 
                      key={item.day}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all ${
                        isCurrentDay 
                          ? 'bg-[#2C2416] text-[#FDF8EE] font-bold shadow-md' 
                          : 'border-b border-[#2C2416]/5 hover:bg-[#FDF8EE]/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isCurrentDay && <span className="w-2 h-2 rounded-full bg-[#F5C842] animate-ping" />}
                        <span className="font-sans text-base sm:text-lg">{item.day}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {isCurrentDay && item.open && (
                          <span className="text-xs bg-[#F5C842] text-[#2C2416] py-0.5 px-2.5 rounded-full font-bold uppercase tracking-wider mr-2">
                            Otwarte dziś
                          </span>
                        )}
                        <span className="font-sans text-base sm:text-lg">{item.time}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-[#2C2416]/5 text-center text-xs text-[#7A6845] leading-relaxed">
                W soboty, niedziele oraz święta odpoczywamy i zbieramy siły, aby od poniedziałku zaserwować Wam przepyszne, świeże obiady domowe.
              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 8. OPINIE Z FACEBOOKA (Staggered typography, not cards - Scoll triggered underline on heading) */}
      <section id="opinie" className="py-24 bg-[#F7F0DC] relative bg-linen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="font-sans text-xs uppercase tracking-widest font-bold text-[#8B6A3A]">Słowa naszych gości</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#2C2416] mt-1 relative inline-block">
                Opinie bezpośrednio z Facebooka
              </h2>
              {/* Scoll Triggered Underline - Section 2 */}
              <ScrollTriggeredUnderline className="mx-auto mt-3" />
            </div>

            {/* Staggered non-grid review representation */}
            <div className="space-y-12 max-w-4xl mx-auto">
              
              {FACEBOOK_REVIEWS.map((review, idx) => {
                // Alternating side margins for a natural layout surprise instead of structured repeating grids
                const alignmentClass = idx % 2 === 0 ? 'text-left md:mr-32' : 'text-right md:ml-32 md:text-right';

                return (
                  <div key={review.id} className={`space-y-3 relative group ${alignmentClass}`}>
                    
                    {/* Visual indicators */}
                    <div className="inline-block relative">
                      <span className="font-display text-7xl text-[#F5C842]/30 absolute -top-8 -left-5 cursor-default select-none">“</span>
                      <p className="font-display text-xl sm:text-2xl font-bold italic text-[#2C2416] relative z-10 leading-relaxed pt-2">
                        {review.text}
                      </p>
                    </div>

                    <div className={`flex items-center gap-2 text-xs text-[#7A6845] justify-start ${idx % 2 !== 0 ? 'md:justify-end' : 'justify-start'}`}>
                      <span className="w-6 h-6 rounded-full bg-[#2C2416] text-[#FDF8EE] font-bold text-[10px] flex items-center justify-center">
                        {review.avatar}
                      </span>
                      <span className="font-bold text-[#2C2416]">{review.name}</span>
                      <span>•</span>
                      <span>Najwyższa opinia (5/5)</span>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* Visit reviews on Facebook Button */}
            <div className="text-center mt-16">
              <a 
                href={RESTAURANT_INFO.reviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#2C2416] hover:bg-[#3A3020] text-[#FDF8EE] font-sans font-bold px-7 py-3.5 rounded-xl text-sm shadow-md transition-all cursor-pointer"
              >
                <Facebook className="w-4 h-4 fill-current" />
                <span>Przeczytaj opinie na Facebooku</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 9. KONTAKT & MAP */}
      <section id="kontakt" className="py-24 bg-[#FDF8EE] border-t border-[#2C2416]/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Contact details box */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left">
              
              <div>
                <span className="font-sans text-xs uppercase tracking-widest font-bold text-[#8B6A3A] block mb-2">Zapraszamy serdecznie</span>
                <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#2C2416] tracking-tight">
                  U nas zawsze poczujesz się u siebie
                </h2>
                <div className="w-[60px] h-[2px] bg-[#F5C842] mt-4" />
              </div>

              {/* Physical details list */}
              <div className="space-y-6">
                
                {/* Mail address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F7F0DC] rounded-xl border border-[#2C2416]/5 text-[#2C2416] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-sm text-[#2C2416] uppercase tracking-wider">Nasz Adres</h5>
                    <p className="font-sans text-base text-[#7A6845] mt-1 leading-relaxed">
                      {RESTAURANT_INFO.location}, <br />
                      <span className="text-sm italic">{RESTAURANT_INFO.additionalAddressInfo}</span> <br />
                      {RESTAURANT_INFO.postcode} {RESTAURANT_INFO.city}
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F7F0DC] rounded-xl border border-[#2C2416]/5 text-[#2C2416] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-sm text-[#2C2416] uppercase tracking-wider">Telefon kontaktowy</h5>
                    <p className="font-sans text-lg font-bold text-[#2C2416] mt-1">
                      {RESTAURANT_INFO.phone}
                    </p>
                    <a 
                      href={`tel:${RESTAURANT_INFO.phoneFormatted}`}
                      className="font-sans text-xs text-[#D4A420] hover:underline flex items-center gap-1 mt-1 font-semibold"
                    >
                      Tapnij tutaj, aby zadzwonić i złożyć zamówienie
                    </a>
                  </div>
                </div>

                {/* Email address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F7F0DC] rounded-xl border border-[#2C2416]/5 text-[#2C2416] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-sm text-[#2C2416] uppercase tracking-wider">Wyślij E-mail</h5>
                    <a 
                      href={`mailto:${RESTAURANT_INFO.email}`}
                      className="font-sans text-base text-[#7A6845] hover:text-[#2C2416] underline mt-1 block"
                    >
                      {RESTAURANT_INFO.email}
                    </a>
                  </div>
                </div>

              </div>

              {/* Action buttons list */}
              <div className="pt-4 flex flex-wrap gap-4">
                <a 
                  href={`tel:${RESTAURANT_INFO.phoneFormatted}`}
                  className="bg-[#F5C842] hover:bg-[#D4A420] text-[#2C2416] px-6 py-3.5 rounded-xl font-sans font-bold text-sm inline-flex items-center gap-2 shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Zadzwoń do nas</span>
                </a>
                <a 
                  href={RESTAURANT_INFO.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-transparent border border-[#2C2416] hover:bg-[#2C2416] hover:text-[#FDF8EE] text-[#2C2416] px-6 py-3.5 rounded-xl font-sans font-semibold text-sm inline-flex items-center gap-2 transition-all"
                >
                  <Facebook className="w-4 h-4 fill-current" />
                  <span>Nasz Profil Facebook</span>
                </a>
              </div>

            </div>

            {/* Embedded Google Map iframe with bespoke wooden outline border */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div 
                className="w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden border-4 border-[#3A3020] shadow-lg relative bg-[#F7F0DC]"
                style={{ boxShadow: '6px 6px 0px rgba(44, 36, 22, 0.08)' }}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.5413975263245!2d14.545661777159776!3d53.44090766764342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa0942001cedd1%3A0xcd4a3f282887447d!2splac%20Kili%C5%84skiego%201%2C%2071-414%20Szczecin!5e0!3m2!1spl!2spl!4v1779349915242!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Baru Misia"
                ></iframe>
              </div>
              <span className="block mt-3 text-xs text-center text-[#7A6845] italic">
                Wygodny dojazd komunikacją miejską oraz bezpłatne miejsca parkingowe wokół pawilonów.
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 10. FOOTER SECTION */}
      {/* STRICT ACCENT RULE 11 - Footer top border: 3px --yellow */}
      <footer className="bg-[#1A1510] text-[#FDF8EE] pt-16 pb-8 border-t-[3px] border-[#F5C842]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#FDF8EE]/10">
            
            {/* Column 1: Logo and motto */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
                {/* Bear Svg logo - 2nd copy */}
                <BearFaceSvg className="w-11 h-11" color="#F5C842" />
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-handwritten text-4xl font-bold text-[#FDF8EE]">Misia</span>
                  </div>
                  <div className="font-display text-xs tracking-wider uppercase font-semibold text-[#F5C842] -mt-1">
                    Obiady Domowe
                  </div>
                </div>
              </div>
              
              <p className="font-sans text-sm text-[#FDF8EE]/70 max-w-sm leading-relaxed">
                Prawdziwe domowe smaki, na które zasługujesz. Gotujemy codziennie i karmimy z dumą mieszkańców Szczecina. Zapraszamy do nas na Plac Kilińskiego.
              </p>
            </div>

            {/* Column 2: Fast links */}
            <div>
              <h4 className="font-display text-lg font-bold text-[#FDF8EE] mb-4">Szybkie skróty</h4>
              <ul className="space-y-2 text-sm text-[#FDF8EE]/70 font-sans">
                <li>
                  <button onClick={() => scrollToSection('danie-dnia')} className="hover:text-[#F5C842] transition-colors">
                    Dzisiejsze danie dnia
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('pełne-menu')} className="hover:text-[#F5C842] transition-colors">
                    Pełna oferta dań
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('godziny-otwarcia')} className="hover:text-[#F5C842] transition-colors">
                    Godziny otwarcia
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('kontakt')} className="hover:text-[#F5C842] transition-colors">
                    Kontakt & Dojazd
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Social & coordinates */}
            <div className="space-y-4">
              <h4 className="font-display text-lg font-bold text-[#FDF8EE] mb-4">Dołącz do nas</h4>
              <p className="font-sans text-sm text-[#FDF8EE]/70 leading-relaxed">
                Śledź nasz profil na social media, by każdego dnia o godzinie 10:30 poznać aktualny obiad dnia oraz promocje abonamentowe!
              </p>
              
              <div className="pt-2">
                <a 
                  href={RESTAURANT_INFO.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#F5C842] hover:bg-[#D4A420] text-[#2C2416] p-3 rounded-xl inline-flex items-center gap-2 font-sans font-bold text-xs"
                >
                  <Facebook className="w-4 h-4 fill-current" />
                  <span>Polub nas na Facebooku</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom attribution block */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FDF8EE]/55 gap-4">
            
            {/* Simple heart inside footer metadata - STRICT SEC */}
            <p className="flex items-center gap-1.5 font-sans">
              <span>© {new Date().getFullYear()} {RESTAURANT_INFO.fullName}. Wszelkie prawa zastrzeżone.</span>
            </p>

            <span className="flex items-center gap-2 py-1 px-3 bg-white/5 border border-white/5 rounded-full">
              <span>Przygotowano z</span>
              <HeartSvg className="w-3.5 h-3.5 text-[#F5C842] animate-pulse inline-block" />
              <span>dla naszych Gości w Szczecinie</span>
            </span>

          </div>

        </div>
      </footer>

    </div>
  );
}
