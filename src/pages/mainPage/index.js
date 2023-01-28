import React, { useState } from "react";
import { logOutHandler } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import NavBar from "../../components/navBar";
import ChatDrawer from "../../components/chatDrawer";
import SuggestionBox from "../../components/suggestionBox";
import Backdrop from "@mui/material/Backdrop";
import ProfileDropDown from "../../components/profileDropDown";
import WorkDropDown from "../../components/workDropDown";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openWork, setOpenWork] = useState(false);

  const dispatch = useDispatch();
  return (
    <div
      className={styles.mainContainer}
      onClick={() => {
        setOpenWork(false);
        setOpenProfile(false);
      }}
    >
      <NavBar
        setInputFocus={setInputFocus}
        setOpenProfile={setOpenProfile}
        openProfile={openProfile}
        setOpenWork={setOpenWork}
        openWork={openWork}
      />
      {inputFocus && <SuggestionBox />}
      {openProfile && <ProfileDropDown />}
      {openWork && <WorkDropDown isOpen={openWork} setIsOpen={setOpenWork} />}

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={inputFocus}
      ></Backdrop>

      {/* <div className={styles.upperContainer}>
        <div>Main Page</div>
        <div>
          <Button variant="contained" onClick={() => dispatch(logOutHandler())}>
            Logout
          </Button>
        </div>
      </div> */}
      <ChatDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
export default MainPage;
