import "./index.css";
import { Main, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col overflow-x-scroll">
        <Main />
      </div>
    </>
  );
}

export default App;
