import PostApis from '../service/postApis';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const postApis = new PostApis();

const initialState = {
    posts:{
        writeId:null,
        writeName:null,
        postId:null,
        likeId:[],
        content:null,
        imgUrl:null,
        time:null,
    },
    isFetch:true,
}

export const loadPostFB = createAsyncThunk("api/postsload",
    async () =>{
        const result = await postApis.getPost();
        const postList = result.sort( (a,b) => a.postId - b.postId)
        return postList
    }
)

export const writePostFB = createAsyncThunk("api/posts",
    async (data,thunkAPI) =>{
        await postApis.addPost(data);
    }
)

export const deletePostFB = createAsyncThunk("ppi/delete",
    async (data,thunkAPI) =>{
        console.log(data)
        await postApis.deletePost(data)
    }
)

export const likePostFB = createAsyncThunk("api/posts/like",
    async (data,thunkAPI)=>{
        await postApis.likePost(data)
    }
)

const posts = createSlice({
    name:"posts",
    initialState:{
        posts:[],
        isFetch:false,
        msg:null
    },
    extraReducers:{
        [loadPostFB.pending]:(state,action)=>{
            state.status = 'loading'
        },
        [loadPostFB.fulfilled]:(state,action)=>{
            state.status = 'success'
            state.posts = action.payload
            state.isFetch = true
        },
        [loadPostFB.rejected]:(state,action)=>{
            state.status = 'fail'
        },
        [writePostFB.pending]:(state)=>{
            state.status = 'success'
            state.isFetch = false
        },
        [writePostFB.fulfilled]:(state)=>{
            state.status = 'success'
            state.isFetch = true
            state.msg ="글작성을 완료했습니다."
        },
        [deletePostFB.pending]:(state)=>{
            state.status = 'success'
            state.isFetch = false
        },
        [deletePostFB.pending]:(state)=>{
            state.status = 'success'
            state.isFetch = true
            state.msg ="글삭제를 완료했습니다."
        }
    }
})




export default posts.reducer