import {
    useQuery
  } from "@tanstack/react-query";
  import './FetchRq.css'
  import {  fetchPosts } from "../API/api";
  import { NavLink } from "react-router-dom";
import { useState } from "react";
 


export const FetchRQ = ()=>{
const [pageNumber,setPageNumber] = useState(0)

   const {data, isPending, isError, error} = useQuery({
  queryKey:["posts", pageNumber],
  queryFn: ()=>fetchPosts(pageNumber), // if we pass funcion in query perentesis not needed
  // gcTime:1000,

  // staleTime:10000,  //data fresh for 10000 sec it take data from cache till only after that it send request
  // refetchInterval:1000, // it is use to refatch the data on fix intervel of time but oone problem with this code it not run in background

  // refetchIntervalInBackground:true,// so wee add this to run update in background
})

if(isPending) return <p>Loading...</p>
if(isError) return <p>Error: {error.message || "Something Went Wrong!"}</p>


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
       
            </li>
          );
        })}
      </ul>

    </div>

    <button>prev</button>
    <h2>{pageNumber}</h2>
<button onClick={()=>setPageNumber(pageNumber((prev)=> prev+1) )}>Next</button>
        </>
    )
 
}