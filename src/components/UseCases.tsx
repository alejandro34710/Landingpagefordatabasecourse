import { motion } from "motion/react";
import { Building2, ShoppingCart, Heart, Briefcase } from "lucide-react";

export function UseCases() {
  const cases = [
    {
      icon: Building2,
      title: "Sistema Bancario",
      industry: "Finanzas",
      description: "Diseño e implementación de BD para transacciones ACID-compliant con alta disponibilidad.",
      technologies: ["PostgreSQL", "Replicación", "Sharding"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Platform",
      industry: "Retail",
      description: "Base de datos escalable para catálogos de productos, inventario y procesamiento de órdenes.",
      technologies: ["MySQL", "Redis Cache", "Indexación"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      title: "Sistema de Salud",
      industry: "Healthcare",
      description: "Gestión segura de historiales médicos con cumplimiento de normativas de privacidad.",
      technologies: ["SQL Server", "Encriptación", "Backup"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Briefcase,
      title: "ERP Empresarial",
      industry: "Enterprise",
      description: "Integración de múltiples módulos de negocio con datos centralizados y reportes en tiempo real.",
      technologies: ["Oracle", "Data Warehouse", "BI"],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Casos de Uso Reales
          </h2>
          <p className="text-xl text-slate-400">
            Aprende con proyectos inspirados en sistemas de producción reales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all h-full">
                {/* Header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${useCase.color}`}></div>
                
                <div className="p-6">
                  {/* Icon and Industry */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <useCase.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-400">
                      {useCase.industry}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl text-white mb-3">{useCase.title}</h3>

                  {/* Description */}
                  <p className="text-slate-400 mb-4">{useCase.description}</p>

                  {/* Technologies */}
                  <div>
                    <div className="text-sm text-slate-500 mb-2">Tecnologías:</div>
                    <div className="flex flex-wrap gap-2">
                      {useCase.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 bg-gradient-to-r ${useCase.color} bg-opacity-10 border border-slate-700 rounded-full text-sm text-slate-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-slate-900 border border-slate-800 rounded-xl px-6 py-4">
            <p className="text-slate-400">
              <span className="text-white">+15 proyectos prácticos</span> basados en casos reales de la industria
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
