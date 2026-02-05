import type { MeetingsType } from "@/types";
import { Album, AppWindow, HandCoins, Landmark } from "lucide-react";

//Meetings
export const Meetings: MeetingsType[] = [
  { id: 1, title: "PARIPURNA", icon: Landmark },
  { id: 2, title: "BANGGAR (Badan Anggaran)", icon: HandCoins },
  {
    id: 3,
    title: "Rapat Mitra",
    icon: Album,
    items: [
      { title: "Rapat Mitra (Komisi I)" },
      { title: "Rapat Mitra (Komisi II)" },
      { title: "Rapat Mitra (Komisi III)" },
      { title: "Rapat Mitra (Komisi IV)" },
    ],
  },
  {
    id: 4,
    title: "Rapat Komisi",
    icon: AppWindow,
    items: [
      {title: "Rapat Komisi I" },
      {title: "Rapat Komisi II" },
      {title: "Rapat Komisi III" },
      {title: "Rapat Komisi IV" },
    ],
  },
];