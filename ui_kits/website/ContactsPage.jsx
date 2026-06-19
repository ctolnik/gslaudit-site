// GSL Audit website — Contacts + request form
(function () {
  const React = window.React;
  const NS = window.GSLAuditDesignSystem_166977;
  const { Button, Card, Input, Select, Checkbox, Alert } = NS;
  const I = window.GSLIcons;
  const { services } = window.GSLData;

  function ContactsPage() {
    const [sent, setSent] = React.useState(false);
    const [agree, setAgree] = React.useState(true);

    return (
      <section className="section container">
        <div className="sec-head" style={{ marginBottom: "var(--space-10)" }}>
          <span className="gsl-eyebrow">Контакты</span>
          <h2>Оставьте заявку</h2>
          <p>Опишите задачу — менеджер свяжется в течение рабочего дня и предложит решение, сроки и стоимость.</p>
        </div>

        <div className="grid-2" style={{ gridTemplateColumns: "1.1fr 0.9fr", alignItems: "start" }}>
          <Card padding="lg" style={{ boxShadow: "var(--shadow-md)" }}>
            {sent ? (
              <Alert tone="success" title="Заявка отправлена">Спасибо! Мы свяжемся с вами в ближайшее время.</Alert>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                    style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                <div className="grid-2" style={{ gap: "var(--space-4)" }}>
                  <Input label="Имя" placeholder="Как к вам обращаться" required />
                  <Input label="Телефон" type="tel" placeholder="+7 ___ ___-__-__" required />
                </div>
                <Input label="Email" type="email" leadingIcon={<I.Mail width={17} height={17} />} placeholder="you@company.ru" />
                <Select label="Интересующая услуга" options={services.map((s) => s.title)} />
                <Input label="Комментарий" placeholder="Коротко о задаче" />
                <Checkbox label="Согласен на обработку персональных данных" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                <Button type="submit" variant="primary" size="lg" disabled={!agree} iconRight={<I.ArrowRight width={18} height={18} />}>Отправить заявку</Button>
              </form>
            )}
          </Card>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {[
              { ic: "Phone", t: "Телефон", v: "+7 495 234-38-44", d: "Пн–Пт, 10:00–19:00 МСК" },
              { ic: "Mail", t: "Почта", v: "info@gsl.ru", d: "Ответим в течение дня" },
              { ic: "MapPin", t: "Офис", v: "Москва, ул. Маросейка, 6/8с1", d: "Метро «Китай-город»" },
            ].map((c) => {
              const Ic = I[c.ic];
              return (
                <Card key={c.t} padding="md" style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span className="feature__ic"><Ic width={20} height={20} /></span>
                  <div>
                    <div style={{ fontSize: "var(--fs-caption)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".08em", fontWeight: 600 }}>{c.t}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-h6)", color: "var(--text-strong)", margin: "3px 0 2px" }}>{c.v}</div>
                    <div style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)" }}>{c.d}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  window.GSLContactsPage = ContactsPage;
})();
