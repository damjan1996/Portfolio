// Layout.tsx
import { useEffect, useState, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  BookOpen,
  Phone,
  LayoutDashboard,
} from "lucide-react";
import { supabase } from "../utils/supabaseClient";
import { ContactInfo } from "./ContactInfo";
import { NavLink } from "./NavLink";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { useScrollContext } from "./ScrollContext";
import { PerformanceMonitor } from "./PerformanceMonitor";
import GlobalBackground from "./GlobalBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();
  const { isMenuOpen, setIsMenuOpen } = useScrollContext();

  // Initial mount with immediate execution
  useEffect(() => {
    // Use requestAnimationFrame to ensure smooth initial render
    requestAnimationFrame(() => {
      setIsMounted(true);
    });
  }, []);

  // Schließe das Menü beim Routenwechsel
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, setIsMenuOpen]);

  // Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prüfe Admin-Status und registriere den Scroll-Handler
  useEffect(() => {
    const checkAdmin = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error checking admin status:", error);
        return;
      }
      if (data.session) {
        const { user } = data.session;
        const { data: adminData, error: adminError } = await supabase
            .from("profiles")
            .select("isAdmin")
            .eq("id", user.id)
            .single();
        if (adminError) {
          console.error("Error checking admin role:", adminError);
          return;
        }
        setIsAdmin(adminData.isAdmin);
      }
    };
    checkAdmin();

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    {
      path: "/",
      label: t("navigation.main.home"),
      icon: <Home className="h-5 w-5" />,
    },
    {
      path: "/about",
      label: t("navigation.main.about"),
      icon: <User className="h-5 w-5" />,
    },
    {
      path: "/portfolio",
      label: t("navigation.main.portfolio"),
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      path: "/blog",
      label: t("navigation.main.blog"),
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      path: "/contact",
      label: t("navigation.main.contact"),
      icon: <Phone className="h-5 w-5" />,
    },
    ...(isAdmin
        ? [
          {
            path: "/dashboard",
            label: t("navigation.admin.dashboard"),
            icon: <LayoutDashboard className="h-5 w-5" />,
          },
        ]
        : []),
  ];

  // Render with opacity 0 on initial mount to prevent flicker
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-transparent">
        <GlobalBackground />
        {children}
      </div>
    );
  }

  return (
      <div className="min-h-screen flex flex-col relative">
        {/* Global Background */}
        <GlobalBackground />
        
        {/* Navigation – oberste Ebene */}
        <nav
            className={`
          fixed w-full z-40 transition-all duration-300
          bg-zinc-800/50 backdrop-blur-sm border-b border-zinc-700/30
          ${scrolled
                ? "bg-zinc-800/70 backdrop-blur-md shadow-lg shadow-zinc-900/30"
                : ""
            }
        `}
            role="navigation"
            aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 group shrink-0">
                <motion.img
                    src="/logo.svg"
                    alt=""
                    className="h-8 w-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-2">
                {navigationLinks.map(({ path, label, icon }) => (
                    <NavLink
                        key={path}
                        to={path}
                        icon={icon}
                        label={label}
                        className="text-sm"
                    />
                ))}
                <div className="ml-4 text-zinc-400 pl-2 border-l border-zinc-700">
                  <LanguageSwitcher />
                </div>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                  className="md:hidden relative z-50 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
                  onClick={toggleMenu}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-black/50 md:hidden z-20 pointer-events-none"
                />

                {/* Sidebar */}
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed right-0 top-0 h-full w-80 bg-zinc-900/95 backdrop-blur-md shadow-xl md:hidden z-50 border-l border-zinc-800"
                >
                  {/* Sidebar Header mit Close-Button */}
                  <div className="flex items-center justify-between px-4 h-16 border-b border-zinc-800">
                    <span className="text-white font-semibold">Menu</span>
                    <motion.button
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close sidebar"
                        className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
                        whileTap={{ scale: 0.95 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.button>
                  </div>

                  {/* Scrollbarer Sidebar-Inhalt */}
                  <div className="h-[calc(100vh_-_4rem)] overflow-y-auto">
                    <div className="flex flex-col h-full">
                      {/* Contact Info */}
                      <ContactInfo />

                      {/* Navigation Links */}
                      <div className="py-4 px-4">
                        {navigationLinks.map(({ path, label, icon }) => (
                            <NavLink
                                key={path}
                                to={path}
                                icon={icon}
                                label={label}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center w-full mb-1"
                            />
                        ))}
                      </div>

                      {/* Language Switcher */}
                      <div className="px-4 py-3 border-t border-zinc-800">
                        <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-500">
                        Sprache ändern
                      </span>
                          <LanguageSwitcher />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
          )}
        </AnimatePresence>

        {/* Hauptinhalt */}
        <main className="flex-1 pt-2 relative z-10 bg-transparent">{children}</main>

        {/* Footer */}
        <Footer />
        
        {/* Performance Monitor */}
        <PerformanceMonitor />
      </div>
  );
};

export default Layout;
