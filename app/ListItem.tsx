import { AtSymbolIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";

export const ListItem = ({
  Icon,
  children,
}: {
  Icon: typeof AtSymbolIcon;
  children: ReactNode;
}) => (
  <>
    <div className="flex place-items-center p-1 pr-8 pl-8">
      <Icon className="w-6 text-amber-400 print:text-sky-600" />
    </div>
    <div className="pt-2 pb-2">{children}</div>
  </>
);
