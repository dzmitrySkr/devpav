import { useEffect, useState } from "react";
import "../styles/tableline.css";

function TableTitleLine({ sortByName, sortByDate }) {
  let [sortOnName, setSortOnName] = useState(true);
  let [sortOnDate, setSortOnDate] = useState(true);

  return (
    <div className="line title_line">
      <div className="name line_item">
        Full name{" "}
        <span
          onClick={() => sortByName(setSortOnName, setSortOnDate)}
          className={sortOnName ? "unicode" : "unicode unicode_off"}
        >
          &#9650;
        </span>
      </div>
      <div className="telrgram line_item">Telegram</div>
      <div className="instagram line_item">Instagram</div>
      <div className="login line_item">Login</div>
      <div className="modul_name line_item">Moduls</div>
      <div className="start_date line_item">
        Start date{" "}
        <span
          onClick={() => sortByDate(setSortOnDate, setSortOnName)}
          className={sortOnDate ? "unicode start" : "unicode unicode_off start"}
        >
          &#9650;
        </span>
      </div>
      <div className="action line_item">Действие</div>
      <div className="change line_item"></div>
    </div>
  );
}

export default TableTitleLine;
