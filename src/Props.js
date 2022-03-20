import { Fragment } from "react";

function Props() {
  return (
    <Fragment>
      <h2 className="article_title">Props</h2>
      <p className="content">
        То, что мы называем аргументами в мире функций, в мире компонентов
        называется свойствами.
        <br />
        Функциональные компоненты свойства принимают в качестве аргумента.
        <br />
        Props представляют собой объект, содержащие свойства.
        <br />
        Обратиться к ним можно - props.имя-свойства.
        <br />
        <span className="important">Props - только для чтения.</span>
      </p>
      <div className="example">
        <pre>
          {`
   function Welcome(props) {
    return <h1>Привет, {props.name}</h1>;
}
                  `}
        </pre>
      </div>

      <p className="content">
        Классовые компоненты свойства принимают по умолчанию и обратиться к ним
        можно с помощью this.props.имя-свойства.
      </p>

      <div className="example">
        <pre>
          {`
    class Welcome extends React.Component {
    render() {
        return <h1>Привет, {this.props.name}</h1>;
    }
}
                          `}
        </pre>
      </div>
      <p className="content">
        Элементы могут описывать и наши собственные компоненты:
      </p>

      <div className="example">
        <pre>
          {`
const element = <Welcome name="Алиса" />;
                          `}
        </pre>
      </div>

      <p className="content">
        Когда React встречает подобный элемент, он собирает все JSX-атрибуты и
        дочерние элементы в один объект и передаёт их нашему компоненту. Этот
        объект называется «пропсы».
      </p>

      <p className="content">
        Например, этот компонент выведет «Привет, Алиса» на страницу:
      </p>

      <div className="example">
        <pre>
          {`
 function Welcome (props) {
    return <h1> Привет, {props.name}</h1>;
}

const element = <Welcome name="Алиса" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);
                          `}
        </pre>
      </div>

      <ol className="content">
        <li className="content">
          {" "}
          Мы передаём React-элемент {'<Welcome name="Алиса"'} в
          ReactDOM.render().
        </li>
        <li className="content">
          React вызывает наш компонент Welcome с пропсами {'{name: "Алиса"}'}.
        </li>
        <li className="content">
          Наш компонент Welcome возвращает элемент {"<h1>Привет, Алиса</h1> "} в
          качестве результата.
        </li>
        <li className="content">
          React DOM делает минимальные изменения в DOM, чтобы получилось{" "}
          {"<h1>Привет, Алиса</h1>"} .
        </li>
      </ol>
      <p className="content">
        <span className="important">
          Компонент никогда не должен что-то записывать в свои пропсы— вне
          зависимости от того, функциональный он или классовый.
        </span>
      </p>
    </Fragment>
  );
}

export default Props;
