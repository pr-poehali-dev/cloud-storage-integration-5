import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Flame, FileText, BarChart2, Settings, Shield } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Регистрация и настройка доменов",
    description:
      "Регистрируем домены специально под рассылки, настраиваем DNS-записи (SPF, DKIM, DMARC), чтобы письма попадали во входящие, а не в спам.",
  },
  {
    icon: Flame,
    title: "Прогрев почтовых ящиков",
    description:
      "Профессионально прогреваем новые ящики перед запуском. Это критически важный этап, который определяет доставляемость ваших писем.",
  },
  {
    icon: FileText,
    title: "Написание текстов",
    description:
      "Создаем цепочки писем, которые читают и на которые отвечают. Персонализация, убедительный оффер и чёткий призыв к действию в каждом письме.",
  },
  {
    icon: Settings,
    title: "Техническая настройка",
    description:
      "Полная настройка инфраструктуры рассылок: выбор платформы, подключение к CRM, настройка автоматических цепочек и follow-up писем.",
  },
  {
    icon: BarChart2,
    title: "Аналитика и отчётность",
    description:
      "Собираем подробную аналитику по каждой кампании: Open Rate, Reply Rate, конверсии. Прозрачные отчёты без воды — только цифры и выводы.",
  },
  {
    icon: Shield,
    title: "Любые ниши — без отказов",
    description:
      "Беремся за проекты, от которых отказываются другие агентства. Финансы, недвижимость, B2B, SaaS, медицина — у нас есть опыт в каждой нише.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наша экспертиза
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Всё, что нужно для{" "}
          <span className="text-primary">успешного outreach</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Берём на себя весь цикл: от технической настройки до написания текстов и анализа результатов. Вам остается только принимать входящие заявки.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
