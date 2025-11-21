import { useState } from "react";
import { motion } from "motion/react";
import { Trophy, BookOpen, Code, CheckCircle, ArrowRight } from "lucide-react";

interface FinalPracticeDBProps {
  onNextCourse: () => void;
}

export function FinalPracticeDB({ onNextCourse }: FinalPracticeDBProps) {
  const [completedTopics, setCompletedTopics] = useState<number[]>([]);

  const topics = [
    { id: 1, title: "Conceptos Fundamentales", icon: BookOpen },
    { id: 2, title: "Modelo ER", icon: BookOpen },
    { id: 3, title: "SQL Básico", icon: Code },
    { id: 4, title: "Normalización", icon: BookOpen },
    { id: 5, title: "Tipos de BD", icon: BookOpen },
    { id: 6, title: "Índices", icon: Code },
    { id: 7, title: "Transacciones ACID", icon: BookOpen },
    { id: 8, title: "SQL Avanzado", icon: Code },
    { id: 9, title: "SQL vs NoSQL", icon: BookOpen },
  ];

  const exercises = [
    {
      title: "Ejercicio 1: Diseño de Base de Datos",
      description: "Diseña un modelo ER para un sistema de biblioteca universitaria que incluya estudiantes, libros, préstamos y reservas.",
      difficulty: "Intermedio"
    },
    {
      title: "Ejercicio 2: Normalización",
      description: "Normaliza la siguiente tabla hasta 3FN: Pedidos(pedido_id, cliente, dirección_cliente, producto, precio, cantidad)",
      difficulty: "Intermedio"
    },
    {
      title: "Ejercicio 3: Consultas SQL",
      description: "Escribe una consulta que muestre los 5 productos más vendidos junto con sus categorías y el total de ventas.",
      difficulty: "Avanzado"
    },
    {
      title: "Ejercicio 4: Optimización",
      description: "Identifica qué índices crear para optimizar estas consultas frecuentes en tu aplicación.",
      difficulty: "Avanzado"
    }
  ];

  const resources = [
    {
      category: "Documentación Oficial",
      items: ["MySQL Documentation", "PostgreSQL Manual", "MongoDB Docs"]
    },
    {
      category: "Herramientas",
      items: ["MySQL Workbench", "pgAdmin", "DBeaver", "DataGrip"]
    },
    {
      category: "Práctica Online",
      items: ["SQLZoo", "LeetCode Database", "HackerRank SQL"]
    }
  ];

  const toggleTopic = (id: number) => {
    setCompletedTopics(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const progress = (completedTopics.length / topics.length) * 100;

  return (
    <section id="section-10" className="min-h-screen flex items-center justify-center py-24 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 mb-6">
            Lección 10 de 10
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            ¡Felicitaciones! 🎉
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Has completado el curso de Bases de Datos. Ahora es momento de practicar 
            y aplicar todo lo aprendido en proyectos reales.
          </p>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8 mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Trophy className="w-10 h-10 text-yellow-400" />
              <div>
                <h3 className="text-2xl text-white">Tu Progreso</h3>
                <p className="text-slate-400">Marca los temas que dominas</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl text-white">{completedTopics.length}/{topics.length}</div>
              <div className="text-sm text-slate-400">Completado</div>
            </div>
          </div>

          <div className="h-4 bg-slate-800 rounded-full overflow-hidden mb-6">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => toggleTopic(topic.id)}
                className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                  completedTopics.includes(topic.id)
                    ? "bg-green-500/20 border-green-500"
                    : "bg-slate-900 border-slate-800 hover:border-slate-700"
                }`}
              >
                {completedTopics.includes(topic.id) ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <topic.icon className="w-5 h-5 text-slate-500" />
                )}
                <span className={`text-sm ${
                  completedTopics.includes(topic.id) ? "text-white" : "text-slate-400"
                }`}>
                  {topic.title}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Exercises Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl text-white mb-6">Ejercicios Prácticos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {exercises.map((exercise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-white">{exercise.title}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    exercise.difficulty === "Intermedio"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }`}>
                    {exercise.difficulty}
                  </span>
                </div>
                <p className="text-slate-400 text-sm">{exercise.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl text-white mb-6">Recursos para Continuar Aprendiendo</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index}>
                <h4 className="text-white mb-3">{resource.category}</h4>
                <ul className="space-y-2">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8 mb-8">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h4 className="text-2xl text-white mb-3">¡Has completado el curso!</h4>
            <p className="text-slate-400 max-w-2xl mb-6">
              Ahora tienes los fundamentos sólidos para diseñar, implementar y optimizar 
              bases de datos profesionales. La práctica constante es clave para dominar estas habilidades.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
                #BaseDeDatos
              </span>
              <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                #SQL
              </span>
              <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm">
                #IngenieríaDeSistemas
              </span>
            </div>
          </div>

          {/* Next Course Button */}
          <motion.button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setTimeout(() => onNextCourse(), 500);
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all"
          >
            <div className="flex items-center gap-3">
              <div>
                <div className="text-sm text-green-100">Siguiente Curso</div>
                <div className="text-xl">Algoritmos y Estructuras de Datos</div>
              </div>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
