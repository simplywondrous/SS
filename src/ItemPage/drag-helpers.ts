import { DropTargetMonitor, XYCoord } from "react-dnd";

export const DragType = {
  DRAWER: "drawer",
  ITEMCARD: "item",
} as const;

interface DraggedData {
  id: string;
  index: number;
}

export type DraggedDrawerData = DraggedData & {
  type: typeof DragType.DRAWER;
};

export type DraggedItemCardData = DraggedData & {
  type: typeof DragType.ITEMCARD;
};

/**
 * This function is called after on hover logic executes.
 * It reorders `itemList` such that the item at `dragIndex` is now at `hoverIndex`.
 * The reordered list is returned.
 * @param itemList List of items
 * @param dragIndex Starting index of dragged item
 * @param hoverIndex Current index of dragged item
 */
export const handleDragItemReorder = <T>(
  itemList: T[],
  dragIndex: number,
  hoverIndex: number
) => {
  const newItemOrder = [...itemList];
  const draggedItem = newItemOrder.splice(dragIndex, 1);
  newItemOrder.splice(hoverIndex, 0, draggedItem[0]);

  return newItemOrder;
};

// TODO TODO
// Wowee is this way more than I realized. So below is vertical logic,
// Will need to write something for horizontal logic,
// And then something for vertical and horizontal logic!
// Not to mention animation too... might be worth it to find a library if possible
// First glance, no JS w/o JQuery library that does this, as I guess the HTML5 dnd stuff is primitive?
// Some libraries do this, but they are older and not updated within the last year
// Saving grace is that these should all be the same size, which makes math easier
// This is certainly a question to ask about
export const handleHoverItem = (
  dragged: DraggedDrawerData | DraggedItemCardData,
  monitor: DropTargetMonitor,
  item: HTMLElement | null,
  itemIndex: number,
  onDrag: (dragIndex: number, hoverIndex: number) => void,
  direction: "vertical" | "horizontal"
) => {
  if (!item) return;
  const dragIndex = dragged.index;
  if (dragIndex === itemIndex) return;

  const hoverBoundingRect = item.getBoundingClientRect();
  const hoverMidY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2; // vertical middle of this rect
  const mousePos = monitor.getClientOffset();
  if (!mousePos) throw Error;
  const hoverMouseY = (mousePos as XYCoord).y - hoverBoundingRect.top; // TODO - is forced typing needed?

  // react-dnd:
  // Only perform the move when the mouse has crossed half of the items height
  // When dragging downwards, only move when the cursor is below 50%
  // When dragging upwards, only move when the cursor is above 50%
  if (dragIndex < itemIndex && hoverMouseY < hoverMidY) return; // Dragging downwards
  if (dragIndex > itemIndex && hoverMouseY > hoverMidY) return; // Dragging upwards

  onDrag(dragIndex, itemIndex);
  // react-dnd:
  // Note: we're mutating the monitor item here!
  // Generally it's better to avoid mutations,
  // but it's good here for the sake of performance
  // to avoid expensive index searches.
  dragged.index = itemIndex;
};
