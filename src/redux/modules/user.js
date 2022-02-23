import UserApis from '../service/userApis';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
const userApis = new UserApis();


const initialState = {
    user : {
        id:null,
        name:null,
    },
    isLogin:false,
    errorMsg:null,
}

// export const loginFB = createAsyncThunk("api/login",
//     async (data,thunkAPI)=>{
//         try{
//             const result = await userApis.login(data);
//             if(result.ok==true){
//                  여기서 페이지 이동
//                 return result
//             }else{
//                 return 
//             }
//         }catch(error){//예외처리 
//             alert(error);
//             return thunkAPI.rejectWithValue(error.response.message);
//                     //그냥 에러를 보내주는게 아니라 내가 원하는 메세지 전송하려고
//         }
// })

export const joinFB = createAsyncThunk("api/join",
    async (data,thunkAPI)=>{
    const result = await userApis.join(data);
    return result
})


export const loginFB = createAsyncThunk("api/login", //로그인 미들웨어
        async (data,thunkAPI)=>{
            const result = await userApis.login(data);
            return result
        }
    )


export const logoutFB = createAsyncThunk("api/logout",
    async ()=>{
        const result = userApis.logOut();
        return result
})

export const userStatus = createAsyncThunk("api/logout",
    () =>{
        const result = userApis.userStatus();
        return result
})

export const user = createSlice({
    name : "user",
    initialState,
    extraReducers : {
        //회원가입
        [joinFB.pending.type]: (state)=>{
            state.status = "loading"
        },
        [joinFB.fulfilled.type]: (state,action)=>{
            state.status = "success"
            state.user = action.payload.user
            state.isLogin = action.payload.isLogin
        },
        [joinFB.pending.type]: (state)=>{
            state.status = "fail"
        },

        //로그인
        [loginFB.pending.type]: (state)=>{
            state.status = "loading"
        },
        [loginFB.fulfilled.type]: (state,action)=>{
            state.status = "success"
            state.user = action.payload.user
            state.isLogin = action.payload.isLogin
        },
        [loginFB.pending.type]: (state)=>{
            state.status = "fail"
        },

        //로그아웃
        [logoutFB.pending.type]: (state)=>{
            state.status = "loading"
        },
        [logoutFB.fulfilled.type]: (state,action)=>{
            state.status = "success"
            state.user = action.payload.user
            state.isLogin = action.payload.isLogin
        },
        [logoutFB.pending.type]: (state)=>{
            state.status = "fail"
        },
        
        //로그인 되있는지 확인
        [userStatus.pending.type]: (state)=>{
            state.status = "loading"
        },
        [userStatus.fulfilled.type]: (state,action)=>{
            state.status = "success"
            state.user = action.payload.user
            state.isLogin = action.payload.isLogin
        },
        [userStatus.pending.type]: (state)=>{
            state.status = "fail"
        },
    }}
)


export default user.reducer