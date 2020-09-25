import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const graphqlBaseUrl =
  publicRuntimeConfig.graphqlBaseUrl || "http://localhost:3000/graphql";

const graphqlSubscriptionUrl =
  publicRuntimeConfig.graphqlSubscriptionUrl || "ws://localhost:3000/graphql";

// graphql
export const GRAPHQL_ENDPOINT = graphqlBaseUrl;
export const GRAPHQL_SUBSCRIPTION_ENDPOINT = graphqlSubscriptionUrl;

// default path after login
export const DEFAULT_PATH_AFTER_SIGN_IN = "/account";

// default path before login
export const DEFAULT_PATH_BEFORE_SIGN_IN = "/signin";

// path for login page
export const SIGN_IN_PATH = "/signin";

// page not found page
export const NOT_FOUND_PATH = "/404";

// onboarding path
export const ONBOARDING_PATH = "/onboarding";

// path accessible by public
// by default, this works as a whitelist.
// everything else that is not listed here will not be accessible by the public
export const PATHS_ONLY_ALLOWED_BEFORE_AUTH = [
  "/",
  SIGN_IN_PATH,
  "/forget-password",
  "/reset-password/[token]",
  "/signup",
  "/404",
  "/get-started",
  "/es6-pure",
  "/es6-with-ts-component"
];

// restricted path that can't be accessed if user has already signed in
export const PATHS_NOT_ALLOWED_AFTER_AUTH = [SIGN_IN_PATH, "/signup"];

export const PATHS_FOR_ADMIN_ONLY = ["/app"];

export const NO_LAYOUT_PATH = [SIGN_IN_PATH, "/signup", "/get-started"];

// default country code (to integrate with switching location in CMS in the future)
export const COUNTRY_CODE = "MY";

// Google Analytics Tracking ID
export const GA_TRACKING_ID = "";
