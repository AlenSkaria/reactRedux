import { createSlice } from "@reduxjs/toolkit";


const initialState =[
    {id:'1', title:'Learn', content:'hello hai user'},
    {id:'2', title:'Learn redux', content:'its redux time'}
]


const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        
    }
})

export const selectAllPosts = (state)=> state.posts;

export default postsSlice.reducer;
