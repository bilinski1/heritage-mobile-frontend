import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "./api";
import jwtDecode from "jwt-decode";
import axios from "axios";


const initialState = {
    loading: false,
    user: null,
    userToken: null,
    error: null,
    success: false,
    isLoggedIn: false,
    email: null,
    userName: null,
    password: "mmmm"
  }


export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, {rejectWithValue}) => {

      try {
          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
          await axios.post(
            "http://localhost:8080/users/newuser",
            user,
            config
          )          
        } catch (error) {
        // return custom error message from backend if present
          if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
          } else {
            return rejectWithValue(error.message)
          }
        }
      }

    )


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSignIn: (state, action) => {

      state.email = action.payload.email;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userName = action.payload.userName;

  },
    setSignOut: (state) => {
      state.email = null;
      state.userName = null;
      state.isLoggedIn = false;
  }
  },
})
    /*
    name: 'auth',
    initialState: { 
        user: null, 
        token: null,
        name: null,
        _id: null,
        registerStatus: null,
        registerError: null,
        loginStatus: null,
        loginError: null,
        userLoaded: false,
    },
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            return { ...state, registerStatus: "pending"}
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if(action.payload){
                
                const user = jwtDecode(action.payload)

                return{
                    ...state,
                    token: action.payload,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    registerStatus: "success"
                }
            }else return state
        });
        builder.addCase(registerUser.rejected, (state, action) => {
                return{
                    ...state,
                    registerStatus: "rejected",
                    registerError: action.payload
                }
        });
    }
})
*/

      
      /*
        try{
            const token = await axios.post('http://127.0.0.1:8080/users/newuser', { firstName, email, password });

            localStorage.setItem("token", token.data)

            return token.data

        } catch(err){
            console.log(err.response.data);
            return rejectWithValue(err.response.data);
        } 
    } 
) */
export const { setSignIn, setSignOut } = authSlice.actions;
//export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
//export const selectEmail = (state) => state.userAuth.email;
//export const selectUserName = (state) => state.userAuth.userName;
export const useSelector = (state) => state.auth;
export default authSlice.reducer;