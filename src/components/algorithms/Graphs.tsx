import { motion } from "motion/react";

export function Graphs() {
  return (
    <section id="section-9" className="min-h-screen flex items-center justify-center py-24 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 mb-6">Lección 9 de 10</div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">Grafos</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">Conjunto de nodos (vértices) conectados por aristas. Modelan redes, relaciones y rutas.</p>
        </motion.div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8">
          <div className="flex justify-center mb-8">
            <svg width="400" height="200" viewBox="0 0 400 200">
              <line x1="100" y1="100" x2="200" y2="50" stroke="#3b82f6" strokeWidth="2" />
              <line x1="100" y1="100" x2="200" y2="150" stroke="#3b82f6" strokeWidth="2" />
              <line x1="200" y1="50" x2="300" y2="100" stroke="#3b82f6" strokeWidth="2" />
              <line x1="200" y1="150" x2="300" y2="100" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="100" cy="100" r="25" fill="#8b5cf6" />
              <text x="100" y="105" textAnchor="middle" fill="#fff">A</text>
              <circle cx="200" cy="50" r="25" fill="#8b5cf6" />
              <text x="200" y="55" textAnchor="middle" fill="#fff">B</text>
              <circle cx="200" cy="150" r="25" fill="#8b5cf6" />
              <text x="200" y="155" textAnchor="middle" fill="#fff">C</text>
              <circle cx="300" cy="100" r="25" fill="#8b5cf6" />
              <text x="300" y="105" textAnchor="middle" fill="#fff">D</text>
            </svg>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white mb-3">BFS (Breadth-First Search)</h4>
              <p className="text-slate-400 text-sm mb-3">Explora por niveles. Usa una cola.</p>
              <div className="bg-slate-950 rounded-lg p-3"><div className="text-blue-400 text-sm">Complejidad: O(V + E)</div><div className="text-slate-500 text-xs">V = vértices, E = aristas</div></div>
            </div>
            <div>
              <h4 className="text-white mb-3">DFS (Depth-First Search)</h4>
              <p className="text-slate-400 text-sm mb-3">Explora en profundidad. Usa una pila.</p>
              <div className="bg-slate-950 rounded-lg p-3"><div className="text-purple-400 text-sm">Complejidad: O(V + E)</div><div className="text-slate-500 text-xs">V = vértices, E = aristas</div></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h4 className="text-white mb-3">Casos de uso</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Redes sociales</li>
              <li>• GPS y mapas</li>
              <li>• Recomendaciones</li>
              <li>• Análisis de dependencias</li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h4 className="text-white mb-3">Algoritmos clásicos</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Dijkstra (ruta más corta)</li>
              <li>• Kruskal (árbol min)</li>
              <li>• Bellman-Ford</li>
              <li>• Floyd-Warshall</li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h4 className="text-white mb-3">Representación</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Lista de adyacencia</li>
              <li>• Matriz de adyacencia</li>
              <li>• Lista de aristas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
