import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TrendingUp, Clock, HardDrive } from "lucide-react";

export function BigONotation() {
  const [selectedComplexity, setSelectedComplexity] = useState(0);

  const complexities = [
    {
      notation: "O(1)",
      name: "Constante",
      color: "from-green-500 to-emerald-500",
      description: "El tiempo de ejecución es constante, independiente del tamaño de entrada",
      example: "Acceder a un elemento de un array por índice",
      code: `function getElement(arr, index) {
  return arr[index]; // Siempre toma el mismo tiempo
}`,
      performance: 100
    },
    {
      notation: "O(log n)",
      name: "Logarítmica",
      color: "from-cyan-500 to-blue-500",
      description: "El tiempo crece logarítmicamente con el tamaño de entrada",
      example: "Búsqueda binaria en un array ordenado",
      code: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
      performance: 85
    },
    {
      notation: "O(n)",
      name: "Lineal",
      color: "from-blue-500 to-indigo-500",
      description: "El tiempo crece linealmente con el tamaño de entrada",
      example: "Recorrer todos los elementos de un array",
      code: `function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}`,
      performance: 60
    },
    {
      notation: "O(n log n)",
      name: "Lineal-logarítmica",
      color: "from-yellow-500 to-orange-500",
      description: "Típico de algoritmos de ordenamiento eficientes",
      example: "MergeSort, QuickSort (promedio)",
      code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}`,
      performance: 45
    },
    {
      notation: "O(n²)",
      name: "Cuadrática",
      color: "from-orange-500 to-red-500",
      description: "Bucles anidados, crece cuadráticamente",
      example: "Bubble Sort, Selection Sort",
      code: `function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}`,
      performance: 20
    },
    {
      notation: "O(2ⁿ)",
      name: "Exponencial",
      color: "from-red-500 to-pink-500",
      description: "Crece exponencialmente, muy ineficiente",
      example: "Fibonacci recursivo sin memoización",
      code: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
  // Cada llamada genera dos más
}`,
      performance: 5
    }
  ];

  const complexity = complexities[selectedComplexity];

  return (
    <section id="section-2" className="min-h-screen flex items-center justify-center py-24 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 mb-6">
            Lección 2 de 10
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Notación Big O
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            La notación Big O describe la complejidad temporal y espacial de un algoritmo. 
            Es fundamental para analizar y comparar la eficiencia de diferentes soluciones.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {complexities.map((c, index) => (
            <button
              key={index}
              onClick={() => setSelectedComplexity(index)}
              className={`px-6 py-3 rounded-lg border-2 transition-all ${
                selectedComplexity === index
                  ? `bg-gradient-to-r ${c.color} border-transparent text-white`
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
              }`}
            >
              {c.notation}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedComplexity}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
          >
            <div className={`bg-gradient-to-r ${complexity.color} p-8`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-white/80 text-sm mb-1">Complejidad {complexity.name}</div>
                  <h3 className="text-4xl text-white">{complexity.notation}</h3>
                </div>
                <TrendingUp className="w-12 h-12 text-white/80" />
              </div>
              <p className="text-white/90">{complexity.description}</p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-white">Ejemplo práctico</span>
                  </div>
                  <div className="bg-slate-950 border border-slate-700 rounded-lg p-4 mb-4">
                    <p className="text-slate-300">{complexity.example}</p>
                  </div>

                  <div className="mb-4">
                    <div className="text-slate-400 text-sm mb-2">Rendimiento relativo</div>
                    <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${complexity.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${complexity.performance}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                    <div className="text-right text-sm text-slate-500 mt-1">
                      {complexity.performance}% eficiencia
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-white mb-3">Código de ejemplo</div>
                  <div className="bg-slate-950 border border-slate-700 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 font-mono text-sm">
                      <code>{complexity.code}</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <div className="text-yellow-400 mb-2">⚡ Tip de optimización</div>
                <p className="text-slate-300 text-sm">
                  {selectedComplexity === 5 && "Usa memoización o programación dinámica para reducir a O(n)"}
                  {selectedComplexity === 4 && "Considera algoritmos O(n log n) como MergeSort o QuickSort"}
                  {selectedComplexity === 3 && "Excelente complejidad para ordenamiento, difícil de mejorar"}
                  {selectedComplexity === 2 && "Aceptable para la mayoría de casos, considera optimizar con índices"}
                  {selectedComplexity === 1 && "Muy eficiente, ideal para búsquedas en grandes volúmenes"}
                  {selectedComplexity === 0 && "Óptimo, el mejor caso posible para acceso a datos"}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl text-white mb-6 text-center">Comparación visual</h3>
          <div className="text-center text-sm text-slate-400 mb-4">
            Para n = 1,000 elementos, número aproximado de operaciones:
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { notation: "O(1)", ops: "1", color: "green" },
              { notation: "O(log n)", ops: "~10", color: "cyan" },
              { notation: "O(n)", ops: "1,000", color: "blue" },
              { notation: "O(n log n)", ops: "~10,000", color: "yellow" },
              { notation: "O(n²)", ops: "1,000,000", color: "orange" },
              { notation: "O(2ⁿ)", ops: "~10³⁰⁰", color: "red" }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-950 rounded-lg p-4">
                <div className={`text-${item.color}-400 mb-1`}>{item.notation}</div>
                <div className="text-2xl text-white mb-1">{item.ops}</div>
                <div className="text-xs text-slate-500">operaciones</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
