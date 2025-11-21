import { motion } from "motion/react";
import { Link, ArrowRight } from "lucide-react";

export function LinkedLists() {
  return (
    <section id="section-4" className="min-h-screen flex items-center justify-center py-24 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 mb-6">
            Lección 4 de 10
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Listas Enlazadas
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Estructura donde cada elemento apunta al siguiente. Eficiente para inserciones y eliminaciones.
          </p>
        </motion.div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-center gap-4 mb-8">
            {[10, 20, 30, 40].map((val, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-4">
                  <div className="text-white">{val}</div>
                </div>
                {idx < 3 && <ArrowRight className="w-6 h-6 text-blue-400" />}
              </div>
            ))}
          </div>

          <div className="bg-slate-950 border border-slate-700 rounded-xl p-6">
            <pre className="text-green-400 font-mono text-sm overflow-x-auto">
              <code>{`class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insertar al inicio O(1)
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Buscar O(n)
  search(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }
}`}</code>
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h4 className="text-white mb-3">Complejidades</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Insertar inicio: <span className="text-green-400">O(1)</span></li>
              <li>• Insertar fin: <span className="text-yellow-400">O(n)</span></li>
              <li>• Buscar: <span className="text-yellow-400">O(n)</span></li>
              <li>• Eliminar: <span className="text-yellow-400">O(n)</span></li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h4 className="text-white mb-3">Ventajas</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>✓ Tamaño dinámico</li>
              <li>✓ Inserción/eliminación eficiente</li>
              <li>✓ No necesita realocar memoria</li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h4 className="text-white mb-3">Desventajas</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>✗ No acceso directo</li>
              <li>✗ Más memoria (punteros)</li>
              <li>✗ No cache-friendly</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
