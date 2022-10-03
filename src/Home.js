import { useState } from "react";
import List from "./List";

const Home = () => {
    const [items,setItems]=useState([]);
    const [item,setItem]=useState('');

    const handleClick=(e)=>{
        e.preventDefault();
        console.log(item)
        const newItems=[...items,item];
       setItems(newItems);
       setItem('');
    }

    const handleDelete=(id)=>{
        const newItems=items.filter((item,idx)=> idx !==id );
        console.log(newItems)
        setItems(newItems);
    }
    return (
         <div className="container">
            <h2 className="text-center">Todo-List</h2>
            <form onSubmit={handleClick}>
                <input type="text" required value={item} onChange={(e)=>setItem(e.target.value)}/>
                <button className="primary">Add</button>
            </form>
            {items && <List items={items} handleDelete={handleDelete}/>}
        </div>
         );
}
 
export default Home;