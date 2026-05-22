import React, { useRef, useState, useEffect } from "react";
import "./ProfileCard.css";

const ProfileCard = ({
  name,
  title,
  handle,
  status,
  contactText,
  avatarUrl,
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick,
  behindGlowColor = "rgba(125, 190, 255, 0.67)",
  iconUrl,
  behindGlowEnabled = true,
  innerGradient = "linear-gradient(145deg, #1e293b 0%, #0f172a 100%)",
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!enableTilt || !cardRef.current) return;
    
    // Simple check for mobile tilt to disable it
    if (!enableMobileTilt && window.innerWidth < 768) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15; // Max 15 deg tilt
    const rotateY = ((x - centerX) / centerX) * 15;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className="pc-container relative w-full h-full max-w-sm mx-auto flex items-center justify-center">
      {/* Background Glow */}
      {behindGlowEnabled && (
        <div
          className="pc-behind-glow absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500"
          style={{
            background: behindGlowColor,
            opacity: isHovered ? 0.8 : 0.4,
            transform: "scale(1.05)",
            zIndex: 0
          }}
        />
      )}

      {/* Main Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="pc-card relative w-full rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 ease-out border border-white/10 overflow-hidden shadow-2xl"
        style={{
          background: innerGradient,
          transformStyle: "preserve-3d",
          zIndex: 1
        }}
      >
        {/* Optional Icon Pattern Overlay */}
        {iconUrl && (
          <div 
            className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url(${iconUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        )}

        {/* Dynamic Inner Glow tied to mouse position */}
        {isHovered && enableTilt && (
          <div
            className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen"
            style={{
              background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent)`
            }}
          />
        )}

        {/* Avatar Area */}
        <div 
          className="relative w-36 h-36 mx-auto rounded-full p-1 mb-6 transition-transform duration-500 ease-out shadow-xl"
          style={{ transform: "translateZ(30px)", background: "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))" }}
        >
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-[rgba(30,41,59,0.5)]">
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          {/* Status Indicator */}
          {status && (
            <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-slate-900 shadow-md animate-pulse"
                 style={{ backgroundColor: status.toLowerCase() === "online" ? "#10b981" : "#f59e0b" }} 
                 title={status}
            />
          )}
        </div>

        {/* User Info Content */}
        {showUserInfo !== false && (
          <div className="w-full" style={{ transform: "translateZ(20px)" }}>
            <h3 className="text-2xl font-bold text-white tracking-wide mb-1 drop-shadow-md">
              {name}
            </h3>
            <p className="text-sm font-medium text-blue-300 md:text-base mb-2">
              {title}
            </p>
            {handle && (
              <p className="text-xs text-slate-400 mb-6 font-mono bg-white/5 inline-block px-3 py-1 rounded-full border border-white/5">
                @{handle}
              </p>
            )}
            
            {contactText && (
              <button
                onClick={onContactClick}
                className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500/80 to-purple-500/80 hover:from-blue-400 hover:to-purple-400 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                {contactText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
