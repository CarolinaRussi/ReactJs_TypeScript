import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";

export function Header() {
  return (
    <header className="w-full px-1 bg-slate-900">
      <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto">
        <Link className="font-bold text-2xl" to="/">
          <h1 className="text-white">
            Book
            <span className="bg-gradient-to-r from-teal-500 to-teal-900 bg-clip-text text-transparent">
              Shop
            </span>
          </h1>
        </Link>

        <Link className="relative" to="/cart">
          <FiShoppingCart size={24} color="#faf7f7" />
          <span className="absolute -top-3 -right-3 px-2.5 bg-teal-600 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
            2
          </span>
        </Link>
      </nav>
    </header>
  );
}
