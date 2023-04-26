
function List (props){
    
    return(
        <div>
            {props.value.map( (E)=>{
            return( <p key={E}> {E}</p>
             
        
            );
           
        })}
        </div>
    )
}
export default List;