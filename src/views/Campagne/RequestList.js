import React, { useState }  from 'react';
import { makeStyles } from "@material-ui/core/styles";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);


function RequestList(props) {
  const classes = useStyles();
return(     
  <div className="users" key={props.token} style={{display: "column"}}>
    <div className="users-container" style={{marginBottom:"30px"}}>
      <ul>
        <li className="user">
          <picture className="user-picture">
            <img src={props.campaignUpload} alt={"logo brand"} />
          </picture>
            <div className="user-info-container">
              <div className="user-info">
                <h4> {props.campaignName}</h4>
                <p>Status: {props.campaignStatus}</p>
              </div>
            </div>
        </li>
    <div className={classes.description}>
      <p>{props.campaignDesc}</p>
    </div>
      </ul>
  </div>
</div>
  )
}

export default RequestList;





