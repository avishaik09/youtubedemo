import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: { sidebar: sidebarSlice, search: searchSlice },
});

export default store;
