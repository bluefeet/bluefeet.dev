import React, { createContext, useContext } from "react";

/**
 * The default pass-through component that tests depend on.
 */
const Placebo = ({ children: markdown }: { children: string }) => (
  <div className="typography">{markdown}</div>
);

const RenderMarkdownContext = createContext<typeof Placebo>(Placebo);

/**
 * The `RenderMarkdown` component loads `micromark` which Jest is
 * not able to transform. To get around this the component is made available
 * via this context and is only returns the real component outside of tests.
 */
export const RenderMarkdownProvider = RenderMarkdownContext.Provider;

/**
 * Returns {@link Placebo} in tests, or `RenderMarkdown` otherwise.
 */
export const useRenderMarkdown = () => useContext(RenderMarkdownContext);
