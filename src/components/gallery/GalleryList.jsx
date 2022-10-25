import GalleryCard from "./GalleryCard";

const GalleryList = ({ imagesData }) => {
  return (
    <>
      {imagesData.length > 0 &&
        imagesData.map((image) => <GalleryCard image={image} key={image.id} />)}
    </>
  );
};

export default GalleryList;
