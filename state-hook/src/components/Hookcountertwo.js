import react,{useState} from "react";
function Hookcountertwo(){
    const initialcount=0
    const[count,setcount]=useState(initialcount)
    return(
        <div>
            count:{count}
            <button onClick={()=>setcount(initialcount)}>Reset</button>
            <button onClick={()=>setcount(count+1)}>Increament</button>
            <button onClick={()=>setcount(count-1)}>Decreament</button>
            </div>
    )
}
export default Hookcountertwo;