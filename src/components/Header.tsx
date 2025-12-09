import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header style={{
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
            background: isScrolled ? 'white' : 'transparent',
            boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
            padding: isScrolled ? '16px 0' : '24px 0',
            transition: 'all 0.3s ease'
        }}>
            <div className="container">
                <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a href="#home" className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: '700', textDecoration: 'none' }}>
                        Reshma Joselin
                    </a>

                    {/* Desktop Navigation */}
                    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{
                                    color: '#4B5563',
                                    fontWeight: '500',
                                    textDecoration: 'none',
                                    fontSize: '1rem',
                                    transition: 'color 0.3s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#FF1B6B'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        style={{
                            display: 'none',
                            padding: '8px',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div style={{
                        marginTop: '16px',
                        padding: '16px',
                        background: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{
                                    display: 'block',
                                    padding: '12px 16px',
                                    color: '#4B5563',
                                    textDecoration: 'none',
                                    borderRadius: '8px',
                                    transition: 'all 0.3s'
                                }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#FFF5F7';
                                    e.currentTarget.style.color = '#FF1B6B';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = '#4B5563';
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <style>{`
        @media (max-width: 768px) {
          nav > div:first-of-type {
            display: none !important;
          }
          nav button {
            display: block !important;
          }
        }
      `}</style>
        </header>
    );
};

export default Header;
