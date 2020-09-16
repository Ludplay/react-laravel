import React from "react";
import "./form.scss";

export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        birth_date: '',
        phone: ''
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value    
      });
    }

    handleSubmit(event) {

      event.preventDefault();
      
      const data = new FormData(event.target);
      
      fetch("http://127.0.0.1:8000/people", {
        method: 'POST',
        body: data,
      })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
  
    render() {
      return (
        <div className="todo">
          <form onSubmit={this.handleSubmit}>
            <div className="title">
              Cadastro
            </div>
            <div>
              <div className="input-container">
                <label className="label-container">
                    Nome
                    <input name="name" type="text" onChange={this.handleInputChange} />
                </label>
              </div>
            </div>
            <div>
              <div className="input-container">
                <label className="label-container">
                    Email
                    <input name="email" type="email" onChange={this.handleInputChange}  />
                </label>
              </div>
            </div>
            <div>
              <div className="input-container">
                <label className="label-container">
                    Nascimento
                    <input name="birth_date" type="text" onChange={this.handleInputChange} />
                </label>
              </div>
            </div>
            <div>
              <div className="input-container">
                <label className="label-container">
                    Telefone
                    <input name="phone" type="tel" onChange={this.handleInputChange} />
                </label>
              </div>
            </div>

            <button type="submit" className="btn-submit">CADASTRAR</button>
          </form>
        </div>
      );
    }
  }