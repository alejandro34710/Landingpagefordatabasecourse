import { useState } from "react";
import { motion } from "motion/react";
import { Database, Zap, Box, Cloud } from "lucide-react";

export function DatabaseComparison() {
  const [selectedDB, setSelectedDB] = useState(0);

  const databases = [
    {
      icon: Database,
      name: "MySQL",
      type: "Relacional",
      color: "from-blue-500 to-cyan-500",
      features: ["ACID compliant", "Alta confiabilidad", "Open source", "Gran comunidad"],
      useCases: ["Aplicaciones web", "E-commerce", "Sistemas empresariales"],
      performance: 85,
      scalability: 75,
      easiness: 90,
    },
    {
      icon: Zap,
      name: "PostgreSQL",
      type: "Relacional",
      color: "from-indigo-500 to-blue-500",
      features: ["Extensible", "JSON support", "Queries complejas", "ACID compliant"],
      useCases: ["Aplicaciones complejas", "Analytics", "GIS"],
      performance: 90,
      scalability: 85,
      easiness: 75,
    },
    {
      icon: Box,
      name: "MongoDB",
      type: "NoSQL",
      color: "from-green-500 to-emerald-500",
      features: ["Documentos JSON", "Escalabilidad horizontal", "Flexible schema", "Alto rendimiento"],
      useCases: ["Apps en tiempo real", "Big Data", "IoT"],
      performance: 95,
      scalability: 95,
      easiness: 85,
    },
    {
      icon: Cloud,
      name: "Redis",
      type: "In-Memory",
      color: "from-red-500 to-orange-500",
      features: ["Ultra rápido", "Caché", "Pub/Sub", "Estructuras de datos"],
      useCases: ["Caché", "Sessions", "Real-time analytics"],
      performance: 100,
      scalability: 90,
      easiness: 80,
    },
  ];

  const db = databases[selectedDB];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Explora Diferentes SGBD
          </h2>
          <p className="text-xl text-slate-400">
            Aprende las características y casos de uso de los sistemas más populares
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Database Selector */}
          <div className="lg:col-span-1 space-y-3">
            {databases.map((database, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedDB(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                  selectedDB === index
                    ? "bg-slate-800 border-blue-500"
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${database.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <database.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white">{database.name}</div>
                    <div className="text-sm text-slate-400">{database.type}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Database Details */}
          <motion.div
            key={selectedDB}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${db.color} rounded-xl flex items-center justify-center`}>
                  <db.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">{db.name}</h3>
                  <p className="text-slate-400">{db.type}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white mb-3">Características Principales</h4>
                <div className="grid grid-cols-2 gap-2">
                  {db.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300">
                      <div className={`w-2 h-2 bg-gradient-to-r ${db.color} rounded-full`}></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-6">
                <h4 className="text-white mb-3">Casos de Uso</h4>
                <div className="flex flex-wrap gap-2">
                  {db.useCases.map((useCase, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                <h4 className="text-white mb-3">Métricas de Rendimiento</h4>
                
                {[
                  { label: "Performance", value: db.performance },
                  { label: "Escalabilidad", value: db.scalability },
                  { label: "Facilidad de Uso", value: db.easiness },
                ].map((metric, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">{metric.label}</span>
                      <span className="text-white">{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.value}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className={`h-full bg-gradient-to-r ${db.color}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
