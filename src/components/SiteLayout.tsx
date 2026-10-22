import { useEffect, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, Shield, Zap, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WalletButton } from './WalletButton';

export function Brand() {
  return <Link to="/" className="brand" aria-label="manstorm Secure home"><span className="brand-mark"><Shield strokeWidth={1.5} /><Zap className="brand-bolt" /></span><span>manstorm <strong>Secure</strong></span></Link>;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setMenu(false);
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll('.section-space, .approach-inner, .faq-inner, .editorial-row').forEach(el => {
      el.classList.add('reveal'); observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);
  return <div className="site-shell"><header className="site-header"><div className="page-width header-inner"><Brand /><nav className={menu ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">{[['/solutions', 'Solutions'], ['/intelligence', 'Intelligence'], ['/approach', 'Our approach']].map(([path, name]) => <NavLink key={path} to={path}>{name}</NavLink>)}</nav><div className="header-actions"><WalletButton compact /><Button variant="ghost" size="icon" className="mobile-menu" onClick={() => setMenu(!menu)} aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu}>{menu ? <X /> : <Menu />}</Button></div></div></header>{children}<footer className="page-width site-footer"><div className="footer-top"><Brand /><span>Security for a world that never stops.</span><Link to="/intelligence">Security intelligence <ArrowUpRight size={14} /></Link></div><div className="footer-bottom"><span>© 2026 manstorm Secure</span><span>Never share your recovery phrase or private keys.</span><Link to="/approach">Security & transparency</Link></div></footer></div>;
}