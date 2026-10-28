import React from 'react';
import ReactDOM from 'react-dom/client';
import { ArrowDown, ArrowUp, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Moon, Sun, GraduationCap, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile, skills, experience, projects, publications, artwork } from './data';
import './style.css';

function TypingHeadline({ text }: { text: string }) {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: ReturnType<typeof setInterval> | undefined;
    const start = () => {
      clearInterval(timer);
      setVisible(motion.matches ? text.length : 0);
      if (motion.matches) return;
      let count = 0;
      timer = setInterval(() => {
        count += 1;
        setVisible(count);
        if (count >= text.length) clearInterval(timer);
      }, 110);
    };
    start();
    motion.addEventListener('change', start);
    return () => {
      clearInterval(timer);
      motion.removeEventListener('change', start);
    };
  }, [text]);
  const accentStart = text.split(' ').slice(0, 3).join(' ').length + 1;
  return <h1 aria-label={text} className="typing-headline">
    <span aria-hidden="true">{Array.from(text).map((char, index) =>
      <span key={index} className={`${index >= accentStart ? 'gradient-text ' : ''}${index >= visible ? 'typing-hidden' : ''}${index === visible - 1 && visible < text.length ? ' typing-current' : ''}`}>{char}</span>
    )}</span>
  </h1>;
}

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('portfolio-theme') === 'dark');
  const [menu, setMenu] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [projectFilter, setProjectFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const visibleProjects = projects.filter(project => projectFilter === 'All' || project.category === projectFilter);

  useEffect(() => {
    let frame = 0;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    const update = () => {
      frame = 0;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const position = Math.max(0, window.scrollY);
      setProgress(distance > 0 ? Math.min(1, position / distance) : 0);
      const threshold = Math.min(window.innerHeight * 0.3, 200);
      let current = 'home';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold) current = section.id;
      }
      if (distance > 0 && position >= distance - 2) current = sections[sections.length - 1]?.id ?? current;
      setActiveSection(current);
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  useEffect(() => {
    if (!menu) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menu]);
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light'); }, [dark]);
  const nav = [{ title: 'About', id: 'about' }, { title: 'Experience', id: 'experience' }, { title: 'Projects & Publications', id: 'projects' }, { title: 'Artwork', id: 'artwork' }, { title: 'Contact', id: 'contact' }];
  return <>
    <header className="site-header"><div className="nav-wrap"><a className="logo" href="#home">{profile.initials}<span>.</span></a><nav className={menu ? 'nav open' : 'nav'} aria-label="Main navigation">{nav.map(item => <a key={item.id} aria-current={activeSection === item.id ? 'location' : undefined} href={'#' + item.id} onClick={() => setMenu(false)}>{item.title}</a>)}</nav><div className="nav-actions"><button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun size={19}/> : <Moon size={19}/>}</button><button className="menu-button" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Toggle navigation">{menu ? 'Close' : 'Menu'}</button></div></div><div className="scroll-progress" aria-hidden="true"><div style={{ transform: `scaleX(${progress})` }}/></div></header>
    <main>
      <section className="hero" id="home"><img className="hero-background" src={`${import.meta.env.BASE_URL}ferry.jpg`} alt="" aria-hidden="true"/><div className="hero-content"><TypingHeadline text={profile.headline}/><p className="hero-subtitle">{profile.intro}</p><div className="hero-actions"><a className="btn primary" href={profile.resume} target="_blank" rel="noreferrer">My Resume <Download size={17}/></a></div><div className="socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={21}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={21}/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={21}/></a></div></div><div className="hero-visual" aria-hidden="true"><div className="art-frame"><div className="art-sun"/><div className="art-stem stem-one"/><div className="art-stem stem-two"/><div className="art-petal petal-one"/><div className="art-petal petal-two"/><div className="art-petal petal-three"/><div className="art-petal petal-four"/><div className="art-center"/></div></div><a className="scroll-cue" href="#about">SCROLL TO LEARN ABOUT ME <ArrowDown size={14}/></a></section>
      <section className="section section-muted" id="about"><div className="container"><SectionTitle title="About me"/><div className="about-grid"><div>{profile.about.split(/\n\s*\n/).map((paragraph, index) => <p className="body-copy" key={index}>{paragraph.trim()}</p>)}<div className="about-facts"><div><GraduationCap size={19}/><span>{profile.university} · Class of 2028</span></div><div><MapPin size={19}/><span>{profile.location}</span></div></div></div><div className="skill-panels">{skills.map(s => <div className="skill-group" key={s.group}><h4>{s.group}</h4><div className="tags">{s.items.map(t => <span className="tag" key={t}>{t}</span>)}</div></div>)}</div></div></div></section>
      <section className="section" id="experience"><div className="container"><SectionTitle title="Experience"/><div className="timeline">{experience.map((e,i) => <article className="timeline-item" key={i}><div className="timeline-dot"/><div className="timeline-date">{e.date}</div><div className="timeline-body"><h3>{e.role}</h3><p className="org">{e.org}</p><p>{e.description}</p><div className="tags">{e.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div></div></article>)}</div></div></section>
      <section className="section section-muted" id="projects"><div className="container"><SectionTitle title="Projects & Publications"/><div className="project-filters" role="group" aria-label="Filter projects by category">{categories.map(category => <button key={category} type="button" aria-pressed={projectFilter === category} onClick={() => setProjectFilter(category)}>{category}</button>)}</div><p className="project-count" role="status">Showing {visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'}</p><div className="project-grid">{visibleProjects.map((p) => <article className="project-card" key={p.title}><div className="project-top"><span className="project-index">0{projects.indexOf(p)+1} / {p.category}</span><Sparkles size={21}/></div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div><div className="project-links">{p.github && <a href={p.github} target="_blank" rel="noreferrer"><Github size={16}/> Code <ArrowUpRight size={14}/></a>}{p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14}/></a>}{!p.github && !p.demo && <span className="muted-note">Links coming soon</span>}</div></article>)}</div><div className="publications-group" id="publications"><h3 className="work-subheading">Publications</h3>{publications.map(p => <article className="publication" key={p.title}><div><div className="eyebrow small">{p.detail}</div><h3>{p.title}</h3><p>{p.venue}</p></div>{p.link && <a href={p.link} target="_blank" rel="noreferrer" className="pub-link" aria-label="Read publication"><ArrowUpRight/></a>}</article>)}</div></div></section>
      <section className="section" id="artwork"><div className="container"><SectionTitle title="Artwork"/>{artwork.length > 0 ? <div className="artwork-grid">{artwork.map(piece => <figure className="artwork-piece" key={piece.image}><div className="artwork-image"><img src={`${import.meta.env.BASE_URL}${piece.image}`} alt={piece.alt} loading="lazy"/></div><figcaption><h3>{piece.title}</h3>{piece.medium && <p>{piece.medium}</p>}<p>{piece.alt}</p></figcaption></figure>)}</div> : <div className="artwork-empty"><p>Artwork coming soon.</p></div>}</div></section>
      <section className="section contact-section" id="contact"><div className="container contact-inner"><h3>I'm always open to interesting projects, research collaborations, and new opportunities.<br/></h3><div className="contact-socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={24}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={24}/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={24}/></a></div><p>Please don't hesitate to reach out!</p></div></section>
    </main>
    {progress > 0.15 && <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp size={19}/></a>}
  </>;
}
function SectionTitle({title}:{title:string}) { return <div className="section-heading"><h2>{title}<span className="dot">.</span></h2></div>; }
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
