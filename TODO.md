/\*\*

- Accordian-style drawers
- All will be expanded by default
-
- ***
- V NAME OF DRAWER
- ***
- DRAWER ONTENTS
- ***
-
- Q: Add Item?
- A: Makes sense to drag item maybe? Or is selecting from dropdown better?
- (Probably dropdown, actually)
-
- Q: Should drawers allow double of an item?
- A: For now, no.
-
- Q: Where is option to add item?
- A: Top right of page for now, also not sticky for now
-
- Q: What does creating a new item look like?
- A: Slide-out Drawer from the right, with form fields
-
- Q: Add Another Item Button?
- A: Should be option next to Save Button for an item (for later)

## Concerns

- Cursor state is managed at the top level so that regardless of where something is dragged, the cursor can change back to a pointer. Then there's some prop drilling whenever elements change the cursor - is there a better way to do this?
  - Also, would it be better to just pass setCursor and let the component handle it, or is it better to specify a group of functions and pass those down as an object?

## Adding Items

- Click Add
- Fill in info
- Post request to DB
- Show item / update

## Editing Drawer

- Drag and Drop
- Click and hold item
- Move it around screen
- If drawer is open, display spaces where it could be
  (Between all items and at front / end)
  Items slide to create room for space

  ### File structure

  Currently it's App.js -> DataProvider -> Layout -> Sidebar, Main -> ItemPage -> ItemPortals
