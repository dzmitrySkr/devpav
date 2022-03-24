import { Fragment, useState } from "react";
import mycontext from "./Mycontext";
import Das from "./Das";



function Context() {
  return (
    <Fragment>
      <h2 className="article_title">Context</h2>
      <p className="content">
        Контекст разработан для передачи данных для всего дерева
        React-компонентов, не прокидывая через пропсы.
      </p>
      <p className="content">Создать контекст: </p>
      <div className="example">
        <pre>
          {`
   const MyContext = React.createContext(defaultValue);
                  `}
        </pre>
      </div>
      <p className="content">
        defaultValue - дефолтное значение или объект для получения через
        контекст
      </p>
      <p className="content">
        Вызывая React.createContext мы получаем объект, который содержит два
        компонента:
      </p>
      <p className="content">
        1. Компонент Provider. Благодаря ему все дочерние компоненты могут
        получать значения, которые мы ему передаем.
      </p>
      <div className="example">
        <pre>
          {`
<MyContext.Provider value={value}> </MyContext.Provider>
                  `}
        </pre>
      </div>
      <p className="content">
        Компонент Provider принимает проп value, который будет передан во все
        компоненты, использующие этот контекст и являющиеся потомками этого
        компонента Provider. Один Provider может быть связан с несколькими
        компонентами, потребляющими контекст. Так же компоненты Provider могут
        быть вложены друг в друга, переопределяя значение контекста глубже в
        дереве.
      </p>
      2. Компонент Consumer - это React-компонент, который подписывается на
      изменения контекста.
      <p className="content">
        Consumer принимает функцию в качестве дочернего компонента. Эта функция
        принимает текущее значение контекста и возвращает React-компонент.
        Передаваемый аргумент value будет равен ближайшему (вверх по дереву)
        значению этого контекста, а именно пропу value компонента Provider. Если
        такого компонента Provider не существует, аргумент value будет равен
        значению defaultValue, которое было передано в createContext().
      </p>



      <div className="example">
        <pre>
          {`
        <MyContext.Consumer>
            {value => /* отрендерить что-то, используя значение контекста */}
          </MyContext.Consumer>
                  `}
        </pre>
      </div>
      <p className="content">
      Хук useContext. Принимает один параметр - это объект контекста, получаемый при вызове React.createContext и возвращает текущее значение контекста для этого контекста.
      </p>



      <p className="content">
      Текущее значение контекста определяется пропом value ближайшего MyContext.Provider над вызывающим компонентом в дереве.


      </p>
      <div className="example">
        <pre>
          {`
  const value = useContext(MyContext);
                  `}
        </pre>
      </div>

      <p className="content"><span className="important">Контекст лучше всего создавать в отдельном файле.</span> 
      </p>

      <mycontext.Provider value = 'hello my friend'>
        <Das />
      </mycontext.Provider>

      <p className="content">
      Компонент, вызывающий useContext, всегда будет перерендериваться при изменении значения контекста. Если повторный рендер компонента затратен, вы можете оптимизировать его с помощью мемоизации.


      </p>
    </Fragment>
  );
}

export default Context;
