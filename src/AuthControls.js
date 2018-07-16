import React, { Component } from 'react';

class AuthControls extends Component {
  constructor(props){
    super(props)
    this.state = {userData:null}
  }

  componentDidMount() {
    let authed = !!this.props.client.authedId();
    if (authed) {
      this.props.client.userProfile()
      .then(userData=>{
        this.setState({userData:userData.data})
      })
    }
  }

  render() {
    let authed = !!this.props.client.authedId();
    let logout = () => this.props.client.logout().then(() => window.location.reload());
    return (
      <div>
        {authed
          ? <div className="login-header">
              {this.state.userData && this.state.userData.picture
                ? <img src={this.state.userData.picture} className="profile-pic" />
                : null}
              <span className="login-text">
                <span className="username">
                  {this.state.userData && this.state.userData.name ? this.state.userData.name : "?"}
                </span>
              </span>
              <div>
                <a className="logout" href="#" onClick={() => logout()}>
                  sign out
                </a>
              </div>
            </div>
          : null}
        {!authed
          ? <div className="login-links-panel">
              <h2>Navigating Trash in NYC</h2>

              <div
                onClick={() => this.props.client.authenticate("facebook")}
                className="signin-button"
              >
                <div className="facebook-signin-logo" />
                <span className="signin-button-text">
                  Sign in with Facebook
                </span>
              </div>
            </div>
          : null}
      </div>
    );
  }
};

export default AuthControls;