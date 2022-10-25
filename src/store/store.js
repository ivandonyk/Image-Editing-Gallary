import { configureStore } from "@reduxjs/toolkit";
import editorModalReducer from "./slices/editorModalSlice";
import galleryReducer from "./slices/gallerySlice";

export const store = configureStore({
  reducer: {
    editorModal: editorModalReducer,
    gallery: galleryReducer,
  },
});
