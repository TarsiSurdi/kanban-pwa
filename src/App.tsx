import "./index.css";
import { Footer, Main, Navbar } from "./components";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-full">
        <Navbar />
        <div className="flex flex-col overflow-x-auto flex-grow min-h-full">
          <Main />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
