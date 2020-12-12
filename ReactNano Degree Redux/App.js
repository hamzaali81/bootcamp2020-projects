import React from 'react';
import { connect } from 'react-redux';
import add from './Redux/Actions';

const App=(props)=> {
  console.log('props***',props);
  // console.log(updateUser);
  return (
    <div>
       <h1>Hello</h1>
      <h2>{props.user.user}</h2>
      <button onClick={()=>props.updateUser()}>Click Me</button>
    </div>
  );
}

const mapStateToProps = (state)=>{
  console.log(state);     
  return  {
        user: state.reducer
       }
}

const mapDispatchToProps= (dispatch)=>{
  // console.log();
  return {
      updateUser: ()=> {dispatch(add())}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
