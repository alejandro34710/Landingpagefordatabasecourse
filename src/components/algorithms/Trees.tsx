import { motion } from "motion/react";
import { GitBranch } from "lucide-react";

export function Trees() {
  return (
    <section id="section-6" className="min-h-screen flex items-center justify-center py-24 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 mb-6">Lección 6 de 10</div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">Árboles</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">Estructura jerárquica con nodos conectados. Los árboles binarios de búsqueda permiten operaciones eficientes.</p>
        </motion.div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8">
          <div className="flex justify-center mb-8">
            <svg width="400" height="200" viewBox="0 0 400 200">
              <circle cx="200" cy="30" r="20" fill="#3b82f6" />
              <text x="200" y="35" textAnchor="middle" fill="#fff" fontSize="14">10</text>
              <line x1="200" y1="50" x2="120" y2="90" stroke="#64748b" strokeWidth="2" />
              <line x1="200" y1="50" x2="280" y2="90" stroke="#64748b" strokeWidth="2" />
              <circle cx="120" cy="110" r="20" fill="#8b5cf6" />
              <text x="120" y="115" textAnchor="middle" fill="#fff" fontSize="14">5</text>
              <circle cx="280" cy="110" r="20" fill="#8b5cf6" />
              <text x="280" y="115" textAnchor="middle" fill="#fff" fontSize="14">15</text>
              <line x1="120" y1="130" x2="80" y2="170" stroke="#64748b" strokeWidth="2" />
              <line x1="120" y1="130" x2="160" y2="170" stroke="#64748b" strokeWidth="2" />
              <circle cx="80" cy="180" r="15" fill="#ec4899" />
              <text x="80" y="185" textAnchor="middle" fill="#fff" fontSize="12">3</text>
              <circle cx="160" cy="180" r="15" fill="#ec4899" />
              <text x="160" y="185" textAnchor="middle" fill="#fff" fontSize="12">7</text>
            </svg>
          </div>

          <div className="bg-slate-950 border border-slate-700 rounded-xl p-6">
            <pre className="text-green-400 font-mono text-sm overflow-x-auto"><code>{`class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Búsqueda en BST O(log n) promedio
function search(root, target) {
  if (!root) return false;
  if (root.value === target) return true;
  if (target < root.value) 
    return search(root.left, target);
  return search(root.right, target);
}`}</code></pre>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h4 className="text-white mb-3">Recorridos</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Inorden: Izq → Raíz → Der</li>
              <li>• Preorden: Raíz → Izq → Der</li>
              <li>• Postorden: Izq → Der → Raíz</li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h4 className="text-white mb-3">Complejidad BST</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Búsqueda: <span className="text-green-400">O(log n)</span></li>
              <li>• Inserción: <span className="text-green-400">O(log n)</span></li>
              <li>• Eliminación: <span className="text-green-400">O(log n)</span></li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h4 className="text-white mb-3">Casos de uso</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Bases de datos (índices)</li>
              <li>• File systems</li>
              <li>• Árboles de decisión</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
