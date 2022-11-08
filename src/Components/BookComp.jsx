import "../Styles/bookcomp.css";
import { useBookComp } from "../Hooks/useBookComp";

function BookComp({ item, come, setFavorite, setTextbook, modal, setModal }) {
  let { disable, setToFavorite, delFromLS, read } = useBookComp(
    setFavorite,
    item,
    setTextbook,
    modal,
    setModal
  );
  return (
    <>
      <div className="book">
        <p className="item_title">{item.title}</p>
        <div onClick={() => read(item)}>
          <img
            src={
              item.resources.find((item) => {
                if (item.uri.includes("medium")) {
                  return item.uri;
                }
              })
                ? item.resources.find((item) => {
                    if (item.uri.includes("medium")) {
                      return item.uri;
                    }
                  }).uri
                : `https://raru.co.za/img/no-cover.png`
            }
            alt={item.title}
          />
        </div>

        <div className="buttons">
          <button onClick={() => read(item)}>Read</button>
          {come ? (
            <button onClick={() => delFromLS(item)}> Delete </button>
          ) : (
            <button onClick={() => setToFavorite(item)} disabled={disable}>
              {" "}
              Favorite{" "}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default BookComp;
