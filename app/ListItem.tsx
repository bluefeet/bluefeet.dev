import { Square as SquareIcon } from "@phosphor-icons/react";
import { ReactNode } from "react";

export const ListItem = ({
  Icon,
  iconProps,
  children,
}: {
  Icon: typeof SquareIcon;
  iconProps?: Partial<Parameters<typeof SquareIcon>[0]>;
  children: ReactNode;
}) => (
  <>
    <div className="flex place-items-center p-1 pr-8 pl-8">
      <Icon
        className="h-6 w-6 text-amber-400 print:text-sky-600"
        weight="fill"
        {...iconProps}
      />
    </div>
    <div className="pt-2 pb-2">{children}</div>
  </>
);
