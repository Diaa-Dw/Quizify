import { App } from "./AppLayput.style";
import Logo from "../../components/Logo/Logo";
import { Outlet } from "react-router-dom";

function AppLayput() {
  return (
    <App>
      <Logo />
      <main>
        <Outlet />
      </main>
    </App>
  );
}

export default AppLayput;
