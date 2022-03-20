import { Fragment } from "react";

function Components() {
  return (
    <Fragment>
      <h2 className="article_title">Components</h2>
      <p className="content">
        Компоненты React — это многократно иcпользуемые фрагменты
        JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).
        <br />
        Компоненты бывают функциональные и классовые.
        <br />
        Проще всего объявить React-компонент как функцию:
        <br />
      </p>
      <div className="example">
        <pre>
          {`
function Welcome() {
  return <h1>Привет, мир! </h1>;
                `}
        </pre>
      </div>

      <p className="content">
        Эта функция — компонент, потому что она получает данные в одном объекте
        («пропсы») в качестве параметра и возвращает React-элемент. Мы будем
        называть такие компоненты «функциональными», так как они буквально
        являются функциями.
      </p>
      <p className="content">Ещё компоненты можно определять как классы ES6:</p>

      <div className="example">
        <pre>
          {`
    class Welcome extends React.Component {
    render() {
        return <h1>Привет, мир!</h1>;
    }
}
                        `}
        </pre>
      </div>
        <p className="content">
            Компонента должна себя вести как чистая функция.
        </p>

        <p className="content">
        «Чистой» называется функция, которая:
        </p>

        <ol className="content">
            <li className="content">Для одинаковых входных данных всегда возвращает один результат.</li>
            <li className="content">Не имеет побочных эффектов (то есть не изменяет внешние состояния).</li>
            <li className="content">Не зависит от внешних состояний.</li>
        </ol>

    </Fragment>
  );
}

export default Components;
