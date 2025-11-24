import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LayoutDashboard, Package, Zap, Award, ChevronRight, Info, TrendingUp } from "lucide-react";

export function Topic1() {
  const [activeLevel, setActiveLevel] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState<string | null>("conveniencia");
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  const productLevels = [
    {
      level: "Producto Básico",
      icon: "🎯",
      desc: "El beneficio central que el cliente realmente compra",
      color: "blue",
      detail: "No compras un iPhone, compras comunicación y estatus. No compras un taladro, compras un agujero en la pared.",
      example: "Hotel → descanso y dormir",
      keyPoint: "Pregunta clave: ¿Qué está realmente comprando el cliente?"
    },
    {
      level: "Producto Real",
      icon: "📦",
      desc: "Características tangibles: diseño, calidad, marca, empaque",
      color: "purple",
      detail: "Es donde ocurre la diferenciación competitiva. Incluye nivel de calidad, características, diseño, nombre de marca y empaque.",
      example: "Hotel → cama king, WiFi 5G, marca Marriott, lobby elegante",
      keyPoint: "Aquí se juega la batalla competitiva del mercado"
    },
    {
      level: "Producto Aumentado",
      icon: "✨",
      desc: "Servicios y beneficios adicionales que sorprenden",
      color: "green",
      detail: "Aquí se crea lealtad y se justifican precios premium. Son los extras que superan expectativas.",
      example: "Hotel → concierge 24/7, spa gratis, upgrade de habitación, puntos de lealtad",
      keyPoint: "La diferenciación que construye relaciones a largo plazo"
    }
  ];

  const productCategories = {
    conveniencia: {
      title: "Productos de Conveniencia",
      desc: "Compra frecuente, bajo esfuerzo, amplia distribución",
      examples: "Chicles, pan, periódico, agua embotellada",
      strategy: "Distribución intensiva, precio bajo, publicidad masiva",
      icon: "🛒"
    },
    comparacion: {
      title: "Productos de Compra Comparada",
      desc: "Cliente compara precio/calidad antes de comprar",
      examples: "Ropa, electrodomésticos, muebles, smartphones",
      strategy: "Vendedores capacitados, publicidad informativa, ubicaciones selectivas",
      icon: "🔍"
    },
    especialidad: {
      title: "Productos de Especialidad",
      desc: "Características únicas, esfuerzo especial de compra",
      examples: "Rolex, Ferrari, cirugía médica, diseñador",
      strategy: "Distribución exclusiva, precio premium, marca fuerte",
      icon: "💎"
    },
    nobuscados: {
      title: "Productos No Buscados",
      desc: "Cliente no conoce o no piensa en comprar",
      examples: "Seguros de vida, donaciones de sangre, enciclopedias",
      strategy: "Venta personal agresiva, publicidad persuasiva",
      icon: "🔔"
    }
  };

  const lifeCyclePhases = [
    {
      stage: "Introducción",
      sales: "Bajas",
      profit: "Negativas",
      strategy: "Crear conciencia",
      example: "Autos eléctricos en 2010",
      color: "blue",
      actions: ["Inversión alta en promoción", "Distribución selectiva", "Precio de descreme o penetración"]
    },
    {
      stage: "Crecimiento",
      sales: "Rápido crecimiento",
      profit: "Aumentan",
      strategy: "Maximizar cuota",
      example: "Tesla Model 3 en 2018",
      color: "green",
      actions: ["Mejorar producto", "Expandir distribución", "Reducir precio gradualmente"]
    },
    {
      stage: "Madurez",
      sales: "Pico y estabilización",
      profit: "Máximas",
      strategy: "Defender posición",
      example: "iPhone actual",
      color: "orange",
      actions: ["Modificar mercado/producto", "Diferenciación de marca", "Guerras de precio"]
    },
    {
      stage: "Declive",
      sales: "Caen",
      profit: "Bajas",
      strategy: "Cosechar o descontinuar",
      example: "iPod",
      color: "red",
      actions: ["Reducir costos", "Cosechar marca", "Descontinuar producto"]
    }
  ];

  return (
    <section id="topics" className="py-32 bg-stone-900/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <LayoutDashboard className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <div className="text-sm text-stone-500 uppercase tracking-wider font-medium">Tema 01</div>
              <h2 className="text-amber-50">Producto: Creando Valor</h2>
            </div>
          </div>

          {/* Interactive Product Levels */}
          <div className="mb-12">
            <h3 className="text-3xl text-white mb-6">Niveles del Producto</h3>
            <p className="text-stone-300 text-lg mb-8 leading-relaxed">
              Según <strong>Philip Kotler</strong>, los productos tienen tres niveles que los mercadólogos 
              deben entender para crear valor superior. <span className="text-primary-400">Haz clic en cada nivel:</span>
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {productLevels.map((level, index) => (
                <button
                  key={index}
                  onClick={() => setActiveLevel(index)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                    activeLevel === index
                      ? "bg-gradient-to-br from-primary-500/20 to-accent-500/20 border-primary-500 scale-105"
                      : "bg-stone-800/30 border-stone-700/50 hover:border-stone-600"
                  }`}
                >
                  <div className="text-3xl mb-2">{level.icon}</div>
                  <div className={`text-lg font-semibold mb-2 ${
                    activeLevel === index ? "text-amber-100" : "text-stone-300"
                  }`}>
                    {level.level}
                  </div>
                  <div className="text-sm text-stone-400">{level.desc}</div>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeLevel}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{productLevels[activeLevel].icon}</div>
                  <div className="flex-1">
                    <h4 className="text-2xl text-amber-100 mb-3">{productLevels[activeLevel].level}</h4>
                    <p className="text-stone-300 leading-relaxed mb-4">
                      {productLevels[activeLevel].detail}
                    </p>
                    <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4 mb-4">
                      <div className="text-sm text-primary-400 mb-1">Ejemplo práctico:</div>
                      <div className="text-stone-300">{productLevels[activeLevel].example}</div>
                    </div>
                    <div className="bg-accent-500/10 border border-accent-500/20 rounded-lg p-4">
                      <div className="text-sm text-accent-400 mb-1">💡 Punto clave:</div>
                      <div className="text-stone-300">{productLevels[activeLevel].keyPoint}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Product Classification Accordion */}
          <div className="mb-12">
            <h3 className="text-2xl text-white mb-6">Clasificación de Productos</h3>
            <div className="space-y-3">
              {Object.entries(productCategories).map(([key, category]) => (
                <motion.div
                  key={key}
                  className="bg-stone-800/30 border border-stone-700/50 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedCategory(expandedCategory === key ? null : key)}
                    className="w-full flex items-center justify-between p-5 hover:bg-stone-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{category.icon}</span>
                      <div className="text-left">
                        <div className="text-white font-semibold mb-1">{category.title}</div>
                        <div className="text-sm text-stone-400">{category.desc}</div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedCategory === key ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="w-5 h-5 text-stone-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedCategory === key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 border-t border-stone-700/30">
                          <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-stone-900/50 rounded-lg p-4">
                              <div className="text-xs text-stone-500 uppercase mb-2">Ejemplos</div>
                              <div className="text-stone-300">{category.examples}</div>
                            </div>
                            <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
                              <div className="text-xs text-primary-400 uppercase mb-2">Estrategia</div>
                              <div className="text-stone-300 text-sm">{category.strategy}</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interactive Product Life Cycle */}
          <div>
            <h3 className="text-2xl text-white mb-6">Ciclo de Vida del Producto (CVP)</h3>
            <div className="bg-stone-800/30 border border-stone-700/50 rounded-2xl p-8">
              <p className="text-stone-300 mb-6 leading-relaxed">
                Los productos atraviesan etapas predecibles desde su lanzamiento hasta su declive. 
                <span className="text-primary-400"> Pasa el cursor sobre cada etapa para ver más detalles.</span>
              </p>
              
              <div className="grid md:grid-cols-4 gap-4">
                {lifeCyclePhases.map((phase, i) => (
                  <motion.div
                    key={i}
                    onHoverStart={() => setHoveredPhase(i)}
                    onHoverEnd={() => setHoveredPhase(null)}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`bg-stone-900/50 rounded-lg p-4 border-l-4 border-${phase.color}-500 cursor-pointer transition-all duration-300 ${
                      hoveredPhase === i ? "shadow-lg shadow-primary-500/20" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-white font-semibold">{phase.stage}</div>
                      {hoveredPhase === i && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <Info className="w-4 h-4 text-primary-400" />
                        </motion.div>
                      )}
                    </div>
                    <div className="space-y-2 text-xs text-stone-400">
                      <div><strong>Ventas:</strong> {phase.sales}</div>
                      <div><strong>Utilidades:</strong> {phase.profit}</div>
                      <div><strong>Estrategia:</strong> {phase.strategy}</div>
                      <div className="text-primary-400 mt-2">Ej: {phase.example}</div>
                    </div>

                    <AnimatePresence>
                      {hoveredPhase === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-stone-700/50"
                        >
                          <div className="text-xs text-stone-500 mb-2">Acciones clave:</div>
                          <ul className="space-y-1">
                            {phase.actions.map((action, j) => (
                              <li key={j} className="text-xs text-stone-400 flex items-start gap-1">
                                <span className="text-primary-400">•</span>
                                <span>{action}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Brand Strategy */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 mt-8">
            <h3 className="text-2xl text-white mb-4">Estrategia de Marca</h3>
            <p className="text-stone-300 mb-6">
              Una <strong>marca</strong> es un nombre, término, diseño, símbolo o cualquier otra característica 
              que identifica los bienes o servicios de un vendedor. Las marcas fuertes generan lealtad y permiten 
              precios premium.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white mb-3">Valor de marca (Brand Equity)</h4>
                <ul className="space-y-2 text-sm text-stone-400">
                  {[
                    { label: "Reconocimiento", desc: "¿Los clientes conocen la marca?" },
                    { label: "Percepción", desc: "¿Qué piensan de ella?" },
                    { label: "Lealtad", desc: "¿Recompran consistentemente?" },
                    { label: "Asociaciones", desc: "¿Qué evoca la marca?" }
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-2 p-2 rounded hover:bg-purple-500/10 transition-colors"
                    >
                      <span className="text-purple-400 mt-1">•</span>
                      <span>
                        <strong className="text-stone-300">{item.label}:</strong> {item.desc}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="bg-stone-900/50 rounded-lg p-4">
                <h4 className="text-white mb-3">Caso: Apple</h4>
                <div className="space-y-2 text-sm text-stone-400">
                  <p><strong className="text-stone-300">Valor de marca:</strong> $263 mil millones (2023)</p>
                  <p><strong className="text-stone-300">Asociaciones:</strong> Innovación, diseño, simplicidad, estatus</p>
                  <p><strong className="text-stone-300">Resultado:</strong> Clientes pagan 30-50% más que competidores</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
