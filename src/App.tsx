/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Code2, Sparkles, Layout, Wallet } from 'lucide-react';
import { motion } from 'motion/react';
import Typewriter from 'typewriter-effect';

export default function App() {
  const [timeLeft, setTimeLeft] = useState('');
  const [showToast, setShowToast] = useState(false);

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
    <div className="antialiased overflow-x-hidden">
      {/* Top FOMO Banner */}
      <div className="bg-orange-600 py-2 text-center text-[10px] font-black tracking-[0.2em] uppercase z-[100] relative">
        Harga Promo RM99 Tamat Dalam: <span className="font-mono">{timeLeft}</span>
      </div>

      {/* Background Decoration */}
      <div className="glow-orange top-[-100px] left-[-100px]"></div>
      <div className="glow-orange bottom-[-200px] right-[-100px] opacity-50"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-[60] glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-xl font-extrabold tracking-tighter">
            VIBE<span className="text-orange-500">CODING.</span>
          </div>
          <div className="hidden lg:flex gap-10 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            <a href="#modul" className="hover:text-white transition">Kurikulum</a>
            <a href="#testimoni" className="hover:text-white transition">Apa Kata Mereka</a>
            <a href="#harga" className="hover:text-white transition">Pendaftaran</a>
          </div>
          <a
            href="https://toyyibpay.com/VCUP-IR"
            className="bg-orange-600 hover:bg-orange-700 text-white text-[10px] font-black px-4 md:px-6 py-2.5 rounded-full transition shadow-lg shadow-orange-500/20"
          >
            DAFTAR SEKARANG
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-10"
          >
            🚀 REVOLUSI DIGITAL PENDIDIK 2025
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <motion.h1 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95] text-gradient pb-2 min-h-[100px] md:min-h-[140px] lg:min-h-[190px]"
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
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Kuasai <span className="text-white">Google AI Studio</span> & <span className="text-white">Firebase</span> untuk bina sistem pengurusan bilik darjah profesional. <span className="italic">Tiada asas coding? Bukan masalah.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a
              href="#harga"
              className="px-8 md:px-12 py-4 md:py-5 bg-white text-black rounded-2xl font-black text-base md:text-lg hover:scale-105 transition shadow-2xl"
            >
              Sertai Sekarang — RM99
            </a>
            <a
              href="https://wassap.my/+60173955657"
              className="px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg border border-white/10 hover:bg-white/5 transition"
            >
              WhatsApp untuk ketahui lebih lanjut!
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 flex flex-wrap justify-center gap-6 md:gap-12"
          >
            <div className="flex items-center gap-2 font-bold text-[10px] tracking-widest uppercase italic">#AIPowered</div>
            <div className="flex items-center gap-2 font-bold text-[10px] tracking-widest uppercase italic">#NoCodeRevolution</div>
            <div className="flex items-center gap-2 font-bold text-[10px] tracking-widest uppercase italic">#TeacherTech</div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Modules */}
      <section id="modul" className="py-24 px-6 bg-[#030303]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center md:text-left"
          >
            <motion.h2 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="text-3xl md:text-5xl font-black mb-4 text-gradient pb-2 min-h-[48px] md:min-h-[60px]"
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
            <div className="bento-card md:col-span-2 p-10 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-6">Modul Utama</div>
              <h3 className="text-3xl font-bold mb-4">Google AI Studio & Firebase</h3>
              <p className="text-zinc-500 leading-relaxed max-w-lg">Asas paling penting. Bagaimana menjana kod webapps secara automatik menggunakan AI dan mengurus pangkalan data awan (Cloud) secara percuma.</p>
            </div>

            {/* Medium Card */}
            <div className="bento-card p-10 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                <div className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-6">Sistem Murid</div>
                <h3 className="text-xl font-bold">Rekod Perkembangan Murid</h3>
              </div>
              <p className="text-zinc-600 text-sm mt-4 italic">Automasi pemantauan prestasi secara digital.</p>
            </div>

            {/* Small Grid Items */}
            <div className="bento-card p-8 rounded-3xl text-center">
              <h4 className="font-bold mb-2">Sticky Post Webapps</h4>
              <p className="text-zinc-600 text-xs tracking-tight">Papan buletin interaktif kelas.</p>
            </div>
            <div className="bento-card p-8 rounded-3xl border-orange-500/20 text-center">
              <h4 className="font-bold mb-2 text-orange-400">Roda Nama Digital</h4>
              <p className="text-zinc-600 text-xs tracking-tight">Gamifikasi aktiviti PDPC di dalam kelas.</p>
            </div>
            <div className="bento-card p-8 rounded-3xl text-center">
              <h4 className="font-bold mb-2">Borang Pintar</h4>
              <p className="text-zinc-600 text-xs tracking-tight">Sistem pengumpulan data pelbagai guna.</p>
            </div>

            {/* Wide Card */}
            <div className="bento-card md:col-span-3 p-10 rounded-[2.5rem] grid md:grid-cols-3 gap-8 items-center border-white/10">
              <div className="space-y-4">
                <div className="text-xs font-black text-orange-500 tracking-[0.2em]">PENGURUSAN SISTEMATIK</div>
                <ul className="text-sm space-y-3 text-zinc-400 font-medium">
                  <li>• Rekod Penghantaran Buku/Tugasan</li>
                  <li>• Dashboard Markah Real-time</li>
                  <li>• Sistem Pengurusan Sukan</li>
                </ul>
              </div>
              <div className="md:col-span-2 bg-white/5 p-8 rounded-2xl border border-white/5">
                <h4 className="text-xl font-bold mb-4 italic text-orange-100">Sistem Tempahan Bilik Khas</h4>
                <p className="text-zinc-500 text-sm mb-6 leading-relaxed">Tiada lagi pertindihan jadual. Bina sistem tempahan makmal, perpustakaan, dan bilik mesyuarat yang teratur secara real-time.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-[10px] font-bold rounded-full">FIREBASE</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-[10px] font-bold rounded-full">AI DRIVEN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-24 px-6 bg-[#050505] relative border-t border-white/5">
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
              className="text-3xl md:text-5xl font-black mb-4 text-gradient pb-2 min-h-[48px] md:min-h-[60px]"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* USP 1 */}
            <div className="glass p-8 rounded-[2rem] border-white/5 hover:border-orange-500/30 transition-colors">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Zero Coding Required</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Tidak perlu pening menghafal kod. Anda hanya perlu tahu apa yang anda mahukan, AI akan uruskan selebihnya.</p>
            </div>

            {/* USP 2 */}
            <div className="glass p-8 rounded-[2rem] border-white/5 hover:border-orange-500/30 transition-colors">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Manfaatkan kuasa Google AI Studio untuk menjana, membaiki, dan menaiktaraf sistem anda secara automatik.</p>
            </div>

            {/* USP 3 */}
            <div className="glass p-8 rounded-[2rem] border-white/5 hover:border-orange-500/30 transition-colors">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Webapps</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Bina aplikasi web bertaraf profesional yang responsif, pantas, dan nampak premium untuk kegunaan sekolah.</p>
            </div>

            {/* USP 4 */}
            <div className="glass p-8 rounded-[2rem] border-white/5 hover:border-orange-500/30 transition-colors">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
                <Wallet size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Affordable One-Time Payment</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Tiada yuran bulanan atau tersembunyi. Bayar sekali sahaja untuk akses selamanya kepada semua modul.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimoni" className="py-24 px-6 bg-black relative">
        <div className="glow-orange top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
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
              className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-gradient pb-2 min-h-[48px] md:min-h-[60px]"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="glass p-8 rounded-[2rem] border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-8 italic">"Sangat membantu! Saya tak sangka boleh bina dashboard markah sendiri guna AI dalam masa sekejap. Memang revolusi untuk guru."</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-orange-600/20 flex items-center justify-center font-bold text-orange-500">CA</div>
                <div>
                  <div className="text-xs font-black">Cikgu Aminah</div>
                  <div className="text-[10px] text-zinc-500 uppercase">Guru Sekolah Menengah</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="glass p-8 rounded-[2rem] border-orange-500/20 flex flex-col justify-between">
              <div>
                <div className="flex text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white leading-relaxed mb-8 italic">"Dulu pening nak urus tempahan makmal, sekarang semua digital. Cikgu-cikgu lain pun puji sebab sistem ni nampak sangat profesional."</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-orange-600/20 flex items-center justify-center font-bold text-orange-500">CH</div>
                <div>
                  <div className="text-xs font-black">Cikgu Hisham</div>
                  <div className="text-[10px] text-zinc-500 uppercase">Penyelaras ICT</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="glass p-8 rounded-[2rem] border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-8 italic">"Vibe Coding memang terbaik untuk pendidik yang nak 'upgrade' skill tanpa perlu hafal kod. Sangat berbaloi dengan harganya!"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-orange-600/20 flex items-center justify-center font-bold text-orange-500">CS</div>
                <div>
                  <div className="text-xs font-black">Cikgu Syarifah</div>
                  <div className="text-[10px] text-zinc-500 uppercase">Guru Cemerlang</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="harga" className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center mb-12"
        >
          <p className="text-zinc-500 font-bold text-sm tracking-widest uppercase mb-2">Kurang dari harga makan KFC sekeluarga 🍗</p>
        </motion.div>

        <div className="max-w-xl mx-auto glass rounded-[2.5rem] p-10 md:p-14 pricing-card text-center">
          {/* Badge */}
          <div className="badge-paling-laris uppercase italic">
            <span>🔥</span> PALING LARIS
          </div>

          {/* Price Display */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="strike-price text-2xl text-zinc-600 font-bold">
                RM149
                <div className="strike-line"></div>
              </div>
              <div className="bg-orange-500/20 text-orange-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                JIMAT 34%
              </div>
            </div>

            <div className="flex items-end justify-center">
              <span className="text-xl md:text-2xl font-bold text-zinc-500 mr-2 mb-2 md:mb-4 uppercase">RM</span>
              <span className="text-[80px] md:text-[120px] font-black leading-none text-orange-500 tracking-tighter">99</span>
              <span className="text-lg md:text-xl font-bold text-zinc-500 ml-2 mb-2 md:mb-4 lowercase">sahaja</span>
            </div>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mt-2">Bayaran sekali sahaja • Akses selamanya</p>
          </div>

          {/* Checklist */}
          <ul className="text-left space-y-5 mb-12 max-w-sm mx-auto">
            <li className="flex items-center gap-4 text-zinc-300 font-semibold">
              <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              10 Video Tutorial HD (250 minit)
            </li>
            <li className="flex items-center gap-4 text-zinc-300 font-semibold">
              <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              10 Projek Sistem Sekolah Sebenar
            </li>
            <li className="flex items-center gap-4 text-zinc-300 font-semibold">
              <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              Akses Selamanya — tiada langganan
            </li>
            <li className="flex items-center gap-4 text-zinc-300 font-semibold">
              <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              Zero coding experience diperlukan
            </li>
            <li className="flex items-center gap-4 text-zinc-300 font-semibold">
              <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              Sesuai untuk semua jenis sekolah
            </li>
          </ul>

          {/* Button */}
          <a href="https://toyyibpay.com/VCUP-IR" className="btn-impact block w-full py-5 md:py-6 rounded-3xl text-white text-lg md:text-xl font-black uppercase tracking-tight flex items-center justify-center gap-2">
            <span>⚡</span> DAPATKAN SEKARANG — RM99 SAHAJA
          </a>

          <p className="mt-6 text-[10px] text-zinc-600 font-black uppercase tracking-widest flex items-center justify-center gap-2">
            🔒 Pembayaran selamat & terjamin
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 text-center">
        <div className="text-2xl font-black mb-10 tracking-tighter">VIBE<span className="text-orange-500">CODING.</span></div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] font-bold text-zinc-600 tracking-widest uppercase mb-12">
          <a href="https://wassap.my/+60173955657" className="hover:text-white transition">WhatsApp</a>
          <a href="#" className="hover:text-white transition">Facebook</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
        </div>
        <p className="text-[9px] text-zinc-800 tracking-[0.4em]">© 2025 VIBE CODING MALAYSIA • REVOLUTIONIZING EDUCATION</p>
      </footer>

      {/* Floating Live Notification */}
      <div
        id="toast"
        className={`fixed bottom-8 left-8 z-[100] transform transition-all duration-700 ${showToast ? 'translate-y-0' : 'translate-y-40'}`}
      >
        <div className="glass px-5 py-3 rounded-2xl flex items-center gap-4 shadow-2xl border border-orange-500/20">
          <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-xs font-black">G</div>
          <div>
            <div className="text-[9px] font-black text-orange-500 uppercase">Pendaftaran Baru</div>
            <div className="text-[11px] font-bold">Cikgu Syarifah baru sahaja mendaftar!</div>
          </div>
        </div>
      </div>
    </div>
  );
}
