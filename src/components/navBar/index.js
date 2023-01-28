import React from "react";
import styles from "./styles.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { IMAGES } from "../../constant/assets";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NavIcon = [
  { icon: <HomeIcon className={styles.navIcon} />, label: "Home" },
  { icon: <Diversity3Icon className={styles.navIcon} />, label: "Network" },
  { icon: <BusinessCenterIcon className={styles.navIcon} />, label: "Jobs" },
  {
    icon: <LocalPostOfficeIcon className={styles.navIcon} />,
    label: "Messaging",
  },
  {
    icon: <NotificationsIcon className={styles.navIcon} />,
    label: "Notifications",
  },
];

const NavBar = ({
  setInputFocus,
  setOpenProfile,
  openProfile,
  setOpenWork,
  openWork,
}) => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBarLeftContainer}>
        <svg width="50px" height="50px" viewBox="0 0 24 24">
          <path
            fill="#0A66C2"
            d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
          ></path>
        </svg>

        <input
          type="text"
          className={styles.search}
          placeholder="Search"
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
        />
        <SearchIcon className={styles.searchIcon} />
      </div>
      <div className={styles.navBarRightContainer}>
        <div className={styles.iconContainer}>
          {NavIcon.map((item, index, arr) => {
            return (
              <div className={styles.iconBox}>
                {item.icon}
                <span className={styles.label}>{item.label}</span>
              </div>
            );
          })}
          <div className={styles.iconBox}>
            <img
              src={IMAGES.PROFILE_IMAGE}
              alt="profileImage"
              className={styles.NavBarProfileImage}
            />

            <span className={` ${styles.label} ${styles.flexBox}`}>
              Me
              <ArrowDropDownIcon
                className={styles.dropIcon}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenProfile(!openProfile);
                }}
              />
            </span>
          </div>
        </div>
        <div className={styles.workContainer}>
          <div className={styles.iconBox}>
            <WidgetsIcon className={styles.navIcon} />
            <span className={` ${styles.label} ${styles.WorkflexBox}`}>
              Work
              <ArrowDropDownIcon
                className={styles.dropIcon}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenWork(!openWork);
                }}
              />
            </span>
          </div>
          <div className={styles.atagBox}>
            <span className={styles.atag}>Try Prenium for Free</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
