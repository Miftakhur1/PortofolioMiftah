const Footer = () => {
  return (
    <footer className="mt-32 border-t border-white/5 pt-10 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Bagian Brand & Copyright */}
          <div className="text-center md:text-left">
            <h1 className="text-xl font-black tracking-tighter text-white mb-2">
              MIFTAH<span className="text-indigo-500 text-sm"> Portofolio</span>
            </h1>
            <p className="text-xs text-white/40 font-medium tracking-wide uppercase">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>

          {/* Navigasi Cepat (Quick Links) */}
          <div className="flex gap-8 text-sm font-medium text-white/60">
            <a href="#beranda" className="hover:text-white transition-colors">Beranda</a>
            <a href="#tentang" className="hover:text-white transition-colors">Tentang</a>
            <a href="#project" className="hover:text-white transition-colors">Project</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-5">
            {[
              { icon: "ri-linkedin-box-fill", color: "hover:text-[#0077B5]", url: "https://linkedin.com/in/miftahkhurrahman" },
              { icon: "ri-github-fill", color: "hover:text-white", url: "https://github.com/Miftakhur1" },
              { icon: "ri-instagram-line", color: "hover:text-[#E4405F]", url: "https://instagram.com/mfthkhr_" },
              { icon: "ri-threads-fill", color: "hover:text-white", url: "https://threads.net/@mfthkhr_" },
              { icon: "ri-whatsapp-line", color: "hover:text-[#25D366]", url: "https://wa.me/6289512848205" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white/40 ${social.color} transition-all duration-300 transform hover:-translate-y-1`}
              >
                <i className={`${social.icon} text-2xl`}></i>
              </a>
            ))}
          </div>

        </div>

        {/* Garis bawah tipis opsional untuk penutup */}
        <div className="mt-10 text-center">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;