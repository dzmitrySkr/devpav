import "../Styles/loading.css";

function LoadingBcg({ users }) {
  return (
    <>
      <div className={users.length === 0 ? "spinner" : "spinner dis"}>
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

export default LoadingBcg;
