import React from 'react';
import { connect } from 'react-redux';



class UserHeader extends React.Component {

    render() {
        //after the refatcering we passed find method and the whole props to the mapStateToProps function , and in this case we get use of ownProps!! some are used when ever we have to passed in sime component!!
       // const user = this.props.users.find(user => user.id === this.props.userId);
        const { user } = this.props;
        if (!user) {
            return null;
        }
        return (
            <div className="header">{user.name}</div>
        );    
    };
};

const mapStateToProps = (state, ownProps) => {
    //here we use find method to get that spesific user!! and we passed as a props to the component!!
    return { user: state.users.find( user => user.id === ownProps.userId)};
};


export default connect(mapStateToProps)(UserHeader);