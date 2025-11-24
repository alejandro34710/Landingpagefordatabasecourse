import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Package, DollarSign, MapPin, Megaphone, Users, TrendingUp, Info } from "lucide-react";

export function KeyConcepts() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [selectedExample, setSelectedExample] = useState<string>("starbucks");

  const concepts = [
    {
      icon: Package,
      term: "Producto",
      definition: "Cualquier cosa que se puede ofrecer al mercado para satisfacer una necesidad o deseo.",
      backContent: "Incluye bienes físicos, servicios, experiencias, eventos, personas, lugares, organizaciones e ideas. El producto es la razón por la cual los clientes vienen a ti.",
      examples: ["iPhone (bien)", "Netflix (servicio)", "Concierto (experiencia)"],
      color: "from-blue-500 to-cyan-500",
      detalle: "Es más que un objeto físico: incluye características, diseño, calidad, marca y empaque."
    },
    {
      icon: DollarSign,
      term: "Precio",
      definition: "Cantidad de dinero que se cobra por un producto o servicio.",
      backContent: "Es el único elemento del marketing mix que genera ingresos; los demás representan costos. El precio debe reflejar el valor percibido por el cliente y ser competitivo en el mercado.",
      examples: ["Premium: Rolex", "Penetración: Xiaomi", "Freemium: Spotify"],
      color: "from-green-500 to-emerald-500",
      detalle: "Estrategias: Descreme, penetración, competitiva, psicológica, por valor."
    },
    {
      icon: MapPin,
      term: "Plaza (Distribución)",
      definition: "Actividades para que el producto esté disponible y accesible para los clientes meta.",
      backContent: "Incluye canales, cobertura, surtido, ubicaciones y logística. La plaza correcta significa estar donde y cuando el cliente te necesita.",
      examples: ["Directa: Tesla", "Intensiva: Coca-Cola", "Selectiva: Apple Store"],
      color: "from-orange-500 to-red-500",
      detalle: "Canales: minoristas, mayoristas, online, directos, híbridos."
    },
    {
      icon: Megaphone,
      term: "Promoción",
      definition: "Actividades que comunican las ventajas del producto y persuaden a los clientes.",
      backContent: "Incluye publicidad, ventas personales, promoción de ventas, relaciones públicas y marketing directo. La voz de tu marca hacia el mercado.",
      examples: ["Publicidad TV", "Influencers", "Email marketing", "SEO/SEM"],
      color: "from-purple-500 to-pink-500",
      detalle: "Mix promocional: push (empujar) vs pull (atraer) strategies."
    },
    {
      icon: Users,
      term: "Segmentación",
      definition: "Dividir el mercado en grupos con necesidades y comportamientos diferentes.",
      backContent: "Permite personalizar ofertas y mensajes para cada grupo, aumentando efectividad. No todos los clientes son iguales ni quieren lo mismo.",
      examples: ["Demográfica", "Psicográfica", "Conductual", "Geográfica"],
      color: "from-indigo-500 to-blue-500",
      detalle: "Base para targeting (a quién) y positioning (cómo te perciben)."
    },
    {
      icon: TrendingUp,
      term: "Posicionamiento",
      definition: "Lugar que ocupa el producto en la mente del consumidor vs competidores.",
      backContent: "No es lo que haces al producto, sino lo que haces en la mente del prospecto. Define cómo quieres que te perciban y qué te hace único.",
      examples: ["Volvo = Seguridad", "Apple = Innovación", "IKEA = Económico"],
      color: "from-pink-500 to-rose-500",
      detalle: "Estrategias: por atributo, precio, uso, usuario, competidor, categoría."
    }
  ];

  const marketingMixExamples = {
    starbucks: {
      name: "Starbucks",
      logo: "☕",
      producto: "Café premium + experiencia 'tercer lugar' (no casa, no trabajo)",
      precio: "Premium ($4-6 por café, justificado por calidad y ambiente)",
      plaza: "Ubicaciones estratégicas de alto tráfico + app móvil para pedidos",
      promocion: "Programa de lealtad Rewards + marketing en redes sociales"
    },
    tesla: {
      name: "Tesla",
      logo: "⚡",
      producto: "Vehículos eléctricos de alto rendimiento + tecnología Autopilot",
      precio: "Premium con financiamiento ($40k-$100k+, ahorro en gasolina)",
      plaza: "Venta directa online + showrooms propios (sin concesionarios)",
      promocion: "Word of mouth + Elon Musk como influencer + test drives"
    },
    mcdonalds: {
      name: "McDonald's",
      logo: "🍔",
      producto: "Comida rápida estandarizada + experiencia consistente global",
      precio: "Económico accesible ($1-$10, value meals)",
      plaza: "Ubicuidad: drive-thru, locales, aeropuertos, delivery apps",
      promocion: "Publicidad masiva TV + Happy Meal toys + Ronald McDonald"
    }
  };

  return (
    <section id="concepts" className="py-32 relative overflow-hidden bg-stone-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(242,100,25,0.15),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(184,128,74,0.15),transparent_50%)]" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-stone-500 uppercase tracking-wider mb-4 font-medium">Sección 02</div>
          <h2 className="mb-6 text-amber-50">Conceptos Fundamentales</h2>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto">
            Los pilares del marketing que todo profesional debe dominar
          </p>
          <p className="text-sm text-primary-400 mt-4">
            💡 Haz clic en cada tarjeta para ver más detalles
          </p>
        </motion.div>

        {/* Interactive Flip Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-80 cursor-pointer perspective-1000"
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of card */}
                <div
                  className="absolute w-full h-full bg-stone-900/50 backdrop-blur-sm border border-stone-800 rounded-2xl p-8 hover:border-stone-700 transition-all duration-500"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${concept.color} rounded-t-2xl`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${concept.color} rounded-xl flex items-center justify-center mb-6`}>
                    <concept.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl text-white mb-4">
                    {concept.term}
                  </h3>
                  <p className="text-stone-400 leading-relaxed mb-4">
                    {concept.definition}
                  </p>

                  {/* Examples */}
                  <div className="mt-auto">
                    <div className="text-xs text-stone-500 uppercase tracking-wider mb-2">Ejemplos:</div>
                    <div className="space-y-1">
                      {concept.examples.map((example, i) => (
                        <div key={i} className="text-sm text-stone-400 flex items-start gap-2">
                          <span className="text-primary-400 mt-0.5">•</span>
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 text-stone-600">
                    <Info className="w-5 h-5" />
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-8"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${concept.color} rounded-xl flex items-center justify-center mb-6`}>
                    <concept.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl text-amber-100 mb-4">
                    {concept.term}
                  </h3>
                  
                  <p className="text-stone-300 leading-relaxed mb-4">
                    {concept.backContent}
                  </p>

                  <div className="bg-stone-900/50 rounded-lg p-4 mt-6">
                    <div className="text-xs text-primary-400 mb-2">Detalle importante:</div>
                    <p className="text-sm text-stone-300">{concept.detalle}</p>
                  </div>

                  <div className="absolute bottom-4 right-4 text-primary-400">
                    <Info className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Marketing Mix Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-2xl p-8">
            <h3 className="text-2xl text-white mb-4">Las 4Ps: El Marketing Mix</h3>
            <p className="text-stone-300 leading-relaxed mb-6">
              Las 4Ps, propuestas por <strong>E. Jerome McCarthy en 1960</strong>, son las variables controlables 
              que una empresa puede ajustar para influir en la respuesta del mercado. Deben trabajar juntas de manera 
              coherente para crear una propuesta de valor consistente.
            </p>

            {/* Company Selector */}
            <div className="mb-6">
              <div className="text-sm text-stone-400 mb-3">Selecciona una empresa para ver su Marketing Mix:</div>
              <div className="flex gap-3">
                {(["starbucks", "tesla", "mcdonalds"] as const).map((company) => (
                  <button
                    key={company}
                    onClick={() => setSelectedExample(company)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedExample === company
                        ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg scale-105"
                        : "bg-stone-900/50 text-stone-400 hover:bg-stone-800/50 border border-amber-900/30"
                    }`}
                  >
                    <span className="mr-2">{marketingMixExamples[company].logo}</span>
                    {marketingMixExamples[company].name}
                  </button>
                ))}
              </div>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExample}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-stone-900/50 rounded-xl p-6 border border-amber-900/30"
              >
                <div className="text-center mb-6">
                  <span className="text-4xl">{marketingMixExamples[selectedExample].logo}</span>
                  <h4 className="text-white text-xl mt-2">{marketingMixExamples[selectedExample].name}</h4>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="w-4 h-4 text-blue-400" />
                      <strong className="text-blue-400">Producto:</strong>
                    </div>
                    <span className="text-stone-300">{marketingMixExamples[selectedExample].producto}</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-green-500/10 border border-green-500/30 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <strong className="text-green-400">Precio:</strong>
                    </div>
                    <span className="text-stone-300">{marketingMixExamples[selectedExample].precio}</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      <strong className="text-orange-400">Plaza:</strong>
                    </div>
                    <span className="text-stone-300">{marketingMixExamples[selectedExample].plaza}</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Megaphone className="w-4 h-4 text-purple-400" />
                      <strong className="text-purple-400">Promoción:</strong>
                    </div>
                    <span className="text-stone-300">{marketingMixExamples[selectedExample].promocion}</span>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
