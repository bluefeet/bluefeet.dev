import { micromark } from "micromark";

/**
 * Exposes {@link micromark} as a component.
 */
export const RenderMarkdown = ({
  children: markdown,
}: {
  children: string;
}) => {
  const html = micromark(markdown);
  return (
    <div className="typography" dangerouslySetInnerHTML={{ __html: html }} />
  );
};
