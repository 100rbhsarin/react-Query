import {
    useQuery
  } from "@tanstack/react-query";
  import './FetchRq.css'
  import {  fetchPosts } from "../API/api";
  import { NavLink } from "react-router-dom";
 


export const FetchRQ = ()=>{


   const {data} = useQuery({
  queryKey:["posts"],
  queryFn: fetchPosts, // if we pass funcion in query perentesis not needed
})

    return(
        <>
  <div>
      <ul className="section-accordion">
        {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <NavLink to={`/rq/${id}`}>
                <p>{id}</p>
                <p>{title}</p>
                <p>{body}</p>
              </NavLink>
              <button onClick={() => deleteMutation.mutate(id)}>Delete</button>
       
            </li>
          );
        })}
      </ul>

    </div>
        </>
    )
 
}