import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Tags({ tegSearch }) {
  //Массив тегов
  let [tags, setTags] = useState([]);
  //С помощью useSelector достаем из редьюсера наш объект(стор)
  let app = useSelector((state) => state.reducer.tasks);

  //проверяем есть ли там #, и если есть закидываем в массив
  useEffect(() => {
    let arr = [];
    let a = app.map((e) => {
      return e.text.split(" ").filter((e) => e.includes("#"));
    });
    a.forEach((element) => {
      arr.push(...element);
    });
    setTags(arr);
  }, [app]);

  return (
    <div className="tags_box">
      { tags.map((e) => (
        <p onClick={() => tegSearch(e.slice(1).toLowerCase())}>{e}</p>
      ))}
       {tags.length === 0 && <p>not found any tags</p>}
    </div>
  );
}

export default Tags;
