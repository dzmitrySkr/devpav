import mycontext from "./Mycontext";

function Das() {
  return (
    <div>
      <mycontext.Consumer>{(value) => <p>{value}</p>}</mycontext.Consumer>
    </div>
  );
}

export default Das;
