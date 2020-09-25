import get from "lodash/get";
import { GetMerchantAuthProfileDocument } from "app-graphql";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export default (
  apolloClient: ApolloClient<NormalizedCacheObject>
): Promise<{ authUser: any }> => {
  return apolloClient
    .query({
      query: GetMerchantAuthProfileDocument
    })
    .then(({ data }) => {
      const authUser = get(data, "getMerchantAuthProfile", null);
      return { authUser };
    })
    .catch(() => {
      // Fail gracefully
      return { authUser: null };
    });
};
