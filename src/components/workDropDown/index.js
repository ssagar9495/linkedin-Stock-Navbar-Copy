import React from "react";
import styles from "./styles.module.scss";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { IMAGES } from "../../constant/assets";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import SaveAsIcon from "@mui/icons-material/SaveAs";

const WorkDropDown = ({ isOpen, setIsOpen }) => {
  const list = () => (
    <Box
      sx={{
        // width: "330px",
        // height: 700,
        // borderTopRightRadius: "10px",
        // borderTopLeftRadius: "10px",
        // border: "1px solid lightgray",
      }}
      role="presentation"
    >
      <div className={styles.upperTab}>
        <div className={styles.rightBox}>
          <img
            src={IMAGES.PROFILE_IMAGE}
            alt="profileImage"
            className={styles.profileImage}
          />
          <div className={styles.text}>Messaging</div>
        </div>
        <div className={styles.leftBox}>
          <IconButton>
            <MoreHorizSharpIcon className={styles.iconStyles} />
          </IconButton>
          <IconButton>
            <SaveAsIcon className={styles.iconStyles} />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon
              onClick={() => setIsOpen(!isOpen)}
              className={styles.arrowIcon}
            />
          </IconButton>
        </div>
      </div>
    </Box>
  );
  return (
    <>
      <div className={styles.botomContainer}>
        <div className={styles.bottomTab}>
          <div className={styles.rightBox}>
            <img
              src={IMAGES.PROFILE_IMAGE}
              alt="profileImage"
              className={styles.profileImage}
            />
            <div className={styles.text}>Messaging</div>
          </div>
          <div className={styles.leftBox}>
            <IconButton>
              <MoreHorizSharpIcon className={styles.iconStyles} />
            </IconButton>
            <IconButton>
              <SaveAsIcon className={styles.iconStyles} />
            </IconButton>
            <IconButton>
              <ExpandLessIcon
                onClick={() => setIsOpen(!isOpen)}
                className={styles.arrowIcon}
              />
            </IconButton>
          </div>
        </div>
      </div>
      <Drawer
        PaperProps={{
          sx: {
            // width: "331px",
            // borderTopRightRadius: "10px",
            // borderTopLeftRadius: "10px",
            // left: "77%",
          },
        }}
        hideBackdrop={true}
        anchor="right"
        open={isOpen}
      >
        {list()}
      </Drawer>
    </>
  );
};

export default WorkDropDown;
