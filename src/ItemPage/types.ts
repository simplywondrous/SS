import { Drawer } from "../App/types";

export const DragType = {
  DRAWER: "drawer",
} as const;

export interface DragItem {
  item: {
    id: Drawer["id"];
    type: typeof DragType.DRAWER;
  };
}
