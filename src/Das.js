import mycontext from "./Mycontext"

function Das({callback}){

return(

    <div>
<mycontext.Consumer>
    {value => <p>{value}</p>}
</mycontext.Consumer>
  
    </div>
    )
}

export default Das