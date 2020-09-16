import React from "react";
import "./list.scss";

const formatDate = (date) => {
  if (date === '') {
    return '';
  }

  let newDate = new Date(`${date}`);

  return new Intl.DateTimeFormat(
    'pt-BR',
    {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    },
  ).format(newDate);
};

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/people")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="list-main">
          <div className="title-list">
              Lista de Cadastro
          </div>
          <div className="record headers">
            <div className="column">
              &nbsp;
            </div>
            <div className="column">
              NOME
            </div>
            <div className="column">
              E-MAIL
            </div>  
            <div className="column">
            NASCIMENTO
            </div>  
            <div className="column">
              TELEFONE
            </div>  
          </div>

          {items.map(item => (
            <div className="record" key={item.id}>
              <div className="column">
                {item.id}
              </div>
              <div className="column">
                {item.name}
              </div>
              <div className="column">
                {item.email}
              </div>
              <div className="column">
                {formatDate(item.birth_date)}
              </div>
              <div className="column">
                {item.phone}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}