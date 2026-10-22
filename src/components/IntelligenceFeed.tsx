import { ArrowUpRight, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { articles } from '@/lib/security-content';

export function IntelligenceFeed({ preview = false }: { preview?: boolean }) {
  return <section className="page-width section-space intelligence-feed"><div className="section-top"><div><div className="eyebrow">SECURITY INTELLIGENCE / THE READING ROOM</div><h2>Stay one step more informed.</h2><p>Clear thinking for a complex onchain world.</p></div>{preview && <Button variant="outline" asChild><Link to="/intelligence">All insights <ArrowRight /></Link></Button>}</div><div className="editorial-grid">{articles.map((article, i) => <Link to={`/intelligence/${article.slug}`} key={article.slug} className={`editorial-card editorial-tone-${i}`}><div className="editorial-art" aria-hidden="true"><span className="editorial-index">0{i + 1}</span><BookOpen strokeWidth={1} /><span className="editorial-art-label">MANSTORM / FIELD NOTES</span></div><div className="editorial-body"><div className="eyebrow">{article.category}</div><h3>{article.title}</h3><p>{article.summary}</p><div className="editorial-meta"><span>{article.minutes}</span><ArrowUpRight size={19} /></div></div></Link>)}</div></section>;
}