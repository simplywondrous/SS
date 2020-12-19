export interface Item {
  id: string;
  user: string;
  name: string;
  image?: string; // base64
  brand: string;
  year: string; // TODO: Should this be a number or Date? Probably
  expiration: Date;
  openedOn: Date;
  finishedOn: Date;
  drawer: string; // TODO: Would number ID be better? How to assign ID?
  notes: string;
}

export interface Drawer {
  id: string; // TODO: Same as above
  // position: number;
  name: string;
  items: Item[];
}
