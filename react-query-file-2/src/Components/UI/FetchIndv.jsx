import { useQuery } from "@tanstack/react-query"
import { NavLink, useParams } from "react-router-dom"
import { fetchInvPost } from "../../API/api"

export const FetchIndv = ()=>{

    const {id} = useParams()
    
   const {data, isPending, isError, error} = useQuery({
    queryKey:["post"],
    queryFn: ()=>fetchInvPost(id),
})


if(isPending) return <p>Loading...</p>
if(isError) return <p>Error: {error.message || "Something Went Wrong!"}</p>

    return (
    
    <>
    <h1>{id}</h1>
    <ul>
       <li>
        <p>ID : {data.id}</p>
        <p>Title: {data.title}</p>
        <p>Body : {data.body}</p>
       </li>
      </ul>
      <NavLink to='/rq'>
        <button>Go Back</button>
      </NavLink>
    </>
)

}