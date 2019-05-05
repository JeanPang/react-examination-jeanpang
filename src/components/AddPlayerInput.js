import React, { Component } from 'react';
import './AddPlayerInput.css';

class AddPlayerInput extends Component {
  render() {
    return (
      <form 
        onSubmit={this.submitForm} 
        className="formAddPlayerInput"
      >
        <input
          type="text"
          name="name"
          autoFocus={true}
          className="form_control"
          placeholder=" Type the name of a player "
          value={this.state.formControls.name} 
          onChange={(e) => {
            this.handleChange(e);
          }}
        />

        <select 
          name="position"  
          value={this.state.formControls.position} 
          onChange={(e) => {
            this.handleChange(e);
          }}
          className="btn_select"
        >
        　<option value="SF">SF</option>
        　<option value="PG">PG</option>
        </select>

        <input 
          type="submit" 
          value="add"
          className="btn_add"
        />
      </form>
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      formControls: {
          name: this.props.name || '',
          position: 'SF',
      }
  }
  }

  submitForm=(e)=>{
    e.preventDefault()
    if (this.state.formControls.name.length !== 0){
      this.props.addPlayer(this.state.formControls.name, this.state.formControls.position);
    }

    this.setState({ 
      formControls: {
        name: '',
        position: 'SF',
      }
    });
  }

  handleChange=(e)=> {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      formControls: {
          ...this.state.formControls,
          [name]: value,
      }
    });
  }
}

export default AddPlayerInput;
