const posts = [
  { category: "Inteligência artificial", title: "O que muda quando a IA passa a trabalhar em equipe", author: "Marina Costa", time: "há 2 horas", comments: 18 },
  { category: "Desenvolvimento", title: "Pequenas ferramentas, grandes ganhos no fluxo de trabalho", author: "Rafael Lima", time: "há 5 horas", comments: 12 },
  { category: "Comunidade", title: "Como você escolhe o que vale a pena aprender?", author: "Ana Souza", time: "ontem", comments: 31 },
];

export default function Home() {
  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="technews início"><span className="brand-mark">t</span> technews</a>
        <nav aria-label="Navegação principal"><a className="active" href="/">Início</a><a href="#ultimas">Recentes</a><a href="#comunidade">Comunidade</a></nav>
        <a className="login" href="mailto:contato@technews.dev">Entrar <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero">
        <p className="eyebrow"><span className="live-dot" /> UM ESPAÇO PARA QUEM FAZ TECNOLOGIA</p>
        <h1>Ideias que movem<br /><span>a tecnologia.</span></h1>
        <p className="intro">Notícias, aprendizados e conversas da comunidade tech.<br className="desktop-break" /> Compartilhe o que você está construindo.</p>
        <a className="cta" href="mailto:contato@technews.dev">Compartilhe uma ideia <span aria-hidden="true">→</span></a>
        <div className="hero-note"><span>✳</span> Feito por pessoas curiosas, para pessoas curiosas.</div>
      </section>

      <section className="feed" id="ultimas" aria-labelledby="feed-title">
        <div className="feed-heading"><div><p className="eyebrow muted">A CONVERSA DE HOJE</p><h2 id="feed-title">Em destaque</h2></div><a href="#comunidade">Ver todas <span aria-hidden="true">→</span></a></div>
        <div className="post-list">{posts.map((post, index) => (
          <article className="post" key={post.title}>
            <span className="post-index">0{index + 1}</span>
            <div className="post-content"><p className="category">{post.category}</p><h3><a href="mailto:contato@technews.dev">{post.title}</a></h3><p className="byline">{post.author}<span>·</span>{post.time}</p></div>
            <a className="comments" href="mailto:contato@technews.dev" aria-label={`${post.comments} comentários`}>◯ <span>{post.comments}</span></a>
          </article>
        ))}</div>
      </section>
      <footer id="comunidade"><span>technews <span className="footer-dot">.</span></span><span>Um lugar para trocar conhecimento.</span><span>Feito com curiosidade <span className="footer-dot">✳</span></span></footer>
    </main>
  );
}
