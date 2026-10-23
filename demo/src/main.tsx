import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "@/App";
import "@/styles/globals.css";

// The root element is present in index.html.
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
