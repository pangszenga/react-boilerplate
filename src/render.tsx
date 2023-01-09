import { createRoot } from "react-dom/client";
import { App } from "./app/App";
const container = document.getElementById("root");
const root = createRoot(container!);
export const render = () => root.render(<App />);