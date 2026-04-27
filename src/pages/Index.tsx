import { useState } from "react";
import Icon from "@/components/ui/icon";

const SOFA_IMG = "https://cdn.poehali.dev/projects/05871acc-a901-40aa-b7c5-d02b3231e89b/files/b4c93474-0279-486b-bdc8-c16eec3db826.jpg";

const services = [
  { icon: "Sofa", title: "Диваны и кресла", desc: "Глубокая чистка мягкой мебели любых тканей — бархат, велюр, рогожка, кожа", color: "bg-blue-50 text-blue-600" },
  { icon: "BedDouble", title: "Матрасы", desc: "Удаление пятен, запахов, клещей и аллергенов. Безопасно для детей", color: "bg-sky-50 text-sky-600" },
  { icon: "LayoutGrid", title: "Ковры и ковролин", desc: "Выездная химчистка ковровых покрытий любой площади и сложности", color: "bg-indigo-50 text-indigo-600" },
  { icon: "Armchair", title: "Стулья и пуфы", desc: "Реставрация внешнего вида обивки — как новые после первой процедуры", color: "bg-cyan-50 text-cyan-600" },
  { icon: "Sparkles", title: "Выведение пятен", desc: "Работаем с вином, кофе, жиром, чернилами и сложными загрязнениями", color: "bg-blue-50 text-blue-600" },
  { icon: "ShieldCheck", title: "Антиаллергенная обработка", desc: "Специальные составы против пылевых клещей и бактерий", color: "bg-sky-50 text-sky-600" },
];

const portfolio = [
  { img: "https://cdn.poehali.dev/projects/05871acc-a901-40aa-b7c5-d02b3231e89b/bucket/31a266ff-1819-4d90-9a1a-020149269146.jpg", title: "Угловой диван", tag: "Пятно выведено полностью" },
  { img: SOFA_IMG, title: "Ковёр шерстяной", tag: "Площадь 12 м²" },
  { img: SOFA_IMG, title: "Кресло велюр", tag: "Потемнение + запах" },
];

const stats = [
  { value: "5 лет", label: "на рынке" },
  { value: "2 400+", label: "довольных клиентов" },
  { value: "98%", label: "возвращаются снова" },
  { value: "4 часа", label: "среднее время сушки" },
];

const whyUs = [
  { icon: "Zap", title: "Выезд в день обращения", desc: "Работаем без выходных, принимаем заявки 24/7" },
  { icon: "Leaf", title: "Безопасная химия", desc: "Гипоаллергенные составы, безвредны для детей и животных" },
  { icon: "Award", title: "Гарантия результата", desc: "Если не устроит — повторная чистка бесплатно" },
  { icon: "Banknote", title: "Честные цены", desc: "Расчёт стоимости до начала работ, без сюрпризов" },
];

const steps = [
  { num: "01", text: "Оставьте заявку или позвоните" },
  { num: "02", text: "Мастер приедет в удобное время" },
  { num: "03", text: "Оценим объём и назовём цену" },
  { num: "04", text: "Проведём чистку за 1–3 часа" },
  { num: "05", text: "Результат сразу — сушка 2–4 часа" },
];

const contacts = [
  { icon: "Phone", label: "Телефон", value: "+7 (984) 139-65-65", href: "tel:+79841396565", hint: "Звонки и WhatsApp" },
  { icon: "Mail", label: "Email", value: "prochistka65@gmail.com", href: "mailto:prochistka65@gmail.com", hint: "Ответим за 1 час" },
  { icon: "Clock", label: "Режим работы", value: "Пн–Вс, 8:00 – 22:00", href: null, hint: "Без выходных" },
  { icon: "MapPin", label: "Зона выезда", value: "Южно-Сахалинск, Корсаков, Долинск, Анива", href: null, hint: "Выезд по городу и области" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Golos Text', sans-serif", "--brand": "hsl(134,65%,35%)" } as React.CSSProperties}>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="https://cdn.poehali.dev/projects/05871acc-a901-40aa-b7c5-d02b3231e89b/bucket/ca1ba208-8e4f-40bb-91d8-ffb1ebcc00a9.jpg" alt="ПроЧистка" className="h-12 w-12 rounded-full object-cover shadow-sm" />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-green-600 transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-green-600 transition-colors">Портфолио</a>
            <a href="#contacts" className="hover:text-green-600 transition-colors">Контакты</a>
          </nav>
          <a href="#contacts" className="hidden md:inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors" style={{ background: "hsl(134,65%,35%)" }}>
            <Icon name="Phone" size={15} />
            Вызвать мастера
          </a>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} className="text-gray-700" />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
            <a href="#services" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Услуги</a>
            <a href="#portfolio" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Портфолио</a>
            <a href="#contacts" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Контакты</a>
            <a href="#contacts" className="inline-flex items-center gap-2 text-white font-semibold px-5 py-3 rounded-xl justify-center" style={{ background: "hsl(134,65%,35%)" }}>
              <Icon name="Phone" size={16} />
              Вызвать мастера
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-24 pb-20 px-4 sm:px-6" style={{ background: "linear-gradient(135deg, #fff 0%, #f0fdf4 50%, #dcfce7 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="mb-6 inline-flex items-center gap-3 bg-green-50 px-4 py-2 rounded-full text-green-700 text-sm font-semibold">
                <Icon name="MapPin" size={14} />
                Южно-Сахалинск, Корсаков, Долинск, Анива
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <span style={{ color: "hsl(134,65%,35%)" }}>ПроЧистка</span> — химчистка мебели на дому
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Профессиональная чистка диванов, кресел, матрасов и ковров. Современное оборудование, безопасная химия, результат виден сразу.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#contacts" className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-green-200" style={{ background: "hsl(134,65%,35%)" }}>
                  <Icon name="CalendarCheck" size={18} />
                  Записаться на чистку
                </a>
                <a href="tel:+79841396565" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-800 font-semibold px-7 py-3.5 rounded-xl hover:border-green-500 hover:text-green-700 transition-all">
                  <Icon name="Phone" size={18} />
                  +7 (984) 139-65-65
                </a>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="mb-4 flex justify-center">
                <img src="https://cdn.poehali.dev/projects/05871acc-a901-40aa-b7c5-d02b3231e89b/bucket/ca1ba208-8e4f-40bb-91d8-ffb1ebcc00a9.jpg" alt="ПроЧистка — химчистка мебели" className="h-32 w-32 rounded-full object-cover shadow-xl" />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-100/60">
                <img src={SOFA_IMG} alt="Химчистка дивана" className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Результат</p>
                  <p className="font-bold text-gray-900 text-sm">Как новый!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="text-3xl font-black" style={{ fontFamily: "'Montserrat', sans-serif", color: "hsl(134,65%,35%)" }}>{s.value}</p>
                <p className="text-gray-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-50 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Наши услуги</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Что мы чистим</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Работаем с любой мягкой мебелью и напольными покрытиями</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4`}>
                  <Icon name={s.icon} size={22} fallback="Sparkles" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-10 rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: "linear-gradient(135deg, hsl(134,65%,35%) 0%, hsl(134,65%,25%) 100%)" }}>
            <div>
              <h3 className="text-2xl font-black mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Не знаете, отмоется ли?</h3>
              <p className="text-green-100">Звоните — бесплатно оценим сложность работы</p>
            </div>
            <a href="tel:+79841396565" className="shrink-0 inline-flex items-center gap-2 bg-white font-bold px-7 py-3.5 rounded-xl hover:bg-green-50 transition-colors shadow-lg whitespace-nowrap" style={{ color: "hsl(134,65%,35%)" }}>
              <Icon name="Phone" size={18} />
              Позвонить
            </a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 bg-gray-50/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-50 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Портфолио</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Примеры работ</h2>
            <p className="text-gray-500 mt-3">Фото до и после — реальные результаты наших клиентов</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative">
                  <img src={p.img} alt={p.title} className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">До / После</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>{p.title}</h4>
                  <div className="mt-2 inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                    <Icon name="CheckCircle" size={12} />
                    {p.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-green-50 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Почему мы</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>Чисто. Быстро.<br />С гарантией.</h2>
              <div className="space-y-5">
                {whyUs.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                      <Icon name={item.icon} size={18} className="text-green-700" fallback="Check" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{item.title}</p>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl p-8" style={{ background: "linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%)" }}>
              <h3 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Как мы работаем</h3>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-2xl font-black" style={{ fontFamily: "'Montserrat', sans-serif", color: "hsl(213,85%,40%,0.3)", opacity: 0.4 }}>{step.num}</span>
                    <span className="text-gray-700 font-medium">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 px-4 sm:px-6 bg-gray-50/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-50 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Контакты</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Оставьте заявку</h2>
            <p className="text-gray-500 mt-3">Перезвоним в течение 10 минут</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Ваше имя</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-100 transition-all text-gray-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Телефон</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-100 transition-all text-gray-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Услуга</label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-100 transition-all text-gray-900 bg-white"
                  >
                    <option value="">Выберите услугу</option>
                    <option>Чистка дивана / кресла</option>
                    <option>Чистка матраса</option>
                    <option>Чистка ковра</option>
                    <option>Выведение пятен</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Комментарий (необязательно)</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Опишите задачу: размер, материал, пятна..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-100 transition-all text-gray-900 resize-none"
                  />
                </div>
                <button type="submit" className="w-full text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-green-200 flex items-center justify-center gap-2" style={{ background: "hsl(134,65%,35%)" }}>
                  <Icon name="Send" size={17} />
                  Отправить заявку
                </button>
                <p className="text-gray-400 text-xs text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
              </form>
            </div>

            <div className="space-y-5">
              {contacts.map((c, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <Icon name={c.icon} size={20} className="text-green-700" fallback="Info" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="font-bold text-gray-900 hover:text-green-700 transition-colors">{c.value}</a>
                    ) : (
                      <p className="font-bold text-gray-900">{c.value}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-0.5">{c.hint}</p>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl p-6 text-white" style={{ background: "linear-gradient(135deg, hsl(134,65%,35%) 0%, hsl(134,65%,25%) 100%)" }}>
                <div className="flex items-start gap-3">
                  <Icon name="Gift" size={22} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-lg">Первый заказ — скидка 10%</p>
                    <p className="text-blue-100 text-sm mt-1">Укажите при звонке или в заявке «хочу скидку»</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="https://cdn.poehali.dev/projects/05871acc-a901-40aa-b7c5-d02b3231e89b/bucket/ca1ba208-8e4f-40bb-91d8-ffb1ebcc00a9.jpg" alt="ПроЧистка" className="h-9 w-9 rounded-full object-cover" />
            <span className="font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>ПроЧистка</span>
          </div>
          <p className="text-gray-400 text-sm">© 2025 ПроЧистка. Профессиональная химчистка мебели</p>
          <nav className="flex gap-5 text-sm text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Работы</a>
            <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}