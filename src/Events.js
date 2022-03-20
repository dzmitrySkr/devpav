import { Fragment, useState } from "react";

function Events() {
  let [isToggleOn, setIsToggleOn] = useState(true);
  function handleClick() {
    setIsToggleOn(!isToggleOn);
  }

  return (
    <Fragment>
      <h2 className="article_title">Events</h2>
      <p className="content">
        События в React именуются в стиле camelCase вместо нижнего регистра.
      </p>
      <p className="content">
        С JSX вы передаёте функцию как обработчик события вместо строки.
      </p>
      <p className="content">
        Популярные обработчики событий: onClick, onChange
      </p>
      <p className="content">
        Существует множество поддерживаемых событий, вот общий список:
      </p>

      <ul>
        <li className="content">Буфер обмена: onCopy, onCut, onPaste</li>
        <li className="content">
          Составление/ввод данных: onCompositionEnd, onCompositionStart,
          onCompositionUpdate
        </li>
        <li className="content">Клавиатура: onKeyDown, onKeyPress, onKeyUp</li>
        <li className="content">Фокусировка: onFocus, onBlur</li>
        <li className="content">Форма: onChange, onInput, onSubmit</li>
        <li className="content">
          Мышь: onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd,
          onDragEnter, onDragExit, onDragLeave, onDragOver, onDragStart, onDrop,
          onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut,
          onMouseOver, onMouseUp
        </li>
        <li className="content">Выделение: onSelect</li>
        <li className="content">Касание: onTouchCancel, onTouchEnd, onTouchMove, onTouchStart</li>
        <li className="content">UI: onScroll</li>
        <li className="content">Колёсико мышки: onWheel</li>
        <li className="content">
          Медиа: onAbort, onCanPlay, onCanPlayThrough, onDurationChange,
          onEmptied, onEncrypted, onEnded, onError, onLoadedData,
          onLoadedMetadata, onLoadStart, onPause, onPlay, onPlaying, onProgress,
          onRateChange, onSeeked, onSeeking, onStalled, onSuspend, onTimeUpdate,
          onVolumeChange, onWaiting
        </li>
        <li className="content">Изображение: onLoad, onError</li>
        <li className="content">
          Анимация: onAnimationStart, onAnimationEnd, onAnimationIteration
        </li>
        <li className="content">Переход: onTransitionEnd</li>
      </ul>

      <div className="example">
        <pre>
          {`
    <button onClick={activateLasers}>
    Активировать лазеры
    </button>
                    `}
        </pre>
      </div>

      <p className="content">
        В React нельзя предотвратить обработчик события по умолчанию, вернув
        false. Нужно явно вызвать preventDefault.
      </p>

      <div className="example">
        <pre>
          {`
 function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('Отправлена форма.');
    }
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Отправить</button>
      </form>
    );
}
                    `}
        </pre>
      </div>

      <p className="content">
        В компоненте, определённом с помощью ES6-класса, в качестве обработчика
        события обычно выступает один из методов класса. Например, этот
        компонент Toggle рендерит кнопку, которая позволяет пользователю
        переключать состояния между «Включено» и «Выключено»:
      </p>

      <div className="example">
        <pre>
          {`
     class Toggle extends React.Component {
        constructor(props) {
          super(props);
          this.state = {isToggleOn: true};
      
          // Эта привязка обязательна для работы 'this' в колбэке.
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
        }

        render() {
            return (
                <button className={'toggle__btn'} onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'Включено' : 'Выключено'}
                </button>
            );
        }
    }

            ReactDOM.render(
            <Toggle />,
            document.getElementById('root')
            );
                    `}
        </pre>
      </div>

      <p className="content">Результат кода:</p>

      <button className={"toggle__btn"} onClick={() => handleClick()}>
        {isToggleOn ? "Включено" : "Выключено"}
      </button>

      <p className="content">Этот же код на функциональных компонентах:</p>

      <div className="example">
        <pre>
          {`
     function Toggle() {
        let [isToggleOn, setIsToggleOn] = useState(true);
        function handleClick() {
          setIsToggleOn(!isToggleOn)
        }
        return (
          <button className={'toggle__btn'} onClick={() => handleClick()}>
            {isToggleOn ? 'Включено' : 'Выключено'}
          </button>
        );
      }
                    `}
        </pre>
      </div>

      <p className="content">
        Внутри цикла часто нужно передать дополнительный аргумент в обработчик
        события. Например, если id — это идентификатор строки, можно
        использовать следующий вариант:
      </p>

      <div className="example">
        <pre>
          {`
   <button onClick={(e) => deleteRow(id, e)}>Удалить строку</button>
   `}
        </pre>
      </div>
    </Fragment>
  );
}

export default Events;
