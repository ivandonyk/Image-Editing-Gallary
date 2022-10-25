import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { selectShowModal } from "../../store/slices/editorModalSlice";
import CloseButton from "./CloseButton";
import ImagePreview from "./ImagePreview";
import Filters from "./Filters";
import SaveImage from "./SaveImage";
import styles from "./EditorModal.module.scss";

const EditorModal = () => {
  const showModal = useSelector(selectShowModal);

  return (
    <>
      <Modal
        open={showModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={`${styles.modal_box_contanier}`}
      >
        <Box className={`${styles.image_editor_container}`}>
          <Box className={`text-end ${styles.modal_close}`}>
            <CloseButton />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "280px" }}>
              <Filters />
            </Box>
            <Box
              className={`${styles.modal_box_image_preview}`}
              sx={{
                width: "480px",
              }}
            >
              <ImagePreview />
            </Box>
          </Box>
          <Box>
            <SaveImage />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default EditorModal;
