import React, {Component} from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      comment: '',
      flavor: 'op2'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value.toUpperCase()
    });
  }

  handleSelect(e) {
    this.setState({
      flavor: e.target.value
    });
  }

  handleComment(e) {
    this.setState({
      comment: e.target.value
    });
  }

  handleSubmit(e) {
    alert('The name is ' + this.state.name +
           '\nThe comment is: ' + this.state.comment +
           '\nThe flavor is: ' + this.state.flavor);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor='name'>Name: </label>
          <input id='name' type='text' value={this.state.name} onChange={this.handleChange}></input>
        </p>
        <p>
          <label htmlFor='comment'>Comment: </label>
          <textarea id='comment' placeholder='Please enter your comments!' onChange={this.handleComment} value={this.state.comment} />
        </p>
        <p>
          <label htmlFor='flavor'>Flavor: </label>
          <select id='flavor' value={this.state.flavor} onChange={this.handleSelect}>
            <option value='op1'>op1</option>
            <option value='op2'>op2</option>
            <option value='op3'>op3</option>
            <option value='op4'>op4</option>
          </select>
        </p>
        <p>
          <input type='submit' value='submit' />
        </p>
      </form>

    );
  }
}


export default NameForm;
