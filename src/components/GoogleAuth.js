import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
//this is the google auth from start to finsh!! with REDUX ofcorse!!
class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '700460884611-n88rc9si21gltbiqc0j8r4banqfd7rcb.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  //this helper method diside if the user signed in OR not!!
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      //here we passed the signIn and signOut for our actions to diside if the user signIn or signOut and update the state some we connected with the reducer by connect function down in this component!!
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  //here we have a helper method to get the user to signIn!!
  onSignInClick = () => {
    this.auth.signIn();
  };
  //here we have a helper method to get the user to signOut!!
  onSignOutClick = () => {
    this.auth.signOut();
  };
  //here is our buttons with the logic some diside whact one to display!! 
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
