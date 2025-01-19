import {
    useQuery
  } from "@tanstack/react-query";
  import './FetchRq.css'
  import {  fetchPosts } from "../API/api";
  import { NavLink } from "react-router-dom";
 


export const FetchRQ = ()=>{


   const {data, isPending, isError, error} = useQuery({
  queryKey:["posts"],
  queryFn: fetchPosts, // if we pass funcion in query perentesis not needed
  // gcTime:1000,

  // staleTime:10000,  //data fresh for 10000 sec it take data from cache till only after that it send request
  // refetchInterval:1000, // it is use to refatch the data on fix intervel of time but oone problem with this code it not run in background

  // refetchIntervalInBackground:true,
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
        </>
    )
 
}