import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, ArrowUpRight, BookOpen, Check, ListChecks, Search, Shield, LockKeyhole } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteLayout } from '@/components/SiteLayout';
import { PageIntro } from '@/pages/SecurityPages';
import { IntelligenceFeed } from '@/components/IntelligenceFeed';
import { threats, glossary, starterStages } from '@/lib/resource-content';

export function ThreatsPage() {
  return <SiteLayout><main>
    <PageIntro label="THREAT LIBRARY" title="Know the play before it runs." description="Most wallet losses follow a small number of well-worn patterns. Learn to recognize them by shape—before a signature, a send, or a claim puts funds at risk." />
    <section className="page-width section-space">
      <div className="section-top"><div className="eyebrow">SIX PATTERNS WORTH KNOWING</div></div>
      <div className="threat-grid">{threats.map((threat, i) => <article className="threat-card" key={threat.name}>
        <div className="threat-card-top"><span className="service-icon service-icon-{i}"><threat.icon size={22} /></span><span className="service-number">0{i + 1}</span></div>
        <div className="eyebrow">{threat.category}</div>
        <h3>{threat.name}</h3>
        <p>{threat.pattern}</p>
        <div className="threat-response"><span className="eyebrow"><Shield size={12} /> HOW TO RESPOND</span><p>{threat.response}</p></div>
      </article>)}</div>
      <div className="transparency-note"><LockKeyhole /><div><h3>Recognition, not a shield.</h3><p>These profiles are educational references. No wallet access, signature, or scan is requested or performed on this website, and no threat detection is connected here.</p></div></div>
    </section>
    <IntelligenceFeed preview />
    <section className="closing-band"><div className="page-width closing-inner"><AlertTriangle size={40} strokeWidth={1.3} className="closing-symbol" /><div><div className="eyebrow">SUSPICIOUS ABOUT SOMETHING?</div><h2>If you cannot verify it, do not sign it.</h2></div><Button asChild variant="outline"><Link to="/intelligence">Read the field notes <ArrowUpRight /></Link></Button></div></section>
  </main></SiteLayout>;
}

export function GlossaryPage() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => glossary.filter(([term]) => term.toLowerCase().includes(query.trim().toLowerCase())), [query]);
  return <SiteLayout><main>
    <PageIntro label="GLOSSARY" title="Say what you mean. Mean what you sign." description="A plain-language reference for the terms behind every wallet prompt, approval screen, and protocol page. Understanding the vocabulary is the first layer of defense." />
    <section className="page-width section-space">
      <div className="glossary-search" role="search"><Search size={17} /><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search a term — approval, drainer, recovery phrase…" aria-label="Search the glossary" /></div>
      <dl className="glossary-list">{filtered.map(([term, definition]) => <div className="glossary-item" key={term}><dt>{term}</dt><dd>{definition}</dd></div>)}
        {filtered.length === 0 && <div className="glossary-empty">No term matches “{query}”. Try a shorter search, or browse the full list by clearing the field.</div>}
      </dl>
      <div className="transparency-note"><BookOpen /><div><h3>A living reference.</h3><p>Definitions here are written for clarity, not legal precision. When a wallet prompt or protocol page uses a term differently, trust the prompt in front of you and verify before signing.</p></div></div>
    </section>
    <section className="closing-band"><div className="page-width closing-inner"><Shield size={40} strokeWidth={1.3} className="closing-symbol" /><div><div className="eyebrow">READY FOR THE NEXT STEP</div><h2>Turn vocabulary into habits.</h2></div><Button asChild variant="outline"><Link to="/getting-started">Get started <ArrowRight /></Link></Button></div></section>
  </main></SiteLayout>;
}

export function GettingStartedPage() {
  return <SiteLayout><main>
    <PageIntro label="GETTING STARTED" title="Stronger habits, built in order." description="Security compounds when it is layered in the right sequence. Work through four stages—from owning your keys to evaluating where your capital works." />
    <section className="page-width section-space">
      <div className="section-top"><div className="eyebrow">FOUR STAGES, IN SEQUENCE</div></div>
      <div className="stage-list">{starterStages.map((stage, i) => <article className="stage-block" key={stage.title}>
        <div className="stage-heading"><span className="stage-num">0{i + 1}</span><div><h2>{stage.title}</h2><p>{stage.summary}</p></div><ListChecks className="stage-icon" /></div>
        <ul>{stage.checks.map(check => <li key={check}><Check size={15} />{check}</li>)}</ul>
        <div className="stage-note"><span className="eyebrow">WHY IT MATTERS</span><p>{stage.note}</p></div>
      </article>)}
      <div className="transparency-note"><LockKeyhole /><div><h3>A guide, not a checklist audit.</h3><p>This sequence reflects widely practiced security habits. No wallet connection, scan, or verification is performed on this website—every step here is one you take with your own tools.</p></div></div>
    </section>
    <IntelligenceFeed preview />
    <section className="closing-band"><div className="page-width closing-inner"><Shield size={40} strokeWidth={1.3} className="closing-symbol" /><div><div className="eyebrow">WHERE THE HABITS LEAD</div><h2>Explore the full security stack.</h2></div><Button asChild variant="outline"><Link to="/solutions">Explore solutions <ArrowUpRight /></Link></Button></div></section>
  </main></SiteLayout>;
}
