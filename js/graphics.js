/**
 * High-tech SVG graphics and visual asset generator for Zeelot Innovation Limited
 * Provides crisp, futuristic vector illustrations for Robotics, Gadgets, Software, and Team.
 */

const ZeelotGraphics = {
  // Hero Robotics & AI Lab Visual
  heroLab: () => `
    <svg viewBox="0 0 1200 650" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="heroGlow" cx="60%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#E51920" stop-opacity="0.25"/>
          <stop offset="60%" stop-color="#14161D" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#0B0C10" stop-opacity="1"/>
        </radialGradient>
        <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2C3240"/>
          <stop offset="50%" stop-color="#191C24"/>
          <stop offset="100%" stop-color="#0C0E12"/>
        </linearGradient>
        <linearGradient id="redAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#E51920"/>
          <stop offset="100%" stop-color="#FF4D52"/>
        </linearGradient>
        <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
        </pattern>
      </defs>
      
      <!-- Background & Grid -->
      <rect width="1200" height="650" fill="#0B0C10"/>
      <rect width="1200" height="650" fill="url(#heroGlow)"/>
      <rect width="1200" height="650" fill="url(#gridPattern)"/>

      <!-- Perspective Grid Floor -->
      <g opacity="0.3" stroke="#E51920" stroke-width="0.8">
        <line x1="100" y1="650" x2="600" y2="400" />
        <line x1="300" y1="650" x2="600" y2="400" />
        <line x1="500" y1="650" x2="600" y2="400" />
        <line x1="700" y1="650" x2="600" y2="400" />
        <line x1="900" y1="650" x2="600" y2="400" />
        <line x1="1100" y1="650" x2="600" y2="400" />
        <line x1="200" y1="600" x2="1000" y2="600" />
        <line x1="350" y1="520" x2="850" y2="520" />
        <line x1="480" y1="450" x2="720" y2="450" />
      </g>

      <!-- Industrial Robotic Arm Silhouette -->
      <g transform="translate(680, 100)">
        <!-- Base Pillar -->
        <rect x="220" y="380" width="160" height="70" rx="8" fill="url(#metalGrad)" stroke="#3A4252" stroke-width="2"/>
        <rect x="250" y="340" width="100" height="40" rx="4" fill="#E51920" opacity="0.9"/>
        <circle cx="300" cy="340" r="32" fill="#252A36" stroke="#E51920" stroke-width="3"/>
        
        <!-- Arm Segment 1 -->
        <path d="M300 340 L 160 180" stroke="#3A4252" stroke-width="36" stroke-linecap="round"/>
        <path d="M300 340 L 160 180" stroke="#E51920" stroke-width="6" stroke-linecap="round" stroke-dasharray="10,15"/>
        <circle cx="160" cy="180" r="28" fill="#1B1E28" stroke="#E51920" stroke-width="4"/>
        
        <!-- Arm Segment 2 -->
        <path d="M160 180 L 320 70" stroke="#4A5568" stroke-width="24" stroke-linecap="round"/>
        <circle cx="320" cy="70" r="20" fill="#E51920"/>

        <!-- Laser / Gripper Unit -->
        <path d="M320 70 L 390 90" stroke="#718096" stroke-width="14" stroke-linecap="round"/>
        <path d="M390 80 L 430 75 M 390 100 L 430 105" stroke="#E51920" stroke-width="6" stroke-linecap="round"/>
        <circle cx="430" cy="90" r="8" fill="#FF4D52"/>
        
        <!-- Laser Pulse -->
        <line x1="430" y1="90" x2="480" y2="150" stroke="#FF1E27" stroke-width="3" stroke-dasharray="4,4"/>
        <circle cx="480" cy="150" r="14" fill="#E51920" opacity="0.4"/>
        <circle cx="480" cy="150" r="6" fill="#FFF"/>

        <!-- Holographic HUD Rings -->
        <circle cx="200" cy="180" r="70" fill="none" stroke="rgba(229,25,32,0.3)" stroke-width="1.5" stroke-dasharray="8,8"/>
        <circle cx="200" cy="180" r="95" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1" stroke-dasharray="4,12"/>
        <text x="280" y="220" fill="#E51920" font-family="monospace" font-size="11" letter-spacing="2">SYS_ARM: 99.4% OPTIMAL</text>
        <text x="280" y="238" fill="rgba(255,255,255,0.6)" font-family="monospace" font-size="10">COORDINATES: X-4412 Y-8821</text>
      </g>

      <!-- Floating Tech Panels & Data Streams -->
      <g transform="translate(80, 180)" opacity="0.85">
        <rect x="0" y="0" width="220" height="130" rx="6" fill="rgba(20, 22, 29, 0.75)" stroke="rgba(229,25,32,0.4)" stroke-width="1.5"/>
        <rect x="0" y="0" width="220" height="28" rx="6" fill="rgba(229,25,32,0.2)"/>
        <text x="14" y="19" fill="#FFF" font-family="sans-serif" font-size="11" font-weight="bold">AUTONOMOUS TELEMETRY</text>
        <circle cx="200" cy="14" r="4" fill="#00FF66"/>
        
        <path d="M 20 80 Q 50 45, 90 70 T 160 50 T 200 90" fill="none" stroke="#E51920" stroke-width="2.5"/>
        <text x="14" y="112" fill="#8E9AA8" font-family="monospace" font-size="9">AI LATENCY: 2.1ms | STATUS: NOMINAL</text>
      </g>

      <!-- Bottom Gradient Fade -->
      <rect y="580" width="1200" height="70" fill="url(#metalGrad)" opacity="0.6"/>
    </svg>
  `,

  // Dual Image Showcase for About Section
  aboutShowcase: () => `
    <svg viewBox="0 0 600 520" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1B1E28"/>
          <stop offset="100%" stop-color="#0F1117"/>
        </linearGradient>
        <linearGradient id="redPill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#E51920"/>
          <stop offset="100%" stop-color="#990005"/>
        </linearGradient>
      </defs>

      <!-- Card 1: Advanced Robotics Lab -->
      <g transform="translate(20, 20)">
        <rect width="360" height="260" rx="12" fill="url(#cardGrad1)" stroke="#E51920" stroke-width="2"/>
        <!-- Circuit Lines -->
        <path d="M 30 50 L 120 50 L 160 90 L 330 90" fill="none" stroke="rgba(229,25,32,0.4)" stroke-width="2"/>
        <circle cx="30" cy="50" r="4" fill="#E51920"/>
        <circle cx="330" cy="90" r="4" fill="#FFF"/>
        
        <!-- Robot Head Wireframe -->
        <g transform="translate(140, 110)">
          <rect x="-40" y="-30" width="80" height="60" rx="8" fill="#252A36" stroke="#4A5568" stroke-width="2"/>
          <circle cx="-16" cy="-6" r="8" fill="#E51920"/>
          <circle cx="16" cy="-6" r="8" fill="#E51920"/>
          <line x1="-20" y1="16" x2="20" y2="16" stroke="#00E5FF" stroke-width="2"/>
          <line x1="0" y1="-30" x2="0" y2="-45" stroke="#E51920" stroke-width="3"/>
          <circle cx="0" cy="-45" r="5" fill="#FFF"/>
        </g>
        
        <!-- Label Badge -->
        <rect x="20" y="200" width="220" height="40" rx="6" fill="#14161D" stroke="rgba(255,255,255,0.1)"/>
        <text x="35" y="224" fill="#FFF" font-family="sans-serif" font-size="12" font-weight="bold">Zeelot Robotics Lab</text>
        <text x="165" y="224" fill="#E51920" font-family="monospace" font-size="10">PHASE-1</text>
      </g>

      <!-- Card 2: Enterprise Software & Gadgets Ecosystem (Overlapping) -->
      <g transform="translate(220, 220)">
        <rect width="360" height="270" rx="12" fill="#14161D" stroke="#3A4252" stroke-width="2"/>
        <!-- Window Bar -->
        <rect width="360" height="34" rx="12" fill="#1F2430"/>
        <circle cx="20" cy="17" r="5" fill="#FF5F56"/>
        <circle cx="38" cy="17" r="5" fill="#FFBD2E"/>
        <circle cx="56" cy="17" r="5" fill="#27C93F"/>
        <text x="80" y="21" fill="#8E9AA8" font-family="monospace" font-size="11">zeelot-core-architecture.sys</text>

        <!-- Code & Analytics Elements -->
        <g transform="translate(25, 60)">
          <rect x="0" y="0" width="140" height="70" rx="6" fill="#1B1E28" stroke="rgba(229,25,32,0.3)"/>
          <text x="12" y="24" fill="#8E9AA8" font-family="sans-serif" font-size="10">Cloud ERP Status</text>
          <text x="12" y="50" fill="#00FF66" font-family="sans-serif" font-size="16" font-weight="bold">ACTIVE (99.9%)</text>

          <rect x="160" y="0" width="145" height="70" rx="6" fill="#1B1E28" stroke="rgba(255,255,255,0.1)"/>
          <text x="172" y="24" fill="#8E9AA8" font-family="sans-serif" font-size="10">Connected IoT Nodes</text>
          <text x="172" y="50" fill="#E51920" font-family="sans-serif" font-size="16" font-weight="bold">1,420 UNITS</text>
        </g>

        <!-- Dynamic Graph Bar -->
        <g transform="translate(25, 150)">
          <rect x="0" y="0" width="305" height="45" rx="4" fill="#191C24"/>
          <line x1="20" y1="35" x2="60" y2="15" stroke="#E51920" stroke-width="3"/>
          <line x1="60" y1="15" x2="120" y2="28" stroke="#E51920" stroke-width="3"/>
          <line x1="120" y1="28" x2="190" y2="10" stroke="#E51920" stroke-width="3"/>
          <line x1="190" y1="10" x2="280" y2="22" stroke="#E51920" stroke-width="3"/>
        </g>

        <!-- Floating Red Badge -->
        <g transform="translate(190, 210)">
          <rect width="145" height="36" rx="18" fill="url(#redPill)"/>
          <text x="20" y="23" fill="#FFF" font-family="sans-serif" font-size="11" font-weight="bold">ENTERPRISE READY</text>
        </g>
      </g>
    </svg>
  `,

  // Project Showcase Visuals
  projectVisual: (keyword) => {
    switch (keyword) {
      case "robotic-arm":
        return `
          <svg viewBox="0 0 400 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#12141A"/>
            <path d="M 50 200 L 140 200 L 160 140 L 260 90 L 320 120" fill="none" stroke="#E51920" stroke-width="8" stroke-linecap="round"/>
            <circle cx="160" cy="140" r="14" fill="#FFF" stroke="#E51920" stroke-width="4"/>
            <circle cx="260" cy="90" r="10" fill="#252A36" stroke="#FFF" stroke-width="3"/>
            <polygon points="320,110 345,120 320,130" fill="#E51920"/>
            <text x="30" y="45" fill="#E51920" font-family="sans-serif" font-size="12" font-weight="bold">INDUSTRIAL AUTOMATION</text>
            <text x="30" y="65" fill="#8E9AA8" font-family="sans-serif" font-size="10">High Precision Sorter Arm</text>
          </svg>
        `;
      case "surveillance-drone":
        return `
          <svg viewBox="0 0 400 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#101217"/>
            <ellipse cx="200" cy="120" rx="70" ry="25" fill="#202430" stroke="#E51920" stroke-width="2"/>
            <line x1="130" y1="120" x2="80" y2="80" stroke="#718096" stroke-width="4"/>
            <line x1="270" y1="120" x2="320" y2="80" stroke="#718096" stroke-width="4"/>
            <line x1="130" y1="120" x2="80" y2="160" stroke="#718096" stroke-width="4"/>
            <line x1="270" y1="120" x2="320" y2="160" stroke="#718096" stroke-width="4"/>
            <circle cx="80" cy="80" r="24" fill="none" stroke="#E51920" stroke-width="2" stroke-dasharray="6,4"/>
            <circle cx="320" cy="80" r="24" fill="none" stroke="#E51920" stroke-width="2" stroke-dasharray="6,4"/>
            <circle cx="80" cy="160" r="24" fill="none" stroke="#E51920" stroke-width="2" stroke-dasharray="6,4"/>
            <circle cx="320" cy="160" r="24" fill="none" stroke="#E51920" stroke-width="2" stroke-dasharray="6,4"/>
            <circle cx="200" cy="120" r="10" fill="#E51920"/>
            <text x="30" y="45" fill="#E51920" font-family="sans-serif" font-size="12" font-weight="bold">AUTONOMOUS DRONE</text>
            <text x="30" y="65" fill="#8E9AA8" font-family="sans-serif" font-size="10">Thermal Surveillance Rover</text>
          </svg>
        `;
      case "cloud-erp":
        return `
          <svg viewBox="0 0 400 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#0D0F14"/>
            <rect x="40" y="70" width="320" height="130" rx="8" fill="#1A1D26" stroke="#3A4252" stroke-width="1.5"/>
            <rect x="60" y="90" width="80" height="45" rx="4" fill="#E51920" opacity="0.8"/>
            <rect x="160" y="90" width="80" height="45" rx="4" fill="#242938"/>
            <rect x="260" y="90" width="80" height="45" rx="4" fill="#242938"/>
            <line x1="60" y1="160" x2="340" y2="160" stroke="#2D3342" stroke-width="8" stroke-linecap="round"/>
            <line x1="60" y1="160" x2="240" y2="160" stroke="#E51920" stroke-width="8" stroke-linecap="round"/>
            <text x="30" y="45" fill="#E51920" font-family="sans-serif" font-size="12" font-weight="bold">ENTERPRISE ERP</text>
            <text x="30" y="65" fill="#8E9AA8" font-family="sans-serif" font-size="10">Multi-Warehouse Inventory Suite</text>
          </svg>
        `;
      case "campus-software":
        return `
          <svg viewBox="0 0 400 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#111319"/>
            <g transform="translate(60, 60)">
              <rect x="0" y="0" width="120" height="130" rx="8" fill="#1C202C" stroke="#E51920" stroke-width="1.5"/>
              <circle cx="60" cy="45" r="24" fill="#2A3042"/>
              <rect x="25" y="85" width="70" height="8" rx="4" fill="#E51920"/>
              <rect x="35" y="102" width="50" height="6" rx="3" fill="#8E9AA8"/>
            </g>
            <g transform="translate(200, 75)">
              <rect x="0" y="0" width="140" height="105" rx="6" fill="#181A22" stroke="rgba(255,255,255,0.1)"/>
              <line x1="20" y1="30" x2="120" y2="30" stroke="#4A5568" stroke-width="4"/>
              <line x1="20" y1="55" x2="100" y2="55" stroke="#E51920" stroke-width="4"/>
              <line x1="20" y1="80" x2="110" y2="80" stroke="#00E5FF" stroke-width="4"/>
            </g>
            <text x="30" y="40" fill="#E51920" font-family="sans-serif" font-size="12" font-weight="bold">SMART CAMPUS PORTAL</text>
          </svg>
        `;
      case "smarthome-hub":
        return `
          <svg viewBox="0 0 400 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#0E1015"/>
            <rect x="110" y="60" width="180" height="130" rx="14" fill="#1E222D" stroke="#E51920" stroke-width="2"/>
            <circle cx="200" cy="115" r="30" fill="none" stroke="#E51920" stroke-width="3"/>
            <polygon points="195,105 210,115 195,125" fill="#E51920"/>
            <text x="145" y="165" fill="#FFF" font-family="sans-serif" font-size="11" font-weight="bold">ZEELOT HUB 4.0</text>
            <text x="30" y="40" fill="#E51920" font-family="sans-serif" font-size="12" font-weight="bold">SMART-HOME GADGET</text>
          </svg>
        `;
      case "stem-robotics":
      default:
        return `
          <svg viewBox="0 0 400 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#10131A"/>
            <rect x="70" y="80" width="260" height="100" rx="8" fill="#1C212E" stroke="#E51920" stroke-width="1.5"/>
            <rect x="90" y="100" width="45" height="40" rx="4" fill="#E51920"/>
            <circle cx="180" cy="120" r="16" fill="#2B3245" stroke="#FFF" stroke-width="2"/>
            <circle cx="240" cy="120" r="16" fill="#2B3245" stroke="#FFF" stroke-width="2"/>
            <text x="30" y="45" fill="#E51920" font-family="sans-serif" font-size="12" font-weight="bold">ROBOTIC STEM TRAINING</text>
            <text x="30" y="65" fill="#8E9AA8" font-family="sans-serif" font-size="10">Hands-on Engineering Kits</text>
          </svg>
        `;
    }
  },

  // Team Member Avatar Generator
  teamAvatar: (photoId, name) => {
    const initials = name.split(" ").map(n => n[0]).join("");
    let bgGrad = "linear-gradient(135deg, #E51920 0%, #4A0507 100%)";
    if (photoId.includes("arinze")) bgGrad = "linear-gradient(135deg, #252A36 0%, #11141C 100%)";
    if (photoId.includes("fatimah")) bgGrad = "linear-gradient(135deg, #B30F15 0%, #1A1D26 100%)";
    if (photoId.includes("david")) bgGrad = "linear-gradient(135deg, #1E222D 0%, #0F1116 100%)";

    return `
      <svg viewBox="0 0 280 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="avatarGrad_${photoId}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#E51920"/>
            <stop offset="100%" stop-color="#14161D"/>
          </linearGradient>
        </defs>
        <rect width="280" height="280" fill="#14161D"/>
        <!-- Stylized Professional Silhouette -->
        <circle cx="140" cy="140" r="100" fill="url(#avatarGrad_${photoId})" stroke="#E51920" stroke-width="2"/>
        <circle cx="140" cy="110" r="45" fill="#1F2430" stroke="#4A5568" stroke-width="2"/>
        <path d="M 75 220 Q 140 170 205 220" fill="#252A36" stroke="#4A5568" stroke-width="2"/>
        <!-- Initials -->
        <text x="140" y="122" fill="#FFF" font-family="sans-serif" font-size="32" font-weight="bold" text-anchor="middle">${initials}</text>
        <circle cx="210" cy="80" r="14" fill="#E51920"/>
        <path d="M 205 80 L 209 84 L 216 76" fill="none" stroke="#FFF" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ZeelotGraphics;
}
