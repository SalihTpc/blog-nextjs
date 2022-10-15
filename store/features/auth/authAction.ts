import { createAsyncThunk } from "@reduxjs/toolkit";
import commonApi from "../../../api/common.api";

export const loginAction = createAsyncThunk(
  "auth/login",
  async ({ username, email, password }: any) => {
    // const response: {
    //   success: boolean;
    //   data: {
    //     id: number;
    //     token: string;
    //     username: string;
    //     first_name: string;
    //     last_name: string;
    //     email: string;
    //   };
    //   message: string;
    // } = await commonApi.login({ username, email, password });
    const response: any = await commonApi.login({ username, email, password });

    console.log(response);

    const { success, message, data } = response;

    // if (success) {
    //   const { token, username } = data;
    //   return {
    //     success,
    //     token,
    //     username: username,
    //   };
    // } else {
    //   return {
    //     success,
    //     message,
    //     username: "",
    //     token: "",
    //   };
    // }
  }
);
