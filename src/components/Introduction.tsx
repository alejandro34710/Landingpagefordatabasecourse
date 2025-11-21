import { motion } from "motion/react";
import { Database, Server, HardDrive, Network } from "lucide-react";

export function Introduction() {
  const concepts = [
    {
      icon: Database,
      title: "Base de Datos",
      description: "Colección organizada de datos estructurados",
    },
    {
      icon: Server,
      title: "SGBD",
      description: "Sistema que gestiona y administra las bases de datos",
    },
    {
      icon: HardDrive,
      title: "Persistencia",
      description: "Almacenamiento permanente de información",
    },
    {
      icon: Network,
      title: "Concurrencia",
      description: "Múltiples usuarios accediendo simultáneamente",
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
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 mb-6">
            Lección 1 de 10
          </div>
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            ¿Qué es una{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Base de Datos?
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Una base de datos es una colección organizada de información estructurada que se almacena 
            electrónicamente en un sistema informático. Es fundamental para cualquier aplicación moderna.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
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
          <h3 className="text-2xl text-white mb-6">Componentes de un Sistema de Base de Datos</h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-white mb-2">1. Datos</h4>
              <p className="text-slate-400">
                La información en sí misma: nombres, números, fechas, etc. Estos datos deben ser 
                significativos y relevantes para la organización.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-white mb-2">2. Hardware</h4>
              <p className="text-slate-400">
                Los dispositivos físicos donde se almacenan los datos: discos duros, servidores, 
                sistemas de almacenamiento.
              </p>
            </div>

            <div className="border-l-4 border-pink-500 pl-6">
              <h4 className="text-white mb-2">3. Software (SGBD)</h4>
              <p className="text-slate-400">
                El Sistema Gestor de Base de Datos que permite crear, mantener y consultar la base de datos. 
                Ejemplos: MySQL, PostgreSQL, MongoDB.
              </p>
            </div>

            <div className="border-l-4 border-cyan-500 pl-6">
              <h4 className="text-white mb-2">4. Usuarios</h4>
              <p className="text-slate-400">
                Las personas que interactúan con la BD: administradores, desarrolladores, usuarios finales.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <h4 className="text-white mb-3 flex items-center gap-2">
              <Database className="w-5 h-5" />
              Ventajas de usar Bases de Datos
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>✓ Reducción de redundancia de datos</li>
              <li>✓ Integridad y consistencia de la información</li>
              <li>✓ Acceso concurrente y seguro</li>
              <li>✓ Respaldo y recuperación de datos</li>
              <li>✓ Independencia de datos</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
