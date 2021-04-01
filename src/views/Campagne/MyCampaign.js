import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import HeaderLinksBrand from "components/Header/HeaderLinksBrand.js";
import { Row } from "reactstrap";
import { connect } from "react-redux";
import MyCampaignList from "./mycampaignList";
import image from "assets/img/signup.jpg";

function MyCampaign(props) {
  const [myCampaignList, setMyCampaignList] = useState([]);
  const [companyCampaign, setCompanyCampaign] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        process.env.REACT_APP_BACKEND +
          `/mycampaign?companyToken=${props.token}`
      );
      const jsonResponse = await response.json();
      console.log("jsonR", jsonResponse);
      setMyCampaignList(jsonResponse.myCampaign);
      setCompanyCampaign(jsonResponse.company);
    }
    fetchData();
  }, [props.token]);

  const returnList = myCampaignList.map((mycampaign, i) => {
    return (
      <MyCampaignList
        key={i}
        campaignName={mycampaign.campaignName}
        campaignDesc={mycampaign.description}
        campaignStatus={mycampaign.status}
        campaignImage={mycampaign.uploadedDoc}
      />
    );
  });
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginLeft: 30,
      border: "1mm ridge black",
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();
  const { ...rest } = props;

  const myCampaignReturn = (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Esport-Influence"
        rightLinks={<HeaderLinksBrand />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "dark",
        }}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "100vh",
        }}
      >
        <div className="users" key={props.token}>
          <div
            className="current-user-container"
            style={{ marginTop: "125px", marginRight: "950px" }}
          >
            <div>
              <div className="current-user-info"></div>
            </div>
          </div>
        </div>
        <Row>{returnList}</Row>
      </div>
    </div>
  );
  return myCampaignList ? myCampaignReturn : <p>No Campaign</p>;
}

function mapStateToProps(state) {
  return { token: state.token };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCampaignList: function (campaign) {
      dispatch({
        type: "addCampaign",
        campaignAdded: campaign,
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MyCampaign);
