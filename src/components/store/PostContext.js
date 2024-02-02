import { createContext, useContext, useState } from "react";

const PostContext=createContext(null);

export function PostContextProvider({children}){
    const [postDetails,setPostDetails]=useState({});

    return (
        <PostContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </PostContext.Provider>
    )
}
export function usePostDetail(){
    return useContext(PostContext);
}

