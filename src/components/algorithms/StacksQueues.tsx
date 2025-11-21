import { motion } from "motion/react";
import { Layers, List } from "lucide-react";

export function StacksQueues() {
  return (
    <section id="section-5" className="min-h-screen flex items-center justify-center py-24 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 mb-6">
            Lección 5 de 10
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Pilas y Colas
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Estructuras LIFO (Last In First Out) y FIFO (First In First Out) fundamentales para algoritmos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl text-white">Stack (Pila) - LIFO</h3>
            </div>
            <div className="space-y-3 mb-6">
              {[3, 2, 1].map((val, idx) => (
                <div key={idx} className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-4 text-center text-white">
                  {val}
                </div>
              ))}
            </div>
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-4 mb-4">
              <pre className="text-green-400 font-mono text-xs">
{`stack.push(1);    // [1]
stack.push(2);    // [1, 2]
stack.push(3);    // [1, 2, 3]
stack.pop();      // 3 -> [1, 2]
stack.peek();     // 2`}
              </pre>
            </div>
            <p className="text-slate-400 text-sm">
              <strong className="text-white">Casos de uso:</strong> Deshacer/rehacer, navegación del browser, evaluación de expresiones
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <List className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl text-white">Queue (Cola) - FIFO</h3>
            </div>
            <div className="flex gap-3 mb-6">
              {[1, 2, 3].map((val, idx) => (
                <div key={idx} className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex-1 text-center text-white">
                  {val}
                </div>
              ))}
            </div>
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-4 mb-4">
              <pre className="text-green-400 font-mono text-xs">
{`queue.enqueue(1);  // [1]
queue.enqueue(2);  // [1, 2]
queue.enqueue(3);  // [1, 2, 3]
queue.dequeue();   // 1 -> [2, 3]
queue.peek();      // 2`}
              </pre>
            </div>
            <p className="text-slate-400 text-sm">
              <strong className="text-white">Casos de uso:</strong> Sistemas de impresión, manejo de tareas, BFS en grafos
            </p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-xl text-white mb-4">Complejidad de operaciones</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-blue-400 mb-3">Stack</div>
              <ul className="space-y-2 text-slate-300">
                <li>• Push: <span className="text-green-400">O(1)</span></li>
                <li>• Pop: <span className="text-green-400">O(1)</span></li>
                <li>• Peek: <span className="text-green-400">O(1)</span></li>
                <li>• Search: <span className="text-yellow-400">O(n)</span></li>
              </ul>
            </div>
            <div>
              <div className="text-green-400 mb-3">Queue</div>
              <ul className="space-y-2 text-slate-300">
                <li>• Enqueue: <span className="text-green-400">O(1)</span></li>
                <li>• Dequeue: <span className="text-green-400">O(1)</span></li>
                <li>• Peek: <span className="text-green-400">O(1)</span></li>
                <li>• Search: <span className="text-yellow-400">O(n)</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
