import { useState, useEffect } from "react";

const Nav = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang", href: "#tentang" },
    { name: "Project", href: "#project" },
    { name: "Kontak", href: "#kontak" },
  ];

  const socialLinks = [
    { name: "IG", url: "https://instagram.com/mfthkhr_" },
    { name: "LD", url: "https://linkedin.com/in/miftahkhurrahman" },
    { name: "GH", url: "https://github.com/Miftakhur1" },
    ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 md:px-12 ${
        active || isOpen
          ? "py-4 bg-slate-890/90 backdrop-blur-md border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Lebih kecil dan simple */}
        <div className="z-[101]">
          <h1 className="text-xl font-bold tracking-tight text-white">
            MIFTAH<span className="text-indigo-500 text-sm"> Portofolio</span>
          </h1>
        </div>

        {/* Desktop Menu - Font size disesuaikan */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon - Lebih ramping */}
        <button
          className="md:hidden z-[101] flex flex-col gap-1.5 p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Mobile Menu Overlay - Desain Simple & Clean */}
        <div 
          className={`fixed inset-0 h-screen w-full bg-slate-950 transition-all duration-500 md:hidden z-[99] ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-start justify-center h-full px-10 gap-6">
            <span className="text-xs font-mono text-indigo-500 tracking-widest uppercase">Navigasi</span>
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-1xl font-semibold text-white/90 hover:text-indigo-400 transition-all transform ${
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                {item.name}
              </a>
            ))}
            
            {/* Social Links Kecil di Bawah */}
            <div className="mt-10 pt-10 border-t border-black/10 dark:border-white/10 w-full flex gap-5">
            {socialLinks.map((social) => (
                <a
                key={social.name}
                href={social.url}
                target="_blank" // Membuka di tab baru
                rel="noopener noreferrer" // Keamanan tambahan saat membuka tab baru
                className="text-xs font-medium text-slate-400 dark:text-white/40 tracking-tighter cursor-pointer hover:text-indigo-500 dark:hover:text-white transition-colors uppercase"
                >
                {social.name}
                </a>
            ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;