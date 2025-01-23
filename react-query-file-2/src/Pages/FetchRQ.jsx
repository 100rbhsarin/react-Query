import {
  keepPreviousData,
    useMutation,
    useQuery,
    useQueryClient
  } from "@tanstack/react-query";
  import './FetchRq.css'
  import {  deletePost, fetchPosts, updatePost } from "../API/api";
  import { NavLink } from "react-router-dom";
import { useState } from "react";
 


export const FetchRQ = ()=>{
const [pageNumber,setPageNumber] = useState(0)

const queryClient = useQueryClient();

   const {data, isPending, isError, error} = useQuery({
  queryKey:["posts", pageNumber],//useState
  queryFn: ()=>fetchPosts(pageNumber), // useEffect if we pass funcion in query perentesis not needed

  placeholderData: keepPreviousData, // it is use to keep the previous data till the new data is not fetched

  // gcTime:1000,

  // staleTime:10000,  //data fresh for 10000 sec it take data from cache till only after that it send request
  // refetchInterval:1000, // it is use to refatch the data on fix intervel of time but oone problem with this code it not run in background

  // refetchIntervalInBackground:true,// so wee add this to run update in background
})


//mutation function DELETE THE POST
const deletMutation = useMutation({
  mutationFn:(id) => deletePost(id),
  onSuccess:(data, id) => {
    queryClient.setQueriesData(["posts", pageNumber],(curElem)=>{

      return curElem?.filter((post) => post.id !== id)
    })
  } })


  //mutation function updating THE POST
const updateMutation = useMutation({
  mutationFn:(id) => updatePost(id),
  onSuccess:(apiData, postId) => {
    console.log(apiData ,postId)

    queryClient.setQueryData(["posts", pageNumber], (postsData) => {
      return postsData?.map((curPost) => {
        return curPost.id === postId
          ? { ...curPost, title: apiData.data.title }
          : curPost;
      });
    });
  },
});

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
  <button onClick={()=>deletMutation.mutate(id)}>DELET</button>
  <button onClick={()=>updateMutation.mutate(id)}>UPDATE</button>
            </li>
          );
        })}
      </ul>

    </div>

<div className="pagination-section container">
    <button 
disabled = {pageNumber === 0 ? true : false}
onClick={()=>setPageNumber((prev)=> prev - 3)}>
  Prev
</button>

    <p>{pageNumber/3+1}</p>

<button 
onClick={()=>setPageNumber((prev)=> prev + 3)}>
  
  Next
  </button>
</div>
        </>
    )
 
}