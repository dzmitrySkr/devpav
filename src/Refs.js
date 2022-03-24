import { Fragment, useEffect, useRef, useState } from "react";


function Refs() {


let sss = useRef()

useEffect(()=>{
    sss.current.focus()
})




  return (
    <Fragment>
      <h2 className="article_title">Refs</h2>
      <p className="content">
        Refs («ссылки») предоставляет способ доступа к DOM-узлам или
        React-элементам, созданным в методе {"render()"} .
      </p>

      <input ref = {sss}></input>

      <p className="content">
        Есть несколько хороших примеров использования Refs:
      </p>

      <ul className="content">
        <li className="content">
          Управление фокусом, выделение текста или воспроизведение
          медиаресурсами.
        </li>
        <li className="content">Выполнение анимаций в императивном подходе.</li>
        <li className="content">
          Интеграция со сторонними библиотеками, взаимодействующие с DOM.
        </li>
      </ul>

      <p className="content">
        Refs создаются с использованием React.createRef() и добавляются к
        React-элементам с помощью атрибута ref. Ссылки обычно присваиваются
        свойству экземпляра, когда компонент создаётся таким образом, чтобы на
        них можно было ссылаться по всему компоненту.
      </p>

      <div className="example">
        <pre>
          {`

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return <div ref={this.myRef} />;
    }
}
                  `}
        </pre>
      </div>

      <p className="content">
        В функциональных компонентах используется хук useRef:
      </p>

      <div className="example">
        <pre>
          {`
import { useRef } from 'react';

function MyComponent () {
    const refContainer = useRef(initialValue);
    return (
        <div ref={refContainer} />
    );
}
                  `}
        </pre>
      </div>

      <p className="content">
        useRef возвращает изменяемый ref-объект, свойство .current которого
        инициализируется переданным аргументом (initialValue). Возвращённый
        объект будет сохраняться в течение всего времени жизни компонента.
      </p>
    </Fragment>
  );
}

export default Refs;
