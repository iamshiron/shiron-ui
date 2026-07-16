import { Route, Routes } from "react-router";
import { Layout } from "@/components/Layout";
import { ComponentsPage } from "@/routes/Components";
import { DocsPage } from "@/routes/Docs";
import { HomePage } from "@/routes/Home";
import { NotFoundPage } from "@/routes/NotFound";
import { ScreenshotPage } from "@/routes/Screenshot";

export function App() {
	return (
		<Routes>
			{/* Chrome-free route used only to capture README theme screenshots. */}
			<Route path="screenshot" element={<ScreenshotPage />} />
			<Route element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="docs" element={<DocsPage />} />
				<Route path="components" element={<ComponentsPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}
