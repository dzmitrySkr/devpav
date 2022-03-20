import { Fragment, useState } from "react";

function Memo() {
  return (
    <Fragment>
      <h2 className="article_title">React.Memo</h2>
      <p className="content">
      React.memo — это компонент высшего порядка.
      </p>
      <p className="content">
      Компонент высшего порядка — это функция, которая принимает компонент и возвращает новый компонент.
      </p>

      <div className="example">
        <pre>
          {`

const MyComponent = React.memo(function MyComponent(props) {
    /* рендер с использованием пропсов */
});
                  `}
        </pre>
      </div>

      <p className="content">Если ваш компонент всегда рендерит одно и то же при неменяющихся пропсах, вы можете обернуть его в вызов React.memo для повышения производительности в некоторых случаях, мемоизируя тем самым результат. Это значит, что React будет использовать результат последнего рендера, избегая повторного рендеринга.</p>
      <p className="content">
      React.memo затрагивает только изменения пропсов. Если функциональный компонент обёрнут в React.memo и использует useState, useReducer или useContext, он будет повторно рендериться при изменении состояния или контекста.
      </p>


      <p className="content">
      По умолчанию он поверхностно сравнивает вложенные объекты в объекте props. Если вы хотите контролировать сравнение, вы можете передать свою функцию сравнения в качестве второго аргумента.
      </p>
      <div className="example">
        <pre>
          {`
  function MyComponent(props) {
    /* рендер с использованием пропсов */
  }
  function areEqual(prevProps, nextProps) {
    /*
    возвращает true, если nextProps рендерит
    тот же результат что и prevProps,
    иначе возвращает false
    */
}
export default React.memo(MyComponent, areEqual);
                  `}
        </pre>
      </div>

      <p className="content">
      Этот метод предназначен только для оптимизации производительности.

Аналогом в классовых компонентах выступает метод shouldComponentUpdate()
      </p>

      <div className="example">
        <pre>
          {`
   shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual (nextProps, this.props) ||
           !shallowEqual (nextState, this.state);
}
                  `}
        </pre>
      </div>

    
    </Fragment>
  );
}

export default Memo;
