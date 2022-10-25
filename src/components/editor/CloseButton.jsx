import { useDispatch } from "react-redux";
import { resetStateToDefault } from "../../store/slices/editorModalSlice";

const CloseButton = ({ children }) => {
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    dispatch(resetStateToDefault());
  };

  return (
    <img
      src={`/icons/cancel-icon.png`}
      alt="cancel icon"
      onClick={handleClose}
    />
  );
};

export default CloseButton;
