import { Group } from "@/types/shared";
import {
  Tag,
  Users,
  CalendarDays,
  Star,
  CircleCheckBig,
  Table2,
  Calculator,
  FileUp,
  FileDown,
  FolderTree,
} from "lucide-react";

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/boards",
          label: "Boards",
          active: pathname.includes("/boards"),
          icon: Table2,
          submenus: [],
        },
        {
          href: "/tasks",
          label: "Tasks",
          active: pathname.includes("/tasks"),
          icon: CircleCheckBig,
          submenus: [],
        },
        {
          href: "/important",
          label: "Important",
          active: pathname === "/important",
          icon: Star,
          submenus: [],
        },
        {
          href: "/calender",
          label: "Calender",
          active: pathname === "/calender",
          icon: CalendarDays,
          submenus: [],
        },
      ],
    },
  ];
}
