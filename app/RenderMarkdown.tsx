import { micromark } from "micromark";

/**
 * Exposes {@link micromark} as a component.
 */
export const RenderMarkdown = ({
  children: markdown,
  className = "",
}: {
  children: string;
  className?: string;
}) => {
  const html = micromark(markdown);
  return (
    <div
      className={`typography ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
