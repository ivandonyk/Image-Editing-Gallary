import { Button, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleModal, imageToEdit } from "../../store/slices/editorModalSlice";
import { JPEG, JPG, PNG } from "../../constants/imageUploadTypes";

const UploadImageIcon = () => (
  <img src={`/icons/upload-icon.svg`} alt="upload icon" />
);

const Header = () => {
  const dispatch = useDispatch();

  const convertToBase64andSave = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      dispatch(
        imageToEdit({
          imageURL: e.target.result,
          alt: file.name,
        })
      );
      dispatch(toggleModal(true));
    };
  };

  const imageUploadHandler = (event) => {
    const file = event.target.files[0];
    if (file.type !== JPEG && file.type !== JPG && file.type !== PNG) {
      console.error("Only JPEG, JPG and PNG files types are allowed.");
      return;
    }
    convertToBase64andSave(file);
  };

  return (
    <Grid
      container
      className={``}
      alignItems="center"
      sx={{ paddingTop: "10px" }}
    >
      <Grid item xs={6} className="pt-0">
        <Typography component="h4">Image Editing</Typography>
      </Grid>
      <Grid item xs={6} className="pt-0 text-end">
        <Button
          variant="outlined"
          size="medium"
          component="label"
          startIcon={<UploadImageIcon />}
        >
          Upload Image
          <input
            type="file"
            accept={"image/png, image/jpg, image/jpeg"}
            hidden
            onChange={imageUploadHandler}
          />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
