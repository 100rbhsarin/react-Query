import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../API/api";


export const InfiniteScroll = () => {


    const {data, hasNextPage, fetchNextPage,} = useInfiniteQuery ({
        queryKey : ["users"],
        queryFn: fetchUsers,
        getNextPageParam: (lastPage,allpages)=>{
console.log("lastPage",lastPage, allpages);
return lastPage.length === 10 ? allpages.length + 1 : undefined
        },
    })
       
    console.log(data)

       const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1;

      if (bottom && hasNextPage) {
        fetchNextPage();
      }
    };

    return (
        <>
        <div>
      

      {data?.pages?.map((page, index) => (
        <ul key={index}>
          {page.map((user) => (
            <li
              key={user.id}
              style={{ padding: "10px", border: "1px solid #ccc" }}
            >
              <p>{user.login}</p>
              <img
                src={user.avatar_url}
                alt={user.login}
                width={50}
                height={50}
              />
            </li>
          ))}
        </ul>
      ))}
   
    </div>
        </>
    )
}
