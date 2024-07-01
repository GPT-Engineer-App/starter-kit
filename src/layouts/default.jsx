import { Outlet, NavLink } from "react-router-dom";
import { Home } from "lucide-react";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <Home className="h-6 w-6" />
          <span className="text-xl font-bold">MyApp</span>
        </div>
        <nav>
          <NavLink to="/" className="text-lg font-medium text-gray-700 hover:text-gray-900">
            Home
          </NavLink>
        </nav>
      </header>
      <main className="flex-grow p-4 flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;