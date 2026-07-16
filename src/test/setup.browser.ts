// Tier 2 runs in a real (headless) browser, which already provides matchMedia,
// ResizeObserver, pointer capture and scrollIntoView. Only register the
// jest-dom matchers here — applying the jsdom shims would mask real behaviour.
import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
	cleanup();
});
