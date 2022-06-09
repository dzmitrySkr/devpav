import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Tags({ activeTasks, tegSearch }) {
  let [tags, setTags] = useState([]);
  //с помощью useSelector достаем из редьюсера наш объект(стор)
  let app = useSelector((state) => state.reducer.tasks);

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
      {tags.map((e) => (
        <p onClick={() => tegSearch(e.slice(1).toLowerCase())}>{e}</p>
      ))}
    </div>
  );
}

export default Tags;
