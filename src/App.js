import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import ContainerFluid from "./utils/containerFluid/ContainerFluid";

function App() {
  return (
    <ContainerFluid>
      <Navbar />
      <Home />
      <Footer />
    </ContainerFluid>
  );
}

export default App;
