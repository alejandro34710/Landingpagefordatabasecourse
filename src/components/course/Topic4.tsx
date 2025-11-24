import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BarChart3, Users, FileText, TrendingUp, CheckCircle, Database, Target } from "lucide-react";

export function Topic4() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState<"cuantitativa" | "cualitativa">("cuantitativa");
  const [activeDataType, setActiveDataType] = useState<"primaria" | "secundaria">("primaria");

  const researchProcess = [
    {
      step: 1,
      title: "Definir problema y objetivos",
      desc: "¿Qué necesitamos saber? Exploratorio, descriptivo o causal.",
      example: "¿Por qué están cayendo las ventas del producto X?",
      detail: "El paso más importante. Un problema mal definido lleva a investigación inútil. Se debe establecer si se busca explorar, describir o explicar relaciones causales.",
      icon: Target
    },
    {
      step: 2,
      title: "Desarrollar plan de investigación",
      desc: "Determinar fuentes de datos, métodos, instrumentos, muestra.",
      example: "Encuesta a 1,000 clientes + 10 grupos focales",
      detail: "Especificar fuentes (primarias/secundarias), métodos (encuestas, observación), instrumentos (cuestionario), plan de muestreo y contacto.",
      icon: FileText
    },
    {
      step: 3,
      title: "Recopilar información",
      desc: "Ejecutar el plan. Fase más costosa y propensa a errores.",
      example: "Aplicar encuestas online durante 2 semanas",
      detail: "Requiere control de calidad estricto. Los investigadores deben asegurar que los datos sean recopilados correctamente y sin sesgos.",
      icon: Database
    },
    {
      step: 4,
      title: "Analizar información",
      desc: "Extraer hallazgos relevantes mediante análisis estadístico.",
      example: "Correlación entre precio y satisfacción: r = -0.65",
      detail: "Usar herramientas estadísticas (SPSS, R, Python) para identificar patrones, tendencias y relaciones significativas en los datos.",
      icon: BarChart3
    },
    {
      step: 5,
      title: "Presentar hallazgos",
      desc: "Reportar insights accionables para toma de decisiones.",
      example: "Dashboard ejecutivo + recomendaciones estratégicas",
      detail: "Traducir datos complejos en insights comprensibles. Incluir visualizaciones, conclusiones y recomendaciones específicas.",
      icon: TrendingUp
    }
  ];

  const researchMethods = {
    cuantitativa: {
      title: "Investigación Cuantitativa",
      desc: "Datos numéricos, medibles, muestras grandes, análisis estadístico",
      icon: "📊",
      methods: [
        {
          name: "Encuestas",
          desc: "Cuestionarios estructurados a muchas personas",
          pros: ["Gran muestra", "Resultados generalizables", "Análisis estadístico"],
          cons: ["Superficial", "Sesgo de respuesta", "Baja flexibilidad"],
          example: "Net Promoter Score (NPS): ¿Recomendarías nuestro producto? (0-10)"
        },
        {
          name: "Experimentos",
          desc: "Manipular variables para medir causa-efecto",
          pros: ["Establece causalidad", "Control de variables", "Preciso"],
          cons: ["Artificial", "Costoso", "Dilemas éticos"],
          example: "A/B testing: ¿Botón rojo o azul genera más clics?"
        },
        {
          name: "Observación estructurada",
          desc: "Registrar comportamientos sistemáticamente",
          pros: ["Comportamiento real", "No intrusivo", "Objetivo"],
          cons: ["No explica por qué", "Limitado a observable", "Lento"],
          example: "Nielsen mide audiencia TV con people meters en hogares"
        }
      ]
    },
    cualitativa: {
      title: "Investigación Cualitativa",
      desc: "Comprensión profunda, motivaciones, muestras pequeñas",
      icon: "💬",
      methods: [
        {
          name: "Grupos Focales",
          desc: "6-10 personas discuten con moderador",
          pros: ["Interacción grupal", "Insights profundos", "Flexible"],
          cons: ["No generalizable", "Costoso", "Sesgo de grupo"],
          example: "Apple convoca grupos focales para evaluar diseños de productos"
        },
        {
          name: "Entrevistas a profundidad",
          desc: "Conversación uno-a-uno extensa",
          pros: ["Muy detallado", "Confidencial", "Adaptable"],
          cons: ["Consume tiempo", "Depende del entrevistador", "Muestra pequeña"],
          example: "Entrevistar a 20 usuarios sobre experiencia con app"
        },
        {
          name: "Observación etnográfica",
          desc: "Observar en contexto natural",
          pros: ["Contexto real", "Descubre lo inconsciente", "Auténtico"],
          cons: ["Muy caro", "Subjetivo", "Largo plazo"],
          example: "Intuit envía empleados a casas de clientes para ver cómo usan software"
        }
      ]
    }
  };

  const dataTypes = {
    primaria: {
      title: "Datos Primarios",
      desc: "Información recopilada específicamente para el proyecto actual",
      icon: "🎯",
      characteristics: ["Actual y relevante", "Control total", "Costoso y lento"],
      sources: ["Encuestas propias", "Experimentos", "Grupos focales", "Observación directa"],
      example: "Starbucks hace encuestas a clientes sobre nuevo sabor de Frappuccino",
      when: "Cuando no existen datos o necesitas información muy específica"
    },
    secundaria: {
      title: "Datos Secundarios",
      desc: "Información que ya existe, recopilada para otros propósitos",
      icon: "📚",
      characteristics: ["Rápido y barato", "Puede estar desactualizado", "No siempre aplicable"],
      sources: ["Informes de gobierno", "Estudios publicados", "Bases de datos comerciales", "Informes internos"],
      example: "Usar datos del INEGI sobre población y censo para decidir ubicación de tienda",
      when: "Siempre revisar primero - 90% más barato que datos primarios"
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
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <BarChart3 className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <div className="text-sm text-stone-500 uppercase tracking-wider font-medium">Tema 04</div>
              <h2 className="text-amber-50">Investigación de Mercados</h2>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h3 className="text-3xl text-white mb-6">¿Qué es la Investigación de Mercados?</h3>
            <p className="text-stone-300 text-lg leading-relaxed mb-4">
              Proceso sistemático de diseñar, recopilar, analizar y reportar información relevante para 
              una situación de marketing específica. Es la brújula que guía decisiones basadas en datos, 
              no en intuición.
            </p>
            <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
              <p className="text-stone-300 text-sm">
                <strong className="text-primary-400">Caso famoso:</strong> New Coke (1985) - Coca-Cola cambió su fórmula 
                basándose en investigación de sabor, pero ignoró el vínculo emocional. Resultó en desastre épico y retorno 
                a fórmula original en 79 días.
              </p>
            </div>
          </div>

          {/* Interactive Research Process */}
          <div className="mb-12">
            <h3 className="text-2xl text-white mb-6">El Proceso de Investigación (5 pasos)</h3>
            <p className="text-stone-400 mb-6">
              <span className="text-primary-400">Haz clic en cada paso para ver detalles:</span>
            </p>

            <div className="grid md:grid-cols-5 gap-3 mb-6">
              {researchProcess.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`relative p-4 rounded-xl transition-all duration-300 border-2 ${
                    activeStep === i
                      ? "bg-gradient-to-br from-primary-500/20 to-accent-500/20 border-primary-500 scale-105"
                      : "bg-stone-800/30 border-stone-700/50 hover:border-stone-600"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center ${
                    activeStep === i ? "bg-primary-500/20" : "bg-stone-900/50"
                  }`}>
                    {(() => {
                      const IconComponent = item.icon;
                      return <IconComponent className={`w-5 h-5 ${activeStep === i ? "text-primary-400" : "text-stone-500"}`} />;
                    })()}
                  </div>
                  <div className={`text-xs text-center leading-tight ${
                    activeStep === i ? "text-white" : "text-stone-400"
                  }`}>
                    Paso {item.step}
                  </div>
                  {activeStep === i && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-500 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center">
                    {(() => {
                      const IconComponent = researchProcess[activeStep].icon;
                      return <IconComponent className="w-8 h-8 text-primary-400" />;
                    })()}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-stone-500 mb-1">Paso {researchProcess[activeStep].step} de 5</div>
                    <h4 className="text-2xl text-white mb-3">{researchProcess[activeStep].title}</h4>
                    <p className="text-stone-300 mb-4">{researchProcess[activeStep].desc}</p>
                    <p className="text-stone-400 text-sm mb-4 leading-relaxed">{researchProcess[activeStep].detail}</p>
                    <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
                      <div className="text-xs text-primary-400 mb-1">Ejemplo práctico:</div>
                      <div className="text-stone-300 text-sm">{researchProcess[activeStep].example}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Data Types Toggle */}
          <div className="mb-12">
            <h3 className="text-2xl text-white mb-6">Fuentes de Datos</h3>
            <div className="flex gap-3 mb-6">
              {(["primaria", "secundaria"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveDataType(type)}
                  className={`flex-1 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeDataType === type
                      ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                      : "bg-stone-800/30 text-stone-400 hover:bg-stone-800/50 border border-stone-700/50"
                  }`}
                >
                  <span className="mr-2">{dataTypes[type].icon}</span>
                  {dataTypes[type].title}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDataType}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8"
              >
                <div className="text-center mb-6">
                  <span className="text-5xl">{dataTypes[activeDataType].icon}</span>
                  <h4 className="text-2xl text-white mt-3 mb-2">{dataTypes[activeDataType].title}</h4>
                  <p className="text-stone-400">{dataTypes[activeDataType].desc}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {dataTypes[activeDataType].characteristics.map((char, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-stone-900/50 rounded-lg p-4 flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      <span className="text-stone-300 text-sm">{char}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-stone-900/50 rounded-xl p-6">
                    <div className="text-sm text-stone-500 mb-3">Fuentes comunes:</div>
                    <ul className="space-y-2">
                      {dataTypes[activeDataType].sources.map((source, i) => (
                        <li key={i} className="text-stone-300 text-sm flex items-start gap-2">
                          <span className="text-primary-400 mt-0.5">•</span>
                          {source}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-stone-900/50 rounded-xl p-6">
                    <div className="text-sm text-stone-500 mb-3">Cuándo usar:</div>
                    <p className="text-stone-300 text-sm mb-4">{dataTypes[activeDataType].when}</p>
                    <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-3">
                      <div className="text-xs text-primary-400 mb-1">Ejemplo:</div>
                      <div className="text-stone-300 text-sm">{dataTypes[activeDataType].example}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Research Methods Comparison */}
          <div>
            <h3 className="text-2xl text-white mb-6">Métodos de Investigación</h3>
            <p className="text-stone-400 mb-6">
              <span className="text-primary-400">Compara las dos aproximaciones principales:</span>
            </p>

            <div className="flex gap-3 mb-6">
              {(["cuantitativa", "cualitativa"] as const).map((method) => (
                <button
                  key={method}
                  onClick={() => setSelectedMethod(method)}
                  className={`flex-1 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    selectedMethod === method
                      ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                      : "bg-stone-800/30 text-stone-400 hover:bg-stone-800/50 border border-stone-700/50"
                  }`}
                >
                  <span className="mr-2">{researchMethods[method].icon}</span>
                  {researchMethods[method].title}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMethod}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 mb-6">
                  <div className="text-center mb-6">
                    <span className="text-5xl">{researchMethods[selectedMethod].icon}</span>
                    <h4 className="text-2xl text-white mt-3 mb-2">{researchMethods[selectedMethod].title}</h4>
                    <p className="text-stone-400">{researchMethods[selectedMethod].desc}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {researchMethods[selectedMethod].methods.map((method, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-stone-800/50 border border-stone-700/50 rounded-xl p-6"
                    >
                      <h5 className="text-white text-xl mb-2">{method.name}</h5>
                      <p className="text-stone-400 mb-4">{method.desc}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                          <div className="text-green-400 text-sm mb-2">✓ Ventajas</div>
                          <ul className="space-y-1">
                            {method.pros.map((pro, j) => (
                              <li key={j} className="text-stone-300 text-xs flex items-start gap-2">
                                <span className="text-green-400 mt-0.5">•</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                          <div className="text-red-400 text-sm mb-2">✗ Desventajas</div>
                          <ul className="space-y-1">
                            {method.cons.map((con, j) => (
                              <li key={j} className="text-stone-300 text-xs flex items-start gap-2">
                                <span className="text-red-400 mt-0.5">•</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
                        <div className="text-xs text-primary-400 mb-1">Aplicación real:</div>
                        <div className="text-stone-300 text-sm">{method.example}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
