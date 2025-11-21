import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Lock, RefreshCw, Database } from "lucide-react";

export function Transactions() {
  const [activeProperty, setActiveProperty] = useState(0);

  const acidProperties = [
    {
      letter: "A",
      name: "Atomicidad",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      description: "Todo o nada. Una transacción se ejecuta completamente o no se ejecuta en absoluto.",
      example: {
        scenario: "Transferencia bancaria: $100 de cuenta A a cuenta B",
        steps: [
          { action: "1. Restar $100 de cuenta A", status: "success" },
          { action: "2. Sumar $100 a cuenta B", status: "success" }
        ],
        result: "✓ Ambas operaciones se completan o ninguna"
      }
    },
    {
      letter: "C",
      name: "Consistencia",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      description: "Los datos deben pasar de un estado válido a otro estado válido, respetando todas las reglas.",
      example: {
        scenario: "Insertar un estudiante en un curso",
        steps: [
          { action: "1. Verificar que el estudiante existe", status: "success" },
          { action: "2. Verificar que el curso existe", status: "success" },
          { action: "3. Verificar restricciones (capacidad)", status: "success" }
        ],
        result: "✓ La BD mantiene todas las reglas de integridad"
      }
    },
    {
      letter: "I",
      name: "Aislamiento",
      icon: Lock,
      color: "from-purple-500 to-pink-500",
      description: "Las transacciones concurrentes se ejecutan como si fueran secuenciales, sin interferir entre sí.",
      example: {
        scenario: "Dos usuarios leen y modifican el mismo registro",
        steps: [
          { action: "Usuario 1: Lee saldo = $1000", status: "success" },
          { action: "Usuario 2: Lee saldo = $1000", status: "warning" },
          { action: "Usuario 1: Actualiza a $900 (−$100)", status: "success" }
        ],
        result: "✓ Usuario 2 debe ver el valor actualizado ($900)"
      }
    },
    {
      letter: "D",
      name: "Durabilidad",
      icon: RefreshCw,
      color: "from-orange-500 to-red-500",
      description: "Una vez que una transacción se confirma, los cambios son permanentes, incluso ante fallos.",
      example: {
        scenario: "Confirmar una venta en un e-commerce",
        steps: [
          { action: "1. Procesar pago", status: "success" },
          { action: "2. Actualizar inventario", status: "success" },
          { action: "3. COMMIT", status: "success" }
        ],
        result: "✓ Datos persisten incluso si el servidor se apaga"
      }
    }
  ];

  const property = acidProperties[activeProperty];

  return (
    <section id="section-7" className="min-h-screen flex items-center justify-center py-24 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 mb-6">
            Lección 7 de 10
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Transacciones y Propiedades ACID
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Las transacciones son unidades lógicas de trabajo que garantizan la integridad de los datos. 
            ACID define las propiedades que debe cumplir toda transacción confiable.
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {acidProperties.map((prop, index) => (
            <button
              key={index}
              onClick={() => setActiveProperty(index)}
              className={`p-6 rounded-xl border-2 transition-all ${
                activeProperty === index
                  ? `bg-gradient-to-br ${prop.color} border-transparent`
                  : "bg-slate-900 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className={`text-4xl mb-2 ${
                activeProperty === index ? "text-white" : "text-slate-500"
              }`}>
                {prop.letter}
              </div>
              <div className={`text-sm ${
                activeProperty === index ? "text-white" : "text-slate-400"
              }`}>
                {prop.name}
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeProperty}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
          >
            <div className={`bg-gradient-to-r ${property.color} p-8`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <property.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-white/80 text-sm">Propiedad ACID</div>
                  <h3 className="text-3xl text-white">{property.name}</h3>
                </div>
              </div>
              <p className="text-white/90 text-lg">{property.description}</p>
            </div>

            <div className="p-8">
              <h4 className="text-white mb-6">Ejemplo Práctico</h4>
              
              <div className="bg-slate-950 border border-slate-700 rounded-xl p-6 mb-6">
                <div className="text-blue-400 mb-4">📋 Escenario:</div>
                <p className="text-slate-300 mb-6">{property.example.scenario}</p>

                <div className="space-y-3 mb-6">
                  {property.example.steps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        step.status === "success"
                          ? "bg-green-500/10 border border-green-500/30"
                          : step.status === "warning"
                          ? "bg-yellow-500/10 border border-yellow-500/30"
                          : "bg-slate-800"
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.status === "success"
                          ? "bg-green-500"
                          : step.status === "warning"
                          ? "bg-yellow-500"
                          : "bg-slate-700"
                      }`}>
                        <span className="text-white text-xs">{idx + 1}</span>
                      </div>
                      <span className="text-slate-300">{step.action}</span>
                    </motion.div>
                  ))}
                </div>

                <div className={`bg-gradient-to-r ${property.color} bg-opacity-10 border-l-4 border-green-500 p-4 rounded`}>
                  <div className="text-green-400 mb-2">Resultado:</div>
                  <p className="text-slate-300">{property.example.result}</p>
                </div>
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
          <h3 className="text-2xl text-white mb-6">Sintaxis de Transacciones SQL</h3>
          <div className="bg-slate-950 border border-slate-700 rounded-xl p-6">
            <pre className="text-green-400 font-mono text-sm">
{`-- Iniciar una transacción
BEGIN TRANSACTION;

-- Operaciones de la transacción
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;

-- Confirmar cambios (hacer permanentes)
COMMIT;

-- O revertir cambios (en caso de error)
ROLLBACK;`}
            </pre>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <div className="text-green-400 mb-2">COMMIT</div>
              <p className="text-slate-300 text-sm">
                Confirma todos los cambios realizados en la transacción. Los hace permanentes y visibles para otras transacciones.
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <div className="text-red-400 mb-2">ROLLBACK</div>
              <p className="text-slate-300 text-sm">
                Deshace todos los cambios de la transacción. Devuelve la base de datos al estado anterior al BEGIN.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
