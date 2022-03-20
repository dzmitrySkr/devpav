import React from "react";


// function Home({name}){
//     return(
//         <div className="image_container">
//             <h2>Home Page {name}</h2>
//             <img className="image" src="https://trello.com/1/cards/62165b9ba7f370112ea29f3c/attachments/62165b9ea7f370112ea2a657/previews/62165b9ea7f370112ea2a65f/download/React1_(1).png"></img>
//         </div>
//     )
// }



class Home extends React.Component{

    state = {
        counter:5,
    };

    render (){
        return(
            <div>
                <p>hoome {this.props.name}</p><br/>
                
                <p>{this.state.counter}</p>
                <button onClick={() => this.setState( (state) =>({counter: state.counter +1})  )}>avav</button>
            </div>
        )
    }
}

export default Home