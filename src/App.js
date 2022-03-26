import ContextProvider from "./contexts/contexts";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainPage from "./MainPage/MainPage";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <MainPage />
        <MainRoutes />
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
