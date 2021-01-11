import React, { useState, useEffect } from "react";
import {Link, Redirect} from 'react-router-dom'
import Button from "components/CustomButtons/Button.js";
import { Row } from 'reactstrap'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/Test15.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import Campaign from './campaign'
import HeaderLinksInfluencer from "components/Header/HeaderLinksInfluencer";

const useStyles = makeStyles(styles);

function SelectCampagne(props) {

const [campaignList, setCampaignList] = useState([])

useEffect(() => {
    async function fetchData() {
    const response = await fetch(process.env.REACT_APP_BACKEND + '/get-campaign', {
        method: 'GET',
        headers: {'Content-Type': 'application/x-www-form-urlencoded',
        cache: 'default'},
      })
    console.log(response)
    const jsonResponse = await response.json()
    console.log('jsonResponse', jsonResponse)
    setCampaignList(jsonResponse.campaignListItem)
}
fetchData()
  }, [])

    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const { ...rest } = props;

    var campaignListItems = campaignList.map((campaign, i) => {
        return (<Campaign key={i} campaignId={campaign._id} campaignName={campaign.campaignName} campaignDesc={campaign.description} campaignImg={campaign.img} globalRating={campaign.note} globalCountRating={campaign.vote} campaignUpload={campaign.uploadedDoc} />)
    })

    return (
        <div>            
            <Header
                absolute
                color="transparent"
                brand="Esport-Influence"
                rightLinks={<HeaderLinksInfluencer />}
                fixed
                changeColorOnScroll={{
                    height: 100,
                    color: "dark"
                }}
                {...rest}             
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <Row>
                        {campaignListItems}
                    </Row>
                </div>  
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { token: state.token }
}

export default connect(
    mapStateToProps,
    null
)(SelectCampagne)