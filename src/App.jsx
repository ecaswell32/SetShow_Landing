import React, { useState, useEffect, useRef } from 'react';
import { Bell, Clock, CheckCircle2, Layout, Users, Zap, ShieldCheck, Camera, Flashlight, Plus, Smartphone, Monitor, Watch, Activity, TrendingUp, BarChart3 } from 'lucide-react';
import logoOrange from './assets/logo-full-orange.png';
import logoBlack from './assets/logo-full-black.png';
import { PrivacyPolicy } from './PrivacyPolicy.jsx';
import { FAQ } from './FAQ.jsx';
// Screen captures
import imgMobileLiveActivity from './assets/screengrabs/Mobile_LiveActivity_SetShowBG.png';
import imgMobileDynamicIsland from './assets/screengrabs/Mobile_DynamicIsland.png';
import imgAppleWatchUltraLive from './assets/screengrabs/AppleWatchUltra_LiveScreen.png';
import imgAppleWatchUltraSchedule from './assets/screengrabs/AppleWatchUltra_Schedule.png';
import imgAppleWatchUltraProductionDetails from './assets/screengrabs/AppleWatchUltra_ProductionDetails.png';
import imgMacBookStageDisplay from './assets/screengrabs/MacBook_StageDisplay.png';
import imgWebStageDisplay from './assets/screengrabs/Web_StageDisplay.png';
import imgMobileSchedule from './assets/screengrabs/Mobile_Schedule.png';
import imgMobileDashboard from './assets/screengrabs/Mobile_Dashboard.png';
import imgMobileMessageBoard from './assets/screengrabs/Mobile_MessageBoard.png';
import imgMobileCrewList from './assets/screengrabs/Mobile_CrewList.png';
import imgWebEditSchedule from './assets/screengrabs/Web_EditSchedule.png';
import imgWebStripboard from './assets/screengrabs/Web_Stripboard.png';
import imgMobileProductionAnalytics from './assets/screengrabs/Mobile_ProductionAnalytics.png';
import imgMobileProductionAnalyticsTimeline from './assets/screengrabs/Mobile_ProductionAnalytics_Timeline.png';

export const FadeIn = ({ children, delay = 0, className = "", repeat = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!repeat && domRef.current) observer.unobserve(domRef.current);
        } else if (entry.boundingClientRect.top < 0) {
          // Element is above the viewport: keep it visible so scrolling up doesn't re-trigger animation
          setIsVisible(true);
        } else if (repeat) {
          // Element is below the viewport: reset so scrolling down into it triggers animation
          setIsVisible(false);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px' });

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => current && observer.unobserve(current);
  }, [repeat]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-[0.98]'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const SetShowMarkCropped = ({ src = logoOrange, className = "w-6 h-6", filterClass = "" }) => (
  <div className={`relative overflow-hidden shrink-0 ${className}`}>
    <img
      src={src}
      className={`absolute inset-0 h-full w-auto max-w-none object-left object-cover ${filterClass}`}
      alt="Mark"
      style={{ aspectRatio: 'auto' }}
    />
  </div>
);

export const AppleLogo = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.28c.66-.82 1.11-1.96.99-3.1-.96.04-2.18.66-2.87 1.47-.61.71-1.14 1.88-1 3 .02.01 1.06.05 2.88-1.37z" />
  </svg>
);

export const GooglePlayLogo = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M3.609 1.814L13.793 12 3.61 22.186c-.37-.367-.61-.884-.61-1.464V3.278c0-.58.24-1.097.609-1.464z"
      fill="#00D3FF"
    />
    <path
      d="M17.435 10.482l-2.58 2.58L5.105 3.396l12.33 7.086z"
      fill="#00F076"
    />
    <path
      d="M14.855 13.062l2.58 2.58-12.33 7.086 9.75-9.666z"
      fill="#FF3A44"
    />
    <path
      d="M18.378 11.425l3.666 2.106c.642.368.642.97 0 1.338l-3.666 2.106-2.222-2.222 2.222-2.228z"
      fill="#FFC400"
    />
  </svg>
);

export const AppleWatchCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { src: imgAppleWatchUltraLive, label: "Live Event", alt: "Apple Watch Ultra Live Event" },
    { src: imgAppleWatchUltraSchedule, label: "Schedule", alt: "Apple Watch Ultra Schedule" },
    { src: imgAppleWatchUltraProductionDetails, label: "Details", alt: "Apple Watch Ultra Production Details" },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Clickable Mockup to toggle */}
      <div
        onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
        className="relative w-[280px] sm:w-[320px] cursor-pointer select-none"
        title="Click to switch view"
      >
        <div className="relative w-full aspect-[766/1106]">
          {slides.map((slide, idx) => (
            <img
              key={idx}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)] transition-all duration-700 ease-in-out ${
                currentIndex === idx
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-95 pointer-events-none z-0"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Interactive Tabs / Indicator */}
      <div className="flex items-center gap-2 mt-4 bg-[#181818] p-1.5 rounded-full border border-white/10 shadow-lg">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase transition-all duration-300 cursor-pointer ${
              currentIndex === idx
                ? "bg-[#ff4a23] text-white shadow-[0_0_15px_rgba(255,74,35,0.4)] scale-100"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {slide.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    if (window.location.pathname === '/privacy') return 'privacy';
    if (window.location.pathname === '/faq') return 'faq';
    return 'landing';
  });
  const [scrollY, setScrollY] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(2); // Track hovered feature block
  const [galleryTab, setGalleryTab] = useState('mobile'); // 'mobile' | 'web' | 'watch'
  const [activeArchitecture, setActiveArchitecture] = useState('suite'); // 'suite' | 'scheduling'
  const [hoveredArchitecture, setHoveredArchitecture] = useState(null); // null | 'suite' | 'scheduling' | 'image'
  const isScheduling = hoveredArchitecture === 'scheduling' || hoveredArchitecture === 'image' || (hoveredArchitecture === null && activeArchitecture === 'scheduling');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [isWaitlistSubmitted, setIsWaitlistSubmitted] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/privacy') {
        setCurrentPage('privacy');
      } else if (window.location.pathname === '/faq') {
        setCurrentPage('faq');
      } else {
        setCurrentPage('landing');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page, path) => {
    setCurrentPage(page);
    window.history.pushState({}, '', path);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Countdown drops from 40 down to 0
  const countdown = Math.max(40 - Math.floor((scrollY / 6000) * 45), 0);
  // Progress bar mathematically maps to an hour scale (60 minutes total)
  const progressBarWidth = Math.min(((60 - countdown) / 60) * 100, 100);

  const formatTime = (val) => {
    return `${val}min`;
  };

  const heroProgress = Math.min(scrollY / 2800, 1);
  const phoneProgress = Math.min(heroProgress / 0.75, 1);
  const phoneRevealProgress = Math.max(0, Math.min((scrollY - 3000) / 1200, 1));

  const notificationOpacity = heroProgress > 0.4
    ? (heroProgress < 0.75
      ? Math.min((heroProgress - 0.4) * (1 / 0.15), 1)
      : Math.max(0, 1 - (heroProgress - 0.75) * 10))
    : 0;

  const showIslandCompact = heroProgress > 0.8;
  const showLiveActivity = heroProgress > 0.85;
  const liveActivityOpacity = heroProgress > 0.85 ? Math.min((heroProgress - 0.85) * 10, 1) : 0;

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => navigateTo('landing', '/')} onNavigate={navigateTo} />;
  }

  if (currentPage === 'faq') {
    return <FAQ onBack={() => navigateTo('landing', '/')} onNavigate={navigateTo} />;
  }

  return (
    <div className="min-h-screen bg-white text-[#0f0f0f] font-sans selection:bg-[#ff4a23] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40 rounded-full transition-all">
        <div className="px-5 sm:px-8 h-14 sm:h-16 flex items-center justify-between">
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
            {/* Primary Logo from uploaded files */}
            <img
              src={logoOrange}
              alt="SetShow"
              className="h-7 sm:h-8 w-auto"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden items-center gap-3">
              <SetShowMarkCropped className="w-6 h-6" />
              <span className="text-xl font-bold tracking-tight">SetShow</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-bold tracking-tight uppercase">
            <a href="#features" className="hover:text-[#ff4a23] transition-colors">Features</a>
            <a href="#workflow" className="hover:text-[#ff4a23] transition-colors">Workflow</a>
            <a href="#ecosystem" className="hover:text-[#ff4a23] transition-colors">Ecosystem</a>
            <a href="#analytics" className="hover:text-[#ff4a23] transition-colors">Analytics</a>
            <a href="#waitlist" className="bg-[#0f0f0f] text-white px-7 py-2.5 rounded-full hover:bg-[#ff4a23] transition-all inline-block font-black tracking-wider">
              JOIN WAITLIST
            </a>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <a href="#waitlist" className="bg-[#ff4a23] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-black transition-all">
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600vh] bg-white">
        <div className="sticky top-0 h-[100dvh] flex flex-col items-center pt-[15vh] sm:pt-[20vh] 2xl:pt-[22vh] overflow-hidden bg-white">
          {/* Hero Copy */}
          <div
            className="text-center z-10 transition-all duration-700 max-w-4xl px-4 sm:px-6 mb-8 sm:mb-12"
            style={{
              opacity: 1 - heroProgress * 2.5,
              transform: `translateY(${-heroProgress * 100}px)`
            }}
          >
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm font-black text-gray-500 uppercase tracking-widest mb-4 sm:mb-6 opacity-90">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#ff4a23]"></span> iOS</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#ff4a23]"></span> Watch</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#ff4a23]"></span> Web</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-[80px] lg:text-[100px] font-black tracking-tighter mb-4 sm:mb-6 leading-[0.85] uppercase italic px-2">
              GET YOUR <br /> SET <span className="text-[#ff4a23]">TOGETHER.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto font-medium px-4">
              Bridge the gap between Production and Crew with the industry's first live production relay.
            </p>
          </div>

          {/* iPhone Mockup */}
          <div
            className="absolute bottom-0 lg:bottom-[4vh] xl:bottom-[8vh] 2xl:bottom-[12vh] will-change-transform z-20"
            style={{
              transformOrigin: 'bottom center',
              transform: `scale(${0.75 + phoneProgress * 0.25}) translateY(${55 - phoneProgress * 55 - phoneRevealProgress * 15}%)`
            }}
          >
            <div className="w-[320px] h-[660px] bg-[#0f0f0f] rounded-[3.5rem] p-3 shadow-[0_0_100px_rgba(255,74,35,0.15)] border-[6px] border-[#1f1f1f] relative">
              <div className="w-full h-full rounded-[2.8rem] relative overflow-hidden flex flex-col items-center">

                {/* Authentic Orange Wallpaper from Notification.jpg */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#ff4a23] via-[#8B2914] to-[#0f0f0f]">
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 scale-[2]">
                    <SetShowMarkCropped className="w-64 h-64" filterClass="brightness-0" />
                  </div>
                </div>

                {/* Dynamic Island matching IMG_7512.jpg */}
                <div className={`absolute top-4 z-50 bg-black transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-full flex items-center overflow-hidden
                    ${showIslandCompact ? 'w-44 h-8 px-4' : 'w-24 h-8'}
                  `}>
                  {showIslandCompact ? (
                    <div className="w-full flex justify-between items-center">
                      <SetShowMarkCropped className="w-4 h-4" />
                      <span className="text-[#ff4a23] text-[10px] font-black italic tracking-widest">{formatTime(countdown)}</span>
                    </div>
                  ) : null}
                </div>

                {/* Lock Screen UI */}
                <div className="relative mt-24 text-center">
                  <p className="text-white text-lg font-medium mb-1 drop-shadow-md">Wednesday, July 6</p>
                  <h3 className="text-[88px] font-light text-white leading-none drop-shadow-lg tracking-tight">11:56</h3>
                </div>

                {/* Notifications Area */}
                <div className="absolute inset-x-4 top-[320px] z-30">
                  <div
                    className="w-full bg-white/80 backdrop-blur-3xl rounded-[1.6rem] p-4 shadow-xl transition-all duration-300"
                    style={{
                      opacity: notificationOpacity,
                      transform: `scale(${0.9 + notificationOpacity * 0.1}) translateY(${(1 - notificationOpacity) * 20}px)`
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-[#ff4a23] rounded-md flex items-center justify-center">
                          <SetShowMarkCropped className="w-3.5 h-3.5" filterClass="brightness-0 invert" />
                        </div>
                        <span className="text-[9px] font-black text-black/40 uppercase tracking-[0.2em]">SETSHOW</span>
                      </div>
                      <span className="text-[9px] text-black/30 font-bold">1m ago</span>
                    </div>
                    <p className="text-[14px] font-medium text-black/90 leading-tight">
                      Hey, lets start filming at 3pm on location A
                    </p>
                  </div>
                </div>

                {/* Live Activity bottom matching IMG_7512.jpg */}
                <div className="absolute inset-x-4 bottom-24 z-40">
                  <div
                    className="w-full bg-black/70 backdrop-blur-3xl rounded-[2rem] p-5 border border-white/10 shadow-2xl transition-all duration-500"
                    style={{
                      opacity: liveActivityOpacity,
                      transform: `translateY(${(1 - liveActivityOpacity) * 50}px)`
                    }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-1">
                          <span className="text-[#ff4a23] text-2xl font-black italic leading-none">{formatTime(countdown).replace('min', '')}</span>
                          <span className="text-[#ff4a23] text-[10px] font-black italic uppercase leading-none">min</span>
                        </div>
                        <span className="text-[8px] text-white/40 uppercase font-black tracking-widest mt-1">Remaining</span>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 justify-end mb-1">
                          <span className="text-[12px] font-black text-white/90">4a</span>
                          <SetShowMarkCropped className="w-4 h-4" />
                        </div>
                        <h4 className="text-[13px] font-black text-white leading-none uppercase tracking-tight">Scene Name</h4>
                        <p className="text-[10px] text-white/30 font-bold uppercase tracking-wide">Location</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-[8px] text-white/40 font-black mb-1.5 px-0.5 tracking-widest">
                        <span>11:00 AM</span>
                        <span className="text-[#4ade80]">ON SCHEDULE</span>
                        <span>12:00 PM</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden p-[1px]">
                        <div className="h-full bg-[#4ade80] rounded-full shadow-[0_0_12px_rgba(74,222,128,0.4)]" style={{ width: `${progressBarWidth}%` }}></div>
                      </div>
                    </div>

                    <p className="text-center text-[8px] text-white/30 font-black tracking-[0.2em] uppercase">
                      NEXT LOCATION: INT. BEDROOM
                    </p>
                  </div>
                </div>

                {/* iPhone Controls */}
                <div className="absolute bottom-8 inset-x-8 flex justify-between items-center opacity-90">
                  <div className="w-12 h-12 bg-black/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white"><Flashlight size={20} /></div>
                  <div className="w-12 h-12 bg-black/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white"><Camera size={20} /></div>
                </div>
                <div className="absolute bottom-2 w-32 h-1.5 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 sm:py-40 px-4 sm:px-6 bg-white relative z-30 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row items-end gap-8 sm:gap-12 mb-20 sm:mb-32">
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase italic max-w-3xl">
              TRADITIONAL CALL SHEETS <br /> ARE <span className="text-[#ff4a23]">DEAD.</span>
            </h3>
            <p className="text-xl text-gray-500 max-w-sm pb-2 font-medium">
              We turn your production schedule into a live, ticking heartbeat for the set.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Layout size={28} />, title: "Live Activity Relay", desc: "Push critical scene changes directly to the crew's lock screen. Live Activities keeps the source of truth visible at all times." },
              { icon: <Users size={28} />, title: "Production Sync", desc: "Every department knows exactly how many minutes remain until 'Picture Up' or 'Lunch' with synced countdown timers." },
              { icon: <ShieldCheck size={28} />, title: "Operational Clarity", desc: "Simplify coordination on set. Centralize call sheets and real-time communication in one authoritative hub." }
            ].map((feature, i) => {
              const isHovered = hoveredFeature === i;
              return (
                <FadeIn key={i} delay={i * 150} className="h-full">
                  <div
                    onMouseEnter={() => setHoveredFeature(i)}
                    className={`h-full p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] border transition-all duration-500 hover:scale-[1.02] cursor-default ${isHovered ? 'bg-[#ff4a23] border-[#ff4a23] text-white shadow-2xl hover:shadow-[0_20px_60px_rgba(255,74,35,0.3)]' : 'bg-[#f7f6f4] border-gray-100'}`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 ${isHovered ? 'bg-white text-[#ff4a23]' : 'bg-[#0f0f0f] text-white'}`}>
                      {feature.icon}
                    </div>
                    <h4 className="text-2xl font-black mb-4 tracking-tighter uppercase italic">{feature.title}</h4>
                    <p className={`${isHovered ? 'text-white/90' : 'text-gray-500'} font-medium leading-relaxed transition-colors duration-500`}>{feature.desc}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="workflow" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#0f0f0f] text-white relative z-30 overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-[#ff4a23] font-black tracking-[0.3em] text-[10px] uppercase mb-6">
                <SetShowMarkCropped className="w-4 h-4" /> System Architecture
              </div>
              <h2 className="text-5xl sm:text-6xl font-black mb-8 leading-[0.85] tracking-tighter uppercase italic">
                CENTRALIZED <br /> COMMAND.
              </h2>
            </FadeIn>
            <div className="space-y-12 mt-12">
              <FadeIn delay={150}>
                <div
                  onMouseEnter={() => setHoveredArchitecture('suite')}
                  onMouseLeave={() => setHoveredArchitecture(null)}
                  onClick={() => setActiveArchitecture('suite')}
                  className="flex gap-8 items-start cursor-pointer group select-none transition-all duration-300"
                >
                  <div className={`w-1.5 h-16 rounded-full shrink-0 transition-all duration-300 ${!isScheduling ? 'bg-[#ff4a23] shadow-[0_0_15px_#ff4a23]' : 'bg-white/20 group-hover:bg-white/40'}`}></div>
                  <div>
                    <h5 className={`text-2xl font-black mb-2 uppercase tracking-tighter italic transition-colors duration-300 ${!isScheduling ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>Dual-Platform Suite</h5>
                    <p className={`font-medium leading-relaxed transition-colors duration-300 ${!isScheduling ? 'text-gray-400' : 'text-gray-500 group-hover:text-gray-400'}`}>Centralized web command for Production Managers and real-time mobile apps for the entire crew.</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={300}>
                <div
                  onMouseEnter={() => setHoveredArchitecture('scheduling')}
                  onMouseLeave={() => setHoveredArchitecture(null)}
                  onClick={() => setActiveArchitecture('scheduling')}
                  className="flex gap-8 items-start cursor-pointer group select-none transition-all duration-300"
                >
                  <div className={`w-1.5 h-16 rounded-full shrink-0 transition-all duration-300 ${isScheduling ? 'bg-[#ff4a23] shadow-[0_0_15px_#ff4a23]' : 'bg-white/20 group-hover:bg-white/40'}`}></div>
                  <div>
                    <h5 className={`text-2xl font-black mb-2 uppercase tracking-tighter italic transition-colors duration-300 ${isScheduling ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>Dynamic Scheduling</h5>
                    <p className={`font-medium leading-relaxed transition-colors duration-300 ${isScheduling ? 'text-gray-400' : 'text-gray-500 group-hover:text-gray-400'}`}>Your call sheet is no longer a static PDF. It's a live data feed that adapts to the realities of a production day.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          <FadeIn delay={450} className="relative">
            <div
              onMouseEnter={() => setHoveredArchitecture('image')}
              onMouseLeave={() => setHoveredArchitecture(null)}
              className="relative w-full h-[440px] sm:h-[480px] flex items-center justify-center select-none"
            >
              {/* Dual-Platform Suite View (Productions Dashboard Card) */}
              <div className={`absolute inset-0 transition-all duration-500 transform ${!isScheduling ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="h-full w-full bg-[#1A1A1A] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 shadow-[0_0_120px_rgba(0,0,0,0.8)] border border-white/5 flex flex-col justify-between hover:border-[#ff4a23]/30 hover:shadow-[0_0_120px_rgba(255,74,35,0.15)] transition-all cursor-pointer">
                  <div>
                    <div className="flex items-center justify-between mb-8 sm:mb-10">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter italic">Productions</h3>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest font-black mt-1">Dual-Platform Overview</p>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#ff4a23] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_#ff4a23]">
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-[#262626] p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border-l-[6px] border-[#ff4a23] transition-transform hover:translate-y-[-4px]">
                        <div className="flex justify-between items-start mb-4 sm:mb-6">
                          <div className="flex flex-col">
                            <span className="font-black text-lg sm:text-xl uppercase tracking-tighter italic">Apex Air Max</span>
                            <span className="text-[10px] text-white/40 uppercase font-black tracking-widest mt-1">Apex Athletics</span>
                          </div>
                          <div className="bg-[#ff4a23] px-2.5 py-1 rounded text-[8px] font-black italic tracking-widest shadow-[0_0_15px_#ff4a23]">LIVE</div>
                        </div>
                        <div className="mt-8 sm:mt-12 flex justify-between items-center opacity-40">
                          <div className="flex items-center gap-2 text-[10px] font-black"><Clock size={12} /> 7:00 AM</div>
                          <div className="flex items-center gap-2 text-[10px] font-black"><Users size={12} /> 11 Crew</div>
                        </div>
                      </div>
                      <div className="bg-[#262626] p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] opacity-35 hover:opacity-50 transition-opacity">
                        <div className="flex justify-between items-start mb-4 sm:mb-6">
                          <div className="flex flex-col">
                            <span className="font-black text-lg sm:text-xl uppercase tracking-tighter italic">Tesla Cyberbeast</span>
                            <span className="text-[10px] text-white/40 uppercase font-black tracking-widest mt-1">Tesla Motors</span>
                          </div>
                          <div className="bg-white/10 px-2.5 py-1 rounded text-[8px] font-black italic tracking-widest text-white/60">CONF</div>
                        </div>
                        <div className="mt-8 sm:mt-12 flex justify-between items-center opacity-40">
                          <div className="flex items-center gap-2 text-[10px] font-black"><Clock size={12} /> 7:30 AM</div>
                          <div className="flex items-center gap-2 text-[10px] font-black"><Users size={12} /> 5 Crew</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Cloud Sync Active</span>
                    <span className="text-[#ff4a23] font-bold text-[11px] uppercase tracking-wider flex items-center gap-1">
                      Hover for Live Schedule →
                    </span>
                  </div>
                </div>
              </div>

              {/* Dynamic Scheduling View (Mobile Schedule Phone Shot) */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform ${isScheduling ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="relative w-[280px] sm:w-[310px] h-[440px] sm:h-[480px] p-1.5 sm:p-2 rounded-[2.5rem] sm:rounded-[2.8rem] bg-[#161616] border border-white/15 shadow-[0_0_90px_rgba(255,74,35,0.22)] overflow-hidden cursor-pointer">
                  <div className="rounded-[2.1rem] sm:rounded-[2.4rem] overflow-hidden bg-black relative h-full">
                    <img
                      src={imgMobileSchedule}
                      alt="Mobile Dynamic Schedule"
                      className="w-full h-auto object-top object-cover"
                    />
                    {/* Subtle gradient overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ecosystem Showcase */}
      <section id="ecosystem" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#0f0f0f] text-white relative z-30 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic mb-6">
              THE FULL <span className="text-[#ff4a23]">ECOSYSTEM.</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Seamlessly synced across your desktop, iPhone, and Apple Watch. Built for the speed of production.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-32">
            {/* iOS Live Activities */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn className="order-2 md:order-1 flex justify-center">
                <div className="relative w-[300px] shadow-2xl p-1 sm:p-1.5 rounded-[2.2rem] sm:rounded-[2.4rem] bg-[#161616] border border-white/15 overflow-hidden">
                  <div className="rounded-[1.9rem] sm:rounded-[2.1rem] overflow-hidden bg-black">
                    <img src={imgMobileLiveActivity} alt="iOS Live Activity" className="w-full h-auto" />
                  </div>
                </div>
              </FadeIn>
              <FadeIn className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 text-[#ff4a23] font-black tracking-[0.3em] text-[10px] uppercase mb-6">
                  <Layout className="w-4 h-4" /> iOS Live Activities
                </div>
                <h4 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic">
                  NEVER MISS A CUE.
                </h4>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  Track the active scene, countdown timers, and overtime straight from your iPhone Lock Screen and Dynamic Island. You don't even need to unlock your phone to know what's happening on set.
                </p>
              </FadeIn>
            </div>

            {/* Apple Watch */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div className="inline-flex items-center gap-2 text-[#ff4a23] font-black tracking-[0.3em] text-[10px] uppercase mb-6">
                  <Clock className="w-4 h-4" /> WatchOS App
                </div>
                <h4 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic">
                  THE SCHEDULE ON YOUR WRIST.
                </h4>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  The entire crew can glance at their Apple Watch to see real-time updates on what's shooting, how much time is left, and check the rest of the schedule.
                </p>
              </FadeIn>
              <FadeIn className="flex justify-center">
                <AppleWatchCarousel />
              </FadeIn>
            </div>

            {/* Web Dashboard */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn className="order-2 md:order-1 flex justify-center">
                <div className="relative w-full max-w-2xl sm:max-w-3xl">
                  <img
                    src={imgMacBookStageDisplay}
                    alt="Web Command Center on MacBook Pro"
                    className="w-full h-auto drop-shadow-[0_30px_70px_rgba(0,0,0,0.7)]"
                  />
                </div>
              </FadeIn>
              <FadeIn className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 text-[#ff4a23] font-black tracking-[0.3em] text-[10px] uppercase mb-6">
                  <Zap className="w-4 h-4" /> Web Command Center
                </div>
                <h4 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic">
                  INSTANT DEVICE SYNC.
                </h4>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  Whether a manager makes a schedule change on a laptop in the production office or a PA checks in on their phone, the entire set is updated in milliseconds.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Production Analytics Section */}
      <section id="analytics" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#0f0f0f] text-white relative z-30 overflow-hidden scroll-mt-24">
        {/* Subtle background ambient glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ff4a23]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Copy & Feature Highlights */}
            <div className="lg:col-span-6">
              <FadeIn>
                <div className="inline-flex items-center gap-2 text-[#ff4a23] font-black tracking-[0.3em] text-[10px] uppercase mb-6">
                  <Activity className="w-4 h-4" /> Real-Time Intelligence
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
                  PRODUCTION <br />
                  <span className="text-[#ff4a23]">ANALYTICS.</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed font-medium mb-12">
                  Track schedule velocity scene-by-scene, eliminate hidden overtime before wrap, and grade daily shoot efficiency with automated metrics.
                </p>
              </FadeIn>

              <div className="space-y-8">
                <FadeIn delay={150} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#161616] border border-white/10 flex items-center justify-center shrink-0 text-[#ff4a23] shadow-lg">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xl font-black mb-1.5 uppercase tracking-tighter italic">Daily Scorecard & Grading</h5>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                      An objective 0–100 production score that grades completion rates, scene variance, and overall pace momentum as scenes wrap.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={300} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#161616] border border-white/10 flex items-center justify-center shrink-0 text-[#ff4a23] shadow-lg">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xl font-black mb-1.5 uppercase tracking-tighter italic">Schedule Pace Trajectory</h5>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                      Visual velocity curve detailing whether each scene gained or lost time against the estimate, highlighting exact bottle-necks instantly.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={450} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#161616] border border-white/10 flex items-center justify-center shrink-0 text-[#ff4a23] shadow-lg">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xl font-black mb-1.5 uppercase tracking-tighter italic">Setup vs. Filming Breakdown</h5>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                      Differentiate camera setup and relocation duration from active roll time, giving production heads actionable operational clarity.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Right Column: Dual iPhone Showcase */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-xl mx-auto lg:max-w-none">
                {/* Scorecard Phone */}
                <FadeIn delay={200} className="flex flex-col group">
                  <div className="relative bg-[#161616] p-1 sm:p-1.5 rounded-[2.2rem] sm:rounded-[2.4rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:border-[#ff4a23]/50 group-hover:shadow-[0_20px_60px_rgba(255,74,35,0.18)] transition-all duration-500 transform group-hover:-translate-y-2">
                    <div className="relative rounded-[1.9rem] sm:rounded-[2.1rem] overflow-hidden bg-black aspect-[1206/2622]">
                      <img
                        src={imgMobileProductionAnalytics}
                        alt="Mobile Production Analytics Scorecard"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <div className="mt-5 px-2">
                    <span className="text-[#ff4a23] font-black text-[10px] uppercase tracking-[0.25em] block mb-1">
                      01 / SCORECARD
                    </span>
                    <h4 className="text-white font-black text-lg uppercase tracking-tighter italic mb-1">
                      Day Performance Grade
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">
                      Overall day score, scene completion counter, and overtime totals at a glance.
                    </p>
                  </div>
                </FadeIn>

                {/* Pace Timeline Phone */}
                <FadeIn delay={350} className="flex flex-col group sm:pt-8 lg:pt-12">
                  <div className="relative bg-[#161616] p-1 sm:p-1.5 rounded-[2.2rem] sm:rounded-[2.4rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:border-[#ff4a23]/50 group-hover:shadow-[0_20px_60px_rgba(255,74,35,0.18)] transition-all duration-500 transform group-hover:-translate-y-2">
                    <div className="relative rounded-[1.9rem] sm:rounded-[2.1rem] overflow-hidden bg-black aspect-[1206/2622]">
                      <img
                        src={imgMobileProductionAnalyticsTimeline}
                        alt="Mobile Production Analytics Schedule Pace Timeline"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <div className="mt-5 px-2">
                    <span className="text-[#ff4a23] font-black text-[10px] uppercase tracking-[0.25em] block mb-1">
                      02 / TRAJECTORY
                    </span>
                    <h4 className="text-white font-black text-lg uppercase tracking-tighter italic mb-1">
                      Pace Momentum Curve
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">
                      Visual delta curve showing minutes ahead or behind for every shot setup.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interface Gallery Section */}
      <section id="interfaces" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#0f0f0f] relative z-30 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 text-[#ff4a23] font-black tracking-[0.3em] text-[10px] uppercase mb-4">
              <Layout className="w-3.5 h-3.5" /> Platform Interfaces
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic mb-6">
              <span className="text-[#ff4a23]">POWERFUL</span> INTERFACES.
            </h3>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Everything you need to run your set, elegantly designed for every screen.
            </p>
          </FadeIn>

          {/* Platform Tab Selector */}
          <FadeIn delay={100} className="flex justify-center mb-12 sm:mb-16">
            <div className="inline-flex p-1.5 rounded-full bg-[#181818] border border-white/10 shadow-2xl">
              {[
                { id: 'mobile', label: 'Mobile App', icon: Smartphone },
                { id: 'web', label: 'Web Command', icon: Monitor },
                { id: 'watch', label: 'WatchOS', icon: Watch },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = galleryTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setGalleryTab(tab.id)}
                    className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#ff4a23] text-white shadow-[0_0_20px_rgba(255,74,35,0.4)]'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </FadeIn>

          {/* Mobile App Grid */}
          {galleryTab === 'mobile' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  tag: "01 / PRODUCTIONS",
                  title: "Projects Hub",
                  desc: "Quickly view active shoots, department call times, and live statuses in real time.",
                  img: imgMobileDashboard,
                  alt: "Mobile Productions Dashboard"
                },
                {
                  tag: "02 / SCHEDULE",
                  title: "Live Call Sheet",
                  desc: "Track active shooting blocks, setup countdowns, and upcoming scenes with live sync.",
                  img: imgMobileSchedule,
                  alt: "Mobile Day Schedule"
                },
                {
                  tag: "03 / ROSTER",
                  title: "Crew Directory",
                  desc: "Instant department breakdown, contact links, and real-time crew check-in confirmations.",
                  img: imgMobileCrewList,
                  alt: "Mobile Crew Directory"
                },
                {
                  tag: "04 / ANNOUNCEMENTS",
                  title: "Message Board",
                  desc: "Set-wide announcements, urgent alerts, and schedule changes broadcast to everyone.",
                  img: imgMobileMessageBoard,
                  alt: "Mobile Message Board"
                }
              ].map((item, idx) => (
                <FadeIn key={item.title} delay={100 + idx * 75} className="flex flex-col group">
                  <div className="relative bg-[#161616] p-1 sm:p-1.5 rounded-[2.2rem] sm:rounded-[2.4rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:border-[#ff4a23]/50 group-hover:shadow-[0_20px_60px_rgba(255,74,35,0.18)] transition-all duration-500 transform group-hover:-translate-y-2">
                    <div className="relative rounded-[1.9rem] sm:rounded-[2.1rem] overflow-hidden bg-black aspect-[1206/2622]">
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <div className="mt-5 px-2">
                    <span className="text-[#ff4a23] font-black text-[10px] uppercase tracking-[0.25em] block mb-1">
                      {item.tag}
                    </span>
                    <h4 className="text-white font-black text-lg uppercase tracking-tighter italic mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          {/* Web Command Grid */}
          {galleryTab === 'web' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              {[
                {
                  tag: "01 / EDITOR",
                  title: "Schedule Editor",
                  desc: "Drag-and-drop scene reordering, automated department call calculations, and quick scene creation.",
                  img: imgWebEditSchedule,
                  alt: "Web Schedule Editor"
                },
                {
                  tag: "02 / DISPLAY",
                  title: "Stage Display",
                  desc: "High-contrast, high-visibility stage clock and scene monitor designed for video village and production carts.",
                  img: imgWebStageDisplay,
                  alt: "Web Stage Display"
                },
                {
                  tag: "03 / STRIPBOARD",
                  title: "Stripboard Manager",
                  desc: "Traditional production stripboard modernized with real-time day breakdown and digital crew sync.",
                  img: imgWebStripboard,
                  alt: "Web Stripboard"
                }
              ].map((item, idx) => (
                <FadeIn key={item.title} delay={100 + idx * 100} className="flex flex-col group">
                  <div className="bg-[#141414] rounded-2xl border border-white/10 overflow-hidden shadow-2xl group-hover:border-[#ff4a23]/50 group-hover:shadow-[0_20px_50px_rgba(255,74,35,0.15)] transition-all duration-500 transform group-hover:-translate-y-1.5">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-5 px-2">
                    <span className="text-[#ff4a23] font-black text-[10px] uppercase tracking-[0.25em] block mb-1">
                      {item.tag}
                    </span>
                    <h4 className="text-white font-black text-lg uppercase tracking-tighter italic mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          {/* WatchOS Grid */}
          {galleryTab === 'watch' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto items-center">
              {[
                {
                  tag: "01 / LIVE GLANCE",
                  title: "Live Scene & Countdown",
                  desc: "Glance at your wrist for instant real-time updates on what scene is shooting, current setup, and remaining shoot time.",
                  img: imgAppleWatchUltraLive,
                  alt: "Apple Watch Ultra Live Scene"
                },
                {
                  tag: "02 / TIMELINE",
                  title: "Wrist Schedule",
                  desc: "Scroll through call times, department setups, lunch breaks, and wrap times directly on Apple Watch Ultra.",
                  img: imgAppleWatchUltraSchedule,
                  alt: "Apple Watch Ultra Schedule"
                },
                {
                  tag: "03 / CALL SHEET",
                  title: "Production Details",
                  desc: "Personalized crew call times, stage assignments, and one-tap shoot locations with map navigation.",
                  img: imgAppleWatchUltraProductionDetails,
                  alt: "Apple Watch Ultra Production Details"
                }
              ].map((item, idx) => (
                <FadeIn key={item.title} delay={100 + idx * 100} className="flex flex-col items-center text-center group">
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px] transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="relative w-full aspect-[766/1106]">
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="w-full h-full object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="mt-4 max-w-xs">
                    <span className="text-[#ff4a23] font-black text-[10px] uppercase tracking-[0.25em] block mb-1">
                      {item.tag}
                    </span>
                    <h4 className="text-white font-black text-lg uppercase tracking-tighter italic mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <footer id="waitlist" className="py-40 px-6 bg-white relative z-30 overflow-hidden scroll-mt-24">
        <span id="download" className="sr-only" />
        <span id="join" className="sr-only" />
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#ff4a23]/10 text-[#ff4a23] text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] mb-12">
            <Zap size={15} /> EARLY ACCESS WAITLIST
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-[80px] lg:text-[100px] font-black tracking-tighter mb-16 leading-[0.85] uppercase italic text-[#0f0f0f]">
            JOIN THE <br /> <span className="text-[#ff4a23]">SHOW.</span>
          </h2>
          {isWaitlistSubmitted ? (
            <div className="max-w-xl mx-auto mb-32 p-8 rounded-3xl bg-[#f7f6f4] border border-[#ff4a23]/20 flex flex-col items-center text-center animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black uppercase italic tracking-tight text-[#0f0f0f] mb-2">You're On The List!</h4>
              <p className="text-gray-600 font-medium">We've saved your spot. We'll reach out to <span className="text-[#0f0f0f] font-bold">{waitlistEmail}</span> as soon as early access opens.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (waitlistEmail.trim()) setIsWaitlistSubmitted(true);
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mb-32"
            >
              <input
                type="email"
                required
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                placeholder="production@studio.com"
                className="w-full px-8 py-5 rounded-full bg-[#f7f6f4] border-2 border-transparent focus:border-[#ff4a23] focus:bg-white focus:outline-none font-bold transition-all text-base sm:text-lg text-black placeholder:text-gray-400 shadow-inner"
              />
              <button
                type="submit"
                className="w-full sm:w-auto whitespace-nowrap bg-[#0f0f0f] text-white px-10 py-5 rounded-full font-black hover:bg-[#ff4a23] hover:scale-105 transition-all uppercase tracking-widest text-base sm:text-lg italic shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_35px_rgba(255,74,35,0.3)] shrink-0"
              >
                Join Waitlist
              </button>
            </form>
          )}
          <div className="pt-20 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
            <div className="flex items-center gap-3">
              <img src={logoBlack} alt="SetShow Logo" className="h-8" />
            </div>
            <div className="flex flex-wrap items-center gap-8 sm:gap-12 text-[10px] font-black uppercase tracking-widest">
              <a
                href="/faq"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('faq', '/faq');
                }}
                className="hover:text-[#ff4a23] transition-colors cursor-pointer"
              >
                FAQ
              </a>
              <a
                href="/privacy"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('privacy', '/privacy');
                }}
                className="hover:text-[#ff4a23] transition-colors cursor-pointer"
              >
                Privacy
              </a>
              <a href="https://app.setshow.app/terms" target="_blank" rel="noreferrer" className="hover:text-[#ff4a23] transition-colors">Terms</a>
              <a href="mailto:support@setshow.app" className="hover:text-[#ff4a23] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
