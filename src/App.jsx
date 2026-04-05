import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { Navbar } from "./components/Navbar";
import { FavoritesProvider } from "./features/favorites/FavoritesContext";

function App() {
  return (
    <div>
      <FavoritesProvider>
        <Navbar />
        <AppRouter />
      </FavoritesProvider>
    </div>
  );
}

export default App;
