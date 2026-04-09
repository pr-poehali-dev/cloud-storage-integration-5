import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "B2B SaaS — выход на рынок США",
    category: "SaaS / Технологии",
    result: "Reply Rate 11%",
    description:
      "Холодная рассылка на Decision Maker'ов в американских компаниях. Настроили 8 доменов, написали цепочку из 4 писем на английском. За 2 месяца — 47 целевых ответов и 12 демо-встреч.",
    tags: ["B2B", "SaaS", "English", "США"],
    metric: "47 ответов / 2 мес",
  },
  {
    title: "IT-аутсорсинг — Европа",
    category: "IT / Аутсорсинг",
    result: "Open Rate 62%",
    description:
      "Рассылка для аутсорсинговой компании по базе европейских стартапов. Персонализация под каждую нишу клиента, A/B тест тем письма. Результат превысил план в 2 раза.",
    tags: ["IT", "Аутсорсинг", "Европа", "Персонализация"],
    metric: "32 лида за месяц",
  },
  {
    title: "Финансовый консалтинг — РФ",
    category: "Финансы / Консалтинг",
    result: "8% конверсия",
    description:
      "Сложная ниша: многие агентства отказывались. Разработали нейтральные офферы, прошли спам-фильтры, вышли на директоров компаний из Fortune 500 по России.",
    tags: ["Финансы", "Консалтинг", "Сложная ниша", "B2B"],
    metric: "19 встреч за 6 недель",
  },
  {
    title: "Медицинское оборудование — B2B",
    category: "MedTech / B2B",
    result: "Reply Rate 9%",
    description:
      "Outreach на главврачей и заведующих закупками частных клиник. Строгая персонализация, соблюдение регуляторных ограничений, цепочка из 5 касаний.",
    tags: ["Медицина", "MedTech", "Закупки", "Регуляторика"],
    metric: "28 квалифицированных лидов",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши кейсы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Реальные результаты в разных нишах — от SaaS до медицины. Смотрите сами, что мы умеем.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-primary font-semibold mb-1">{project.category}</p>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <div className="flex-shrink-0 ml-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold whitespace-nowrap">
                    {project.result}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-primary ml-4 whitespace-nowrap">{project.metric}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
