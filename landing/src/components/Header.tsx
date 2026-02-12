"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface HeaderProps {
  onGetStarted: () => void;
}

export const Header = ({ onGetStarted }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      // Open animation
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power3.out",
      });
      
      // Animate menu items
      const items = menuItemsRef.current?.children;
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.3,
            stagger: 0.1,
            delay: 0.2,
            ease: "power2.out",
          }
        );
      }
    } else {
      // Close animation
      gsap.to(menuRef.current, {
        x: "-100%",
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-stone-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center">
            <a href="/" className="text-xl font-semibold text-foreground">
              alterhabits
            </a>
          </div>
          
          <nav className="hidden items-center gap-8 md:flex">
            <a 
              href="/" 
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Home
            </a>
            <a 
              href="/pricing" 
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Pricing
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button
              onClick={onGetStarted}
              className="hidden rounded-full bg-accent px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90 md:block"
            >
              Get started
            </button>

            {/* Burger Menu Button */}
            <button
              onClick={handleToggleMenu}
              className="flex flex-col gap-1.5 md:hidden"
              aria-label="Toggle menu"
            >
              <span className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-full -translate-x-full bg-background md:hidden"
      >
        <div ref={menuItemsRef} className="flex flex-col gap-6 p-6">
          <a
            href="/"
            onClick={handleCloseMenu}
            className="text-lg text-foreground transition-colors hover:text-accent"
          >
            Home
          </a>
          <a
            href="/pricing"
            onClick={handleCloseMenu}
            className="text-lg text-foreground transition-colors hover:text-accent"
          >
            Pricing
          </a>
          <a
            href="/blog"
            onClick={handleCloseMenu}
            className="text-lg text-foreground transition-colors hover:text-accent"
          >
            Blog
          </a>
          <button
            onClick={() => {
              handleCloseMenu();
              onGetStarted();
            }}
            className="mt-4 w-full rounded-full bg-accent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
          >
            Get started
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={handleCloseMenu}
          className="fixed inset-0 top-16 z-30 bg-foreground/20 backdrop-blur-sm md:hidden"
        />
      )}
    </>
  );
};
