import { useState } from "react";
import { motion } from "motion/react";
import { Database, Layers, Box, Network } from "lucide-react";

export function DatabaseTypes() {
  const [hoveredType, setHoveredType] = useState<number | null>(null);

  const dbTypes = [
    {
      icon: Database,
      name: "Bases de Datos Relacionales",
      acronym: "RDBMS",
      description: "Organizan datos en tablas relacionadas mediante claves",
      color: "from-blue-500 to-cyan-500",
      characteristics: [
        "Estructura rígida (esquema fijo)",
        "Uso de SQL estándar",
        "ACID compliant",
        "Integridad referencial"
      ],
      examples: ["MySQL", "PostgreSQL", "Oracle", "SQL Server"],
      useCases: "Sistemas transaccionales, ERP, aplicaciones empresariales"
    },
    {
      icon: Layers,
      name: "Bases de Datos NoSQL",
      acronym: "NoSQL",
      description: "Diseñadas para datos no estructurados o semi-estructurados",
      color: "from-green-500 to-emerald-500",
      characteristics: [
        "Esquema flexible",
        "Escalabilidad horizontal",
        "Alto rendimiento",
        "Modelos variados"
      ],
      examples: ["MongoDB", "Cassandra", "CouchDB", "Redis"],
      useCases: "Big Data, aplicaciones en tiempo real, IoT, redes sociales"
    },
    {
      icon: Box,
      name: "Bases de Datos en Memoria",
      acronym: "In-Memory",
      description: "Almacenan datos en RAM para acceso ultrarrápido",
      color: "from-orange-500 to-red-500",
      characteristics: [
        "Velocidad extrema",
        "Baja latencia",
        "Datos volátiles",
        "Alto costo"
      ],
      examples: ["Redis", "Memcached", "SAP HANA"],
      useCases: "Caché, sesiones, análisis en tiempo real, gaming"
    },
    {
      icon: Network,
      name: "Bases de Datos Distribuidas",
      acronym: "Distributed",
      description: "Datos distribuidos en múltiples nodos o ubicaciones",
      color: "from-purple-500 to-pink-500",
      characteristics: [
        "Alta disponibilidad",
        "Tolerancia a fallos",
        "Replicación de datos",
        "Consistencia eventual"
      ],
      examples: ["Apache Cassandra", "Google Spanner", "CockroachDB"],
      useCases: "Aplicaciones globales, alta disponibilidad, grandes volúmenes"
    }
  ];

  return (
    <section id="section-5" className="min-h-screen flex items-center justify-center py-24 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 mb-6">
            Lección 5 de 10
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Tipos de Bases de Datos
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Existen diferentes tipos de bases de datos, cada una diseñada para resolver 
            problemas específicos. Conoce sus características y cuándo usar cada una.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {dbTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredType(index)}
              onHoverEnd={() => setHoveredType(null)}
              className="relative group"
            >
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 h-full hover:border-slate-700 transition-all">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">{type.acronym}</div>
                    <h3 className="text-xl text-white mb-2">{type.name}</h3>
                    <p className="text-sm text-slate-400">{type.description}</p>
                  </div>
                </div>

                {/* Characteristics */}
                <div className="mb-6">
                  <div className="text-white text-sm mb-3">Características:</div>
                  <div className="space-y-2">
                    {type.characteristics.map((char, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${type.color}`}></div>
                        <span>{char}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Examples */}
                <div className="mb-6">
                  <div className="text-white text-sm mb-3">Ejemplos:</div>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 bg-gradient-to-r ${type.color} bg-opacity-10 border border-slate-700 rounded-full text-xs text-slate-300`}
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                  <div className="text-white text-sm mb-2">Casos de Uso:</div>
                  <p className="text-slate-400 text-sm">{type.useCases}</p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredType === index ? 0.05 : 0 }}
                  className={`absolute inset-0 bg-gradient-to-br ${type.color} rounded-2xl pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-slate-900 border border-slate-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl text-white mb-6 text-center">¿Cómo elegir el tipo correcto?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-slate-950 rounded-lg p-4">
                <div className="text-blue-400 mb-2">✓ Usa RDBMS cuando:</div>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Necesitas transacciones ACID</li>
                  <li>• Datos estructurados y relaciones complejas</li>
                  <li>• Consultas SQL complejas</li>
                </ul>
              </div>
              <div className="bg-slate-950 rounded-lg p-4">
                <div className="text-green-400 mb-2">✓ Usa NoSQL cuando:</div>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Necesitas escalabilidad horizontal</li>
                  <li>• Datos no estructurados o variados</li>
                  <li>• Alta velocidad de escritura</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-950 rounded-lg p-4">
                <div className="text-orange-400 mb-2">✓ Usa In-Memory cuando:</div>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Necesitas latencia mínima</li>
                  <li>• Datos de sesión o caché</li>
                  <li>• Análisis en tiempo real</li>
                </ul>
              </div>
              <div className="bg-slate-950 rounded-lg p-4">
                <div className="text-purple-400 mb-2">✓ Usa Distribuidas cuando:</div>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Necesitas alta disponibilidad</li>
                  <li>• Aplicaciones globales</li>
                  <li>• Tolerancia a fallos crítica</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}