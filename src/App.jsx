import './index.css'
import DataImage, {listTools, listProyek} from "./data";
import Typewriter from 'typewriter-effect';
import { useState } from 'react';

function App() {
  const [showMore, setShowMore] = useState(false);

  // 3. Logika untuk membatasi tampilan tanpa mengubah listProyek aslinya
  const displayedProyek = showMore ? listProyek : listProyek.slice(0, 3);
  return (
    <>
{/* Hero Section */}
<section id="beranda" className="min-h-[80vh] md:min-h-screen flex items-center pt-24 md:pt-30 pb-4 md:pb-10 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 w-full">
    
    {/* Penjelasan: 
        'flex-col-reverse' membuat urutan dibalik di HP (Gambar di atas, Teks di bawah).
        'md:flex-row' mengembalikan urutan ke normal di Tablet/PC (Teks kiri, Gambar kanan). 
    */}
    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
      
      {/* KOLOM TEKS */}
      <div className="flex-1 text-center md:text-left animate__animated animate__fadeInUp animate__delay-1s">
        <div className="flex items-center gap-3 bg-zinc-800/50 backdrop-blur-sm w-fit p-3 mb-6 rounded-2xl border border-zinc-700 mx-auto md:mx-0">
          <img src={DataImage.HeroImage} alt="heroImage" className='w-8 h-8 object-cover rounded-full' />
          <q className="text-xs sm:text-sm italic text-zinc-300">Kode yang indah, lahir dari ketekunan. 😊</q>       
        </div>

        {/* HEADING DENGAN TYPEWRITER */}
            <h1 className="text-2xl sm:text-2/5xl lg:text-4xl font-black leading-tight mb-4 tracking-tight">
              Hai, saya <br className="sm:hidden" />
              <span className="text-indigo-500">
                <Typewriter
                  options={{
                    strings: [
                      'Miftakhur Rahman', 
                      'Web Developer', 
                      'Data Analyst'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </h1>
        
        <p className='text-base sm:text-lg mb-8 text-zinc-400 max-w-lg mx-auto md:mx-0'>
          Mahasiswa Universitas Semarang yang berdedikasi pada Web Development dan Data Analysis. Saya berkomitmen menciptakan solusi digital yang fungsional, adaptif, dan berbasis data untuk memberikan dampak nyata.
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start'>
          <a
            href="/assets/Staff.pdf"
            download="CV-Miftakhur-Rahman.pdf"
            className='w-full sm:w-auto bg-green-600 px-8 py-4 rounded-2xl font-bold hover:bg-green-500 transition-all'
          >
            Download CV
          </a>
          <a href="#project" className='w-full sm:w-auto bg-zinc-800 px-8 py-4 border border-zinc-700 rounded-2xl font-bold hover:bg-zinc-700 transition-all'>
            Lihat Project
          </a>
        </div>
      </div>

      {/* KOLOM GAMBAR */}
      <div className="flex-1 flex justify-center md:justify-end animate__animated animate__fadeInUp">
        <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[350px]">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full"></div>
          
          <img 
            src={DataImage.HeroImage} 
            alt="heroImage" 
            className='relative w-full rounded-3xl shadow-2xl border-2 border-white/5 object-cover'
          />
        </div>
      </div>

    </div>
  </div>
</section>

    {/* tentang */}
    <div className="tentang mt-32 py-20" id='tentang'>
    <div className='xl:w-2/3 lg:3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <img src={DataImage.HeroImage} alt="heroImage" className='w-12 rounded-md mb-10 sm:hidden'loading='lazy'/>
      <p className='text-base/loose mb-10'>
        Mahasiswa Sistem Informasi yang tertarik pada bidang data analytics dan web development. Terbiasa mengolah 
        dan memvisualisasikan data menggunakan Pivot Table Excel, Power BI, dan Looker Studio. 
        Memiliki dasar pemrograman web menggunakan Laravel, MySQL, HTML, CSS, JavaScript, React, serta desain UI dasar menggunakan Figma.
        </p>
    <div className='flex items-center justify-between'>
      <img src={DataImage.HeroImage} alt="heroImage" className='w-12 rounded-md sm:block hidden'loading='lazy'/>
      <div className='flex items-center gap-6'>
        <div>
          <h1 className='text-4xl mb-1'>
            5 <span className='text-blue-700'>+</span>
            </h1>
            <p>Project Selesai</p>
        </div>
        <div>
          <h1 className='text-4xl mb-1'>
            1<span className='text-blue-700'>+</span>
            </h1>
            <p>Tahun Pengalaman</p>
        </div>
      </div>
    </div>
   </div>
{/* tools */}
   <div className="tools mt-32">
    <h1 className='text-4xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000"data-aos-once="true">Tools yang saya pakai</h1>
    <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50'data-aos="fade-up" data-aos-duration="300" data-aos-once="true">Berikut adalah alat yang saya pakai dalam membuat web maupun desain </p>
    
    <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {listTools.map((tool)=>(
      <div className='flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group' key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
        <img src={tool.gambar} alt="toolsImage" className='w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900'loading='lazy'/>
        <div>
          <h4 className='font-bold'>{tool.nama}</h4>
          <p className='opacity-50'>{tool.ket}</p>
        </div>
      </div>
      ))} 
    </div>
   </div>
 </div>

 {/* project */}
      <div className='project mt-32 py-10' id='project'> 
        <h1 className='text-center text-4xl font-bold mb-2' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Project
        </h1>
        <p className='text-base/loose text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          berikut ini beberapa project yang telah saya buat
        </p>

        <div className='project-box grid lg:grid-cols-3 grid-cols-2 gap-3 sm:gap-4'>
          {/* 4. Gunakan displayedProyek di sini, fungsi di dalamnya tetap SAMA PERSIS */}
          {displayedProyek.map((project) => (
            <div key={project.id} className='p-4 bg-zinc-800 rounded-md border border-zinc-700' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={project.dad} data-aos-once="true" >
              <img src={project.gambar} alt="projectImage" className="w-full h-48 object-cover rounded-md" loading='lazy'/>
              <div>
                <h1 className='text-2xl font-bold my-4'>{project.nama}</h1>
                <p className='text-base/loose mb-4 line-clamp-2'>{project.desk}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.tools.map((tool, index )=>(
                    <p className='py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold text-xs' key={index}>{tool}</p>
                  ))}
                </div>
                <div className='mt-8 text-center'>
                  <a href={project.link} target="_blank" className='bg-blue-800 p-3 rounded-lg block border border-zinc-500 hover:bg-blue-700 transition-all'>Lihat Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5. Tombol Lihat Semua Proyek */}
        <div className="mt-16 text-center" data-aos="fade-up">
           <button 
             onClick={() => setShowMore(!showMore)} 
             className="bg-zinc-700 hover:bg-zinc-600 px-10 py-3 rounded-full font-bold border border-zinc-500 transition-all active:scale-95"
           >
             {showMore ? "Lihat Sedikit" : "Lihat Semua Proyek"}
           </button>
        </div>
      </div>
      
            {/* Kontak */}
          <div className="kontak mt-32 sm:p-10 p-0" id='kontak'>
              <h1 className='text-4xl mb-2 font-bold text-center' data-aos="fade-up" data-aos-duration="1000"data-aos-once="true">Kontak</h1>
              <p className='text-base/loose text-center mb-10 opacity-50'data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"data-aos-once="true">Mari terhubung dengan saya</p>
          </div>
          <form action="https://formsubmit.co/miftah.khur.3@gmail.com" method="POST" className='bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md' autoComplete='off' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"data-aos-once="true">
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold'>Nama Lengkap</label>
                <input type="text" name='nama' placeholder='Masukan Nama...'className='border border-zinc-500 p-2 rounded-md'required/>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold'>Email</label>
                <input type="email" name='email' placeholder='Masukan email...'className='border border-zinc-500 p-2 rounded-md'required/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='pesan' className='font-semibold'>Pesan</label>
                <textarea type="pesan" id='pesan' cols={45} rows={7} placeholder='Pesan...'className='border border-zinc-500 p-2 rounded-md'required/>
              </div>
              <div className='text-center'>
                <button type='submit' className='bg-blue-800 p-3 rounded-lg w-full cursor-pointer border border-zinc-500 hover:bg-blue-600'>Kirim Pesan</button>
              </div>
            </div>
          </form>
    </>
  )
}

export default App
