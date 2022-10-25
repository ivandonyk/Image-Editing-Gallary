import React, { useRef } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBrightness,
  selectSaturation,
  selectInversion,
  selectGrayscale,
  selectImageWidth,
  selectImageHeight,
  selectImageToEdit,
  toggleModal,
} from "../../store/slices/editorModalSlice";
import { DOWNLOADED_IMAGE_NAME } from "../../constants/downloadedImage";
import styles from "./SaveImage.module.scss";
import { addToGallery, editGalleryImage } from "src/store/slices/gallerySlice";
import { nanoid } from "@reduxjs/toolkit";

const SaveImage = () => {
  const brightness = useSelector(selectBrightness);
  const saturation = useSelector(selectSaturation);
  const inversion = useSelector(selectInversion);
  const grayscale = useSelector(selectGrayscale);
  const imageToEdit = useSelector(selectImageToEdit);
  const imageWidth = useSelector(selectImageWidth);
  const imageHeight = useSelector(selectImageHeight);
  const dispatch = useDispatch();

  const { imageURL } = imageToEdit;

  const canvasRef = useRef();
  const aRef = useRef();

  const saveImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    var img = new Image();

    img.src = imageURL;
    canvas.width = imageWidth;
    canvas.height = imageHeight;

    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    if (imageToEdit.id) {
      dispatch(
        editGalleryImage({
          ...imageToEdit,
          editedURL: canvas.toDataURL(),
        })
      );
    } else {
      dispatch(
        addToGallery({
          ...imageToEdit,
          id: nanoid(),
          editedURL: canvas.toDataURL(),
        })
      );
    }

    dispatch(toggleModal(false));

    const link = aRef.current;
    link.download = DOWNLOADED_IMAGE_NAME;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <Box sx={{ paddingTop: "20px" }} className="text-end">
      <Button variant="contained" component="label" onClick={saveImage}>
        Save Image
      </Button>
      <canvas ref={canvasRef} hidden></canvas>
      <a
        ref={aRef}
        className={`${styles.a_for_canvas_download}`}
        href={imageURL}
      >
        {imageURL}
      </a>
    </Box>
  );
};

export default SaveImage;
