import { AppContext } from "next/app";
import { NextPageContext } from "next";

interface MyAppContext extends AppContext {
  apolloClient?: any;
  authUser?: any;
}

interface MyPageContext extends NextPageContext {
  apolloClient?: any;
  authUser?: any;
}
