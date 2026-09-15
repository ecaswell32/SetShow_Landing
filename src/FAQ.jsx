import { useState, useEffect, useMemo } from 'react';
import { ChevronDown, Search, HelpCircle, ArrowLeft, Mail } from 'lucide-react';

const FAQ_DATA = [
  {
    category: "General & Overview",
    items: [
      {
        question: "What exactly is SetShow and how does it replace traditional call sheets?",
        answer: "Traditional call sheets are static PDFs distributed the night before that become obsolete the moment shooting schedules shift on set. SetShow turns your call sheet into a live data feed synced in real-time across production offices, laptops, iPhones, and Apple Watches. When an AD pushes a call time, logs a scene wrap, or calls lunch, the entire crew is updated in milliseconds."
      },
      {
        question: "Who is SetShow built for?",
        answer: "SetShow is built for film, television, commercial, and live broadcast productions of all sizes. It is designed for 1st ADs, 2nd ADs, Production Managers, Line Producers, and every crew department on set—from Camera, Grip, and Electric to Hair, Makeup, Wardrobe, Art, and Sound."
      },
      {
        question: "Does every crew member need to pay for an account?",
        answer: "No. Production licenses are managed by the production company or studio. Crew members simply download the mobile or Apple Watch app and join their production securely via an invitation link or call sheet QR code."
      }
    ]
  },
  {
    category: "Platforms & Live Sync",
    items: [
      {
        question: "What devices and platforms does SetShow support?",
        answer: "SetShow offers a unified cross-platform ecosystem:\n• Web Command Center: Full desktop browser dashboard for Production Managers and ADs to manage schedules, stripboards, crew lists, and daily analytics.\n• iOS & Android Apps: Mobile crew companion for real-time notifications, personal call times, and stage information.\n• iOS Live Activities & Dynamic Island: Persistent lock screen timers showing active scene status, remaining setup minutes, and schedule pace.\n• watchOS App: Glanceable Apple Watch Ultra and Series companion for on-set crew to check what's shooting and time remaining with a wrist flick."
      },
      {
        question: "How do Live Activities and Dynamic Island timers work on set?",
        answer: "When a production day is live, SetShow automatically pushes a Live Activity widget to crew members' iPhone Lock Screens and Dynamic Island. You can check the active scene, countdown to next setup or lunch, and on-time status without unlocking your phone."
      },
      {
        question: "What happens if we lose cellular or Wi-Fi service on a remote location?",
        answer: "SetShow is engineered with an offline-first architecture. If connectivity is lost on a soundstage or remote wilderness location, your device securely caches the latest schedule, call times, and contact sheets. As soon as a connection is re-established, updates sync automatically."
      }
    ]
  },
  {
    category: "Production Control & Analytics",
    items: [
      {
        question: "Who has permission to edit schedules versus view them?",
        answer: "Permissions are strictly role-based. Only designated Production Admins (typically 1st/2nd ADs, Production Managers, and Coordinators) have authority to modify call sheets, adjust timings, send push announcements, or wrap scenes. General crew members receive read-only real-time feeds."
      },
      {
        question: "Can different crew departments receive customized information?",
        answer: "Yes. While company-wide schedule changes are broadcast to everyone, department heads can view department-specific call times, specialty equipment requirements, and prep notes tailored specifically to Camera, Grip, Electric, Sound, Art, or Wardrobe."
      },
      {
        question: "What is Production Analytics and how does pace scoring work?",
        answer: "Production Analytics tracks scene velocity scene-by-scene as wrap times are logged. It generates an objective 0–100 day performance grade based on variance against schedule estimates, separating camera setup duration from active filming roll time to help heads of production eliminate hidden overtime before wrap."
      }
    ]
  },
  {
    category: "Security & Support",
    items: [
      {
        question: "How secure is our production data and call sheet confidentiality?",
        answer: "Production security is our top priority. All communications and live relays are encrypted in transit via TLS 1.3 and at rest with AES-256 encryption. We never sell, monetize, or share your production data, script assets, or crew lists with third-party advertisers."
      },
      {
        question: "How do we get started or request a production demo?",
        answer: "You can download our mobile apps directly or log into the Web Command Center. For enterprise onboarding, multi-unit studio setups, or personalized demos, reach out to our team at support@setshow.app."
      }
    ]
  }
];

export const FAQ = ({ onBack, onNavigate }) => {
  const [openItems, setOpenItems] = useState({ '0-0': true }); // First question open by default
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = "SetShow | Frequently Asked Questions";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const expandAll = () => {
    const all = {};
    FAQ_DATA.forEach((cat, cIdx) => {
      cat.items.forEach((_, iIdx) => {
        all[`${cIdx}-${iIdx}`] = true;
      });
    });
    setOpenItems(all);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  // Filter items based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return FAQ_DATA;
    const query = searchQuery.toLowerCase();

    return FAQ_DATA.map((category) => {
      const matchingItems = category.items.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
      );
      return { ...category, items: matchingItems };
    }).filter((category) => category.items.length > 0);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#111111] text-[#e0e0e0] font-sans selection:bg-[#ff4a23] selection:text-white">
      <div className="max-w-3xl mx-auto px-6 py-12 sm:py-16">
        {/* Back Link */}
        <div className="mb-10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[#ff4a23] hover:text-[#ff6a47] font-semibold text-sm transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to SetShow
          </button>
        </div>

        {/* Header */}
        <div className="mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 block mb-3">
            SETSHOW HELP & SUPPORT
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about SetShow, real-time crew relays, device compatibility, and production workflows.
          </p>
        </div>

        {/* Search Bar & Expand/Collapse Controls */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. Apple Watch, offline, analytics)..."
              className="w-full bg-[#181818] border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-[#ff4a23] transition-colors"
            />
          </div>

          <div className="flex justify-between items-center text-xs text-gray-400 px-1">
            <span>
              {searchQuery.trim()
                ? `Showing search results for "${searchQuery}"`
                : "Click any question to view the answer"}
            </span>
            <div className="flex gap-4">
              <button
                onClick={expandAll}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Expand all
              </button>
              <span className="text-gray-600">•</span>
              <button
                onClick={collapseAll}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Collapse all
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Groups */}
        {filteredCategories.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-[#161616] border border-white/5 my-12">
            <HelpCircle className="w-10 h-10 text-[#ff4a23] mx-auto mb-4 opacity-80" />
            <h3 className="text-lg font-bold text-white mb-2">No matching questions found</h3>
            <p className="text-gray-400 text-sm mb-6">
              Have a specific question that isn't answered here? Reach out to our team directly.
            </p>
            <a
              href="mailto:support@setshow.app"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ff4a23] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#ff6a47] transition-colors"
            >
              <Mail className="w-4 h-4" /> Contact Support
            </a>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredCategories.map((category, catIdx) => (
              <section key={category.category}>
                <h2 className="text-xs uppercase tracking-[0.25em] font-bold text-[#ff4a23] mb-4">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.items.map((item, itemIdx) => {
                    const key = `${catIdx}-${itemIdx}`;
                    const isOpen = !!openItems[key];

                    return (
                      <div
                        key={item.question}
                        className={`rounded-2xl transition-all duration-300 border ${
                          isOpen
                            ? 'bg-[#181818] border-white/15 shadow-lg'
                            : 'bg-[#141414] border-white/5 hover:border-white/10'
                        }`}
                      >
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full text-left px-5 sm:px-6 py-4.5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                        >
                          <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                            {item.question}
                          </span>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                              isOpen
                                ? 'rotate-180 bg-[#ff4a23]/15 text-[#ff4a23]'
                                : 'text-gray-400 bg-white/5'
                            }`}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-5 sm:px-6 pb-5 pt-1 text-[15px] sm:text-base leading-relaxed text-gray-300 border-t border-white/5 whitespace-pre-line">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Footer Area Matching Privacy Page */}
        <div className="mt-20 pt-12 border-t border-white/10 text-sm text-gray-400">
          <p className="mb-4">
            Still have questions? Contact us at{' '}
            <a href="mailto:support@setshow.app" className="text-[#ff4a23] hover:underline">
              support@setshow.app
            </a>.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-[#ff4a23] font-medium">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:underline cursor-pointer"
            >
              Back to Top
            </button>
            <button
              onClick={onBack}
              className="hover:underline cursor-pointer"
            >
              SetShow Home
            </button>
            {onNavigate && (
              <button
                onClick={() => onNavigate('privacy', '/privacy')}
                className="hover:underline cursor-pointer"
              >
                Privacy Policy
              </button>
            )}
            <a
              href="https://app.setshow.app/terms"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Terms of Use (EULA)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
