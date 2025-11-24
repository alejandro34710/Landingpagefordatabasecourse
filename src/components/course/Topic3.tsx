import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Brain, Search, ShoppingCart, Heart, TrendingUp, Users, Lightbulb } from "lucide-react";

export function Topic3() {
  const [activeStage, setActiveStage] = useState<number | null>(0);
  const [selectedFactor, setSelectedFactor] = useState<"cultural" | "social" | "personal" | "psicologico">("cultural");
  const [hoveredNeed, setHoveredNeed] = useState<number | null>(null);

  const decisionStages = [
    {
      step: 1,
      icon: Lightbulb,
      title: "Reconocimiento de Necesidad",
      desc: "El consumidor percibe una diferencia entre su estado actual y deseado.",
      trigger: "Estímulos internos (hambre) o externos (anuncio)",
      example: "Tu laptop se vuelve lenta → Necesitas nueva laptop",
      marketing: "Crear conciencia de necesidad mediante publicidad",
      color: "blue",
      bgClass: "bg-blue-500/10",
      borderClass: "border-blue-500/30"
    },
    {
      step: 2,
      icon: Search,
      title: "Búsqueda de Información",
      desc: "Busca información sobre productos que satisfagan la necesidad.",
      trigger: "Fuentes personales, comerciales, públicas, experimentales",
      example: "Busca en Google, pregunta a amigos, lee reviews de laptops",
      marketing: "Estar presente en búsquedas (SEO/SEM), generar contenido útil",
      color: "purple",
      bgClass: "bg-purple-500/10",
      borderClass: "border-purple-500/30"
    },
    {
      step: 3,
      icon: TrendingUp,
      title: "Evaluación de Alternativas",
      desc: "Compara opciones basándose en atributos importantes.",
      trigger: "Criterios: precio, marca, características, reviews",
      example: "Compara MacBook vs Dell XPS vs Lenovo ThinkPad",
      marketing: "Destacar ventajas competitivas, comparaciones favorables",
      color: "orange",
      bgClass: "bg-orange-500/10",
      borderClass: "border-orange-500/30"
    },
    {
      step: 4,
      icon: ShoppingCart,
      title: "Decisión de Compra",
      desc: "Forma intención de compra del producto preferido.",
      trigger: "Influencias: actitud de otros, factores situacionales",
      example: "Decide comprar MacBook pero espera Black Friday",
      marketing: "Facilitar compra, ofrecer garantías, eliminar fricciones",
      color: "green",
      bgClass: "bg-green-500/10",
      borderClass: "border-green-500/30"
    },
    {
      step: 5,
      icon: Heart,
      title: "Comportamiento Post-Compra",
      desc: "Experimenta satisfacción o insatisfacción según expectativas.",
      trigger: "Comparación: expectativa vs realidad",
      example: "Está encantado con MacBook → Recomienda a amigos",
      marketing: "Soporte post-venta, programas de lealtad, solicitar reviews",
      color: "pink",
      bgClass: "bg-pink-500/10",
      borderClass: "border-pink-500/30"
    }
  ];

  const influenceFactors = {
    cultural: {
      title: "Factores Culturales",
      icon: "🌍",
      items: [
        {
          name: "Cultura",
          desc: "Conjunto de valores, creencias y costumbres aprendidas.",
          example: "En India, McDonald's no vende carne de res (vaca sagrada).",
          case: "KFC en China ofrece congee (arroz) para desayuno"
        },
        {
          name: "Subcultura",
          desc: "Grupos con sistemas de valores compartidos.",
          example: "Mercado hispano en USA tiene preferencias únicas.",
          case: "Goya Foods domina mercado latino en Estados Unidos"
        },
        {
          name: "Clase social",
          desc: "Divisiones relativamente permanentes.",
          example: "Afecta preferencias de marca y hábitos de compra.",
          case: "Whole Foods vs Walmart - mismos productos, diferente clase"
        }
      ]
    },
    social: {
      title: "Factores Sociales",
      icon: "👥",
      items: [
        {
          name: "Grupos de referencia",
          desc: "Grupos que influyen en actitudes y comportamientos.",
          example: "Familia, amigos, influencers, celebridades.",
          case: "Nike y Michael Jordan crearon industria de endorsements"
        },
        {
          name: "Familia",
          desc: "Organización más importante de consumo.",
          example: "Roles: iniciador, influenciador, decisor, comprador, usuario.",
          case: "Niños influencian 43% de compras familiares (cereales, juguetes)"
        },
        {
          name: "Roles y estatus",
          desc: "Posición en grupos determina comportamiento.",
          example: "CEO compra distinto que estudiante universitario.",
          case: "American Express Centurion (tarjeta negra) - solo por invitación"
        }
      ]
    },
    personal: {
      title: "Factores Personales",
      icon: "👤",
      items: [
        {
          name: "Edad y ciclo de vida",
          desc: "Necesidades cambian con la edad.",
          example: "Pañales → universidad → casa → jubilación.",
          case: "Gerber (bebés), Red Bull (jóvenes), AARP (mayores 50+)"
        },
        {
          name: "Ocupación e ingreso",
          desc: "Determina capacidad de compra y necesidades.",
          example: "Trabajadores de construcción vs ejecutivos.",
          case: "Dollar Shave Club disrumpió mercado enfocándose en precio"
        },
        {
          name: "Personalidad y autoconcepto",
          desc: "Características psicológicas distintivas.",
          example: "Aventurero, conservador, innovador, tradicional.",
          case: "Harley-Davidson vende estilo de vida rebelde, no solo motos"
        }
      ]
    },
    psicologico: {
      title: "Factores Psicológicos",
      icon: "🧠",
      items: [
        {
          name: "Motivación",
          desc: "Necesidad fuerte que impulsa a actuar.",
          example: "Jerarquía de Maslow: desde hambre hasta autorrealización.",
          case: "Apple apela a autorrealización (\"Think Different\")"
        },
        {
          name: "Percepción",
          desc: "Proceso de seleccionar, organizar e interpretar información.",
          example: "Atención selectiva, distorsión, retención selectivas.",
          case: "Coca-Cola vs Pepsi - sabor similar, percepción diferente"
        },
        {
          name: "Aprendizaje y memoria",
          desc: "Cambios en comportamiento por experiencia.",
          example: "Refuerzo positivo crea lealtad de marca.",
          case: "Amazon Prime - cuanto más usas, más leal te vuelves"
        }
      ]
    }
  };

  const maslowNeeds = [
    { 
      level: "Autorrealización", 
      desc: "Desarrollo personal, creatividad, potencial",
      example: "Cursos MasterClass, viajes de aventura, arte",
      brands: ["MasterClass", "Airbnb Experiences", "Patagonia"],
      color: "purple",
      bgClass: "bg-purple-500/10",
      borderClass: "border-purple-500/30",
      textClass: "text-purple-400"
    },
    { 
      level: "Estima", 
      desc: "Reconocimiento, estatus, logro, respeto",
      example: "BMW, Rolex, títulos universitarios",
      brands: ["Mercedes-Benz", "Harvard", "Louis Vuitton"],
      color: "pink",
      bgClass: "bg-pink-500/10",
      borderClass: "border-pink-500/30",
      textClass: "text-pink-400"
    },
    { 
      level: "Sociales", 
      desc: "Amor, pertenencia, aceptación, amistad",
      example: "Facebook, clubes, restaurantes",
      brands: ["Instagram", "Starbucks", "Nike (comunidad)"],
      color: "blue",
      bgClass: "bg-blue-500/10",
      borderClass: "border-blue-500/30",
      textClass: "text-blue-400"
    },
    { 
      level: "Seguridad", 
      desc: "Protección, estabilidad, orden, salud",
      example: "Seguros, alarmas, ahorros, medicina",
      brands: ["Volvo", "State Farm", "ADT Security"],
      color: "green",
      bgClass: "bg-green-500/10",
      borderClass: "border-green-500/30",
      textClass: "text-green-400"
    },
    { 
      level: "Fisiológicas", 
      desc: "Hambre, sed, sueño, refugio",
      example: "Comida, agua, vivienda básica",
      brands: ["McDonald's", "Walmart", "Motel 6"],
      color: "orange",
      bgClass: "bg-orange-500/10",
      borderClass: "border-orange-500/30",
      textClass: "text-orange-400"
    }
  ];

  return (
    <section className="py-32 bg-stone-900/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Brain className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-sm text-stone-500 uppercase tracking-wider font-medium">Tema 03</div>
              <h2 className="text-amber-50">Comportamiento del Consumidor</h2>
            </div>
          </div>

          {/* Interactive Decision Journey */}
          <div className="mb-12">
            <h3 className="text-3xl text-white mb-6">El Proceso de Decisión de Compra</h3>
            <p className="text-stone-300 text-lg mb-8 leading-relaxed">
              Los consumidores pasan por un proceso mental antes de comprar. Modelo propuesto por <strong>John Dewey</strong> y 
              refinado por Philip Kotler. <span className="text-primary-400">Haz clic en cada etapa para explorar:</span>
            </p>

            {/* Journey Timeline */}
            <div className="mb-8 flex items-center justify-between relative">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-stone-700" />
              {decisionStages.map((stage, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStage(activeStage === i ? null : i)}
                  className={`relative z-10 flex flex-col items-center gap-2 transition-all duration-300 ${
                    activeStage === i ? "scale-110" : ""
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStage === i
                      ? "bg-gradient-to-r from-primary-500 to-accent-500 shadow-lg shadow-primary-500/50"
                      : "bg-stone-800 border-2 border-stone-700 hover:border-stone-600"
                  }`}>
                    <span className={`${activeStage === i ? "text-white" : "text-stone-400"}`}>{i + 1}</span>
                  </div>
                  <span className={`text-xs text-center max-w-[80px] ${
                    activeStage === i ? "text-primary-400" : "text-stone-500"
                  }`}>
                    {stage.title.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeStage !== null && (
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`${decisionStages[activeStage].bgClass} border ${decisionStages[activeStage].borderClass} rounded-2xl p-8`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center">
                      {(() => {
                        const IconComponent = decisionStages[activeStage].icon;
                        return <IconComponent className="w-8 h-8 text-primary-400" />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-stone-500 mb-1">Etapa {decisionStages[activeStage].step} de 5</div>
                      <h4 className="text-2xl text-white mb-3">{decisionStages[activeStage].title}</h4>
                      <p className="text-stone-300 leading-relaxed mb-6">{decisionStages[activeStage].desc}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-stone-900/50 rounded-lg p-4">
                          <div className="text-xs text-stone-500 uppercase mb-2">Cómo ocurre</div>
                          <div className="text-sm text-stone-300">{decisionStages[activeStage].trigger}</div>
                        </div>
                        <div className="bg-stone-900/50 rounded-lg p-4">
                          <div className="text-xs text-stone-500 uppercase mb-2">Ejemplo</div>
                          <div className="text-sm text-primary-400">{decisionStages[activeStage].example}</div>
                        </div>
                      </div>
                      
                      <div className="bg-accent-500/10 border border-accent-500/20 rounded-lg p-4">
                        <div className="text-xs text-accent-400 uppercase mb-2">Acción de Marketing</div>
                        <div className="text-sm text-stone-300">{decisionStages[activeStage].marketing}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Influence Factors with Tabs */}
          <div className="mb-12">
            <h3 className="text-2xl text-white mb-6">Factores que Influyen en el Comportamiento</h3>
            <p className="text-stone-400 mb-6">
              El comportamiento de compra está influenciado por cuatro categorías principales. 
              <span className="text-primary-400"> Explora cada una:</span>
            </p>

            <div className="flex gap-2 mb-6 overflow-x-auto">
              {(["cultural", "social", "personal", "psicologico"] as const).map((factor) => (
                <button
                  key={factor}
                  onClick={() => setSelectedFactor(factor)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedFactor === factor
                      ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                      : "bg-stone-800/30 text-stone-400 hover:bg-stone-800/50 border border-stone-700/50"
                  }`}
                >
                  <span className="mr-2">{influenceFactors[factor].icon}</span>
                  {influenceFactors[factor].title}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFactor}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8"
              >
                <div className="text-center mb-6">
                  <span className="text-5xl">{influenceFactors[selectedFactor].icon}</span>
                  <h4 className="text-2xl text-white mt-3">{influenceFactors[selectedFactor].title}</h4>
                </div>

                <div className="space-y-4">
                  {influenceFactors[selectedFactor].items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-stone-900/50 rounded-xl p-6 border border-stone-700/50"
                    >
                      <h5 className="text-white text-lg mb-2">{item.name}</h5>
                      <p className="text-stone-300 mb-3">{item.desc}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-3">
                          <div className="text-xs text-primary-400 mb-1">Ejemplo:</div>
                          <div className="text-sm text-stone-300">{item.example}</div>
                        </div>
                        <div className="bg-accent-500/10 border border-accent-500/20 rounded-lg p-3">
                          <div className="text-xs text-accent-400 mb-1">Caso real:</div>
                          <div className="text-sm text-stone-300">{item.case}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Maslow's Hierarchy - Interactive Pyramid */}
          <div>
            <h3 className="text-2xl text-white mb-6">Jerarquía de Necesidades de Maslow</h3>
            <div className="bg-stone-800/30 border border-stone-700/50 rounded-2xl p-8">
              <p className="text-stone-300 mb-6 leading-relaxed">
                <strong>Abraham Maslow</strong> propuso que las necesidades humanas están jerarquizadas. 
                Una vez satisfechas las básicas, buscamos las superiores. 
                <span className="text-primary-400"> Pasa el cursor sobre cada nivel para ver marcas que lo explotan:</span>
              </p>
              
              <div className="space-y-3">
                {maslowNeeds.map((need, i) => (
                  <motion.div
                    key={i}
                    onHoverStart={() => setHoveredNeed(i)}
                    onHoverEnd={() => setHoveredNeed(null)}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className={`${need.bgClass} border ${need.borderClass} rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                      hoveredNeed === i ? "shadow-lg shadow-primary-500/20" : ""
                    }`}
                    style={{ 
                      width: `${100 - i * 8}%`,
                      marginLeft: `${i * 4}%`
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 ${need.bgClass} rounded-lg flex items-center justify-center flex-shrink-0 ${need.textClass} border ${need.borderClass}`}>
                        {5 - i}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="text-white text-lg">{need.level}</h5>
                          {hoveredNeed === i && (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className={`text-xs ${need.textClass}`}
                            >
                              Nivel {5 - i} de 5
                            </motion.span>
                          )}
                        </div>
                        <p className="text-stone-400 text-sm mb-3">{need.desc}</p>
                        <div className="text-xs text-stone-500 mb-2">Productos/servicios: {need.example}</div>
                        
                        <AnimatePresence>
                          {hoveredNeed === i && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-3 pt-3 border-t border-stone-700/30"
                            >
                              <div className="text-xs text-stone-500 mb-2">Marcas que apelan a esta necesidad:</div>
                              <div className="flex gap-2 flex-wrap">
                                {need.brands.map((brand, j) => (
                                  <span
                                    key={j}
                                    className={`px-3 py-1 ${need.bgClass} border ${need.borderClass} rounded-lg text-xs ${need.textClass}`}
                                  >
                                    {brand}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
