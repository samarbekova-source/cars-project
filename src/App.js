import ContextProvider from "./contexts/contexts";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <MainRoutes />
      </ContextProvider>
    </div>
  );
}

export default App;
