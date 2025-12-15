export default function TravelEnglishCourse() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b132b] via-[#0f1c3f] to-[#020617] text-slate-100 font-sans">
      {/* Hero */}
      <section className="relative px-6 py-24 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Английский для путешествий
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
          Современный онлайн‑курс для детей, который превращает английский язык
          в удобный инструмент для реальных поездок и приключений.
        </p>
      </section>

      {/* Для кого */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {["4–5 класс", "6–8 класс"].map((group, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-2 text-sky-300">Группа</h3>
            <p className="text-xl text-teal-300">{group}</p>
          </div>
        ))}
      </section>

      {/* Программа */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Программа курса
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Аэропорт без стресса",
            "Отель и заселение",
            "Кафе и рестораны",
            "Ориентирование в городе",
            "Экстренные ситуации",
            "Туризм и развлечения",
            "Дружба в путешествиях",
            "Дипломный проект",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2 text-sky-300">{item}</h3>
              <p className="text-slate-300">
                Практика живого английского языка в реальных ситуациях путешествий.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Почему курс */}
      <section className="px-6 py-20 bg-black/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Почему этот курс особенный?
          </h2>
          <ul className="space-y-4 text-lg text-slate-300">
            <li>• Живая разговорная практика вместо скучной теории</li>
            <li>• Реальные сценарии путешествий</li>
            <li>• Интерактив: ролевые игры, аудио и мини‑квесты</li>
            <li>
              • Итоговый уровень:{" "}
              <span className="text-amber-300 font-semibold">A2–B1</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Детали */}
      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {["Что потребуется", "Расписание", "Стоимость"].map((title, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-sky-300">{title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {i === 0 && "Компьютер или ноутбук, наушники, микрофон, Zoom"}
              {i === 1 && "Чт 15:00 (4–5 класс) • Пт 15:30 (6–8 класс)"}
              {i === 2 && "10 уроков — 12 000 ₽ • 1 300 ₽ / урок"}
            </p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Набор открыт!</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-10">
          Группы до 6 человек. Количество мест ограничено — подарите ребёнку
          уверенность в путешествиях.
        </p>
        <button className="text-lg px-10 py-6 rounded-2xl bg-gradient-to-r from-teal-400 via-amber-400 to-orange-500 text-sky-900 shadow-xl hover:scale-105 transition">
          Записаться на курс
        </button>
      </section>
    </div>
  );
}
