import get from "lodash/get";
import {
  SIGN_IN_PATH,
  NOT_FOUND_PATH,
  DEFAULT_PATH_AFTER_SIGN_IN,
  DEFAULT_PATH_BEFORE_SIGN_IN,
  ONBOARDING_PATH,
  PATHS_ONLY_ALLOWED_BEFORE_AUTH,
  PATHS_NOT_ALLOWED_AFTER_AUTH,
  PATHS_FOR_ADMIN_ONLY,
  NO_LAYOUT_PATH
} from "config/constant";
import checkAuthProfile from "config/getAuthProfile";
import { AuthOptions } from "@lava-x/next-js";

const authOptions: AuthOptions = {
  checkAuthProfile,
  // getAuthToken: getTokenFromCookies,
  syncAuthEventKeyName: "signout",
  logging: true,
  enableAdmin: false,
  enableOnboarding: true,
  enableNotFoundRedirection: true,
  valueKeyOnboard: "hasBusiness",
  checkRequiredOnboard: (authUser) => {
    const hasBusiness = get(authUser, "hasBusiness", false);
    return !hasBusiness;
  },
  paths: {
    signInPath: SIGN_IN_PATH,
    notFoundPath: NOT_FOUND_PATH,
    afterAuthPath: DEFAULT_PATH_AFTER_SIGN_IN,
    beforeAuthPath: DEFAULT_PATH_BEFORE_SIGN_IN,
    onboardingPath: ONBOARDING_PATH,
    allowedBeforeAuthPaths: PATHS_ONLY_ALLOWED_BEFORE_AUTH,
    restrictAfterAuthPaths: PATHS_NOT_ALLOWED_AFTER_AUTH,
    allowedAdminPaths: PATHS_FOR_ADMIN_ONLY,
    noLayoutPaths: NO_LAYOUT_PATH
  }
};

export default authOptions;
