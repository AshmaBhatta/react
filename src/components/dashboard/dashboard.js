import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import history from '../history';
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
            <br/>
            <br/>
              <b>Hey there,</b> {user.firstName.split(" ")[0]}
              <p className="flow-text black-text text-darken-1">
                You are logged into kidney donation{" "}
                <span style={{ fontFamily: "monospace" }}></span> 
              </p>
            </h4>
            <button style={{
                width: "10rem",
                height:"8rem",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginBottom: "2rem"
              }}
              onClick ={()=> history.push('/donor')}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3">
              Click Here to Donate

            </button>
            <button style={{
                width: "10rem",
                height:"8rem",
                borderRadius: "3px",
                letterSpacing: "1px",
                marginBottom: "2rem"
              }}
              onClick ={()=> history.push('/create')}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3">
              Click Here For Kidney

            </button>
           
            <button style={{
                width: "10rem",
                height:"8rem",
                borderRadius: "3px",
                letterSpacing: "1px",
                marginBottom: "2rem"
              }}
              onClick ={()=> history.push('/index-create')}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3">
             Update Donors

            </button>
            
            <button style={{
                width: "10rem",
                height:"8rem",
                borderRadius: "3px",
                letterSpacing: "1px",
                marginBottom: "2rem"
              }}
              onClick ={()=> history.push('/index-donor')}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3">
             View Donors

            </button>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "20rem"
                
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);