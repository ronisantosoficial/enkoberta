import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Menu,
  MessageCircle,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  X,
  Ruler,
  Sun,
  Volume2
} from 'lucide-react';
import './styles.css';

const WA_NUMBER = '5511947488385';

const waLink = (message = 'Olá! Gostaria de solicitar um orçamento com a Enkoberta.') =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

const projects = [
  {
    title: 'Cobertura de vidro deslizante',
    tag: 'Residencial',
    image: 'https://www.enkoberta.com.br/imagens/informacoes/cobertura-vidro-deslizante-01.webp'
  },
  {
    title: 'Cobertura de vidro com piscina',
    tag: 'Área de lazer',
    image: 'https://www.enkoberta.com.br/imagens/informacoes/cobertura-vidro-piscina-campinas-01.webp'
  },
  {
    title: 'Cobertura de vidro em área externa',
    tag: 'Arquitetura',
    image: 'https://www.enkoberta.com.br/imagens/informacoes/cobertura-vidro-deslizante-03.webp'
  },
  {
    title: 'Cobertura refletiva',
    tag: 'Solução personalizada',
    image: 'https://www.enkoberta.com.br/imagens/informacoes/cobertura-vidro-refletivo-01.webp'
  },
  {
    title: 'Cobertura termoacústica',
    tag: 'Comercial',
    image: 'https://www.enkoberta.com.br/imagens/informacoes/cobertura-telha-termoacustica-01.webp'
  },
  {
    title: 'Cobertura de vidro',
    tag: 'São Paulo',
    image: 'https://www.enkoberta.com.br/imagens/informacoes/cobertura-vidro-sao-bernardo-do-campo-01.webp'
  }
];

const uses = [
  'Áreas gourmet',
  'Piscinas',
  'Varandas e terraços',
  'Garagens',
  'Áreas externas',
  'Espaços comerciais'
];

function Logo({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="#inicio" aria-label="Enkoberta">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
      </span>
      <span className="brand-word">ENKOBERTA</span>
    </a>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', interest: '' });

  const closeMenu = () => setOpen(false);

  const submitQuote = (event) => {
    event.preventDefault();
    const interest = form.interest || 'Gostaria de conhecer as soluções da Enkoberta.';
    const msg = `Olá, Enkoberta! Sou ${form.name}. Telefone: ${form.phone}. ${interest} Gostaria de solicitar um orçamento.`;
    window.open(waLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="site">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Projetos personalizados em vidro e telhas termoacústicas</span>
          <a href={waLink()} target="_blank" rel="noreferrer">Falar pelo WhatsApp <ArrowRight size={14} /></a>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <Logo />
          <nav className={`nav ${open ? 'nav--open' : ''}`}>
            <a href="#solucoes" onClick={closeMenu}>Soluções</a>
            <a href="#projetos" onClick={closeMenu}>Projetos</a>
            <a href="#processo" onClick={closeMenu}>Como funciona</a>
            <a href="#empresa" onClick={closeMenu}>A Enkoberta</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
          </nav>
          <a className="button button--small button--dark header-cta" href={waLink('Olá! Quero falar com a equipe comercial da Enkoberta e solicitar um orçamento.')} target="_blank" rel="noreferrer">
            Solicitar orçamento <ArrowRight size={16} />
          </a>
          <button className="menu-toggle" onClick={() => setOpen((v) => !v)} aria-label="Abrir menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-overlay" />
          <div className="hero-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> Soluções em cobertura • São Paulo</div>
              <h1>Mais luz.<br /><em>Mais espaço.</em><br />Mais possibilidades.</h1>
              <p>Projetamos coberturas que protegem, valorizam e transformam ambientes — com vidro, alumínio e soluções termoacústicas sob medida.</p>
              <div className="hero-actions">
                <a className="button button--light" href={waLink()} target="_blank" rel="noreferrer">Quero meu orçamento <ArrowRight size={17} /></a>
                <a className="text-link text-link--light" href="#projetos">Ver projetos <MoveUpRight size={16} /></a>
              </div>
            </div>
            <div className="hero-note">
              <span>ENKOBERTA</span>
              <strong>Há mais de 20 anos criando espaços para viver melhor.</strong>
            </div>
          </div>
        </section>

        <section className="intro section">
          <div className="container intro-grid">
            <div>
              <div className="eyebrow">Arquitetura que protege</div>
              <h2>Seu espaço merece uma cobertura pensada para o espaço — não o contrário.</h2>
            </div>
            <div className="intro-text">
              <p>Do primeiro desenho à instalação, a Enkoberta desenvolve soluções personalizadas para residências, áreas de lazer, garagens e ambientes comerciais.</p>
              <a className="text-link" href="#contato">Conversar com a equipe <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="container metrics">
            <div className="metric"><strong>20<span>+</span></strong><small>anos de mercado</small></div>
            <div className="metric"><strong>100<span>%</span></strong><small>projeto personalizado</small></div>
            <div className="metric"><strong>2</strong><small>linhas principais de solução</small></div>
            <div className="metric"><strong>SP</strong><small>atendimento em São Paulo</small></div>
          </div>
        </section>

        <section id="solucoes" className="solutions section section--dark">
          <div className="container">
            <div className="section-head section-head--dark">
              <div>
                <div className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> Nossas soluções</div>
                <h2>Engenharia e estética<br /><em>no mesmo projeto.</em></h2>
              </div>
              <p>Materiais de qualidade, linhas limpas e execução pensada para o seu ambiente.</p>
            </div>

            <div className="solution-grid">
              <article className="solution-card solution-card--glass">
                <div className="solution-bg" />
                <div className="solution-content">
                  <span className="card-number">01</span>
                  <div className="solution-icon"><Sparkles size={19} /></div>
                  <div>
                    <span className="card-kicker">Vidro + alumínio</span>
                    <h3>Coberturas<br />de vidro</h3>
                    <p>Leveza visual, iluminação natural e proteção para áreas externas, gourmet, piscinas e muito mais.</p>
                  </div>
                  <a href="#contato" className="round-link" aria-label="Orçar cobertura de vidro"><ArrowRight size={18} /></a>
                </div>
              </article>

              <article className="solution-card solution-card--thermal">
                <div className="solution-bg" />
                <div className="solution-content">
                  <span className="card-number">02</span>
                  <div className="solution-icon"><ShieldCheck size={19} /></div>
                  <div>
                    <span className="card-kicker">Conforto + proteção</span>
                    <h3>Telhas<br />termoacústicas</h3>
                    <p>Duas chapas de aço galvanizado com preenchimento em poliuretano, montadas sobre perfis de alumínio.</p>
                  </div>
                  <a href="#contato" className="round-link" aria-label="Orçar telha termoacústica"><ArrowRight size={18} /></a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="benefits section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">O que faz diferença</div>
                <h2>Uma experiência que começa<br /><em>antes da obra.</em></h2>
              </div>
              <p>A Enkoberta combina atendimento próximo, escolha de materiais e projeto personalizado para entregar uma solução coerente com o seu espaço.</p>
            </div>

            <div className="benefit-grid">
              <div className="benefit"><div className="benefit-icon"><Ruler size={20} /></div><div><h3>Projeto personalizado</h3><p>A solução parte das medidas, do uso e da arquitetura do ambiente.</p></div></div>
              <div className="benefit"><div className="benefit-icon"><Sparkles size={20} /></div><div><h3>Materiais de 1ª linha</h3><p>Acabamentos pensados para unir estética, durabilidade e desempenho.</p></div></div>
              <div className="benefit"><div className="benefit-icon"><ShieldCheck size={20} /></div><div><h3>Execução com qualidade</h3><p>Processo orientado para segurança, precisão e bom acabamento.</p></div></div>
              <div className="benefit"><div className="benefit-icon"><MessageCircle size={20} /></div><div><h3>Atendimento diferenciado</h3><p>Você fala com a equipe e acompanha cada etapa com clareza.</p></div></div>
            </div>
          </div>
        </section>

        <section id="projetos" className="projects section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">Obras reais</div>
                <h2>O resultado aparece<br /><em>em cada detalhe.</em></h2>
              </div>
              <a className="text-link" href="#contato">Quero um projeto assim <ArrowRight size={16} /></a>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <button className={`project project-${index + 1}`} key={project.title} onClick={() => setSelected(project)}>
                  <img src={project.image} alt={project.title} loading={index > 1 ? 'lazy' : 'eager'} />
                  <span className="project-shade" />
                  <span className="project-info"><small>{project.tag}</small><strong>{project.title}</strong><i><MoveUpRight size={16} /></i></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="process section section--soft">
          <div className="container">
            <div className="process-grid">
              <div className="process-lead">
                <div className="eyebrow">Como funciona</div>
                <h2>Da ideia à instalação, <em>sem complicação.</em></h2>
                <p>Um processo objetivo para transformar a necessidade do ambiente em uma solução que faz sentido na prática.</p>
                <a className="button button--dark" href="#contato">Começar meu projeto <ArrowRight size={17} /></a>
              </div>
              <div className="steps">
                <div className="step"><span>01</span><div><h3>Conversa inicial</h3><p>Entendemos o ambiente, o objetivo e o tipo de cobertura que você procura.</p></div><Check size={17} /></div>
                <div className="step"><span>02</span><div><h3>Projeto sob medida</h3><p>Definimos a melhor composição de estrutura, cobertura e acabamento.</p></div><Check size={17} /></div>
                <div className="step"><span>03</span><div><h3>Orçamento</h3><p>Você recebe uma proposta alinhada à solução planejada para o espaço.</p></div><Check size={17} /></div>
                <div className="step"><span>04</span><div><h3>Execução</h3><p>A equipe conduz a instalação com atenção ao acabamento e ao resultado final.</p></div><Check size={17} /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="applications section">
          <div className="container applications-grid">
            <div className="applications-copy">
              <div className="eyebrow">Onde aplicar</div>
              <h2>Uma cobertura pode mudar a forma como você usa o <em>ambiente.</em></h2>
              <p>Escolha a área. A Enkoberta ajuda a transformar a necessidade em uma solução elegante e funcional.</p>
              <div className="use-list">
                {uses.map((item) => <span key={item}><Check size={14} /> {item}</span>)}
              </div>
            </div>
            <div className="applications-visual">
              <img src="https://www.enkoberta.com.br/imagens/informacoes/cobertura-vidro-deslizante-02.webp" alt="Projeto de cobertura de vidro Enkoberta" loading="lazy" />
              <div className="glass-label"><span>ENKOBERTA</span><strong>Luz natural<br />sem abrir mão<br />da proteção.</strong></div>
            </div>
          </div>
        </section>

        <section id="empresa" className="about section section--dark">
          <div className="container about-grid">
            <div className="about-image">
              <img src="https://www.enkoberta.com.br/imagens/informacoes/cobertura-vidro-refletivo-01.webp" alt="Detalhe de cobertura de vidro Enkoberta" loading="lazy" />
              <div className="about-stamp"><span>DESDE</span><strong>20+</strong><span>ANOS</span></div>
            </div>
            <div className="about-copy">
              <div className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> Sobre a Enkoberta</div>
              <h2>Uma cobertura é mais do que proteção.<br /><em>É parte da arquitetura.</em></h2>
              <p>A Enkoberta trabalha há mais de 20 anos com sistemas e soluções em vidros, criando espaços mais elegantes, sofisticados e confortáveis.</p>
              <div className="about-list">
                <div><Check size={17} /><span>Projetos personalizados</span></div>
                <div><Check size={17} /><span>Materiais de primeira linha</span></div>
                <div><Check size={17} /><span>Excelência e qualidade no serviço</span></div>
                <div><Check size={17} /><span>Atendimento próximo</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="contact section">
          <div className="container contact-wrap">
            <div className="contact-copy">
              <div className="eyebrow">Vamos conversar</div>
              <h2>Seu próximo espaço começa com uma <em>boa ideia.</em></h2>
              <p>Conte um pouco sobre o que você precisa. Nossa equipe retorna para entender o projeto e orientar os próximos passos.</p>
              <div className="contact-details">
                <a href={waLink()} target="_blank" rel="noreferrer"><MessageCircle size={18} /> (11) 94748-8385</a>
                <a href="tel:+551144733376">☎ (11) 4473-3376</a>
                <span>Avenida Industrial, 3045<br />Campestre • Santo André/SP</span>
              </div>
            </div>

            <form className="quote-card" onSubmit={submitQuote}>
              <div className="quote-head"><span>ORÇAMENTO</span><strong>Fale com a Enkoberta</strong></div>
              <label>Seu nome<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Como podemos chamar você?" required /></label>
              <label>WhatsApp<input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(11) 99999-9999" required /></label>
              <label>O que você procura?
                <div className="select-wrap">
                  <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                    <option value="">Selecione uma opção</option>
                    <option>Cobertura de vidro</option>
                    <option>Cobertura retrátil</option>
                    <option>Telha termoacústica</option>
                    <option>Outro projeto</option>
                  </select>
                  <ChevronDown size={16} />
                </div>
              </label>
              <button className="button button--dark button--full" type="submit">Continuar pelo WhatsApp <ArrowRight size={17} /></button>
              <small>Seu contato será direcionado para o WhatsApp comercial da Enkoberta.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top">
          <div><Logo /><p>Enkoberta Coberturas<br />Vidro, alumínio e soluções termoacústicas.</p></div>
          <div className="footer-links"><a href="#solucoes">Soluções</a><a href="#projetos">Projetos</a><a href="#processo">Como funciona</a><a href="#empresa">A Enkoberta</a><a href="#contato">Contato</a></div>
          <a className="footer-cta" href={waLink()} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowUpRight size={16} /></a>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Enkoberta. Todos os direitos reservados.</span><span>São Paulo • ABC • Litoral</span></div>
      </footer>

      <a className="whatsapp-fab" href={waLink()} target="_blank" rel="noreferrer" aria-label="Falar com a Enkoberta no WhatsApp"><MessageCircle size={21} /></a>

      {selected && (
        <div className="modal" role="dialog" aria-modal="true" onClick={() => setSelected(null)}>
          <button className="modal-close" onClick={() => setSelected(null)} aria-label="Fechar"><X size={22} /></button>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <img src={selected.image} alt={selected.title} />
            <div className="modal-content"><small>{selected.tag}</small><h3>{selected.title}</h3><a className="button button--dark" href={waLink(`Olá! Vi o projeto "${selected.title}" e gostaria de criar algo semelhante.`)} target="_blank" rel="noreferrer">Quero conversar sobre este projeto <ArrowRight size={16} /></a></div>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);