import React from "react";
import classes from "./Sidebar.module.css";
import {
  FcDislike,
  FcElectronics,
  FcGallery,
  FcFlashOn,
  FcGlobe,
  FcInTransit,
  FcOldTimeCamera,
} from "react-icons/fc";

const Sidebar = () => {
  return (
    <ul className={classes.card}>
      <h2>Home</h2>
      <div className={classes.item}>
        <div className={classes.headerInput}>
          <h1>
            <FcElectronics className={classes.headerOption} />
          </h1>
          Texas Tech
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.headerInput}>
          <h1>
            <FcDislike className={classes.headerOption} />
          </h1>
          BonJovi Group
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.headerInput}>
          <h1>
            <FcGallery className={classes.headerOption} />
          </h1>
          Photo Section
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.headerInput}>
          <h1>
            <FcFlashOn className={classes.headerOption} />
          </h1>
          AcDc Hc
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.headerInput}>
          <h1>
            <FcGlobe className={classes.headerOption} />
          </h1>
          NatGeo News
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.headerInput}>
          <h1>
            <FcInTransit className={classes.headerOption} />
          </h1>
          Other Group
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.headerInput}>
          <h1>
            <FcOldTimeCamera className={classes.headerOption} />
          </h1>
          Other Group
        </div>
      </div>
    </ul>
  );
};

export default Sidebar;
