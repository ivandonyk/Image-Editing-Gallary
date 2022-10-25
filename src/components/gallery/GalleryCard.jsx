import { ImageListItem } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { toggleModal, imageToEdit } from "../../store/slices/editorModalSlice";
import styles from "./GalleryCard.module.scss";

const GalleryCard = ({ image }) => {
  const { id, imageURL, editedURL, alt } = image;

  const dispatch = useDispatch();

  const handleImageClick = () => {
    dispatch(toggleModal(true));
    dispatch(imageToEdit(image));
  };

  return (
    <ImageListItem
      key={id}
      className={`${styles.gallery_img_card}`}
      onClick={handleImageClick}
    >
      <img src={editedURL || imageURL} alt={alt} loading="lazy" />
      <Box className={`${styles.content_overlay}`}></Box>
      <Box className={`${styles.content_details} ${styles.fadeIn_bottom}`}>
        Edit Image
      </Box>
    </ImageListItem>
  );
};

export default GalleryCard;
