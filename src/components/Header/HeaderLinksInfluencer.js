/*eslint-disable*/
import React, { useState } from "react";
import { connect } from "react-redux";

// react components for routing our app without refresh
import { Link, Redirect } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const HeaderLinksInfluencer = (props) => {
  const [redirect, setRedirect] = useState(false);

  const classes = useStyles();
  const handleLogout = () => {
    props.removeToken(null);
    props.removeRole(null);
    setRedirect(true);
    console.log("redirect", Redirect)
  };
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to={`/profile-influencer`}>
          <Button color="primary">My profile </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={`/select-campaign`}>
          <Button color="primary">Select Campaign </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to={`/request-influencer-list`}>
          <Button color="primary">Request Sent </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button onClick={() => handleLogout()} color="primary">
          Log-out{" "}
        </Button>
      </ListItem>
      {redirect ? <Redirect to="login-page" /> : null}
    </List>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    removeToken: function (token) {
      dispatch({ type: "removeToken", token });
    },
    removeRole: function (role) {
      dispatch({ type: "removeRole", role });
    },
  };
}
export default connect(null, mapDispatchToProps)(HeaderLinksInfluencer);
