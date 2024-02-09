import { render } from "preact";
import "normalize.css";
import "./style.css";
import { TengemTestPage } from "./pages/TangemTestPage";

export function App() {
  return <TengemTestPage />;
}

render(<App />, document.getElementById("app"));
