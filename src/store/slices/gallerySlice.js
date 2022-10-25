import { createSlice } from "@reduxjs/toolkit";
import imagesData from "../../data/gallery-images.json";

const initialState = {
  images: imagesData,
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    addToGallery: (state, action) => {
      state.images = [action.payload, ...state.images];
    },

    editGalleryImage: (state, action) => {
      const image = state.images.find(
        (image) => image.id === action.payload.id
      );
      Object.assign(image, action.payload);
    },
  },
});

export const { addToGallery, editGalleryImage } = gallerySlice.actions;

export const selectGallery = (state) => state.gallery;

export default gallerySlice.reducer;
