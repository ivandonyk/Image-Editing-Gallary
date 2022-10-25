import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./Filters.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  selectBrightness,
  selectSaturation,
  selectInversion,
  selectGrayscale,
  setBrightness,
  setSaturation,
  selectImageWidth,
  selectImageHeight,
  setInversion,
  setGrayscale,
  setImageWidth,
  setImageHeight,
} from "../../store/slices/editorModalSlice";

const Filters = () => {
  const brightness = useSelector(selectBrightness);
  const saturation = useSelector(selectSaturation);
  const inversion = useSelector(selectInversion);
  const grayscale = useSelector(selectGrayscale);
  const imageWidth = useSelector(selectImageWidth);
  const imageHeight = useSelector(selectImageHeight);

  const dispatch = useDispatch();

  return (
    <Box className={`${styles.filters_contanier}`}>
      <Typography component="h3" className="mt-0">
        Filters
      </Typography>

      <Typography component="p" className="mb-0">
        Brightness
      </Typography>
      <Slider
        defaultValue={brightness}
        aria-label="Default"
        valueLabelDisplay="auto"
        min={0}
        max={200}
        onChange={(e) => dispatch(setBrightness(e.target.value))}
      />

      <Typography component="p" className="mb-0">
        Saturation
      </Typography>
      <Slider
        defaultValue={saturation}
        aria-label="Default"
        valueLabelDisplay="auto"
        min={0}
        max={200}
        onChange={(e) => dispatch(setSaturation(e.target.value))}
      />

      <Typography component="p" className="mb-0">
        Inversion
      </Typography>
      <Slider
        defaultValue={inversion}
        aria-label="Default"
        valueLabelDisplay="auto"
        min={0}
        max={100}
        onChange={(e) => dispatch(setInversion(e.target.value))}
      />

      <Typography component="p" className="mb-0">
        Grayscale
      </Typography>
      <Slider
        defaultValue={grayscale}
        aria-label="Default"
        valueLabelDisplay="auto"
        min={0}
        max={100}
        onChange={(e) => dispatch(setGrayscale(e.target.value))}
      />

      <Box
        className={`${styles.width_and_height}`}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            paddingRight: "10px",
            boxSizing: "border-box",
          }}
        >
          <Typography component="p">Width</Typography>
          <input
            type="number"
            value={imageWidth}
            onChange={(e) => dispatch(setImageWidth(e.target.value))}
          />
        </Box>
        <Box>
          <Typography component="p">Height</Typography>
          <input
            type="number"
            value={imageHeight}
            onChange={(e) => dispatch(setImageHeight(e.target.value))}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Filters;
