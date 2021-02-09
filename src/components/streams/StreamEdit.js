import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    //here we fetching aicsct stream 
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    //in this line we matching what the user typed in,  the string!
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    //here we handle waiting situasion for fetching data!!
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    //here we passet initial Values to our edit component for geting the old text!! and updating that!! and the we use lodash libary to pich the initial value!!
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
//here we use ownProps to passet to sime component!!
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);