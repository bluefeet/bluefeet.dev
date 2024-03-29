import { ReactNode } from "react";

import { AtSymbolIcon } from "@heroicons/react/24/solid";

export const ListItem = ({
  Icon,
  children,
}: {
  Icon: typeof AtSymbolIcon;
  children: ReactNode;
}) => (
  <>
    <div className="p-1 pl-8 pr-8 flex place-items-center">
      <Icon className="w-6 text-amber-400 print:text-sky-600" />
    </div>
    <div className="pt-2 pb-2">{children}</div>
  </>
);
