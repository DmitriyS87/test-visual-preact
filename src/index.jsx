import { render } from "preact";
import "normalize.css";
import "./style.css";
import { TengemTestPage } from "./pages/TangemTestPage";
import { WCAGProvider } from "./features/WCAG/context/Provider";

export function App() {
  return (
    <WCAGProvider>
      <TengemTestPage />
    </WCAGProvider>
  );
}

render(<App />, document.getElementById("app"));
