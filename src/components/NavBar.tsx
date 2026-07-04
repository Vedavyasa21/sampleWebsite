"use client";

interface NavBarProps {
  scrolled: boolean;
}

export default function NavBar({ scrolled }: NavBarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — stacked squares icon */}
        <a href="#" className="flex items-center gap-1 group">
          <div className="flex flex-col gap-[2px]">
            <div className="w-4 h-4 border border-white/80 group-hover:border-white transition-colors" />
            <div className="w-4 h-4 border border-white/50 group-hover:border-white/80 transition-colors -mt-[3px] ml-[3px]" />
          </div>
        </a>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="inline-flex text-[10px] sm:text-xs tracking-widest uppercase text-white/70 hover:text-white/90 transition-colors"
          >
            VIEW LIVE DEMO →
          </a>
          <button className="flex flex-col gap-[3px] p-2 group">
            <span className="block w-5 h-[1.5px] bg-white/60 group-hover:bg-white transition-colors" />
            <span className="block w-5 h-[1.5px] bg-white/60 group-hover:bg-white transition-colors" />
            <span className="block w-5 h-[1.5px] bg-white/60 group-hover:bg-white transition-colors" />
          </button>
        </div>
      </div>
    </nav>
  );
}
