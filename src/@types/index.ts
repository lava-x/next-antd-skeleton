import { AppContext } from "next/app";
import { NextPageContext } from "next";

export interface MyAppContext extends AppContext {
  apolloClient?: any;
  authUser?: any;
}

export interface MyPageContext extends NextPageContext {
  apolloClient?: any;
  authUser?: any;
}
