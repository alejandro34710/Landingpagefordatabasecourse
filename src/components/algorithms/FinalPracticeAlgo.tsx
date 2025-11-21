import { useState } from "react";
import { motion } from "motion/react";
import { Trophy, BookOpen, Code, CheckCircle, ArrowLeft } from "lucide-react";

interface FinalPracticeAlgoProps {
  onPreviousCourse: () => void;
}

export function FinalPracticeAlgo({ onPreviousCourse }: FinalPracticeAlgoProps) {
  const [completedTopics, setCompletedTopics] = useState<number[]>([]);

  const topics = [
    { id: 1, title: "Introducción a Algoritmos", icon: BookOpen },
    { id: 2, title: "Notación Big O", icon: BookOpen },
    { id: 3, title: "Arrays", icon: Code },
    { id: 4, title: "Listas Enlazadas", icon: Code },
    { id: 5, title: "Pilas y Colas", icon: Code },
    { id: 6, title: "Árboles", icon: Code },
    { id: 7, title: "Ordenamiento", icon: BookOpen },
    { id: 8, title: "Búsqueda", icon: BookOpen },
    { id: 9, title: "Grafos", icon: Code },
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 mb-6">Lección 10 de 10</div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">¡Felicitaciones! 🎉</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">Has completado el curso de Algoritmos y Estructuras de Datos.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Trophy className="w-10 h-10 text-yellow-400" />
              <div><h3 className="text-2xl text-white">Tu Progreso</h3><p className="text-slate-400">Marca los temas que dominas</p></div>
            </div>
            <div className="text-right"><div className="text-3xl text-white">{completedTopics.length}/{topics.length}</div><div className="text-sm text-slate-400">Completado</div></div>
          </div>

          <div className="h-4 bg-slate-800 rounded-full overflow-hidden mb-6">
            <motion.div className="h-full bg-gradient-to-r from-green-500 to-emerald-600" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }} />
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {topics.map((topic) => (
              <button key={topic.id} onClick={() => toggleTopic(topic.id)} className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${completedTopics.includes(topic.id) ? "bg-green-500/20 border-green-500" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}>
                {completedTopics.includes(topic.id) ? <CheckCircle className="w-5 h-5 text-green-400" /> : <topic.icon className="w-5 h-5 text-slate-500" />}
                <span className={`text-sm ${completedTopics.includes(topic.id) ? "text-white" : "text-slate-400"}`}>{topic.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-8 mb-8">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h4 className="text-2xl text-white mb-3">¡Has completado ambos cursos!</h4>
            <p className="text-slate-400 max-w-2xl mb-6">Ahora dominas Bases de Datos y Algoritmos. Estás listo para enfrentar desafíos técnicos avanzados.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm">#Algoritmos</span>
              <span className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm">#EstructurasDeDatos</span>
              <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm">#IngenieríaDeSistemas</span>
            </div>
          </div>

          <motion.button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setTimeout(() => onPreviousCourse(), 500); }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all">
            <div className="flex items-center gap-3">
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
              <div><div className="text-sm text-blue-100">Volver al curso</div><div className="text-xl">Bases de Datos</div></div>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
