const List = ({items,handleDelete}) => {
    return (<ul>
       { items.map((item,id)=><li key={id}>{item} <button onClick={()=>handleDelete(id)}>Del</button></li>)
    }</ul>  );
}
 
export default List;