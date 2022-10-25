import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectImageToEdit,
  selectBrightness,
  selectSaturation,
  selectInversion,
  selectGrayscale,
  setImageWidth,
  setImageHeight,
} from "../../store/slices/editorModalSlice";

const ImagePreview = () => {
  const imageToEdit = useSelector(selectImageToEdit);
  const brightness = useSelector(selectBrightness);
  const saturation = useSelector(selectSaturation);
  const inversion = useSelector(selectInversion);
  const grayscale = useSelector(selectGrayscale);

  const dispatch = useDispatch();
  const { imageURL, alt } = imageToEdit;

  const imageRef = useRef();

  const onImageLoad = ({ target: img }) => {
    dispatch(setImageWidth(imageRef.current.naturalWidth));
    dispatch(setImageHeight(imageRef.current.naturalHeight));
  };

  return (
    <img
      src={imageURL}
      alt={alt}
      ref={imageRef}
      style={{
        filter: `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`,
      }}
      onLoad={onImageLoad}
    />
  );
};

export default ImagePreview;
