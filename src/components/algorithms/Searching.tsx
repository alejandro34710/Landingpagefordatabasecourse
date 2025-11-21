import { motion } from "motion/react";

export function Searching() {
  return (
    <section id="section-8" className="min-h-screen flex items-center justify-center py-24 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 mb-6">Lección 8 de 10</div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">Algoritmos de Búsqueda</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">Encuentra elementos eficientemente en diferentes estructuras de datos.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl text-white mb-4">Búsqueda Lineal</h3>
            <div className="text-yellow-400 text-3xl mb-4">O(n)</div>
            <p className="text-slate-400 mb-6">Recorre cada elemento hasta encontrar el objetivo. Simple pero ineficiente.</p>
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-4"><pre className="text-green-400 font-mono text-sm"><code>{`function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`}</code></pre></div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl text-white mb-4">Búsqueda Binaria</h3>
            <div className="text-green-400 text-3xl mb-4">O(log n)</div>
            <p className="text-slate-400 mb-6">Divide y conquista en arrays ordenados. Muy eficiente.</p>
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-4"><pre className="text-green-400 font-mono text-sm"><code>{`function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`}</code></pre></div>
          </div>
        </div>

        <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
          <h4 className="text-blue-400 mb-3">💡 Requisito de Búsqueda Binaria</h4>
          <p className="text-slate-300">El array DEBE estar ordenado. Si no lo está, el costo de ordenar (O(n log n)) + búsqueda (O(log n)) puede ser mayor que una búsqueda lineal simple.</p>
        </div>
      </div>
    </section>
  );
}
