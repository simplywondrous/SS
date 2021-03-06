import React from "react";
import { Drawer, Item } from "./types";

export interface DataProvider {
  items: Item[];
  drawers: Drawer[];
}

export const DataProvider = ({
  children,
}: {
  children: (data: DataProvider) => React.ReactNode;
}) => <div>{children(data)}</div>;

const date = new Date();

const data = {
  items: [
    {
      id: "an-id",
      user: "User",
      name: "Name",
      image:
        " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wgCFSsQt1fMUAAABIJJREFUeNrt3cFt2zAUgGGr0C4ewBnDQ+RkzaScPETHsAfoNOqtaNHkURFFi5S+7xrEdmz9oIAX0t35ep9OwK798BaA0AGhA0IHhA4IHRA6IHRA6CB0QOiA0AGhA0IHhA4IHRA6CB0QOiB0QOiA0AGhA0IHhA5CB4QOCB0QOiB0QOiA0AGhA0IHoQNCB4QOCB0QOiB0QOiA0EHogNABoQNCB4QOCB0QOiB0EDogdKB5/ZH/+F8/310BB3e+3q3ogNABoQNCB4QOCB0QOvC33c/Ro1n59BhdAQfXvb2HP9/LnN2KDm7dAaEDQgeEDggdWEvz47XUVtNiI7TnzdVTi8vH4l9NXR/R+K2l0ZsVHdy6A0IHhA4IHRA6IHRgtt5bEGhxVv6RmCnfbnU+dqnPKWPGbkUHhA4IHRA6IHRA6MD/jj1ee+5w1FTyeW+3/X3GBxm/WdFB6IDQAaEDQgeEDggdmM021aVuxzvuuRu6xb87jdPyJ671fxYSUkeRR9Y+StqKDm7dAaEDQgeEDggdEDowmzk6f6Tm5OM4FnvscM7e6Jw85/0ahq8fe8mM3YoObt0BoQNCB4QOCB1Yyz/jtZxtdTnW3pK3e9G2zUpHUalRUzR+y9riuuHfZEUHhA4IHRA6IHQQOiB0oEmzt6nmbbkbwp9H83sz9k/s8Kjp6PrKOWa65OuyogNCB4QOCB0QOiB0OKLZ47XUiCwaQ6RGFNFjb7V1NluDW0lrtZcRlxUdEDogdEDogNBB6IDQgSZ05+t91lm6OfPskltcU6ZH8NzPHc6zo/n96XTqnkORz4nXSTXx2dZuKzq4dQeEDggdEDogdEDowGyz96Onjl2O5uxb7WXP1uKe8tTrKvl+hS8rfl1d1y2+BrZ7q9v5m6zo4NYdEDogdEDogNCBtfRrPVA0fkttcR02GvkkOZZ5NdGoaUs5o99a/yYrOrh1B4QOCB0QOiB0QOhAlv4VT5La4hpp9muTcySObN5qvp/1rJVuNc3ZLprzuznv5ZL/OrGig1t3QOiA0AGhA0IH1tLX/gJzTp9NuiTGWNG3rZYcgR1we2y0XbTkt/HW+thWdEDogNBB6IDQAaEDQgc203sLApcGv001YRqnL3/WDYnjizeaC5c8Dnyro8Y/Ml7Xkm3fVnRw6w4IHRA6IHRA6IDQgdm68/U+1fwCSx73PD1GV8B3Lpa3dvZf1y41v885It2KDm7dAaEDQgeEDggdKKmKbarRCK3kyCY1LuJ7ttry2aK1x2dWdEDoIHRA6IDQAaEDQgdWs/vjnnNmu9GsM7V9tuTX8b56BjtXqf+HyPl64i2/Nrmmz8mKDm7dAaEDQgeEDggdWEsVp8CWPOk1kjP+KPmaax2f1foZlxyR7eVzsqKDW3dA6IDQAaEDQgeEDsxW/bepAlZ0QOiA0EHogNABoQNCB4QOCB0QOiB0EDogdEDogNABoQNCB4QOCB2EDggdEDogdEDogNABoQNCB4QOQgeEDggdEDogdEDogNABoYPQAaEDQgeEDggdEDogdEDocFy/Aa8i5QEQNws6AAAAAElFTkSuQmCC",
      brand: "Brand",
      year: "Year",
      expiration: date,
      openedOn: date,
      finishedOn: date,
      drawer: "Drawer",
      notes: "Notes",
    },
    {
      id: "an-id-2",
      user: "User",
      name: "Name 2",
      image: undefined,
      brand: "Brand",
      year: "Year",
      expiration: date,
      openedOn: date,
      finishedOn: date,
      drawer: "Drawer",
      notes: "Notes",
    },
    {
      id: "an-id-3",
      user: "User",
      name: "Name 3",
      image: undefined,
      brand: "Brand",
      year: "Year",
      expiration: date,
      openedOn: date,
      finishedOn: date,
      drawer: "Drawer 2",
      notes: "Notes",
    },
    {
      id: "an-id-4",
      user: "User",
      name: "Name 4",
      image: undefined,
      brand: "Brand",
      year: "Year",
      expiration: date,
      openedOn: date,
      finishedOn: date,
      drawer: "Drawer 3",
      notes: "Notes",
    },
    {
      id: "an-id-5",
      user: "User",
      name: "Name 5",
      image: undefined,
      brand: "Brand",
      year: "Year",
      expiration: date,
      openedOn: date,
      finishedOn: date,
      drawer: "Drawer",
      notes: "Notes",
    },
    {
      id: "an-id-6",
      user: "User",
      name: "Name 6",
      image: undefined,
      brand: "Brand",
      year: "Year",
      expiration: date,
      openedOn: date,
      finishedOn: date,
      drawer: "Drawer",
      notes: "Notes",
    },
  ],
  drawers: [
    {
      id: "drawer-one",
      // position: 0,
      name: "Drawer 1",
      items: [
        {
          id: "an-id",
          user: "User",
          name: "Name",
          image: undefined,
          brand: "Brand",
          year: "Year",
          expiration: date,
          openedOn: date,
          finishedOn: date,
          drawer: "Drawer",
          notes: "Notes",
        },
        {
          id: "an-id-2",
          user: "User",
          name: "Name 2",
          image: undefined,
          brand: "Brand",
          year: "Year",
          expiration: date,
          openedOn: date,
          finishedOn: date,
          drawer: "Drawer",
          notes: "Notes",
        },
        {
          id: "an-id-4",
          user: "User",
          name: "Name 4",
          image: undefined,
          brand: "Brand",
          year: "Year",
          expiration: date,
          openedOn: date,
          finishedOn: date,
          drawer: "Drawer",
          notes: "Notes",
        },
        {
          id: "an-id-5",
          user: "User",
          name: "Name 5",
          image: undefined,
          brand: "Brand",
          year: "Year",
          expiration: date,
          openedOn: date,
          finishedOn: date,
          drawer: "Drawer",
          notes: "Notes",
        },
        {
          id: "an-id-6",
          user: "User",
          name: "Name 6",
          image: undefined,
          brand: "Brand",
          year: "Year",
          expiration: date,
          openedOn: date,
          finishedOn: date,
          drawer: "Drawer",
          notes: "Notes",
        },
      ],
    },
    {
      id: "drawer-two",
      // position: 1,
      name: "Drawer 2",
      items: [
        {
          id: "an-id-3",
          user: "User",
          name: "Name 3",
          image: undefined,
          brand: "Brand",
          year: "Year",
          expiration: date,
          openedOn: date,
          finishedOn: date,
          drawer: "Drawer 2",
          notes: "Notes",
        },
      ],
    },
    {
      id: "drawer-three",
      // position: 1,
      name: "Drawer 3",
      items: [
        {
          id: "an-id-4",
          user: "User",
          name: "Name 4",
          image: undefined,
          brand: "Brand",
          year: "Year",
          expiration: date,
          openedOn: date,
          finishedOn: date,
          drawer: "Drawer 3",
          notes: "Notes",
        },
      ],
    },
  ],
};

/**
 * GQL:
 *
 * Query by item
 * Query for all items
 * Query for drawer
 *
 * No Query for all drawers for now
 * Better to query less and just use original data
 *
 * On second thought, while writing this out...
 * I'd need all drawer names first anyways,
 * so it's either findUniques or new query
 * So yes, query for drawers
 */
