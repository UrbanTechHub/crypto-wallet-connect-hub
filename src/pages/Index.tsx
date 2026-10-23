import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Shield, Fingerprint, Code2, Check, ChevronDown, Zap, Globe2, LockKeyhole, CircleCheck, Layers3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { SiteLayout } from '@/components/SiteLayout';
import { WalletButton } from '@/components/WalletButton';
import { IntelligenceFeed } from '@/components/IntelligenceFeed';
import { services, faqs } from '@/lib/security-content';
import shieldImage from '@/assets/security-shield.jpg';

export default function Index() {
  const [filter, setFilter] = useState('All solutions');
  const [selected, setSelected] = useState<(typeof services)[number] | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return <SiteLayout>
    <main>
      <section className="hero">
        <img className="hero-image" src={shieldImage} width={1536} height={1024} alt="Sculptural metallic security shield with a mint glass core and lock" />
        <div className="page-width hero-inner"><div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> YOUR SECURITY. NO COMPROMISE.</div><h1>manstorm Secure<span>A stronger shield<br />for your Web3 world.</span></h1><p>Advanced crypto security. Clearer confidence.<br className="desktop-break" /> Protect your wallet, contracts, and everything you’re building.</p><div className="hero-actions"><WalletButton /><Button variant="outline" asChild><a href="#solutions">Explore solutions <ArrowRight /></a></Button></div><div className="hero-assurance"><LockKeyhole size={14} /><span>Non-custodial by design</span><span className="assurance-divider" /> <span>Your keys. Always yours.</span></div></div></div>
        <div className="hero-caption"><Fingerprint size={22} /><div><strong>Security starts with ownership.</strong><span>Never share your private keys.</span></div></div>
      </section>

      <section className="trust-strip"><div className="page-width trust-inner"><span>BUILT FOR THE<br /><strong>ONCHAIN WORLD</strong></span><div><Globe2 /> Ethereum</div><div><Layers3 /> Polygon</div><div><Zap /> Arbitrum</div><div><CircleCheck /> Base</div><span className="network-note">EVM-compatible wallets <ArrowUpRight size={15} /></span></div></section>

      <section id="solutions" className="page-width solutions section-space"><div className="section-top"><div><div className="eyebrow">01 / SECURITY SOLUTIONS</div><h2>Every layer. Better protected.</h2><p>Purpose-built security for wherever you are in Web3.</p></div><div className="filter-control" aria-label="Filter solutions">{['All solutions', 'Wallet', 'Protocol'].map(item => <Button key={item} variant="ghost" className={filter === item ? 'filter-active' : ''} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</Button>)}</div></div>
        <div className="service-grid">{services.filter(s => filter === 'All solutions' || s.category === filter).map((service, i) => <article key={service.title} className="service-card"><div className="service-card-top"><span className={`service-icon service-icon-${services.indexOf(service)}`}><service.icon size={24} /></span><span className="service-number">0{services.indexOf(service) + 1}</span></div><div className="service-tag">{service.tag}</div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.features.map(f => <li key={f}><Check size={14} />{f}</li>)}</ul><Button variant="ghost" className="service-link" onClick={() => setSelected(service)}>Explore solution <ArrowUpRight /></Button></article>)}</div>
      </section>

      <section className="approach-band" id="approach"><div className="page-width approach-inner"><div className="approach-heading"><div className="eyebrow">02 / OUR APPROACH</div><h2>Trust isn’t a promise.<br />It’s a foundation.</h2><p>Security that respects the principles of Web3.<br />Built around transparency, control, and you.</p><Button variant="outline" asChild><Link to="/approach">Get to know manstorm <ArrowUpRight /></Link></Button></div><div className="principles"><div><Fingerprint /><span><h3>You stay in control</h3><p>We never take custody of your assets or ask for your private keys.</p></span><span className="principle-num">01</span></div><div><Code2 /><span><h3>Clarity at every step</h3><p>Understand what you’re connecting to. No hidden approvals. No surprises.</p></span><span className="principle-num">02</span></div><div><Shield /><span><h3>Defense in depth</h3><p>A layered approach to wallet, contract, and protocol security.</p></span><span className="principle-num">03</span></div></div></div></section>

      <section className="page-width journey section-space"><div className="eyebrow">03 / A MORE SECURE START</div><h2>Your next move, with confidence.</h2><div className="journey-grid">{[{ n: '01', icon: Fingerprint, title: 'Understand your exposure', text: 'See how wallet habits, approvals, and protocol choices shape your risk — before anything goes wrong.' }, { n: '02', icon: Shield, title: 'Find your solution', text: 'Explore security disciplines tailored to your wallet, smart contracts, or protocol.' }, { n: '03', icon: ArrowUpRight, title: 'Build on stronger ground', text: 'Turn clear thinking into informed steps toward a more secure onchain future.' }].map(step => <div className="journey-step" key={step.n}><div className="journey-line"><span>{step.n}</span><step.icon size={23} /></div><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></section>

      <IntelligenceFeed preview />

      <section id="faq" className="faq-section"><div className="page-width faq-inner"><div><div className="eyebrow">GOOD QUESTIONS. CLEAR ANSWERS.</div><h2>A little more clarity.</h2><p>Because confidence starts with understanding.</p></div><div className="faq-list">{faqs.map(([q, a], i) => <div className="faq-item" key={q}><Button variant="ghost" className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-controls={`faq-${i}`}>{q}<ChevronDown className={openFaq === i ? 'rotated' : ''} /></Button>{openFaq === i && <p id={`faq-${i}`}>{a}</p>}</div>)}</div></div></section>

      <section className="closing-band"><div className="page-width closing-inner"><div className="closing-symbol"><Shield size={44} strokeWidth={1.3} /></div><div><div className="eyebrow">YOUR WEB3 WORLD. BETTER PROTECTED.</div><h2>Make your next move a secure one.</h2></div><Button asChild variant="outline"><Link to="/solutions">Explore solutions <ArrowUpRight /></Link></Button></div></section>
    </main>

    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent>{selected && <><div className="dialog-icon"><selected.icon size={28} /></div><div className="eyebrow">{selected.tag}</div><DialogTitle className="text-2xl">{selected.title}</DialogTitle><DialogDescription className="leading-relaxed">{selected.detail}</DialogDescription><ul className="detail-features">{selected.features.map(f => <li key={f}><Check size={16} />{f}</li>)}</ul><p className="service-disclaimer">Service processing is not yet available. This solution area is informational, and no wallet connection or scan is performed here.</p><Button className="interact-button" asChild><Link to="/solutions">Explore solutions <ArrowUpRight /></Link></Button></>}</DialogContent></Dialog>
  </SiteLayout>;
}
