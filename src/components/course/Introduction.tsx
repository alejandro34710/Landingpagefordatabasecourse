import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Target, Lightbulb, TrendingUp, ChevronDown, Clock, Users, Award } from "lucide-react";

export function Introduction() {
  const [expandedEra, setExpandedEra] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"concepto" | "evolucion" | "filosofia">("concepto");

  const objectives = [
    {
      icon: Target,
      title: "Dominar el Marketing Mix",
      description: "Comprender y aplicar las 4Ps (Producto, Precio, Plaza, Promoción) en situaciones reales"
    },
    {
      icon: Lightbulb,
      title: "Analizar mercados",
      description: "Identificar oportunidades mediante segmentación y análisis del comportamiento del consumidor"
    },
    {
      icon: TrendingUp,
      title: "Crear estrategias",
      description: "Desarrollar posicionamiento de marca y propuestas de valor diferenciadas"
    }
  ];

  const eras = [
    {
      period: "1900-1950",
      title: "Era de la Producción",
      short: "Si lo fabricas, se venderá",
      full: "Enfoque en eficiencia productiva, demanda superaba la oferta. Las empresas se centraban en producir en masa y reducir costos. El marketing era innecesario porque todo se vendía.",
      example: "Ford Model T: 'Cualquier color, siempre que sea negro'",
      icon: "🏭"
    },
    {
      period: "1950-1970",
      title: "Era de las Ventas",
      short: "Vender es la prioridad",
      full: "Aumento de competencia llevó a exceso de oferta. Las empresas necesitaban convencer activamente a los clientes. Énfasis en técnicas de venta agresiva y persuasión.",
      example: "Vendedores puerta a puerta, anuncios en TV masivos",
      icon: "📢"
    },
    {
      period: "1970-2000",
      title: "Era del Marketing",
      short: "El cliente es el rey",
      full: "Surge el concepto moderno de marketing. Investigación de mercados, segmentación, y enfoque en satisfacer necesidades del cliente mejor que la competencia.",
      example: "P&G segmenta por beneficios buscados (Tide, Cheer, Bold)",
      icon: "🎯"
    },
    {
      period: "2000-Hoy",
      title: "Era Digital",
      short: "Personalización y datos",
      full: "Marketing personalizado, data-driven, omnicanal. El cliente tiene control total y las marcas deben estar donde el cliente está. Marketing de contenidos y redes sociales.",
      example: "Amazon: 'Los clientes que compraron esto también...'",
      icon: "💻"
    }
  ];

  const fundamentals = {
    concepto: {
      title: "¿Qué es el Marketing?",
      content: (
        <div className="space-y-4">
          <p className="text-stone-300 leading-relaxed">
            El <span className="text-amber-400 font-semibold">marketing</span> es el proceso social y administrativo 
            mediante el cual individuos y grupos obtienen lo que necesitan y desean, creando e intercambiando 
            productos y valor con otros.
          </p>
          <div className="bg-stone-900/50 border border-amber-900/30 rounded-xl p-6">
            <h4 className="text-amber-100 mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary-400" />
              No es solo "vender"
            </h4>
            <p className="text-stone-400 text-sm">
              El marketing va mucho más allá de la publicidad y ventas. Se trata de entender profundamente 
              las necesidades del cliente, crear valor superior y construir relaciones rentables a largo plazo.
            </p>
          </div>
        </div>
      )
    },
    evolucion: {
      title: "Evolución del Marketing",
      content: (
        <div className="space-y-3">
          {eras.map((era, index) => (
            <motion.div
              key={index}
              className="bg-stone-900/50 border border-amber-900/30 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setExpandedEra(expandedEra === index ? null : index)}
                className="w-full flex items-center justify-between p-4 hover:bg-stone-800/50 transition-colors text-left"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-2xl">{era.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs text-primary-400 font-mono">{era.period}</span>
                      <span className="text-white font-medium">{era.title}</span>
                    </div>
                    <p className="text-sm text-stone-400">{era.short}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedEra === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-stone-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {expandedEra === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-2 border-t border-amber-900/20">
                      <p className="text-stone-300 text-sm mb-3 leading-relaxed">{era.full}</p>
                      <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-3">
                        <div className="text-xs text-primary-400 mb-1">Ejemplo histórico:</div>
                        <div className="text-sm text-stone-300">{era.example}</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      )
    },
    filosofia: {
      title: "Filosofía de Marketing",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              { 
                label: "Necesidad", 
                desc: "Estado de carencia percibida",
                example: "Hambre, sed, abrigo",
                color: "blue"
              },
              { 
                label: "Deseo", 
                desc: "Forma cultural de la necesidad",
                example: "Big Mac, Starbucks, Nike",
                color: "purple"
              },
              { 
                label: "Demanda", 
                desc: "Deseo + poder adquisitivo",
                example: "Querer y poder pagar Ferrari",
                color: "green"
              },
              { 
                label: "Valor", 
                desc: "Beneficios - Costos percibidos",
                example: "iPhone vale más que su costo",
                color: "orange"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-stone-900/50 border border-amber-900/30 rounded-xl p-4 cursor-pointer group"
              >
                <div className={`text-${item.color}-400 font-semibold mb-2`}>{item.label}</div>
                <p className="text-xs text-stone-400 mb-2">{item.desc}</p>
                <div className="text-xs text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  → {item.example}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-xl p-6">
            <h4 className="text-amber-100 mb-3">💡 Orientación al Cliente</h4>
            <p className="text-stone-300 text-sm">
              El marketing moderno se basa en conocer y satisfacer las necesidades del cliente 
              mejor que la competencia, de manera rentable. Empresas como Amazon, Apple y Zappos 
              han construido imperios sobre este principio.
            </p>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="intro" className="py-32 bg-gradient-to-b from-stone-950 to-stone-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <BookOpen className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <div className="text-sm text-stone-500 uppercase tracking-wider font-medium">Sección 01</div>
              <h2 className="text-amber-50">Introducción al Marketing</h2>
            </div>
          </div>

          {/* Interactive Tabs */}
          <div className="mb-8">
            <div className="flex gap-2 mb-6 bg-stone-900/50 p-1 rounded-xl border border-amber-900/30">
              {(["concepto", "evolucion", "filosofia"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                      : "text-stone-400 hover:text-stone-300 hover:bg-stone-800/50"
                  }`}
                >
                  {tab === "concepto" && "Concepto"}
                  {tab === "evolucion" && "Evolución"}
                  {tab === "filosofia" && "Filosofía"}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-stone-800/30 border border-stone-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl text-amber-50 mb-6">{fundamentals[activeTab].title}</h3>
                {fundamentals[activeTab].content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-2xl text-amber-50 mb-8">Objetivos de Aprendizaje</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {objectives.map((obj, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-stone-800/30 border border-stone-700/50 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <obj.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h4 className="text-lg text-amber-50 mb-2">{obj.title}</h4>
                  <p className="text-stone-400 text-sm">{obj.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
