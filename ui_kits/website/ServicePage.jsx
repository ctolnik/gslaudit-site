// GSL Audit website — Service detail page
(function () {
  const React = window.React;
  const NS = window.GSLAuditDesignSystem_166977;
  const { Button, Card, Badge, Accordion, Alert } = NS;
  const I = window.GSLIcons;

  const faq = [
    { q: "Сколько длится аудит?", a: "От 5 до 20 рабочих дней в зависимости от объёма операций и качества учёта. Точный график фиксируем в договоре." },
    { q: "Что входит в стоимость?", a: "Планирование, аудиторские процедуры, письменный отчёт и сопровождение при защите результатов перед собственниками или банком." },
    { q: "Работаете ли вы с МСФО?", a: "Да. Готовим и трансформируем отчётность по МСФО, в том числе для групп компаний и иностранных холдингов." },
  ];

  function ServicePage({ navigate }) {
    return (
      <div>
        <div className="container">
          <nav className="crumb">
            <a onClick={() => navigate("home")}>Главная</a><I.ArrowRight width={13} height={13} />
            <a onClick={() => navigate("home")}>Аудит</a><I.ArrowRight width={13} height={13} />
            <span style={{ color: "var(--text-strong)" }}>Аудит по РСБУ</span>
          </nav>
        </div>

        <section className="container" style={{ paddingBottom: "var(--space-12)" }}>
          <Badge tone="accent">Аудит</Badge>
          <h1 style={{ fontSize: "var(--fs-h1)", letterSpacing: "var(--ls-tight)", lineHeight: 1.1, margin: "var(--space-4) 0 var(--space-5)", maxWidth: "18ch" }}>Аудит по РСБУ</h1>
          <p style={{ fontSize: "var(--fs-lead)", color: "var(--text-muted)", maxWidth: "60ch", lineHeight: "var(--lh-relaxed)" }}>
            Обязательный и инициативный аудит бухгалтерской отчётности с понятным отчётом и рекомендациями по снижению рисков.
          </p>
        </section>

        <section className="section--tight container">
          <div className="article">
            <div className="prose">
              <p>Мы проводим аудит так, чтобы результат был полезен не только регулятору, но и собственнику: показываем зоны риска, оцениваем качество учёта и предлагаем конкретные шаги.</p>
              <h2>Что входит в работу</h2>
              <ul>
                {["Оценка системы внутреннего контроля", "Проверка участков учёта и налоговых рисков", "Аудиторское заключение и письменный отчёт", "Сопровождение при защите результатов"].map((t) => (
                  <li key={t}><I.Check width={20} height={20} /><span>{t}</span></li>
                ))}
              </ul>
              <h2>Как мы работаем</h2>
              <p>Закрепляем за вами команду и менеджера проекта, фиксируем этапы и сроки в договоре. Документы передаются через защищённый канал — без бесконечной переписки.</p>
              <div style={{ marginTop: "var(--space-6)" }}>
                <Alert tone="accent" title="Бесплатная оценка проекта">Пришлите оборотно-сальдовую ведомость — вернёмся с объёмом, сроками и стоимостью.</Alert>
              </div>
              <h2>Частые вопросы</h2>
              <Accordion items={faq} defaultOpen={[0]} />
            </div>

            <aside>
              <Card className="sticky-card" padding="lg" style={{ boxShadow: "var(--shadow-md)" }}>
                <div style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)" }}>Стоимость</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-h3)", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", margin: "4px 0 var(--space-2)" }}>от 80 000 ₽</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "var(--space-5) 0", paddingTop: "var(--space-5)", borderTop: "1px solid var(--divider)" }}>
                  {[["Срок", "от 5 дней"], ["Формат", "очно / онлайн"], ["Отчёт", "РСБУ + рекомендации"]].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--fs-small)" }}>
                      <span style={{ color: "var(--text-muted)" }}>{k}</span>
                      <span style={{ color: "var(--text-strong)", fontWeight: "var(--fw-semibold)" }}>{v}</span>
                    </div>
                  ))}
                </div>
                <Button variant="primary" fullWidth size="lg" onClick={() => navigate("contacts")}>Оставить заявку</Button>
                <Button variant="ghost" fullWidth style={{ marginTop: 10 }} iconRight={<I.Phone width={16} height={16} />}>+7 495 234-38-44</Button>
              </Card>
            </aside>
          </div>
        </section>
      </div>
    );
  }

  window.GSLServicePage = ServicePage;
})();
