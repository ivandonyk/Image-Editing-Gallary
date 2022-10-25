import GalleryList from "./GalleryList";
import { ImageList } from "@mui/material";
import { useSelector } from "react-redux";
import { selectGallery } from "src/store/slices/gallerySlice";

const Gallery = () => {
  const { images } = useSelector(selectGallery);

  return (
    <div>
      <ImageList variant="masonry" cols={3} gap={8}>
        <GalleryList imagesData={images} />
      </ImageList>
    </div>
  );
};

export default Gallery;
