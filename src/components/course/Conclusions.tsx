import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookMarked, Lightbulb, Quote, CheckCircle, Book, ExternalLink } from "lucide-react";

export function Conclusions() {
  const [selectedKey, setSelectedKey] = useState<number | null>(null);
  const [expandedBook, setExpandedBook] = useState<number | null>(null);

  const keyTakeaways = [
    {
      icon: "🎯",
      title: "El cliente es el centro",
      short: "Marketing efectivo comienza con entender al cliente, no con el producto.",
      detail: "La filosofía moderna de marketing pone al cliente en el centro de todas las decisiones. Empresas como Amazon obsesionadas con el cliente superan a aquellas obsesionadas con el producto. No vendas lo que haces, haz lo que se vende.",
      example: "Steve Jobs: 'Debes empezar con la experiencia del cliente y trabajar hacia atrás hasta la tecnología'"
    },
    {
      icon: "🔍",
      title: "Segmentación es poder",
      short: "No puedes ser todo para todos. Enfócate donde puedes ganar.",
      detail: "Las empresas exitosas identifican segmentos específicos donde pueden dominar. Es mejor ser líder en un nicho que irrelevante para todos. La segmentación permite personalización y eficiencia de recursos.",
      example: "Rolls-Royce no compite con Toyota. Red Bull no compite con agua. Cada uno domina su segmento."
    },
    {
      icon: "⚙️",
      title: "Las 4Ps deben ser coherentes",
      short: "Tu marketing mix debe estar alineado - todo debe contar la misma historia.",
      detail: "Producto premium necesita precio alto, distribución selectiva y promoción aspiracional. Incoherencias confunden al consumidor y diluyen tu posicionamiento. Ritz-Carlton no puede venderse en Walmart.",
      example: "Luxottica (Ray-Ban, Oakley) controla producción, retail y mensaje para mantener coherencia"
    },
    {
      icon: "🧠",
      title: "Posicionamiento es perceptual",
      short: "No importa lo que eres, sino cómo te perciben en la mente del consumidor.",
      detail: "El posicionamiento no es lo que haces al producto, es lo que haces en la mente. La percepción es realidad en marketing. Una vez establecido, el posicionamiento es difícil de cambiar (ver: New Coke).",
      example: "Volvo = Seguridad (aunque otros autos sean igual de seguros). Disney = Magia familiar."
    },
    {
      icon: "📊",
      title: "Los datos guían, la intuición inspira",
      short: "Usa investigación para decisiones informadas, pero no ignores insights creativos.",
      detail: "La mejor marketing combina análisis riguroso con creatividad audaz. Los datos te dicen QUÉ está pasando, pero el insight humano te dice POR QUÉ y QUÉ HACER al respecto.",
      example: "Netflix usa datos para decidir qué producir, pero la creatividad para ejecutarlo (House of Cards)"
    },
    {
      icon: "💡",
      title: "El marketing evoluciona, los principios no",
      short: "Las tácticas cambian (social media, IA), pero las necesidades humanas permanecen.",
      detail: "Las herramientas y canales evolucionan constantemente, pero los principios fundamentales son atemporales. Las personas aún buscan valor, conexión, estatus y solución a problemas reales.",
      example: "Antes: anuncios TV. Ahora: influencers en TikTok. Pero ambos buscan confianza y atención."
    }
  ];

  const bibliography = [
    {
      title: "Marketing Management",
      author: "Philip Kotler & Kevin Lane Keller",
      year: "2021",
      edition: "16ª Edición",
      publisher: "Pearson",
      why: "La biblia del marketing. Texto fundamental adoptado por universidades globalmente.",
      topics: ["Estrategia de marketing", "Marketing mix", "Investigación de mercados", "B2B y B2C"],
      icon: "📘"
    },
    {
      title: "Positioning: The Battle for Your Mind",
      author: "Al Ries & Jack Trout",
      year: "2001",
      edition: "20th Anniversary Edition",
      publisher: "McGraw-Hill",
      why: "Libro revolucionario que introdujo el concepto de posicionamiento en marketing.",
      topics: ["Posicionamiento", "Estrategia de marca", "Diferenciación", "Comunicación efectiva"],
      icon: "🎯"
    },
    {
      title: "Consumer Behavior: Buying, Having, and Being",
      author: "Michael R. Solomon",
      year: "2020",
      edition: "13ª Edición",
      publisher: "Pearson",
      why: "Análisis profundo del comportamiento del consumidor con ejemplos contemporáneos.",
      topics: ["Psicología del consumidor", "Toma de decisiones", "Influencias culturales", "Identidad y consumo"],
      icon: "🧠"
    },
    {
      title: "Blue Ocean Strategy",
      author: "W. Chan Kim & Renée Mauborgne",
      year: "2015",
      edition: "Expanded Edition",
      publisher: "Harvard Business Review Press",
      why: "Estrategia de crear mercados no disputados en lugar de competir en océanos rojos.",
      topics: ["Innovación estratégica", "Creación de valor", "Océanos azules", "Ventaja competitiva"],
      icon: "🌊"
    }
  ];

  return (
    <section id="conclusions" className="py-32 relative overflow-hidden bg-stone-900/50">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 to-stone-950" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <BookMarked className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <div className="text-sm text-stone-500 uppercase tracking-wider font-medium">Sección 09</div>
              <h2 className="text-amber-50">Conclusiones y Síntesis</h2>
            </div>
          </div>

          {/* Reflection */}
          <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <Quote className="w-8 h-8 text-primary-400 flex-shrink-0" />
              <div>
                <h3 className="text-2xl text-white mb-4">Reflexión Final</h3>
                <p className="text-stone-300 text-lg leading-relaxed mb-6">
                  El marketing no es manipulación, es <strong className="text-primary-400">crear valor</strong>. Las empresas exitosas 
                  entienden profundamente a sus clientes, identifican necesidades reales (a veces no articuladas) 
                  y desarrollan soluciones que mejoran vidas.
                </p>
                <p className="text-stone-400 leading-relaxed">
                  Hemos cubierto los fundamentos: las 4Ps, segmentación, comportamiento del consumidor, investigación 
                  y posicionamiento. Estos conceptos son atemporales, aunque las tácticas evolucionen con la tecnología. 
                  Un profesional de marketing debe dominar tanto la estrategia (qué hacer) como la ejecución (cómo hacerlo).
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Key Takeaways */}
          <div className="mb-12">
            <h3 className="text-2xl text-white mb-6">Conceptos Esenciales para Recordar</h3>
            <p className="text-stone-400 mb-6">
              <span className="text-primary-400">Haz clic en cada concepto para profundizar:</span>
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {keyTakeaways.map((takeaway, i) => (
                <motion.button
                  key={i}
                  onClick={() => setSelectedKey(selectedKey === i ? null : i)}
                  whileHover={{ scale: 1.02 }}
                  className={`text-left p-6 rounded-xl transition-all duration-300 border-2 ${
                    selectedKey === i
                      ? "bg-gradient-to-br from-primary-500/20 to-accent-500/20 border-primary-500"
                      : "bg-stone-800/30 border-stone-700/50 hover:border-stone-600"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">{takeaway.icon}</span>
                    <div className="flex-1">
                      <h4 className={`text-lg mb-2 ${selectedKey === i ? "text-white" : "text-stone-300"}`}>
                        {takeaway.title}
                      </h4>
                      <p className="text-stone-400 text-sm">{takeaway.short}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedKey === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-stone-700/30 mt-4">
                          <p className="text-stone-300 text-sm leading-relaxed mb-4">{takeaway.detail}</p>
                          <div className="bg-accent-500/10 border border-accent-500/20 rounded-lg p-3">
                            <div className="text-xs text-accent-400 mb-1">Ejemplo:</div>
                            <p className="text-stone-300 text-sm italic">{takeaway.example}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Interactive Bibliography */}
          <div>
            <h3 className="text-2xl text-white mb-6">Bibliografía Recomendada</h3>
            <p className="text-stone-400 mb-6">
              Profundiza tu conocimiento con estos textos fundamentales. 
              <span className="text-primary-400"> Expande cada libro para ver temas cubiertos:</span>
            </p>

            <div className="space-y-4">
              {bibliography.map((book, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-stone-800/30 border border-stone-700/50 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedBook(expandedBook === i ? null : i)}
                    className="w-full flex items-start gap-4 p-6 hover:bg-stone-800/50 transition-colors text-left"
                  >
                    <span className="text-4xl">{book.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-white text-lg mb-2">{book.title}</h4>
                      <div className="text-sm text-stone-400 mb-2">
                        {book.author} ({book.year}) · {book.edition}
                      </div>
                      <p className="text-stone-500 text-xs">{book.publisher}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedBook === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-stone-500"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedBook === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-stone-700/30">
                          <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4 mb-4 mt-4">
                            <div className="text-xs text-primary-400 mb-2">¿Por qué leerlo?</div>
                            <p className="text-stone-300 text-sm">{book.why}</p>
                          </div>
                          
                          <div className="text-xs text-stone-500 mb-3">Temas principales:</div>
                          <div className="flex flex-wrap gap-2">
                            {book.topics.map((topic, j) => (
                              <motion.span
                                key={j}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: j * 0.05 }}
                                className="px-3 py-1 bg-stone-900/50 border border-stone-700/50 rounded-lg text-xs text-stone-400"
                              >
                                {topic}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 text-center"
          >
            <Lightbulb className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <blockquote className="text-xl text-white mb-4 italic">
              "The aim of marketing is to know and understand the customer so well that the product or service fits them and sells itself."
            </blockquote>
            <cite className="text-stone-400">— Peter Drucker, Management Pioneer</cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
