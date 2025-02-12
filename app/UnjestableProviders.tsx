"use client";

import { RenderMarkdown } from "./RenderMarkdown";
import { RenderMarkdownProvider } from "./RenderMarkdownContext";
import { ReactNode } from "react";

/**
 * This component loads NPM packages which Jest does not currently transform
 * automatically. These are typically ESM-only packages.
 */
export const UnjestableProviders = ({ children }: { children: ReactNode }) => (
  <RenderMarkdownProvider value={RenderMarkdown}>
    {children}
  </RenderMarkdownProvider>
);
