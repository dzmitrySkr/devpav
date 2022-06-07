import "../styles/loading.css";

function Loading({ userSearch }) {
  return (
    <>
      <div className={userSearch.length === 0 ? "spinner" : "spinner dis"}>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </>
  );
}

export default Loading;
