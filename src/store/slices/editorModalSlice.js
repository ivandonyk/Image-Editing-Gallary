import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  imageToEdit: {},
  brightness: 100,
  saturation: 100,
  inversion: 0,
  grayscale: 0,
  imageWidth: 0,
  imageHeight: 0,
};

export const editorModalSlice = createSlice({
  name: "editorModal",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.showModal = action.payload;
    },
    imageToEdit: (state, action) => {
      state.imageToEdit = action.payload;
    },
    setBrightness: (state, action) => {
      state.brightness = action.payload;
    },
    setSaturation: (state, action) => {
      state.saturation = action.payload;
    },
    setInversion: (state, action) => {
      state.inversion = action.payload;
    },
    setGrayscale: (state, action) => {
      state.grayscale = action.payload;
    },
    setImageWidth: (state, action) => {
      state.imageWidth = action.payload;
    },
    setImageHeight: (state, action) => {
      state.imageHeight = action.payload;
    },
    resetStateToDefault: () => initialState,
  },
});

export const {
  toggleModal,
  imageToEdit,
  setBrightness,
  setSaturation,
  setInversion,
  setGrayscale,
  setImageWidth,
  setImageHeight,
  resetStateToDefault,
} = editorModalSlice.actions;

export const selectShowModal = (state) => state.editorModal.showModal;
export const selectImageToEdit = (state) => state.editorModal.imageToEdit;
export const selectBrightness = (state) => state.editorModal.brightness;
export const selectSaturation = (state) => state.editorModal.saturation;
export const selectInversion = (state) => state.editorModal.inversion;
export const selectGrayscale = (state) => state.editorModal.grayscale;
export const selectImageWidth = (state) => state.editorModal.imageWidth;
export const selectImageHeight = (state) => state.editorModal.imageHeight;

export default editorModalSlice.reducer;
