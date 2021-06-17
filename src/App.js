import Home from "./components/pages/Home";
import { ContextAppProvider } from "./context/AppContext";
function App() {
  return (
    <ContextAppProvider>
      <Home />
    </ContextAppProvider>
  );
}

export default App;
