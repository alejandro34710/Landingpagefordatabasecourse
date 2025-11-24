import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Target, Brain, MapPin, Eye, TrendingUp } from "lucide-react";

export function Topic2() {
  const [selectedSegment, setSelectedSegment] = useState<"toyota" | "nike" | "netflix">("toyota");
  const [activeBase, setActiveBase] = useState<number>(0);
  const [selectedStrategy, setSelectedStrategy] = useState<"indiferenciado" | "diferenciado" | "concentrado">("diferenciado");

  const segmentationExamples = {
    toyota: {
      company: "Toyota",
      icon: "🚗",
      segments: [
        { name: "Jóvenes", product: "Yaris", benefit: "Económico, compacto, tecnológico" },
        { name: "Familias", product: "Highlander", benefit: "Espacioso, seguro, confiable" },
        { name: "Lujo", product: "Lexus", benefit: "Prestigio, tecnología avanzada, servicio premium" }
      ]
    },
    nike: {
      company: "Nike",
      icon: "👟",
      segments: [
        { name: "Corredores", product: "Air Zoom", benefit: "Amortiguación, velocidad" },
        { name: "Basquetbol", product: "Air Jordan", benefit: "Estilo, performance en cancha" },
        { name: "Casual", product: "Air Force 1", benefit: "Moda, comodidad diaria" }
      ]
    },
    netflix: {
      company: "Netflix",
      icon: "📺",
      segments: [
        { name: "Familias", product: "Contenido infantil", benefit: "Disney, Pixar, controles parentales" },
        { name: "Adultos", product: "Series originales", benefit: "Drama, suspenso, documentales" },
        { name: "Adolescentes", product: "Anime/Romance", benefit: "Contenido juvenil trending" }
      ]
    }
  };

  const segmentationBases = [
    {
      icon: MapPin,
      type: "Geográfica",
      color: "blue",
      bgClass: "bg-blue-500/20",
      borderClass: "border-blue-500",
      textClass: "text-blue-400",
      borderColorClass: "border-blue-500/30",
      bgColorClass: "bg-blue-500/10",
      variables: ["País o región", "Tamaño de ciudad", "Clima", "Densidad poblacional"],
      example: "McDonald's ofrece McSpicy Paneer en India (vegetariano) vs Big Mac en USA",
      whenToUse: "Cuando las preferencias varían significativamente por ubicación"
    },
    {
      icon: Users,
      type: "Demográfica",
      color: "green",
      bgClass: "bg-green-500/20",
      borderClass: "border-green-500",
      textClass: "text-green-400",
      borderColorClass: "border-green-500/30",
      bgColorClass: "bg-green-500/10",
      variables: ["Edad y ciclo de vida", "Género", "Ingreso", "Educación y ocupación"],
      example: "Gerber (bebés 0-2 años), Nike (18-35 años), AARP (mayores de 50)",
      whenToUse: "La más común - fácil de medir y accesible"
    },
    {
      icon: Brain,
      type: "Psicográfica",
      color: "purple",
      bgClass: "bg-purple-500/20",
      borderClass: "border-purple-500",
      textClass: "text-purple-400",
      borderColorClass: "border-purple-500/30",
      bgColorClass: "bg-purple-500/10",
      variables: ["Clase social", "Estilo de vida", "Personalidad", "Valores (VALS)"],
      example: "Patagonia segmenta por valores ecológicos, no por edad o ingreso",
      whenToUse: "Cuando el estilo de vida define el comportamiento de compra"
    },
    {
      icon: Target,
      type: "Conductual",
      color: "orange",
      bgClass: "bg-orange-500/20",
      borderClass: "border-orange-500",
      textClass: "text-orange-400",
      borderColorClass: "border-orange-500/30",
      bgColorClass: "bg-orange-500/10",
      variables: ["Ocasión de compra", "Beneficios buscados", "Estatus de usuario", "Tasa de uso"],
      example: "Hallmark segmenta por ocasión: cumpleaños, graduación, condolencia",
      whenToUse: "Basado en comportamiento real observable"
    }
  ];

  const targetingStrategies = {
    indiferenciado: {
      name: "Marketing Indiferenciado",
      desc: "Una sola oferta para todo el mercado",
      pros: ["Economías de escala", "Costos de marketing bajos", "Simple de ejecutar"],
      cons: ["No satisface necesidades específicas", "Vulnerable a competidores focalizados"],
      example: "Coca-Cola original en sus inicios (aunque ahora segmenta)",
      icon: "🎯"
    },
    diferenciado: {
      name: "Marketing Diferenciado",
      desc: "Múltiples ofertas para múltiples segmentos",
      pros: ["Mayor satisfacción del cliente", "Mayores ventas totales", "Diversificación de riesgo"],
      cons: ["Costos más altos", "Complejidad operativa", "Puede canibalizar ventas"],
      example: "Marriott: Courtyard (negocios), Ritz-Carlton (lujo), Residence Inn (estancias largas)",
      icon: "🎪"
    },
    concentrado: {
      name: "Marketing Concentrado (Nicho)",
      desc: "Un solo segmento específico",
      pros: ["Líder en nicho específico", "Mejor comprensión del cliente", "Eficiencia en recursos"],
      cons: ["Riesgo si el segmento declina", "Mercado limitado", "Vulnerabilidad"],
      example: "Rolls-Royce (ultra-premium), Red Bull (jóvenes extremos)",
      icon: "🔍"
    }
  };

  return (
    <section className="py-32 bg-stone-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-sm text-stone-500 uppercase tracking-wider font-medium">Tema 02</div>
              <h2 className="text-amber-50">Segmentación de Mercados</h2>
            </div>
          </div>

          {/* Interactive Segmentation Example */}
          <div className="mb-12">
            <h3 className="text-3xl text-white mb-6">¿Por qué segmentar?</h3>
            <p className="text-stone-300 text-lg leading-relaxed mb-6">
              Los consumidores son diversos. La <strong>segmentación</strong> permite identificar grupos 
              homogéneos para crear ofertas personalizadas. 
              <span className="text-primary-400"> Explora cómo diferentes empresas segmentan:</span>
            </p>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
              {/* Company Selector */}
              <div className="flex gap-3 mb-6">
                {(["toyota", "nike", "netflix"] as const).map((company) => (
                  <button
                    key={company}
                    onClick={() => setSelectedSegment(company)}
                    className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedSegment === company
                        ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg scale-105"
                        : "bg-stone-900/50 text-stone-400 hover:bg-stone-800/50 border border-amber-900/30"
                    }`}
                  >
                    <span className="mr-2">{segmentationExamples[company].icon}</span>
                    {segmentationExamples[company].company}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSegment}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-6">
                    <span className="text-5xl">{segmentationExamples[selectedSegment].icon}</span>
                    <h4 className="text-2xl text-white mt-2">{segmentationExamples[selectedSegment].company}</h4>
                    <p className="text-stone-400 text-sm mt-1">Segmentación por tipo de cliente</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {segmentationExamples[selectedSegment].segments.map((segment, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-stone-900/50 rounded-xl p-6 border border-amber-900/30 cursor-pointer"
                      >
                        <div className="text-purple-400 text-sm mb-2">Segmento</div>
                        <div className="text-white text-lg font-semibold mb-3">{segment.name}</div>
                        <div className="text-primary-400 text-sm mb-2">→ {segment.product}</div>
                        <div className="text-stone-400 text-xs">{segment.benefit}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Segmentation Bases - Interactive Tabs */}
          <div className="mb-12">
            <h3 className="text-2xl text-white mb-6">Bases de Segmentación</h3>
            <p className="text-stone-400 mb-6 text-sm">
              Haz clic en cada base para explorar sus variables y aplicaciones
            </p>

            <div className="grid md:grid-cols-4 gap-3 mb-6">
              {segmentationBases.map((base, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBase(index)}
                  className={`p-4 rounded-xl transition-all duration-300 border-2 ${
                    activeBase === index
                      ? `${base.bgClass} ${base.borderClass} scale-105`
                      : "bg-stone-900/50 border-stone-700/50 hover:border-stone-600"
                  }`}
                >
                  <base.icon className={`w-6 h-6 mb-2 mx-auto ${
                    activeBase === index ? base.textClass : "text-stone-500"
                  }`} />
                  <div className={`text-sm font-medium ${
                    activeBase === index ? "text-white" : "text-stone-400"
                  }`}>
                    {base.type}
                  </div>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeBase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`${segmentationBases[activeBase].bgColorClass} border ${segmentationBases[activeBase].borderColorClass} rounded-2xl p-8`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 ${segmentationBases[activeBase].bgClass} rounded-lg flex items-center justify-center`}>
                    {(() => {
                      const IconComponent = segmentationBases[activeBase].icon;
                      return <IconComponent className={`w-6 h-6 ${segmentationBases[activeBase].textClass}`} />;
                    })()}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl text-white mb-3">Segmentación {segmentationBases[activeBase].type}</h4>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <div className="text-sm text-stone-400 mb-3">Variables clave:</div>
                        <ul className="space-y-2">
                          {segmentationBases[activeBase].variables.map((variable, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-stone-300 text-sm flex items-center gap-2"
                            >
                              <span className={segmentationBases[activeBase].textClass}>•</span>
                              {variable}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-sm text-stone-400 mb-3">Cuándo usar:</div>
                        <p className="text-stone-300 text-sm mb-4">{segmentationBases[activeBase].whenToUse}</p>
                      </div>
                    </div>

                    <div className="bg-stone-900/50 rounded-lg p-4">
                      <div className={`text-xs ${segmentationBases[activeBase].textClass} mb-2`}>
                        Ejemplo real:
                      </div>
                      <div className="text-stone-300 text-sm">{segmentationBases[activeBase].example}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Targeting Strategies Comparison */}
          <div className="mb-12">
            <h3 className="text-2xl text-white mb-6">Estrategias de Cobertura (Targeting)</h3>
            <p className="text-stone-400 mb-6">
              Después de segmentar, debes decidir <strong>a cuántos y cuáles segmentos</strong> dirigirte. 
              <span className="text-primary-400"> Compara las tres estrategias:</span>
            </p>

            <div className="flex gap-3 mb-6">
              {(["indiferenciado", "diferenciado", "concentrado"] as const).map((strategy) => (
                <button
                  key={strategy}
                  onClick={() => setSelectedStrategy(strategy)}
                  className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedStrategy === strategy
                      ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                      : "bg-stone-900/50 text-stone-400 hover:bg-stone-800/50 border border-amber-900/30"
                  }`}
                >
                  <span className="mr-2">{targetingStrategies[strategy].icon}</span>
                  {strategy.charAt(0).toUpperCase() + strategy.slice(1)}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStrategy}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-8"
              >
                <div className="text-center mb-6">
                  <span className="text-5xl">{targetingStrategies[selectedStrategy].icon}</span>
                  <h4 className="text-2xl text-white mt-3 mb-2">{targetingStrategies[selectedStrategy].name}</h4>
                  <p className="text-stone-400">{targetingStrategies[selectedStrategy].desc}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                    <div className="text-green-400 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Ventajas
                    </div>
                    <ul className="space-y-2">
                      {targetingStrategies[selectedStrategy].pros.map((pro, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-stone-300 text-sm flex items-start gap-2"
                        >
                          <span className="text-green-400 mt-0.5">✓</span>
                          {pro}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                    <div className="text-red-400 mb-3 flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      Desventajas
                    </div>
                    <ul className="space-y-2">
                      {targetingStrategies[selectedStrategy].cons.map((con, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-stone-300 text-sm flex items-start gap-2"
                        >
                          <span className="text-red-400 mt-0.5">✗</span>
                          {con}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
                  <div className="text-primary-400 text-sm mb-2">Ejemplo de empresa:</div>
                  <div className="text-white">{targetingStrategies[selectedStrategy].example}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-2xl text-white mb-4">Requisitos para una Segmentación Efectiva</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { label: "Medible", desc: "Tamaño y poder adquisitivo medibles", icon: "📊" },
                { label: "Accesible", desc: "Poder llegar y servir al segmento", icon: "🎯" },
                { label: "Sustancial", desc: "Suficientemente grande y rentable", icon: "💰" },
                { label: "Diferenciable", desc: "Responden distinto a marketing mix", icon: "🔀" },
                { label: "Accionable", desc: "Capacidad de diseñar programas efectivos", icon: "⚡" }
              ].map((req, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-stone-800/30 border border-stone-700/50 rounded-lg p-4 text-center cursor-pointer group"
                >
                  <div className="text-3xl mb-2">{req.icon}</div>
                  <div className="text-white text-sm mb-2 font-semibold">{req.label}</div>
                  <div className="text-xs text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {req.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}