import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="grid content-start h-screen w-screen overflow-y-auto items-start text-white bg-gray-200 font-emberRegular">
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
