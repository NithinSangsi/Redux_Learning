import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,reset} from './store/slices/ReduxCounterSlice.js'
function ReduxCounter(){
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    function incrementValue()
    {
        dispatch(increment("Increased by 1"))
    }    
    function decrementValue()
    {
        dispatch(decrement("Decreased by 1"))
    }
    function resetValue()       
    {
        dispatch(reset("Reset to 0"))
    }

    return(
        <>
        <h1 style ={{color:'blue', display:'flex', gap:'10px', justifyContent:'center',fontSize:'100px'}}>Redux Counter</h1>
        <h2 style ={{color:'blue', display:'flex', justifyContent:'center',fontSize:'100px'}}>{count}</h2>
        <h2 style ={{fontSize:'30px', display:'flex', justifyContent:'center',color:'blue'}}>{`performed action : ${useSelector(state => state.counter.performedAction)}`}</h2>
        <div style ={{display:'flex', justifyContent:'center', gap:'20px', marginTop:'20px'}}>
            <button style ={{color:'blue', display:'flex', justifyContent:'center',fontSize:'50px',borderRadius:'10px'}} onClick={()=>{incrementValue()}}>increment</button>
            <button style ={{color:'blue', display:'flex', justifyContent:'center',fontSize:'50px',borderRadius:'10px'}} onClick={()=>{resetValue()}}>reset</button>
            <button style ={{color:'blue', display:'flex', justifyContent:'center',fontSize:'50px',borderRadius:'10px'}} onClick={()=>{decrementValue()}}>decrement</button>
        </div>
        </>
    )
}
export default ReduxCounter