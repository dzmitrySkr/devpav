import { Fragment, useState } from "react";


function State(){
    const [count, setCount] = useState(0);
    return(
        <Fragment>
      <h2 className="article_title">State</h2>
      <p className="content">
      State (состояние) в React – это объект простого JS, позволяющий отслеживать данные компонента. Состояние компонента может меняться. Смена состояния компонента зависит от функциональности приложения. Изменения могут основываться на ответе от пользователя, новых сообщениях с сервера, ответа сети и т.д.
        <br />
        Состояние компонента должно быть приватным для компонента и контролироваться им. Изменения состояния компонента необходимо делать внутри компонента – инициализация и обновление состояния компонента.
      </p>

      <div className="example">
        <pre>
          {`
  class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: 'johndoe' }
    }
    render() {
        return (
            <div> { this.state.username } </div>
        )
    }
}
                  `}
        </pre>
      </div>

      <p className="content">
          <span className="important">
      Единственный допустимый способ обновления состояния компонента – через {'setState()'}.</span>
      </p>
      <p className="content">
      Так <span className="important">нельзя</span> менять состояние: this.state.username='Mark'
      </p>

    <ol>
            <li className="content">способ изменить state:
                    <div className="example">
                    <pre>
                    {`
                this.setState({username:'Mark'});
                                    `}
                    </pre>
                </div>

            </li>

            <li className="content">способ изменить state:
                    <div className="example">
                    <pre>
                    {`
                this.setState(() => ({ username: 'Mark' }))
                                    `}
                    </pre>
                </div>

            </li>
    </ol>

    <p className="content">
    В <span className="important">функциональных</span>  компонентах state создается с помощью хука<span className="important">{'useState()'}</span> 
    </p>

      <div className="example">
        <pre>
          {`
    import {useState} from 'react';
                          `}
        </pre>
      </div>

      <p className="content">
       Хук useState() принимается в качестве параметра первоначальное 
       значение для переменной, а возвращает массив, содержащий переменную и функцию, которая изменяет эту переменную.<br />

При объявлении state часто используют деструктурирующее присваивание:
      </p>

      <div className="example">
        <pre>
          {`
  const [name, setName] = useState('Mark');
                          `}
        </pre>
      </div>

         <div className="count">
            <button className="count__btn" onClick={() => setCount(count - 1)}>-1</button>
            <p >Счётчик: <span className="counter">{count}</span ></p>
            <button className="count__btn" onClick={() => setCount(count + 1)}>+1</button>
         </div>
 
      <p className="content">
      Примером работы со state является счётчик, который изменяется при нажатии на кнопку.
      </p>

      <p className="content">
      Код имеет следующий вид:
      </p>

      <div className="example">
        <pre>
          {`
function Counter() {
    const [count, setCount] = useState(0);
    return (
    <div className="count">
        <button className="count__btn" onClick={() => setCount(count - 1)}>-1</button>
        <p>Счётчик: {count}</p>
        <button className="count__btn" onClick={() => setCount(count + 1)}>+1</button>
    </div>
    );
}
                          `}
        </pre>
      </div>

   
    </Fragment>
    )
}

export default State