/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Code2, Sparkles, Layout, Wallet, Home, BookOpen, List, Eye, Zap, MessageSquare, Ticket } from 'lucide-react';
import { motion } from 'motion/react';
import Typewriter from 'typewriter-effect';

export default function App() {
  const [timeLeft, setTimeLeft] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState(0);

  const sections = ['top', 'showcase', 'modul', 'detail-modul', 'usp', 'testimoni', 'harga'];

  const scrollToNext = () => {
    const currentScroll = window.scrollY;
    const sectionElements = sections.map(id => document.getElementById(id));
    
    const nextSection = sectionElements.find(el => {
      if (!el) return false;
      return el.offsetTop > currentScroll + 100;
    });

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const hours = 23 - now.getHours();
      const mins = 59 - now.getMinutes();
      const secs = 59 - now.getSeconds();
      setTimeLeft(
        `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
      );
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();

    const toastTimeout1 = setTimeout(() => {
      setShowToast(true);
      const toastTimeout2 = setTimeout(() => {
        setShowToast(false);
      }, 6000);
      return () => clearTimeout(toastTimeout2);
    }, 4000);

    return () => {
      clearInterval(timerInterval);
      clearTimeout(toastTimeout1);
    };
  }, []);

  return (
    <div className={`antialiased min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#030303] text-white' : 'bg-white text-zinc-900'} overflow-x-hidden`} id="top">
      {/* Theme Toggle & Floating Side Nav */}
      <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-3 md:gap-4">
        {/* Skip Next Button */}
        <button
          onClick={scrollToNext}
          className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-orange-700 transition-all hover:scale-110 group relative"
          title="Ke Bahagian Seterusnya"
        >
          <Zap size={18} fill="currentColor" />
          <span className="absolute right-14 px-3 py-1.5 glass rounded-lg text-[10px] font-bold text-zinc-900 dark:text-white opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap tracking-widest uppercase border border-zinc-200 dark:border-white/10">
            Seterusnya
          </span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="w-10 h-10 glass rounded-full flex items-center justify-center text-orange-500 hover:border-orange-500/50 transition-all duration-300"
          title="Tukar Tema"
        >
          {isDark ? <Sparkles size={18} /> : <div className="text-zinc-900">🌑</div>}
        </button>

        <div className="flex flex-col gap-3 md:gap-4 border-t border-white/10 pt-3 md:pt-4">
          {[
            { id: 'top', icon: <Home size={18} />, label: 'Utama' },
            { id: 'showcase', icon: <Eye size={18} />, label: 'Hasil' },
            { id: 'modul', icon: <BookOpen size={18} />, label: 'Kurikulum' },
            { id: 'detail-modul', icon: <List size={18} />, label: 'Video' },
            { id: 'usp', icon: <Zap size={18} />, label: 'Kelebihan' },
            { id: 'testimoni', icon: <MessageSquare size={18} />, label: 'Testimoni' },
            { id: 'harga', icon: <Ticket size={18} />, label: 'Daftar' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group relative w-10 h-10 glass rounded-full flex items-center justify-center transition-all duration-300 ${isDark ? 'text-zinc-500 hover:text-orange-500' : 'text-zinc-400 hover:text-orange-600 border border-zinc-200'}`}
            >
              <div className="scale-90 md:scale-100">{item.icon}</div>
              <span className="absolute right-14 px-3 py-1.5 glass rounded-lg text-[10px] font-bold text-zinc-900 dark:text-white opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap tracking-widest uppercase border border-zinc-200 dark:border-white/10">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Top FOMO Banner */}
      <div className="bg-orange-600 py-2 text-center text-[10px] font-black tracking-[0.2em] uppercase z-[100] relative">
        Harga Promo RM99 Tamat Dalam: <span className="font-mono">{timeLeft}</span>
      </div>

      {/* Background Decoration */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="glow-orange top-[-10%] left-[-10%] w-[500px] h-[500px]"></div>
        <div className="glow-orange bottom-[-10%] right-[-10%] w-[500px] h-[500px] opacity-30"></div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-[60] glass border-b ${isDark ? 'border-white/5' : 'border-zinc-200'}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex justify-between items-center">
          <div className={`text-xl font-extrabold tracking-tighter ${!isDark && 'text-zinc-900'}`}>
            VIBE<span className="text-orange-500">CODING.</span>
          </div>
          <div className={`hidden lg:flex gap-10 text-[10px] font-bold tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            <a href="#modul" className="hover:text-orange-500 transition">Kurikulum</a>
            <a href="#testimoni" className="hover:text-orange-500 transition">Apa Kata Mereka</a>
            <a href="#harga" className="hover:text-orange-500 transition">Pendaftaran</a>
          </div>
          <a
            href="https://toyyibpay.com/VCUP-IR"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white text-[10px] font-black px-4 md:px-6 py-2.5 rounded-full transition shadow-lg shadow-orange-500/20"
          >
            Daftar Sekarang
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-20 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-[10px] font-bold tracking-[0.2em] mb-8 md:mb-10"
          >
            🚀 Revolusi Digital Pendidik 2025
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <motion.h1 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={`text-4xl md:text-6xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95] pb-2 min-h-[100px] md:min-h-[140px] lg:min-h-[190px] ${isDark ? 'text-gradient' : 'text-zinc-900'}`}
            >
              <Typewriter
                options={{
                  strings: ['Bina Webapps Sekolah <br /> Sepantas Kilat.'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 3000,
                }}
              />
            </motion.h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className={`text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed ${!isDark && 'text-zinc-600'}`}
          >
            Kuasai <span className={isDark ? 'text-white' : 'text-zinc-900 font-bold'}>Google AI Studio</span> & <span className={isDark ? 'text-white' : 'text-zinc-900 font-bold'}>Firebase</span> untuk bina sistem pengurusan bilik darjah profesional. <span>Tiada asas coding? Bukan masalah.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a
              href="#harga"
              className={`px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg hover:scale-105 transition shadow-2xl ${isDark ? 'bg-white text-black' : 'bg-zinc-900 text-white'}`}
            >
              Sertai Sekarang — RM99
            </a>
            <a
              href="https://wassap.my/+60173955657"
              className={`px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg border transition ${isDark ? 'border-white/10 hover:bg-white/5 text-white' : 'border-zinc-200 hover:bg-zinc-50 text-zinc-700'}`}
            >
              WhatsApp Kami!
            </a>
          </motion.div>
        </div>
      </section>

      {/* Example Systems Showcase (MOVED HERE) */}
      <section id="showcase" className={`py-20 md:py-24 px-6 relative border-t ${isDark ? 'bg-[#080808] border-white/5' : 'bg-zinc-50 border-zinc-100'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl md:text-5xl font-black mb-4 tracking-tighter ${isDark ? 'text-white' : 'text-zinc-900'}`}>Contoh Sistem Hasil AI</h2>
            <p className="text-zinc-500 font-medium text-lg">Inilah antara aplikasi profesional yang boleh anda bina tanpa sebaris kod pun.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                url: "https://res.cloudinary.com/dyikytcgn/image/upload/v1778211121/Screenshot_2026-05-08_113057_mmfxhg.png", 
                title: "Dashboard Pentadbiran",
                rotation: "md:rotate-y-[-15deg] md:rotate-x-[5deg]"
              },
              { 
                url: "https://res.cloudinary.com/dyikytcgn/image/upload/v1778211121/Screenshot_2026-05-08_113137_kfnj9o.png", 
                title: "Sistem Data Murid",
                rotation: "md:rotate-y-[15deg] md:rotate-x-[-5deg]"
              },
              { 
                url: "https://res.cloudinary.com/dyikytcgn/image/upload/v1778211121/Screenshot_2026-05-08_113143_lcwkit.png", 
                title: "Analisis Prestasi",
                rotation: "md:rotate-y-[-15deg] md:rotate-x-[-5deg]"
              },
              { 
                url: "https://res.cloudinary.com/dyikytcgn/image/upload/v1778211121/Screenshot_2026-05-08_113106_nabwe9.png", 
                title: "Portal Berpusat",
                rotation: "md:rotate-y-[15deg] md:rotate-x-[5deg]"
              }
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group [perspective:1000px]"
              >
                <div className={`relative transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(0deg)_rotateX(0deg)] ${img.rotation === 'md:rotate-y-[-15deg] md:rotate-x-[5deg]' ? 'md:[transform:rotateY(-15deg)_rotateX(5deg)]' : img.rotation === 'md:rotate-y-[15deg] md:rotate-x-[-5deg]' ? 'md:[transform:rotateY(15deg)_rotateX(-5deg)]' : img.rotation === 'md:rotate-y-[-15deg] md:rotate-x-[-5deg]' ? 'md:[transform:rotateY(-15deg)_rotateX(-5deg)]' : 'md:[transform:rotateY(15deg)_rotateX(5deg)]'}`}>
                  <div className={`relative overflow-hidden rounded-2xl border-2 shadow-2xl shadow-black/50 group-hover:border-orange-500/50 transition-colors ${isDark ? 'border-white/10 bg-zinc-900' : 'border-zinc-200 bg-white'}`}>
                    <img 
                      src={img.url} 
                      alt={img.title} 
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[4/3] object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-5 text-left">
                      <div>
                        <div className="text-[10px] font-bold text-orange-500 tracking-widest uppercase mb-1">DIBINA GUNA AI</div>
                        <h4 className="text-white font-bold text-sm tracking-tight">{img.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Modules */}
      <section id="modul" className={`py-20 md:py-24 px-6 ${isDark ? 'bg-[#030303]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 text-center md:text-left"
          >
            <motion.h2 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className={`text-3xl md:text-5xl font-black mb-4 pb-2 min-h-[48px] md:min-h-[60px] ${isDark ? 'text-gradient' : 'text-zinc-900'}`}
            >
              <Typewriter
                options={{
                  strings: ['10 Modul Strategik'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 3000,
                }}
              />
            </motion.h2>
            <p className="text-zinc-500 font-medium text-lg">Bina 10 aplikasi web yang mempunyai impak tinggi kepada pengurusan sekolah anda.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Large Highlight Card */}
            <div className={`bento-card md:col-span-2 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group ${!isDark && 'border border-zinc-100 shadow-sm'}`}>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="text-orange-500 font-bold text-xs tracking-widest mb-6">Modul Utama</div>
              <h3 className={`text-3xl font-bold mb-4 ${!isDark && 'text-zinc-900'}`}>Google AI Studio & Firebase</h3>
              <p className="text-zinc-500 leading-relaxed max-w-lg">Asas paling penting. Bagaimana menjana kod webapps secara automatik menggunakan AI dan mengurus pangkalan data awan (Cloud) secara percuma.</p>
            </div>

            {/* Medium Card */}
            <div className={`bento-card p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between ${!isDark && 'border border-zinc-100 shadow-sm'}`}>
              <div>
                <div className="text-orange-500 font-bold text-xs tracking-widest mb-6">Sistem Murid</div>
                <h3 className={`text-xl font-bold ${!isDark && 'text-zinc-900'}`}>Rekod Perkembangan Murid</h3>
              </div>
              <p className="text-zinc-600 text-sm mt-4">Automasi pemantauan prestasi secara digital.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {/* Small Grid Items */}
            <div className={`bento-card p-8 rounded-3xl text-center ${!isDark && 'border border-zinc-100 shadow-sm'}`}>
              <h4 className={`font-bold mb-2 ${!isDark && 'text-zinc-900'}`}>Sticky Post Webapps</h4>
              <p className="text-zinc-600 text-[10px] tracking-tight">Papan buletin interaktif kelas.</p>
            </div>
            <div className={`bento-card p-8 rounded-3xl text-center border-orange-500/20 ${!isDark && 'shadow-sm'}`}>
              <h4 className="font-bold mb-2 text-orange-400">Roda Nama Digital</h4>
              <p className="text-zinc-600 text-[10px] tracking-tight">Gamifikasi aktiviti PDPC di dalam kelas.</p>
            </div>
            <div className={`bento-card p-8 rounded-3xl text-center ${!isDark && 'border border-zinc-100 shadow-sm'}`}>
              <h4 className={`font-bold mb-2 ${!isDark && 'text-zinc-900'}`}>Borang Pintar</h4>
              <p className="text-zinc-600 text-[10px] tracking-tight">Sistem pengumpulan data pelbagai guna.</p>
            </div>

            {/* Wide Card */}
            <div className={`bento-card md:col-span-3 p-8 md:p-10 rounded-[2.5rem] grid md:grid-cols-3 gap-8 items-center ${isDark ? 'border-white/10' : 'border border-zinc-100 shadow-sm'}`}>
              <div className="space-y-4">
                <div className="text-xs font-black text-orange-500 tracking-[0.2em]">Pengurusan Sistematik</div>
                <ul className="text-sm space-y-3 text-zinc-400 font-medium">
                  <li>• Rekod Penghantaran Buku/Tugasan</li>
                  <li>• Dashboard Markah Real-time</li>
                  <li>• Sistem Pengurusan Sukan</li>
                </ul>
              </div>
              <div className={`md:col-span-2 p-8 rounded-2xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-zinc-50 border-zinc-100'}`}>
                <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-orange-100' : 'text-zinc-900'}`}>Sistem Tempahan Bilik Khas</h4>
                <p className="text-zinc-500 text-sm mb-6 leading-relaxed">Tiada lagi pertindihan jadual. Bina sistem tempahan makmal, perpustakaan, dan bilik mesyuarat yang teratur secara real-time.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-[10px] font-bold rounded-full uppercase">Firebase</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-[10px] font-bold rounded-full uppercase">AI Driven</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Detailed Modules Section */}
      <section id="detail-modul" className={`py-20 md:py-24 px-6 relative border-t ${isDark ? 'bg-black border-white/5' : 'bg-zinc-50 border-zinc-100'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h2 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className={`text-3xl md:text-5xl font-black mb-4 pb-2 min-h-[48px] md:min-h-[60px] ${isDark ? 'text-gradient' : 'text-zinc-900'}`}
            >
              <Typewriter
                options={{
                  strings: ['Kandungan 10 Modul Video'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 3000,
                }}
              />
            </motion.h2>
            <p className="text-zinc-500 font-medium text-lg">Panduan langkah-demi-langkah membina aplikasi profesional untuk sekolah anda secara terperinci.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              { title: "Membina Asas: Google AI Studio & Firebase", desc: "Memahami ekosistem vibe coding. Belajar cara menggunakan AI untuk menjana kod dan menetapkan pangkalan data Cloud Firebase secara percuma untuk penyimpanan data yang selamat." },
              { title: "Sistem Rekod Perkembangan Murid", desc: "Bina aplikasi untuk merekod prestasi akademik dan sahsiah murid. Data disimpan secara real-time dan boleh diakses pada bila-bila masa oleh guru." },
              { title: "Sticky Post Webapps (Papan Buletin Digital)", desc: "Cipta ruang kolaborasi interaktif di mana murid boleh 'melekatkan' nota digital mereka." },
              { title: "Roda Nama Digital & Gamifikasi", desc: "Ubah suasana kelas menjadi ceria dengan roda pemilihan nama rawak. Belajar cara menambah elemen gamifikasi." },
              { title: "Teknik Borang Pintar & Validasi Data", desc: "Bina borang digital yang mempunyai sistem semakan (validation) untuk memastikan data tepat." },
              { title: "Rekod Penghantaran Buku & Tugasan", desc: "Automasi tugas remeh. Bina penjejak untuk murid merekod penghantaran tugasan melalui QR." },
              { title: "Dashboard Markah Real-time (Visualisasi)", desc: "Menarik data dari Firebase dan memaparkannya dalam bentuk carta dan graf yang mudah difahami." },
              { title: "Sistem Pengurusan Sukan Sekolah", desc: "Bina portal sukan yang menguruskan pendaftaran rumah sukan, skor acara, dan kemaskini kedudukan pingat." },
              { title: "Sistem Tempahan Bilik Khas & Aset", desc: "Selesaikan masalah pertindihan jadual. Bina sistem tempahan makmal, bilik mesyuarat, dan perpustakaan." },
              { title: "Projek Akhir: Portal Berpusat & Deployment", desc: "Langkah terakhir — menggabungkan semua modul ke dalam satu aplikasi mega dan melancar ke internet." }
            ].map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`glass p-4 md:p-5 rounded-2xl flex gap-3 md:gap-4 items-start group hover:border-orange-500/30 transition-all duration-500 ${isDark ? 'border-white/5' : 'border-zinc-200'}`}
              >
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 font-black text-xs shrink-0 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className={`text-sm md:text-base font-bold mb-0.5 group-hover:text-orange-400 transition-colors ${isDark ? 'text-white' : 'text-zinc-900'}`}>{m.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-[11px] md:text-xs">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section id="usp" className={`py-20 md:py-24 px-6 relative border-t ${isDark ? 'bg-[#050505] border-white/5' : 'bg-zinc-50 border-zinc-100'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className={`text-3xl md:text-5xl font-black mb-4 pb-2 min-h-[48px] md:min-h-[60px] ${isDark ? 'text-gradient' : 'text-zinc-900'}`}
            >
              <Typewriter
                options={{
                  strings: ['Kenapa Vibe Coding?'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 3000,
                }}
              />
            </motion.h2>
            <p className="text-zinc-500 font-medium text-lg">Kelebihan utama yang direka khas untuk memudahkan tugas pendidik.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* USP 1 */}
            <div className={`glass p-8 rounded-[2rem] hover:border-orange-500/30 transition-colors ${isDark ? 'border-white/5' : 'border border-zinc-200'}`}>
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
                <Code2 size={24} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${!isDark && 'text-zinc-900'}`}>Zero Coding Required</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Tidak perlu pening menghafal kod. Anda hanya perlu tahu apa yang anda mahukan, AI akan uruskan selebihnya.</p>
            </div>

            {/* USP 2 */}
            <div className={`glass p-8 rounded-[2rem] hover:border-orange-500/30 transition-colors ${isDark ? 'border-white/5' : 'border border-zinc-200'}`}>
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${!isDark && 'text-zinc-900'}`}>AI-Powered</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Manfaatkan kuasa Google AI Studio untuk menjana, membaiki, dan menaiktaraf sistem anda secara automatik.</p>
            </div>

            {/* USP 3 */}
            <div className={`glass p-8 rounded-[2rem] hover:border-orange-500/30 transition-colors ${isDark ? 'border-white/5' : 'border border-zinc-200'}`}>
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
                <Layout size={24} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${!isDark && 'text-zinc-900'}`}>Professional Webapps</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Bina aplikasi web bertaraf profesional yang responsif, pantas, dan nampak premium untuk kegunaan sekolah.</p>
            </div>

            {/* USP 4 */}
            <div className={`glass p-8 rounded-[2rem] hover:border-orange-500/30 transition-colors ${isDark ? 'border-white/5' : 'border border-zinc-200'}`}>
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
                <Wallet size={24} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${!isDark && 'text-zinc-900'}`}>Harga Mampu Milik</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Tiada yuran bulanan. Bayar sekali sahaja untuk akses selamanya kepada semua modul yang dikemaskini.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimoni" className={`py-20 md:py-24 px-6 relative ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className={`glow-orange top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isDark ? 'opacity-20' : 'opacity-5'}`}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className={`text-3xl md:text-5xl font-black mb-4 tracking-tighter pb-2 min-h-[48px] md:min-h-[60px] ${isDark ? 'text-gradient' : 'text-zinc-900'}`}
            >
              <Typewriter
                options={{
                  strings: ['Apa Kata Mereka?'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 3000,
                }}
              />
            </motion.h2>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Maklum Balas Dari Pendidik Yang Telah Berjaya</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Testimonial 1 */}
            <div className={`glass p-8 rounded-[2rem] flex flex-col justify-between ${isDark ? 'border-white/5' : 'border border-zinc-200'}`}>
              <div>
                <div className="flex text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={`leading-relaxed mb-8 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>"Sangat membantu! Saya tak sangka boleh bina dashboard markah sendiri guna AI dalam masa sekejap. Memang revolusi untuk guru."</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 dark:border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-orange-600/20 flex items-center justify-center font-bold text-orange-500">CA</div>
                <div>
                  <div className={`text-xs font-black ${!isDark && 'text-zinc-900'}`}>Cikgu Aminah</div>
                  <div className="text-[10px] text-zinc-500 uppercase">Guru Sekolah Menengah</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className={`glass p-8 rounded-[2rem] flex flex-col justify-between ${isDark ? 'border-orange-500/20 shadow-orange-500/5' : 'border border-orange-500/40 bg-orange-50/10 shadow-lg'}`}>
              <div>
                <div className="flex text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={`leading-relaxed mb-8 italic ${isDark ? 'text-white' : 'text-zinc-800 font-medium'}`}>"Dulu pening nak urus tempahan makmal, sekarang semua digital. Cikgu-cikgu lain pun puji sebab sistem ni nampak sangat profesional."</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 dark:border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-orange-600/20 flex items-center justify-center font-bold text-orange-500">CH</div>
                <div>
                  <div className={`text-xs font-black ${!isDark && 'text-zinc-900'}`}>Cikgu Hisham</div>
                  <div className="text-[10px] text-zinc-500 uppercase">Penyelaras ICT</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className={`glass p-8 rounded-[2rem] flex flex-col justify-between ${isDark ? 'border-white/5' : 'border border-zinc-200'}`}>
              <div>
                <div className="flex text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={`leading-relaxed mb-8 italic ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>"Vibe Coding memang terbaik untuk pendidik yang nak 'upgrade' skill tanpa perlu hafal kod. Sangat berbaloi dengan harganya!"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 dark:border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-orange-600/20 flex items-center justify-center font-bold text-orange-500">CS</div>
                <div>
                  <div className={`text-xs font-black ${!isDark && 'text-zinc-900'}`}>Cikgu Syarifah</div>
                  <div className="text-[10px] text-zinc-500 uppercase">Guru Cemerlang</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="harga" className={`py-20 md:py-32 px-6 ${isDark ? 'bg-black' : 'bg-zinc-50'}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center mb-12"
        >
          <p className="text-zinc-500 font-bold tracking-widest text-sm mb-2">Kurang dari harga makan KFC sekeluarga 🍗</p>
        </motion.div>

        <div className="max-w-xl mx-auto glass rounded-[2.5rem] p-10 md:p-14 pricing-card text-center">
          {/* Badge */}
          <div className="badge-paling-laris">
            <span>🔥</span> Paling Laris
          </div>

          {/* Price Display */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="strike-price text-2xl text-zinc-600 font-bold">
                RM149
                <div className="strike-line"></div>
              </div>
              <div className="bg-orange-500/20 text-orange-500 text-[10px] font-black px-3 py-1 rounded-full tracking-widest">
              Jimat 34%
            </div>
            </div>

            <div className="flex items-end justify-center">
              <span className="text-xl md:text-2xl font-bold text-zinc-500 mr-2 mb-2 md:mb-4">RM</span>
              <span className="text-[80px] md:text-[120px] font-black leading-none text-orange-500 tracking-tighter">99</span>
              <span className="text-lg md:text-xl font-bold text-zinc-500 ml-2 mb-2 md:mb-4 lowercase">sahaja</span>
            </div>
            <p className="text-zinc-500 text-xs font-bold tracking-[0.2em] mt-2">Bayaran sekali sahaja • Akses selamanya</p>
          </div>

          {/* Checklist */}
          <ul className="text-left space-y-5 mb-12 max-w-sm mx-auto">
          <li className={`flex items-center gap-4 font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
            <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            10 Video Tutorial HD (250 minit)
          </li>
          <li className={`flex items-center gap-4 font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
            <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            10 Projek Sistem Sekolah Sebenar
          </li>
          <li className={`flex items-center gap-4 font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
            <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            Akses Selamanya — tiada langganan
          </li>
          <li className={`flex items-center gap-4 font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
            <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            Zero coding experience diperlukan
          </li>
          <li className={`flex items-center gap-4 font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
            <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            Sesuai untuk semua jenis sekolah
          </li>
        </ul>

        {/* Button */}
        <a href="https://toyyibpay.com/VCUP-IR" target="_blank" rel="noopener noreferrer" className="btn-impact block w-full py-5 md:py-6 rounded-3xl text-white text-lg md:text-xl font-black tracking-tight flex items-center justify-center gap-2">
          <span>⚡</span> Dapatkan Sekarang — RM99 Sahaja
        </a>

        <p className={`mt-6 text-[10px] font-black tracking-widest flex items-center justify-center gap-2 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
          🔒 Pembayaran selamat & terjamin
        </p>
      </div>
    </section>

    {/* Footer */}
    <footer className={`py-20 px-6 border-t text-center ${isDark ? 'border-white/5' : 'border-zinc-200 bg-white'}`}>
      <div className="text-2xl font-black mb-10 tracking-tighter">VIBE<span className="text-orange-500">CODING.</span></div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] font-bold text-zinc-600 tracking-widest mb-12 uppercase">
        <a href="https://wassap.my/+60173955657" className="hover:text-orange-500 transition">WhatsApp</a>
        <a href="#" className="hover:text-orange-500 transition">Facebook</a>
        <a href="#" className="hover:text-orange-500 transition">Instagram</a>
      </div>
      <p className={`text-[9px] tracking-[0.4em] ${isDark ? 'text-zinc-800' : 'text-zinc-400'}`}>© 2025 Vibe Coding Malaysia • Revolutionizing Education</p>
    </footer>

    {/* Floating Live Notification */}
    <div
      id="toast"
      className={`fixed bottom-8 left-8 z-[100] transform transition-all duration-700 ${showToast ? 'translate-y-0' : 'translate-y-40'}`}
    >
      <div className={`glass px-5 py-3 rounded-2xl flex items-center gap-4 shadow-2xl border ${isDark ? 'border-orange-500/20' : 'border-zinc-200'}`}>
        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-xs font-black text-white">G</div>
        <div>
          <div className="text-[9px] font-black text-orange-500 uppercase">Pendaftaran Baru</div>
          <div className={`text-[11px] font-bold ${!isDark && 'text-zinc-800'}`}>Cikgu Syarifah baru sahaja mendaftar!</div>
        </div>
      </div>
    </div>
  </div>
);
}
