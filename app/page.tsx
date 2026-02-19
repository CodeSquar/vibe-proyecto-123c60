import { MapPin, Phone, Clock, ShoppingCart } from 'lucide-react';

const menuItems = [
  { id: 1, name: 'Muzzarella', desc: 'Salsa de tomate, muzzarella premium, aceitunas y orégano.', price: '$8.500' },
  { id: 2, name: 'Napolitana', desc: 'Muzzarella, rodajas de tomate fresco, ajo y albahaca.', price: '$9.200' },
  { id: 3, name: 'Fugazzeta', desc: 'Mucha cebolla, muzzarella y un toque de parmesano.', price: '$9.500' },
  { id: 4, name: 'Calabresa', desc: 'Muzzarella y rodajas de longaniza calabresa de primera.', price: '$10.000' },
  { id: 5, name: 'Especial Lauti', desc: 'Muzzarella, jamón, morrones, huevo duro y aceitunas.', price: '$11.200' },
  { id: 6, name: 'Cuatro Quesos', desc: 'Muzzarella, roquefort, provolone y parmesano.', price: '$10.800' },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="inicio" className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 italic">¡La mejor pizza de la zona!</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Masa artesanal, ingredientes frescos y cocción a la piedra. Una explosión de sabor en cada porción.
          </p>
          <a href="#menu" className="btn-primary text-lg inline-block">
            Ver el Menú
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-12 border-b">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-4 rounded-full text-primary"><Clock /></div>
            <div><h4 className="font-bold">Envío Rápido</h4><p className="text-sm text-gray-600">En menos de 40 min</p></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-4 rounded-full text-primary"><MapPin /></div>
            <div><h4 className="font-bold">Ubicación</h4><p className="text-sm text-gray-600">Av. Principal 1234, CABA</p></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-4 rounded-full text-primary"><Phone /></div>
            <div><h4 className="font-bold">Pedidos</h4><p className="text-sm text-gray-600">+54 11 1234-5678</p></div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestras Pizzas</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white border rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <span className="text-primary font-bold">{item.price}</span>
              </div>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <button className="flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                <ShoppingCart size={18} /> PEDIR AHORA
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="bg-dark text-white section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden h-96">
             <img 
               src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1976&auto=format&fit=crop" 
               alt="Nuestro horno" 
               className="w-full h-full object-cover"
             />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Tradición en cada masa</h2>
            <p className="text-gray-300 mb-6 text-lg">
              En Lauti Pizzas, creemos que la pizza es más que comida; es un momento para compartir. 
              Utilizamos recetas familiares transmitidas por generaciones, combinando harinas de alta calidad 
              con una fermentación lenta de 24 horas para lograr esa masa crocante y ligera que nos caracteriza.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full"></span> Ingredientes frescos del día</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full"></span> Horno a la piedra</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full"></span> Pasión por la cocina</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="section-padding">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-primary p-12 text-white md:w-1/3 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Hacé tu pedido</h3>
            <p className="mb-8">Atendemos pedidos por teléfono y WhatsApp.</p>
            <div className="space-y-4">
              <p className="flex items-center gap-3"><Phone size={20} /> 11 1234-5678</p>
              <p className="flex items-center gap-3"><MapPin size={20} /> Av. Principal 1234</p>
            </div>
          </div>
          <div className="p-12 md:w-2/3">
            <h3 className="text-2xl font-bold mb-6">Envianos un mensaje</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre" className="w-full p-3 border rounded-lg focus:outline-primary" />
                <input type="text" placeholder="Teléfono" className="w-full p-3 border rounded-lg focus:outline-primary" />
              </div>
              <textarea placeholder="¿Qué vas a pedir hoy?" rows={4} className="w-full p-3 border rounded-lg focus:outline-primary"></textarea>
              <button type="button" className="btn-primary w-full">Enviar Pedido por WhatsApp</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}