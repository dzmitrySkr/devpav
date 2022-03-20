import { Fragment, useState } from "react";

function Form() {
  return (
    <Fragment>
      <h2 className="article_title">Form</h2>
      <p className="content">
      В React мы можем использовать все стандартные элементы форм, которые есть в html, однако здесь эти элементы приобретают дополнительные возможности. Рассмотрим, как работать с формами в React.
      </p>

      <div className="example">
        <pre>
          {`
class UserForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: ""};
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    onChange(e) {
      var val = e.target.value;
      this.setState({name: val});
    }
  
    handleSubmit(e) {
      e.preventDefault();
      alert("Имя: " + this.state.name);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Имя:</label><br />
            <input type="text" value={this.state.name} onChange={this.onChange}/>
          </p>
          <input type="submit" value="Отправить" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <UserForm />,
    document.getElementById("app")
)
                  `}
        </pre>
      </div>

      <p className="content">
      Чтобы контролировать введенные значения, в конструкторе устанавливается объект state:
      </p>

      <div className="example">
        <pre>
          {`
  this.state = {name: ""};
                  `}
        </pre>
      </div>


      <p className="content">
      При определении поля ввода каждое поле связывается с определенным значением в state:
      </p>

      <div className="example">
        <pre>
          {`
         <input type="text" value={this.state.name} onChange={this.onChange} />
                  `}
        </pre>
      </div>


   

      <p className="content">
      Так, источником значения для поля ввода имени является объект this.state.name.
      </p>

      <p className="content">
      Для отслеживания изменений в поле ввода нам надо определить обработчик для события change с помощью атрибута onChange. Этот обработчик будет срабатывать при каждом нажатии клавиши клавиатуры. Если мы не определим для поля подобный обработчик, то это поле ввода будет доступно только для чтения.
      </p>

      <p className="content">
      Суть каждого обработчика заключается в изменении значений в this.state:
      </p>

    

      <div className="example">
        <pre>
          {`
  onChange(e) {
    var val = e.target.value;
    this.setState({name: val});
}
                  `}
        </pre>
      </div>

    

      <p className="content">С помощью e.target.value получаем введенное значение. После обновления новое значение this.state.name отобразится в поле ввода.</p>

      
    </Fragment>
  );
}

export default Form;
