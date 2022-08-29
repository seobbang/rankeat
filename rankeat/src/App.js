import "./styles.css";
import Savepage from "./pages/Savepage";
import Postpage from "./pages/Postpage";
import Main from "./pages/Main";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Savepage />
      <Postpage />
      <Main />
    </div>
  );
}
