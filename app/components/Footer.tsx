import { Pizza, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-bold text-xl mb-4">
            <Pizza />
            <span>LAUTI PIZZAS</span>
          </div>
          <p className="text-gray-400">Llevamos el sabor de la verdadera pizza artesanal a tu mesa desde hace más de 10 años.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Horarios</h3>
          <p className="text-gray-400">Martes a Domingos</p>
          <p className="text-gray-400">19:30 a 23:30 hs</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Seguinos</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <Instagram className="hover:text-primary cursor-pointer" />
            <Facebook className="hover:text-primary cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Lauti Pizzas. Todos los derechos reservados.
      </div>
    </footer>
  );
}