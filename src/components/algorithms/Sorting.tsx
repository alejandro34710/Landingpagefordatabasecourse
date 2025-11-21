import { useState } from "react";
import { motion } from "motion/react";

export function Sorting() {
  const [selectedAlgo, setSelectedAlgo] = useState(0);
  const algorithms = [
    { name: "Bubble Sort", complexity: "O(n²)", stable: "Sí", use: "Educativo" },
    { name: "Quick Sort", complexity: "O(n log n)", stable: "No", use: "General" },
    { name: "Merge Sort", complexity: "O(n log n)", stable: "Sí", use: "Estable" },
    { name: "Heap Sort", complexity: "O(n log n)", stable: "No", use: "In-place" }
  ];

  return (
    <section id="section-7" className="min-h-screen flex items-center justify-center py-24 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 mb-6">Lección 7 de 10</div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">Algoritmos de Ordenamiento</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">Ordenar datos es fundamental. Conoce los principales algoritmos y cuándo usar cada uno.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {algorithms.map((algo, idx) => (
            <button key={idx} onClick={() => setSelectedAlgo(idx)} className={`p-4 rounded-xl border-2 transition-all ${selectedAlgo === idx ? "bg-orange-500/20 border-orange-500" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}>
              <div className="text-white mb-2">{algo.name}</div>
              <div className="text-sm text-slate-400">{algo.complexity}</div>
            </button>
          ))}
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">Comparación</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400">Algoritmo</th>
                  <th className="text-left py-3 px-4 text-slate-400">Mejor caso</th>
                  <th className="text-left py-3 px-4 text-slate-400">Promedio</th>
                  <th className="text-left py-3 px-4 text-slate-400">Peor caso</th>
                  <th className="text-left py-3 px-4 text-slate-400">Estable</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800"><td className="py-3 px-4 text-white">Bubble Sort</td><td className="py-3 px-4 text-green-400">O(n)</td><td className="py-3 px-4 text-red-400">O(n²)</td><td className="py-3 px-4 text-red-400">O(n²)</td><td className="py-3 px-4 text-green-400">Sí</td></tr>
                <tr className="border-b border-slate-800"><td className="py-3 px-4 text-white">Quick Sort</td><td className="py-3 px-4 text-green-400">O(n log n)</td><td className="py-3 px-4 text-green-400">O(n log n)</td><td className="py-3 px-4 text-red-400">O(n²)</td><td className="py-3 px-4 text-red-400">No</td></tr>
                <tr className="border-b border-slate-800"><td className="py-3 px-4 text-white">Merge Sort</td><td className="py-3 px-4 text-green-400">O(n log n)</td><td className="py-3 px-4 text-green-400">O(n log n)</td><td className="py-3 px-4 text-green-400">O(n log n)</td><td className="py-3 px-4 text-green-400">Sí</td></tr>
                <tr><td className="py-3 px-4 text-white">Heap Sort</td><td className="py-3 px-4 text-green-400">O(n log n)</td><td className="py-3 px-4 text-green-400">O(n log n)</td><td className="py-3 px-4 text-green-400">O(n log n)</td><td className="py-3 px-4 text-red-400">No</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
