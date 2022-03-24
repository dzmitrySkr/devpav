import { Fragment, useEffect, useState } from "react";


function Lifestyle() {


const [data, dataSet] = useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('http://hp-api.herokuapp.com/api/characters')
      response = await response.json()
      let b = JSON.stringify(response)
      dataSet(response)
    }
    fetchMyAPI()
  })


  return (
    <Fragment>
    
 
      <div> {data.map(el => <div>{el.name}</div>)}</div>

      <h2 className="article_title">LifeStyle</h2>
      <p className="content">Основные методы жизненного цикла:</p>

      <p className="content">
        <span className="important">1. {"constructor ()"}</span>
      </p>

      <p className="content">
        Обычно в React конструкторы используются только для двух целей:
      </p>
      <ul className="content">
        <li className="content">
          Инициализация локального состояния путем присвоения объекта
          this.state.
        </li>
        <li className="content">
          Привязка методов обработчика событий к экземпляру.
        </li>
      </ul>

      <div className="example">
        <pre>
          {`
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
}
                  `}
        </pre>
      </div>

      <p className="content">
        В функциональных класах метода ЖЦ constructor нету
      </p>

      <p className="content">
        <span className="important">2. {"render ()"}</span>
      </p>

      <p className="content">Рендеринг компонента. Отдает JSX.</p>

      <div className="example">
        <pre>
          {`
    render () {
    return (
        <div>
            'Hello'
        </div>
    )
}
                  `}
        </pre>
      </div>

      <p className="content">В функциональных класах метода ЖЦ render нету</p>

      <p className="content">
        <span className="important">3. {" componentDidMount()"}</span>
      </p>

      <p className="content">
        componentDidMount() вызывается сразу после монтирования компонента
        (вставки в дерево). Используется для отправки запросов на серверк
        удаленным ресурсам, setTimeout, обращение к DOM-элементам.
      </p>

      <div className="example">
        <pre>
          {`
    componentDidMount()
                  `}
        </pre>
      </div>

      <p className="content">
        В функциональных компонентах {"useEffect ( () => { }, [])"}
      </p>

      <p className="content">
        <span className="important">
          4. {"componentDidUpdate(prevProps, prevState)"}
        </span>
      </p>

      <p className="content">
        Вызывается после обновления компонента. В качестве параметров передаются
        старые значения объектов: props и state.
      </p>

      <div className="example">
        <pre>
          {`
   componentDidUpdate(prevProps, prevState) {
    if (this.props.userID !== prevProps.userID) {
        this.fetchData(this.props.userID);
    }
}
                  `}
        </pre>
      </div>

      <p className="content">
        В функциональных компонентах {"useEffect ( () => { }, [name])"}
      </p>

      <p className="content">
        <span className="important">5. {"componentWillUnmount()"}</span>
      </p>

      <p className="content">
        Вызывается перед удалением компонента из DOM. Используется для закрытия
        асинхронных запросов, таймеров.
      </p>

      <div className="example">
        <pre>
          {`
    componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
}
                  `}
        </pre>
      </div>

      <p className="content">
        В функциональных компонентах {" useEffect ( () => {return () => {};})"}
      </p>
    </Fragment>
  );
}

export default Lifestyle;
