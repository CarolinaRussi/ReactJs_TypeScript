import { signOut } from "firebase/auth";
import { Link } from "react-router";
import { auth } from "../../services/firebaseConnection";
import { TbLogout } from "react-icons/tb";

export function Header() {
  function handleLogout() {
    signOut(auth);
  }
  return (
    <header className="w-full max-w-2xl mt-4 px-1">
      <nav className="w-full bg-white h-12 flex items-center justify-between rounded-md px-3">
        <div className="flex gap-4 font-medium">
          <Link to="/">Home</Link>
          <Link to="/admin">Links</Link>
          <Link to="/admin/social">Redes Sociais</Link>
        </div>
        <button onClick={handleLogout} className="cursor-pointer">
          <TbLogout size={28} color="#2a6354" />
        </button>
      </nav>
    </header>
  );
}
