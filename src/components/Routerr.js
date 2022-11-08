import { Fragment, useState } from "react";

function Routerr() {
  return (
    <Fragment>
      <h2 className="article_title">Routing</h2>
      <p className="content">
        Для того чтобы скачать библиотеку Router необходимо в командной строке
        прописать{" "}
        <span className="important">npm install react-router-dom</span>
      </p>

      <p className="content">
        Для того чтобы создать ссылку на определенную страницу необходимо
        использовать компонент LINK из библиотеки react-router-dom:
      </p>

      <div className="example">
        <pre>
          {`
 <Link to={"/"}>
 <div className="item home active">home </div>{" "}
</Link>
                  `}
        </pre>
      </div>

      <p className="content">
        в атрибуте to мы указываем на какую страничку мы будем переходить
      </p>

      <p className="content">
        Конструкция ниже показывает на какой компонент переключается роутер в
        зависимости от того на какой страничке 'path' мы находимся
      </p>

      <div className="example">
        <pre>
          {`
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="components" element={<Components />} />
  <Route path="props" element={<Props />} />
  <Route path="state" element={<State />} />
  <Route path="lifestyle" element={<Lifestyle />} />
  <Route path="events" element={<Events />} />
  <Route path="key" element={<Key />} />
  <Route path="refs" element={<Refs />} />
  <Route path="asrequest" element={<Asrequest />} />
  <Route path="vdom" element={<Vdom />} />
  <Route path="fragment" element={<Fragment />} />
  <Route path="reactmemo" element={<Memo />} />
  <Route path="useeffect" element={<useEffect />} />
  <Route path="router" element={<Routerr />} />
  <Route path="context" element={<Context />} />
  <Route path="form" element={<Form />} />
</Routes>
                  `}
        </pre>
      </div>

      <p className="content">
        Для того чтобы работали все компоненты неоходимо обернуть линки и роуны
        в компонент {"<BrowserRouter>"}
      </p>
      <p className="content">
        Если мы вводим несуществующий маршрут, например highway, нужно
        отобразить компонент Whoops404. Мы будем использовать * как значение
        пути, а компонент — как элемент:
      </p>

      <div className="example">
        <pre>
          {`
 function App() {
    return (
        <div>
             <Routes>
                <Route path="/" element={<Home />} />
                <Route  path="/about"  element={<About />} />
                <Route  path="/events"  element={<Events />}  />
                <Route  path="/products"  element={<Products />}  />
                <Route  path="/contact"  element={<Contact />}  />
                <Route path="*" element={<Whoops404 />} />
            </Routes>
         </div>
    );
}
                  `}
        </pre>
      </div>
    </Fragment>
  );
}

export default Routerr;
