import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Работаем в нише финансовых услуг — многие агентства отказывались браться. OutreachPro не только взялись, но и дали конверсию в 8% ответов. Отличная команда.",
    name: "Алексей К.",
    role: "CEO, финтех-стартап",
  },
  {
    quote:
      "Запустили кампанию на европейский рынок SaaS. Всё сделали под ключ: домены, тексты на английском, аналитику. За первый месяц — 23 целевых ответа и 5 встреч с потенциальными клиентами.",
    name: "Дмитрий В.",
    role: "Founder, B2B SaaS",
  },
  {
    quote:
      "Пробовали делать outreach сами — письма уходили в спам. Обратились к OutreachPro, они правильно настроили инфраструктуру и всё заработало. Теперь получаем стабильный поток лидов.",
    name: "Марина С.",
    role: "CMO, IT-аутсорсинг",
  },
  {
    quote:
      "Очень понравилась прозрачность работы. Еженедельные отчёты с реальными цифрами, без воды. Видно открытия, ответы, конверсии — всё честно и по делу.",
    name: "Игорь П.",
    role: "Директор по продажам",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Реальные результаты компаний, которые выбрали профессиональный email outreach под ключ.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
