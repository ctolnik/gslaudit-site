// GSL Audit website — Home page (реальный контент, фото, анимации, блоки доверия/конверсии/контента)
(function () {
  const React = window.React;
  const NS = window.GSLAuditDesignSystem_166977;
  const { Button, ServiceCard, Tag, Card, Badge, Accordion } = NS;
  const I = window.GSLIcons;
  const D = window.GSLData;
  const { services, categories, stats, team, certs, testimonials, trustBadges, clients, cases, blog, taxDates, faq } = D;

  const initials = (name) => name.split(" ").slice(0, 2).map((w) => w[0]).join("");

  // --- Калькулятор стоимости (интерактивная заглушка) ---
  function Calculator({ navigate }) {
    const base = { "Бухгалтерское обслуживание": 15000, "Аудит": 80000, "Налоговое консультирование": 12000 };
    const opsF = { "до 30": 1, "30–100": 1.6, "100–300": 2.4, "300+": 3.5 };
    const unit = { "Бухгалтерское обслуживание": "₽ / мес", "Аудит": "₽", "Налоговое консультирование": "₽" };
    const [service, setService] = React.useState("Бухгалтерское обслуживание");
    const [tax, setTax] = React.useState("УСН");
    const [ops, setOps] = React.useState("30–100");
    const [ved, setVed] = React.useState(false);
    const price = Math.round(base[service] * (tax === "ОСНО" ? 1.5 : 1) * opsF[ops] * (ved ? 1.25 : 1) / 1000) * 1000;
    return (
      <div className="calc reveal">
        <div className="calc__form">
          <label className="calc__field"><span>Услуга</span>
            <select value={service} onChange={(e) => setService(e.target.value)}>
              {Object.keys(base).map((k) => <option key={k}>{k}</option>)}
            </select>
          </label>
          <label className="calc__field"><span>Система налогообложения</span>
            <select value={tax} onChange={(e) => setTax(e.target.value)}>
              <option>УСН</option><option>ОСНО</option>
            </select>
          </label>
          <label className="calc__field"><span>Операций в месяц</span>
            <select value={ops} onChange={(e) => setOps(e.target.value)}>
              {Object.keys(opsF).map((k) => <option key={k}>{k}</option>)}
            </select>
          </label>
          <label className="calc__check">
            <input type="checkbox" checked={ved} onChange={(e) => setVed(e.target.checked)} />
            <span>ВЭД / валютные операции</span>
          </label>
        </div>
        <div className="calc__result">
          <div className="calc__result-label">Ориентировочная стоимость</div>
          <div className="calc__result-value gsl-tnum">от {price.toLocaleString("ru-RU")}&nbsp;<span>{unit[service]}</span></div>
          <p className="calc__note">Предварительный расчёт. Точную стоимость назовём после короткого разговора.</p>
          <Button variant="inverse" size="lg" fullWidth onClick={() => navigate("contacts")} iconRight={<I.ArrowRight width={18} height={18} />}>Получить точный расчёт</Button>
        </div>
      </div>
    );
  }

  function HomePage({ navigate }) {
    const [filter, setFilter] = React.useState("Все услуги");
    const shown = filter === "Все услуги" ? services : services.filter((s) => s.cat === filter);

    return (
      <div>
        {/* Hero */}
        <section className="hero">
          <div className="container hero__grid">
            <div>
              <span className="gsl-eyebrow hero__eyebrow reveal"><I.ShieldCheck width={15} height={15} /> Аудиторско-консалтинговая компания</span>
              <h1 className="reveal" data-d="1">25 лет на рынке налогового консалтинга, аудита и&nbsp;бухгалтерии</h1>
              <p className="hero__lead reveal" data-d="2">Услуги для юридических, физических лиц и&nbsp;ИП — включая международные вопросы: МСФО, КИК и&nbsp;зарубежные счета.</p>
              <div className="hero__cta reveal" data-d="3">
                <Button variant="primary" size="lg" onClick={() => navigate("contacts")} iconRight={<I.ArrowRight width={18} height={18} />}>Оставить заявку</Button>
                <Button variant="secondary" size="lg" onClick={() => navigate("service")}>Все услуги</Button>
              </div>
            </div>
            <div className="hero__panel reveal" data-d="2">
              <div className="hero__media">
                <img src="../../assets/img/photo/consulting.webp" alt="Консультация специалистов GSL" />
                <img className="hero__mark" src="../../assets/logos/gsl-mark-sage.svg" alt="" aria-hidden="true" />
                <div className="hero__badge">
                  <div className="hero__badge-num gsl-tnum">300+</div>
                  <div className="hero__badge-cap">постоянных клиентов доверяют GSL</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust badges */}
        <section className="container">
          <div className="trust-strip reveal">
            {trustBadges.map((b, i) => {
              const Ic = I[b.ic];
              return (
                <div key={i} className="trust-badge">
                  <span className="trust-badge__ic"><Ic width={20} height={20} /></span>
                  <span>{b.t}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Stats */}
        <section className="container">
          <div className="stats reveal" style={{ borderTop: "1px solid var(--divider)", borderBottom: "1px solid var(--divider)", padding: "var(--space-12) 0" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat__v gsl-tnum" data-count={s.value + s.suffix}>{s.value + s.suffix}</div>
                <div className="stat__l">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Clients */}
        <section className="section--tight container">
          <div className="sec-head reveal" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto", marginBottom: "var(--space-8)" }}>
            <span className="gsl-eyebrow">Нам доверяют</span>
            <h2 style={{ fontSize: "var(--fs-h3)" }}>Более 300 компаний и частных клиентов</h2>
          </div>
          <div className="clients reveal">
            {clients.map((c) => <div key={c} className="client-logo">{c}</div>)}
          </div>
        </section>

        {/* Services */}
        <section className="section container">
          <div className="sec-head reveal">
            <span className="gsl-eyebrow">Услуги</span>
            <h2>Полный спектр для бизнеса и частных лиц</h2>
            <p>От разового консультирования до полного сопровождения. Выберите направление или оставьте заявку — подберём решение.</p>
          </div>
          <div className="filters reveal">
            {categories.map((c) => (
              <Tag key={c} selected={filter === c} onClick={() => setFilter(c)}>{c}</Tag>
            ))}
          </div>
          <div className="grid-3">
            {shown.map((s, i) => {
              const Ic = I[s.icon];
              return (
                <div key={s.id} className="reveal" data-d={(i % 3) + 1}>
                  <ServiceCard icon={<Ic width={24} height={24} />} title={s.title}
                    description={s.desc} meta={s.cat} onClick={(e) => { e.preventDefault(); navigate("service"); }} />
                </div>
              );
            })}
          </div>
        </section>

        {/* Calculator */}
        <section className="section--tight" style={{ background: "var(--surface-accent-soft)", borderTop: "1px solid var(--divider)", borderBottom: "1px solid var(--divider)" }}>
          <div className="container">
            <div className="sec-head reveal" style={{ marginBottom: "var(--space-8)" }}>
              <span className="gsl-eyebrow"><I.Calc width={13} height={13} style={{ verticalAlign: "-2px", marginRight: 4 }} />Калькулятор</span>
              <h2>Рассчитайте стоимость за минуту</h2>
              <p>Прикиньте ориентировочную стоимость — точную цену назовём после короткого разговора.</p>
            </div>
            <Calculator navigate={navigate} />
          </div>
        </section>

        {/* Cases */}
        <section className="section container">
          <div className="sec-head reveal">
            <span className="gsl-eyebrow">Результаты</span>
            <h2>Кейсы и достигнутые результаты</h2>
            <p>Несколько примеров задач, которые мы закрыли для клиентов.</p>
          </div>
          <div className="grid-3">
            {cases.map((c, i) => (
              <div key={i} className="case-card reveal" data-d={(i % 3) + 1}>
                <span className="case-card__tag">{c.tag}</span>
                <div className="case-card__result gsl-tnum">{c.result}</div>
                <div className="case-card__rlabel">{c.resultLabel}</div>
                <div className="case-card__title">{c.title}</div>
                <p className="case-card__desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="section--tight" style={{ background: "var(--surface-card)", borderTop: "1px solid var(--divider)", borderBottom: "1px solid var(--divider)" }}>
          <div className="container">
            <div className="sec-head reveal" style={{ marginBottom: "var(--space-10)" }}>
              <span className="gsl-eyebrow">Команда</span>
              <h2>Наши специалисты</h2>
              <p>Аудиторы, налоговые юристы и эксперты по учёту со стажем 18–36 лет.</p>
            </div>
            <div className="grid-4 team-grid">
              {team.map((m, i) => (
                <div key={m.name} className="team-card reveal" data-d={(i % 4) + 1}>
                  <div className="team-card__photo">
                    {m.photo
                      ? <img src={"../../" + m.photo} alt={m.name} loading="lazy" />
                      : <span className="team-card__initials">{initials(m.name)}</span>}
                  </div>
                  <div className="team-card__body">
                    <div className="team-card__name">{m.name}</div>
                    <div className="team-card__role">{m.role}</div>
                    <div className="team-card__years"><I.Clock width={13} height={13} /> {m.years}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="section container">
          <div className="sec-head reveal">
            <span className="gsl-eyebrow">Доверие</span>
            <h2>Сертификаты и лицензии</h2>
            <p>Членство в СРО «Аудиторская Палата России», внешний контроль качества, допуски и лицензии.</p>
          </div>
          <div className="grid-4">
            {certs.map((c, i) => (
              <figure key={i} className="cert-card reveal" data-d={(i % 4) + 1}>
                <div className="cert-card__img"><img src={"../../" + c.img} alt={c.caption} loading="lazy" /></div>
                <figcaption>{c.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Why us + photo */}
        <section className="section--tight" style={{ background: "var(--surface-card)", borderTop: "1px solid var(--divider)", borderBottom: "1px solid var(--divider)" }}>
          <div className="container feature">
            <div className="reveal">
              <span className="gsl-eyebrow">Почему GSL</span>
              <h2 style={{ fontSize: "var(--fs-h3)", letterSpacing: "var(--ls-tight)", marginTop: "var(--space-4)" }}>Экономия и спокойствие вместо штатной бухгалтерии</h2>
              <div className="feature__list">
                {[
                  { ic: "Receipt", t: "Дешевле штатного отдела", d: "Платите за результат — без зарплат, налогов и оборудования на своей стороне." },
                  { ic: "ShieldCheck", t: "Ответственность за ошибки", d: "Несём ответственность за качество учёта и отчётности." },
                  { ic: "Users", t: "Непрерывность работы", d: "Взаимозаменяемость специалистов — работа не встанет из-за отпуска или болезни." },
                  { ic: "Clock", t: "Предсказуемые сроки", d: "Фиксируем этапы и дедлайны в договоре." },
                ].map((f) => {
                  const Ic = I[f.ic];
                  return (
                    <div key={f.t} className="feature__item">
                      <span className="feature__ic"><Ic width={20} height={20} /></span>
                      <div>
                        <div style={{ fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", fontSize: "var(--fs-body-lg)" }}>{f.t}</div>
                        <div style={{ color: "var(--text-muted)", marginTop: 2 }}>{f.d}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="reveal" data-d="2">
              <div className="feature__media">
                <img src="../../assets/img/photo/private.webp" alt="Сопровождение частных клиентов" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Tax calendar */}
        <section className="section container">
          <div className="sec-head reveal">
            <span className="gsl-eyebrow"><I.Calendar width={13} height={13} style={{ verticalAlign: "-2px", marginRight: 4 }} />Налоговый календарь</span>
            <h2>Ближайшие сроки отчётности</h2>
            <p>Не пропустите дедлайны — мы напоминаем и готовим отчётность заранее.</p>
          </div>
          <div className="taxcal">
            {taxDates.map((d, i) => (
              <div key={i} className="taxcal__row reveal" data-d={(i % 4) + 1}>
                <div className="taxcal__date"><span className="taxcal__d">{d.d}</span><span className="taxcal__m">{d.m}</span></div>
                <div className="taxcal__body">
                  <div className="taxcal__t">{d.t}</div>
                  <div className="taxcal__who">{d.who}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section className="section--tight" style={{ background: "var(--surface-card)", borderTop: "1px solid var(--divider)", borderBottom: "1px solid var(--divider)" }}>
          <div className="container">
            <div className="sec-head reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", maxWidth: "none", marginBottom: "var(--space-10)" }}>
              <div>
                <span className="gsl-eyebrow">Публикации</span>
                <h2>Блог и новости законодательства</h2>
              </div>
              <Button variant="ghost" onClick={() => navigate("home")} iconRight={<I.ArrowRight width={16} height={16} />}>Все публикации</Button>
            </div>
            <div className="grid-4">
              {blog.map((b, i) => (
                <article key={i} className="post-card reveal" data-d={(i % 4) + 1} onClick={() => navigate("home")}>
                  <div className="post-card__meta"><span className="post-card__cat">{b.cat}</span><span>{b.date}</span></div>
                  <h3 className="post-card__title">{b.title}</h3>
                  <span className="post-card__more">Читать <I.ArrowRight width={14} height={14} /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section container">
          <div className="sec-head reveal">
            <span className="gsl-eyebrow">Вопросы</span>
            <h2>Частые вопросы</h2>
          </div>
          <div className="faq-wrap reveal">
            <Accordion items={faq} defaultOpen={[0]} />
          </div>
        </section>

        {/* Testimonials */}
        <section className="section--tight" style={{ background: "var(--surface-card)", borderTop: "1px solid var(--divider)", borderBottom: "1px solid var(--divider)" }}>
          <div className="container">
            <div className="sec-head reveal"><span className="gsl-eyebrow">Отзывы</span><h2>Что говорят клиенты</h2></div>
            <div className="grid-2">
              {testimonials.map((t, i) => (
                <Card key={t.name} padding="lg" className="reveal" data-d={i + 1} style={{ background: "var(--bg-page)" }}>
                  <I.Quote width={26} height={26} style={{ color: "var(--green-300)" }} />
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-body-lg)", lineHeight: "var(--lh-relaxed)", color: "var(--text-strong)", margin: "var(--space-3) 0 var(--space-5)" }}>«{t.quote}»</p>
                  <div>
                    <div style={{ fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", fontSize: "var(--fs-small)" }}>{t.name}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "var(--fs-caption)" }}>{t.role}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section container">
          <div className="cta-band cta-band--photo reveal">
            <div>
              <h2>Обсудим вашу задачу?</h2>
              <p>Бесплатная консультация: оценим объём, сроки и стоимость в течение рабочего дня.</p>
            </div>
            <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "flex-end", flexWrap: "wrap" }}>
              <Button variant="inverse" size="lg" onClick={() => navigate("contacts")}>Оставить заявку</Button>
              <Button variant="ghost" size="lg" style={{ color: "#fff" }} iconRight={<I.Phone width={17} height={17} />}>Позвонить</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  window.GSLHomePage = HomePage;
})();
