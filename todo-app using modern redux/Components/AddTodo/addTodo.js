import React from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../../Redux/Actions';
import List from '../../Components/List/list';

function AddTodo(props) {
    // const handleChange=(e)=>{
    //     console.log(e.target.value);
     
    // }
    console.log(props);

    return (
        <div>
            <form onSubmit={(e)=> {
                   e.preventDefault();
                //    console.log(userInput);
                    console.log(e.target.value)
                    let input = e.target.userInput.value;
                    props.dispatch(addTodo(input))
                    e.target.userInput.value = ''

    }}
                >
                <input type="text" name="userInput" /><br/>
                {/* <input type="text" name="userInput" value={handleChange}/><br/> */}
            <button>Submit</button>
            <List />
            </form>
        </div>
    )
}


export default connect()(AddTodo);