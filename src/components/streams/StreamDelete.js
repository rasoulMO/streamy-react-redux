import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
//here we have a delete oprition component!! wihe modal!!
class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    //here we use React.Fragment to get redd of css issues!!
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    //here we condisionaly render the content!
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return (
      <div>
          Are you sure you want to delete the stream with title: <h1>{this.props.stream.title}</h1>  
      </div>  
    );
  }

  render() {
    //our Modal have onDismiss propety some alowe the user to click i any point and that going to get him to cansal and take him to the old page!!
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}
//here we take just what we need from streams!!
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
