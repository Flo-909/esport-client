/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>
      <Link to="/sign-up/brand" style={{color: "black"}}>
        <Button
          color="primary"
          border
          className={classes.navLink}
        >
          <PersonAddIcon className={classes.icons} /> Sign-Up as a Company
        </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
      <Link to="/sign-up/influencer" style={{color: "black"}}>
        <Button
          color="primary"
          border
          className={classes.navLink}
        >
          <PersonAddIcon className={classes.icons} /> Sign-Up as an Influencer
        </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/login-page" style={{color: "black"}}>
          <Button
            color="primary"
            className={classes.navLink}
          >
            <PersonIcon className={classes.icons} /> Login
        </Button>
        </Link>
      </ListItem>

    </List>
  );
}
