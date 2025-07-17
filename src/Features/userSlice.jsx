import { createSlice } from "@reduxjs/toolkit";

const initialStateLocal = localStorage.getItem("userSliceData");

const initialState = initialStateLocal
  ? JSON.parse(initialStateLocal)
  : {
      loginInfo: {
        username: "Ohakwe Great",
        emailOrPhone: "chibuikegreatohakwe84@gmail.com",
        password: "random-password1234",
        address: "Lagos, Nigeria",
        isSignIn: true,
      },
      signedUpUsers: [
        {
          username: "Ohakwe Great",
          emailOrPhone: "lily.wastons@gmail.com",
          password: "chibuikegreatohakwe84@gmail.com",
        },
      ],
    };

const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    newSignUp: (state, { payload }) => {
      state.signedUpUsers = payload;
      state.loginInfo.isSignIn = true;
    },
    setLoginData: (state, { payload }) => {
      state.loginInfo = { ...payload };
      state.loginInfo.isSignIn = true;
    },
    signOut: (state) => {
      const guestData = {
        username: "",
        emailOrPhone: "",
        password: "",
      };
      state.loginInfo = guestData;
      state.loginInfo.isSignIn = false;
    },
    updateUserData: (state, { payload }) => {
      Object.assign(state.loginInfo, payload.updatedUserData);
    },
  },
});

export const { newSignUp, setLoginData, signOut, updateUserData } =
  userSlice.actions;
export default userSlice.reducer;
