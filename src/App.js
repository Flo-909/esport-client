import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfileInfluencer from "views/ProfilePage/ProfileInfluencer.js";
import ProfileBrand from "views/ProfilePage/ProfileBrand.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignUpBrand from "views/signUp/SignUpBrand.js";
import SignUpInfluencer from "views/signUp/SignUpInfluencer.js";
import CreateCampaign from "views/Campagne/CreateCampaign.js";
import ChoiceInfluencer from "views/Campagne/ChoiceInfluencer.js";
import RequestInfluencer from "views/Campagne/RequestInfluencer.js";
import MyNetwork from "views/MessengerPage/Components/MyNetwork";
import Messaging from "views/MessengerPage/Components/Messaging";
import Login from "views/MessengerPage/Components/Login";
import SelectInfluencer from "views/SelectInfluencer/SelectInfluencer";
import SelectCampagne from "views/Campagne/SelectCampagne.js";
import CampaignApply from "views/Campagne/CampaignApply.js";
import MyCampaign from "views/Campagne/MyCampaign.js";

const hist = createBrowserHistory();

const App = ({ token, role }) => {
  
  const RenderRoute = () => {
    if (token && role === "influenceur") {
      return (
        <Switch>
          <Route path="/" exact component={ProfileInfluencer} />
          <Route path="/sign-up/influencer" exact component={SignUpInfluencer} />
          <Route path="/profile-influencer" exact component={ProfileInfluencer}/>
          <Route path="/sign-up/brand" exact component={SignUpBrand} />
          <Route path="/select-campaign" exact component={SelectCampagne} />
          <Route path="/campaign-apply/:id" exact component={CampaignApply} />
          <Route
            path="/request-influencer-list"
            exact
            component={RequestInfluencer}
          />
          <Route
            path="/profile-influencer"
            exact
            component={ProfileInfluencer}
          />
          <Route path="/select-campaign" exact component={SelectCampagne} />
          <Route path="/campaign-apply/:id" component={CampaignApply} />
          <Route
            path="/request-influencer-list"
            exact
            component={RequestInfluencer}
          />
          <Route path="/login-page" exact component={LoginPage} />
          <Redirect to="/" />
        </Switch>
      );
    } else if (token && role === "brand") {
      return (
        <Switch>
          <Route path="/" exact component={CreateCampaign} />
          <Route path="/create-campaign" exact component={CreateCampaign} />
          <Route path="/mycampaign" exact component={MyCampaign} />
          <Route path="/profile-brand" exact component={ProfileBrand} />
          <Route path="/select-influencer" exact component={SelectInfluencer} />
          <Route path="/choiceinfluencer" exact component={ChoiceInfluencer} />
          <Route path="/login-page" exact component={LoginPage} />
          <Redirect to="/" />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login-page" exact component={LoginPage} />
          <Route path="/sign-up/brand" exact component={SignUpBrand} />
          <Route
            path="/sign-up/influencer"
            exact
            component={SignUpInfluencer}
          />
          <Redirect to="/" />
        </Switch>
      );
    }
  };

  return <Router history={hist}>{RenderRoute()}</Router>;
};

function mapStateToProps(state) {
  return { token: state.token, role: state.role };
}

export default connect(mapStateToProps, null)(App);

{
  /* <Route path="/login-page" exact component={LoginPage} />
<Route path="/sign-up/influencer" exact component={SignUpInfluencer} />
<Route path="/sign-up/brand" exact component={SignUpBrand} />
<Route path="/" exact component={LandingPage} />
<Route path="/select-campaign" exact component={SelectCampagne} />
<Route path="/mynetwork" exact component={MyNetwork} />
<Route path="/messaging" exact component={Messaging} />
<Route path="/login-messagerie" exact component={Login} />
<Route path="/create-campaign" exact component={CreateCampaign} />
<Route path="/mycampaign" exact component={MyCampaign} />
<Route path="/profile-brand" exact component={ProfileBrand} />
<Route path="/select-influencer" exact component={SelectInfluencer} />
<Route path="/choiceinfluencer" exact component={ChoiceInfluencer} />
<Route path="/profile-influencer" exact component={ProfileInfluencer} />
<Route path="/select-campaign" exact component={SelectCampagne} />
<Route path="/campaign-apply/:id" component={CampaignApply} />
<Route
  path="/request-influencer-list"
  exact
  component={RequestInfluencer}
/> */
}
