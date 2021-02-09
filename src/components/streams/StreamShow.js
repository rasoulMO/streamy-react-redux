import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    //here we just distracture out the title & description!!
    const { title, description } = this.props.stream;

    return (
      <div>
        <h1>{title}</h1>
        <h4>{description}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //in this line we just take what we need from streams!!
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);