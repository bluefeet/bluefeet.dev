import { clsx } from "clsx/lite";
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
      className={clsx("typography", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
