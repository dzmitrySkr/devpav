import { useState } from "react"
import Onetask from './Onetask.js'


function Mytasks(){

    //Наши задания
    let [tasks, setTasks] = useState([
        {id:0, name: 'i should throw garbige'},
        {id:1, name: 'Cut my hair'},
        {id:2, name: 'go for a walk'},
    ])

    //Интпут
    let [inp, setInp] = useState('')

    
    //Функция ДОБАВЛ
    let add = () => {
        setTasks([...tasks , {
             id: tasks.length,
             name: inp,
        }])
        setInp('')  
    } 
    //Функция УДАЛЕНИЯ
    let del = (taskname) => {
       let [serchelem] = tasks.filter((elem) => elem.name === taskname);
    //    let index_searchelem = tasks.indexOf(...tasks.filter((elem) => elem.name === taskname));
       setTasks(tasks.filter( p => p !== serchelem ));
    }

    //Функция ИЗМЕНЕНИЕ
    let change = (e, taskname) => {
    
        setTasks(tasks.map( element => element.name == taskname ? {...element, name: e.target.value} : element  ));

    }

    

    return (
    <div>

        <h1>Мои задачи</h1>
        
        {tasks.map(task => <Onetask  name = {task.name} key = {task.id} del = {del} change = {change} />)}
    
        <input onChange={(e)=> setInp(e.target.value)} value = {inp} ></input>
        <button onClick={() => add() }>Add</button>
    </div>
    
    )

}

export default Mytasks