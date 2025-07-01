import { create } from "zustand";

import type { user } from "./type";

export const useUserStore = create<user>(() => ({
  name: "홍길동",
  position: "학습자",
}));
