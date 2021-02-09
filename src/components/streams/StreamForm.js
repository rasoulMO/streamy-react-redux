import React from 'react';

//here we use redux form so we have to imported!! 
//Field component is a React component!! reduxForm is going to do all the work automaticly for us! and it's work like a connect function!!
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {

  //this helper method is going to diside when showing the error to the user!! we take touched and error form meta object!! and we distracter it like so!! 
  renderError({touched, error}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  //here is a helper method some take a formProps from reduxForm libary!! and here we destructer our formProps
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    //here is the shorter syntax!! when ervr we want to use the redux-form we allways have to use this syntax becuse it has ather prepates we might needed in the feuter!! return {...formProps.input }
    //meta is an object some are responseble for ERROR and it's take error string for const validate and render that on the screen!!
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input}  autoComplete='off'/>
        {this.renderError(meta)}
      </div>
    );

      //<input
      //  onChange={formProps.input.onChange}
      //  value={formProps.input.value}
        
     // />
    //)
  }

  onSubmit = (formValus) => {
    this.props.onSubmit(formValus)
  }

  render() {
    //in the onSubmit we passed a handleSubnit function some comning with the redux-form!! 
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    )  
  }
}

const validate =  formValus => {
  const errors = {};

  if (!formValus.title) {
    errors.title = "You must enter a title"
  }

  if (!formValus.description) {
    errors.description = "You must enter a descriptin"
  }

  return errors;
}


//so here we hooked the reduxForm function sime like connect!!


//export default reduxForm({
  //here we hvae to put the configeracion-- the prepes of the form!!
  //form: "StreamForm",
  //validate: validate
//})(StreamForm);

//we use this syntax when we have a connect function and a redux-form function!!

export default reduxForm({
  //here we hvae to put the configeracion-- the prepes of the form!!
  form: "StreamForm",
  validate: validate
})(StreamForm);


