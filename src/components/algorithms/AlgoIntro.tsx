import { motion } from "motion/react";
import { Binary, Zap, TrendingUp, Brain } from "lucide-react";

export function AlgoIntro() {
  const concepts = [
    {
      icon: Binary,
      title: "Algoritmo",
      description: "Secuencia finita de pasos para resolver un problema",
    },
    {
      icon: Brain,
      title: "Estructura de Datos",
      description: "Forma de organizar y almacenar datos eficientemente",
    },
    {
      icon: Zap,
      title: "Eficiencia",
      description: "Optimización de tiempo y espacio de ejecución",
    },
    {
      icon: TrendingUp,
      title: "Complejidad",
      description: "Análisis del rendimiento en diferentes escenarios",
    },
  ];

  return (
    <section id="section-1" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 mb-6">
            Lección 1 de 10
          </div>
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            Algoritmos y{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Estructuras de Datos
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Los algoritmos y estructuras de datos son la base de la programación eficiente. 
            Aprende a resolver problemas de manera óptima y a organizar información inteligentemente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <concept.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-2">{concept.title}</h3>
              <p className="text-sm text-slate-400">{concept.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl text-white mb-6">¿Por qué son importantes?</h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-white mb-2">1. Resolución eficiente de problemas</h4>
              <p className="text-slate-400">
                Los algoritmos correctos pueden reducir el tiempo de ejecución de horas a milisegundos. 
                La diferencia entre O(n²) y O(n log n) puede ser crucial en producción.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6">
              <h4 className="text-white mb-2">2. Optimización de recursos</h4>
              <p className="text-slate-400">
                Las estructuras de datos adecuadas optimizan el uso de memoria y CPU. 
                Un árbol balanceado es mucho más eficiente que una lista para búsquedas.
              </p>
            </div>

            <div className="border-l-4 border-cyan-500 pl-6">
              <h4 className="text-white mb-2">3. Entrevistas técnicas</h4>
              <p className="text-slate-400">
                La mayoría de empresas tech (Google, Meta, Amazon) evalúan estos conocimientos 
                en sus procesos de selección. Es fundamental para cualquier ingeniero.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-white mb-2">4. Base del desarrollo</h4>
              <p className="text-slate-400">
                Todo framework, librería o sistema que uses está construido sobre algoritmos 
                y estructuras de datos. Entenderlos te hace mejor desarrollador.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <h4 className="text-white mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Habilidades que desarrollarás
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-slate-300">
                <li>✓ Análisis de complejidad temporal y espacial</li>
                <li>✓ Diseño de algoritmos eficientes</li>
                <li>✓ Selección de estructura de datos óptima</li>
              </ul>
              <ul className="space-y-2 text-slate-300">
                <li>✓ Optimización de código existente</li>
                <li>✓ Resolución de problemas complejos</li>
                <li>✓ Pensamiento computacional avanzado</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6"
        >
          <div className="text-center">
            <h4 className="text-white mb-3">📊 Datos del mercado laboral</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl text-green-400 mb-1">85%</div>
                <div className="text-sm text-slate-400">De empresas tech evalúan algoritmos</div>
              </div>
              <div>
                <div className="text-3xl text-emerald-400 mb-1">+30%</div>
                <div className="text-sm text-slate-400">Salario promedio con estos skills</div>
              </div>
              <div>
                <div className="text-3xl text-cyan-400 mb-1">Top 3</div>
                <div className="text-sm text-slate-400">Habilidad más demandada</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
