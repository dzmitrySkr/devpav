import { Fragment, useState } from "react";

function UseEffect() {
  return (
    <Fragment>
      <h2 className="article_title">UseEffect</h2>
      <p className="content">
        Для использования методов жизненного цикла в функциональных компонентах
        предназначек хук useEffect.
      </p>

      <div className="example">
        <pre>
          {`
import {useEffect} from 'react';
                  `}
        </pre>
      </div>

      <p className="content">
        Хук позволяет использовать 3 метода жизненного цикла:
      </p>

      <ul className="content">
        <li className="content">ComponentDidMount()</li>
        <li className="content">componentDidUpdate(prevProps, prevState)</li>
        <li className="content">componentWillUnmount()</li>
      </ul>

      <p className="content">
        UseEffect принимает в качестве первого параметра функцию, в качестве
        второго - {"[ ] (аналог componentDidMount)."}
      </p>

      <div className="example">
        <pre>
          {`
  useEffect ( () => { }, [])
                  `}
        </pre>
      </div>

      <p className="content">
        UseEffect принимает в качестве первого параметра функцию, в качестве
        второго - массив с зависимостью (или несколькими) (аналог
        componentDidUpdate).
      </p>

      <div className="example">
        <pre>
          {`
    useEffect ( () => { }, [name])
                  `}
        </pre>
      </div>

      <p className="content">
        UseEffect принимает в качестве первого параметра функцию, второго
        параметра - нет (аналог componentDidMount + componentDidUpdate).
      </p>

      <div className="example">
        <pre>
          {`
   useEffect ( () => { } )

                  `}
        </pre>
      </div>

      <p className="content">
        UseEffect принимает в качестве первого параметра функцию, которая
        возвращает другую функцию (аналог componentWillUnmount).
      </p>

      <div className="example">
        <pre>
          {`
 useEffect ( () => {
    return () => {};
})
                  `}
        </pre>
      </div>
    </Fragment>
  );
}

export default UseEffect;
