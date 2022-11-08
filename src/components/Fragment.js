import { Fragment, useState } from "react";

function Fragmentt() {
  return (
    <Fragment>
      <h2 className="article_title">Fragment</h2>
      <p className="content">
        С помощью фрагментов можно сгруппировать список дочерних элементов без
        добавления дополнительных узлов в DOM.{" "}
      </p>
      <p className="content">
        Используем React.Fragment или выполняем импорт, чтобы использовать
        Fragment:
      </p>

      <div className="example">
        <pre>
          {`
import { Fragment } from 'react';

                  `}
        </pre>
      </div>

      <p className="content">Заменяем теги div на Fragment:</p>

      <div className="example">
        <pre>
          {`
 class ChildComponent extends React.Component {
    render() {
        return (
            <Fragment>
                <h1>Hello Child Component</h1>
            </Fragment>
        )
    }
}
                  `}
        </pre>
      </div>

      <p className="content">
        Существует сокращенная запись (импортировать не нужно):
      </p>

      <div className="example">
        <pre>
          {`
class ChildComponent extends React.Component {
    render() {
        return (
            <>
                <h1>Hello Child Component</h1>
            </>
        )
    }
}
                  `}
        </pre>
      </div>

      <p className="content">
        Недостаток сокращенной записи: нельзя использовать атрибут key.
      </p>
    </Fragment>
  );
}

export default Fragmentt;
