export default function TodoElement(props){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const [todo, setTodo] = useState({
        id: '01',
        inhalt: 'Das ist ein ToDO',
        done: false,
    })



    // Das ausgewählte Element editieren
    function editTodo(){
        setTodo((item) => ({ 
        ...item,
        inhalt: props.inhalt
    }))   
    }

    // Switch das Element zwischen Open und Done
    function setStatus(){
        if(todo.done === false){
        setTodo((preserve) => ({
            ...preserve,
            done: true,
        }))
        }else{
            setTodo((preserve) => ({
                ...preserve,
                done: false,
            }))
        }
    }
    // Remove Elements
    function delTodo(i){
                
    }
return(
    <>
        <li id='{todo.id}'>
        <p>
        {todo.inhalt}
        </p>
        <button onClick={editTodo}></button>
        <button onClick={delTodo}></button>
        <button onClick= {setStatus}></button>
        </li>
    </>
)
}


//     const list = [{
//         id: '01',
//         inhalt: 'Das ist ein ToDO',
//         status: false
//     },
//     {
//         id: '02',
//         inhalt: 'Das ist 2. ToDO',
//         status: true
//     }
// ]



// const htmldata1= '<li class="todoitem" id="todoitem"><div class="midli" id="midli"><p class="litx" id="litxt">';
// const htmldata2='</p><div class="libuttons" id="libuttons"><button class="editbtn" id="editbtn"><img src="/icons/pen-to-square-regular.svg" alt=""></button><button class="delbtn" id="delbtn"><img src="/icons/trash-solid.svg" alt=""></button><button class="donebtn" id="donebtn" data-done="">Done</button></div></div></li>';