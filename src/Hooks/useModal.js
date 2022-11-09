import { useEffect, useState } from "react";
import "../Styles/modal.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/action/editAction";

export function useModal(modal, setModal, setFavorite) {
  //контролируемые параметры нашего инпута
  let dispatch = useDispatch();
  let [request, setRequest] = useState("");
  let [name, setName] = useState("");
  let [sort, setSort] = useState("date");
  let [count, setCount] = useState(12);
  let token = localStorage.getItem("token");
  let { edit } = useSelector((store) => store);

  //Если у нас есть обьект EDIT, значит мы зашли со стороны редактирования поиска, а значит
  // мы в инпут заносим те value которые у нас в обьекте поиска
  useEffect(() => {
    edit && setRequest(edit.request);
    edit && setName(edit.name);
    edit && setSort(edit.sort);
    edit && setCount(edit.count);
  }, [modal]);

  //При сохронении заносим в LS
  let saveModal = () => {
    //Если у нас в модалку передался обьект то значит мы в модалку зашли для редактирования,
    //а значит при сохранении нам надо заменить имеющийся обьект. Меняем мы его так: В LS ищем  обьект
    // который мы сохранили в редакс, и меняем его на тот который у нас записан в модалке.
    if (edit) {
      localStorage.setItem(
        token,
        JSON.stringify([
          ...JSON.parse(localStorage.getItem(token)).map((item) =>
            item.request === edit.request
              ? { request: request, name: name, sort: sort, count: count }
              : item
          ),
        ])
      );
    } else {
      if (request && name && sort && count && token) {
        localStorage.getItem(token)
          ? localStorage.setItem(
              token,
              JSON.stringify([
                ...JSON.parse(localStorage.getItem(token)),
                { request: request, name: name, sort: sort, count: count },
              ])
            )
          : localStorage.setItem(
              token,
              JSON.stringify([
                { request: request, name: name, sort: sort, count: count },
              ])
            );
      }
    }
    //Закрываем модалку и очищаем инпуты
    setModal(!modal);
    setRequest("");
    setName("");
    //очищаем наш стор, для того чтобы когда мы в модалку зашли со стороны сохранения (не редактирования), в инпутах у нас было пусто
    dispatch(addItem(""));

    //Синхронизируем наш LS с нашей переменной которую мы парсим для показа сохраненных поисков
    setFavorite(JSON.parse(localStorage.getItem(token)));
  };

  let closeModal = () => {
    //При зкрытии окна закрываем модалку очищаем инпуты, удаляем обьект редактирования
    setModal(!modal);
    setRequest("");
    setName("");
    dispatch(addItem(""));
  };

  return {
    dispatch,
    request,
    setRequest,
    name,
    setName,
    setSort,
    count,
    setCount,
    saveModal,
    closeModal
  };
}
