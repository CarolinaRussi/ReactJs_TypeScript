import { Outlet } from "react-router";
import { Header } from "../header";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <br></br>
      <footer>
        <span>Todos os direitos reservados @2025</span>
      </footer>
    </>
  );
}
