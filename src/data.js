import HeroImage from "/assets/p.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/excel.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/mysql.png";
import Tools13 from "/assets/tools/laravel.png";
import Tools14 from "/assets/tools/bi.png";
import Tools15 from "/assets/tools/looker.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9, // Pastikan kamu sudah mengimpor gambar/ikonnya di bagian atas
    nama: "Excel",
    ket: "Data Processing",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12, 
    nama: "MySQL",
    ket: "Database",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Laravel",
    ket: "PHP Framework",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Power BI",
    ket: "Data Visualization",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Looker Studio",
    ket: "Data Reporting",
    dad: "1500",
  },
];

import Proyek1 from "/assets/proyek/cika.png";
import Proyek2 from "/assets/proyek/pet.png";
import Proyek3 from "/assets/proyek/Frame.png";
import Proyek4 from "/assets/proyek/frame2.png";
import Proyek5 from "/assets/proyek/Desain Web.png";
import Proyek6 from "/assets/proyek/frame3.png";
import Proyek7 from "/assets/proyek/umkm.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Company Profile by Cika Laundry",
    desk: "Website company profile yang bergerak dibidang laundry dengan fitur yang cukup lengkap seperti halaman home, about us, layanan, promo, dan kontak. Website ini dirancang dengan tampilan yang menarik dan responsif untuk memberikan pengalaman pengguna yang optimal.",
    tools: ["ReactJS", "TailwindCSS","Vite", "AOS"],
    link: "https://cika-laundry.vercel.app/",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Web Course by Petshop",
    desk: "Website  petshop yang dirancang untuk memudahkan pengelolaan informasi petshop.",
    tools: ["ReactJS", "laravel", "MySQL", "TailwindCSS","Vite", "AOS"],
    dad: "300",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: " Website Umkm by CafeKu",
    desk: "Website company profile untuk UMKM CafeKu yang dirancang untuk memberikan informasi lengkap tentang produk dan layanan yang ditawarkan, serta memudahkan pelanggan dalam melakukan pemesanan online.",
    tools: ["ReactJS", "TailwindCSS","Vite", "AOS"],
    link: "https://cafe-ku.vercel.app/",
    dad: "800",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "JosFood: Elevating Campus Culinary Experience",
    desk: "Desain antarmuka pengguna untuk aplikasi Josfood yang dirancang untuk memberikan pengalaman pengguna yang optimal.",
    tools: ["Figma", "UI", "User Research"],
    link:"https://www.figma.com/proto/sBzhEQ9yQyguqfVnkf8Y7D/JosFood2?node-id=2002-9&t=KHUZKUUwqymoAQBQ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "User Interface Course by EduPath — Bimbingan Belajar Digital",
    desk: "Platform edukasi interaktif yang menghubungkan siswa dengan mentor terbaik melalui antarmuka yang dipersonalisasi untuk kenyamanan belajar. ",
    tools: ["Figma", "UI/UX Design", "Prototype"],
    link:"https://www.figma.com/proto/mGPWAw7tFlru93dYh4lZI1/Bimbel?node-id=2-40&t=l3xHbtz45yUlzajM-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A40",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "User Interface V.2 by Power Shoes",
    desk: "Iterasi desain e-commerce sepatu premium yang berfokus pada visual produk yang imersif, tipografi yang berani, dan navigasi belanja yang minimalis namun konseptual.",
    tools: ["Figma", "UI/UX Design", "Visual Branding", "E-commerce Research"],
    link:"https://www.figma.com/proto/ZdrRiQRZR48iMi531bRAxn/Desain-web?node-id=1-2&p=f&t=l3xHbtz45yUlzajM-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "UI/UX Design for Laundry Management System",
    desk: "Sistem manajemen internal untuk mengoptimalkan alur produksi laundry, mulai dari manajemen antrean otomatis hingga pelaporan data operasional yang akurat.",
    tools: ["Figma", "UI/UX Design", "Workflow Optimization", "Data Visualization"],
    dad: "700",
    link: "https://www.figma.com/proto/sI2uruv0OzxwLkKWIO3iaP/Aplikasi-produksi-cika-laundry?node-id=155-1248&t=RPxw6853ERgevZfI-0&scaling=min-zoom&content-scaling=fixed&page-id=155%3A1212&starting-point-node-id=155%3A1213",
  },
];
