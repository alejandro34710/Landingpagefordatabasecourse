import { motion } from "motion/react";
import { List, Search, Plus, Trash2 } from "lucide-react";

export function Arrays() {
  const operations = [
    {
      icon: Search,
      name: "Acceso",
      complexity: "O(1)",
      description: "Acceso directo por índice",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Search,
      name: "Búsqueda",
      complexity: "O(n)",
      description: "Buscar un elemento",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Plus,
      name: "Inserción",
      complexity: "O(n)",
      description: "Insertar en posición específica",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Trash2,
      name: "Eliminación",
      complexity: "O(n)",
      description: "Eliminar elemento",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="section-3" className="min-h-screen flex items-center justify-center py-24 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 mb-6">
            Lección 3 de 10
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Arrays (Arreglos)
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            La estructura de datos más fundamental. Colección de elementos almacenados en posiciones contiguas de memoria.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {operations.map((op, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${op.color} rounded-lg flex items-center justify-center mb-4`}>
                <op.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-2">{op.name}</h3>
              <div className="text-2xl text-green-400 mb-2">{op.complexity}</div>
              <p className="text-sm text-slate-400">{op.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl text-white mb-6">Operaciones comunes</h3>
          <div className="bg-slate-950 border border-slate-700 rounded-xl p-6">
            <pre className="text-green-400 font-mono text-sm overflow-x-auto">
              <code>{`// Crear un array
const arr = [1, 2, 3, 4, 5];

// Acceso O(1)
console.log(arr[2]); // 3

// Insertar al final O(1)
arr.push(6); // [1, 2, 3, 4, 5, 6]

// Insertar al inicio O(n)
arr.unshift(0); // [0, 1, 2, 3, 4, 5, 6]

// Eliminar último O(1)
arr.pop(); // [0, 1, 2, 3, 4, 5]

// Eliminar primero O(n)
arr.shift(); // [1, 2, 3, 4, 5]

// Buscar elemento O(n)
arr.indexOf(3); // 2

// Iterar O(n)
arr.forEach(x => console.log(x));`}</code>
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
            <h4 className="text-green-400 mb-3">✓ Ventajas</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Acceso directo en O(1)</li>
              <li>• Caché eficiente (datos contiguos)</li>
              <li>• Simple de implementar</li>
              <li>• Bajo overhead de memoria</li>
            </ul>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
            <h4 className="text-red-400 mb-3">✗ Desventajas</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Tamaño fijo (en algunos lenguajes)</li>
              <li>• Inserción/eliminación costosa</li>
              <li>• Desperdicio de memoria si está vacío</li>
              <li>• No óptimo para búsquedas sin orden</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
