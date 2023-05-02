import "./index.css";
import { Main, Navbar } from "./components";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-full">
        <Navbar />
        <div className="overflow-x-auto">
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
