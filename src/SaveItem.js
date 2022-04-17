import './saveitem.css'

function SaveItem({item}){

//как вызвать эту функцию в MAINPAGE и туда переключиться
    return(
        <div onClick={()=> serchfromFP(item.request, item.count, item.sort )} className="item">
        <p>{item.name}</p>
        </div>
    )
}

export default SaveItem