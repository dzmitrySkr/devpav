

function EditButtons({prev,next, editPage }) {

    return(
        <div className="list_buttons">
        <button disabled={!prev} onClick={() => editPage(prev)}>
          Prev
        </button>
        <button disabled={!next} onClick={() => editPage(next)}>
          Next
        </button>
      </div>
    )
    
}


export default EditButtons