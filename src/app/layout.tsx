import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Home & Living",
  description: "High-end contemporary interior and accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased bg-[#F5F6F8] text-[#3B434C]`}
    >
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
          #root-preloader {
            position: fixed;
            inset: 0;
            background: #FFFFFF;
            background-image: 
              linear-gradient(#F0F0F0 1px, transparent 1px),
              linear-gradient(90deg, #F0F0F0 1px, transparent 1px);
            background-size: 40px 40px;
            z-index: 99999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), visibility 1s;
          }
          #root-preloader.fade-out {
            opacity: 0;
            visibility: hidden;
            transform: scale(1.05);
          }
          .iso-frame {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            animation: draw-iso 2.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          }
          @keyframes draw-iso {
            to { stroke-dashoffset: 0; }
          }
          .iso-fill {
            opacity: 0;
            transform: scaleY(0);
            transform-origin: bottom;
            animation: fill-iso 1.5s ease 1.2s forwards;
          }
          @keyframes fill-iso {
            to { opacity: 0.15; transform: scaleY(1); }
          }
          .pendant-lamp {
            opacity: 0;
            transform: translateY(-20px);
            animation: drop-lamp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 2s forwards;
          }
          @keyframes drop-lamp {
            to { opacity: 1; transform: translateY(0); }
          }
          .logo-text {
            opacity: 0;
            letter-spacing: 0.1em;
            animation: fade-text 1.2s ease 2.5s forwards;
          }
          @keyframes fade-text {
            to { opacity: 1; letter-spacing: 0.6em; }
          }
          @media (max-width: 640px) {
            #root-preloader svg { transform: scale(0.8); }
            .logo-text { font-size: 8px !important; }
          }
          .curation-text {
             opacity: 0;
             animation: soft-pulse 2s ease-in-out 3s infinite alternate;
          }
          @keyframes soft-pulse {
             from { opacity: 0.2; }
             to { opacity: 0.5; }
          }
        `}} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <div id="root-preloader">
          <div style={{ width: '100px', height: '100px', marginBottom: '50px' }}>
            <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="iso-frame" d="M40 30L80 15V90L40 105V30Z" stroke="#3B434C" strokeWidth="0.8" strokeLinejoin="round" />
              <path className="iso-frame" d="M80 15L100 30V105L80 90" stroke="#3B434C" strokeWidth="0.8" strokeLinejoin="round" />
              <path className="iso-frame" d="M40 30L20 45V120L40 105" stroke="#3B434C" strokeWidth="0.8" strokeLinejoin="round" />
              <path className="iso-fill" d="M80 15L100 30V105L80 90V15Z" fill="#F7A382" />
              <g className="pendant-lamp">
                <line x1="50" y1="35" x2="50" y2="65" stroke="#3B434C" strokeWidth="1.5" />
                <path d="M35 75C35 70 41.7157 66 50 66C58.2843 66 65 70 65 75H35Z" fill="#3B434C" />
                <circle cx="50" cy="78" r="3" fill="#F7A382" />
              </g>
            </svg>
          </div>
          <div className="logo-text" style={{ color: '#3B434C', fontSize: '9px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '10px' }}>
            ISO & LUME <span style={{ color: '#F7A382' }}>STUDIO</span>
          </div>
          <div className="curation-text" style={{ color: '#3B434C', fontSize: '10px', fontStyle: 'italic', fontFamily: 'var(--font-playfair)', letterSpacing: '0.05em' }}>
            Curation in progress...
          </div>
        </div>

        <script dangerouslySetInnerHTML={{
          __html: `
          window.addEventListener('load', function() {
            var loader = document.getElementById('root-preloader');
            if (loader) {
              setTimeout(function() {
                loader.classList.add('fade-out');
                setTimeout(function() {
                  loader.style.display = 'none';
                }, 1000);
              }, 3200);
            }
          });
        `}} />
        {children}
      </body>
    </html>
  );
}
