import "./index.css";
import { Main, Navbar } from "./components";

function App() {
  return (
    <div className="h-screen flex flex-col ">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
