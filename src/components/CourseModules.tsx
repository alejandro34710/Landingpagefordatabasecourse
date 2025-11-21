import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, PlayCircle, FileText, CheckCircle } from "lucide-react";

export function CourseModules() {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  const modules = [
    {
      title: "Fundamentos de Bases de Datos",
      duration: "2.5 horas",
      lessons: 8,
      topics: [
        "Introducción a los Sistemas de Bases de Datos",
        "Modelos de Datos: Relacional, NoSQL, Jerárquico",
        "Arquitectura de SGBD",
        "Conceptos de transacciones y ACID",
      ],
    },
    {
      title: "Diseño de Bases de Datos",
      duration: "3 horas",
      lessons: 10,
      topics: [
        "Modelo Entidad-Relación (ER)",
        "Normalización: 1FN, 2FN, 3FN, BCNF",
        "Diseño Lógico y Físico",
        "Casos de estudio y mejores prácticas",
      ],
    },
    {
      title: "SQL Avanzado",
      duration: "4 horas",
      lessons: 12,
      topics: [
        "Consultas complejas y subconsultas",
        "Joins: INNER, OUTER, CROSS",
        "Funciones de ventana y CTEs",
        "Optimización de queries",
      ],
    },
    {
      title: "Administración y Optimización",
      duration: "2.5 horas",
      lessons: 8,
      topics: [
        "Índices y su impacto en rendimiento",
        "Planes de ejecución y análisis",
        "Backup y recuperación",
        "Seguridad y control de acceso",
      ],
    },
  ];

  return (
    <section className="py-24 bg-slate-950/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Contenido del Curso
          </h2>
          <p className="text-xl text-slate-400">
            4 módulos completos con más de 12 horas de contenido práctico
          </p>
        </motion.div>

        <div className="space-y-4">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-white text-lg">{module.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <PlayCircle className="w-4 h-4" />
                        {module.lessons} lecciones
                      </span>
                      <span>{module.duration}</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedModule === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-slate-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedModule === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-slate-800">
                      <div className="pt-5 space-y-3">
                        {module.topics.map((topic, topicIndex) => (
                          <motion.div
                            key={topicIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: topicIndex * 0.05 }}
                            className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors cursor-pointer group"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span>{topic}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all transform hover:scale-105">
            Ver Temario Completo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
