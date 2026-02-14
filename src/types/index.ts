import type { LucideIcon } from "lucide-react";

export interface MeetingsType {
  id? : number;
  title?: string;
  icon?: LucideIcon;
  path?: string;
  items? : {
    title?: string;
    url?: string;
  }[]
}