This project skeleton is created by [LavaX Technologies Sdn Bhd](https://lavax.co) that is great for project planning on transition from ES6 to TypeScript.

NextJs with combination of technologies that enable developers to getting started with ease.

# Used of Technologies

1.  Coding styles - `TypeScript` & `ES6` are enabled
2.  UI styles - `styled-jsx` & `styled-components`, works on both SSR & SSG
3.  UI Framework - `AntDesign`
4.  Coding Practice - `Eslint` rules for `(.ts, .tsx, .js, .jsx)`
5.  API Integration - `GraphQL (with codegen)`

# Getting Started

**Note: To install components with yarn we first need to configure @bit as a scoped registry. **
```bash
npm config set @bit:registry https://node.bit.dev
```

Available commands:

```bash
yarn build # to build

yarn start # to start production server

yarn dev # to start development server

yarn clean # to remove .next folder

yarn eslint # to run eslint rules check

yarn eslint-fix # to run eslint rules & soft fix

yarn gql-generate # to generate graphql Types, hooks, Documents based on input operations
```

Open [http://localhost:3100](http://localhost:3100) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

---

## GraphQL CodeGen

First step is change the schema url to your development server at `.codegen.yml`

```yml
schema: "http://localhost:3000/graphql"
```

Second step find the operations file at `src/graphql/operations/index.graphql` and modify it, for example

```GraphQL
fragment MerchantInfo on Merchant {
  id
  email
  firstName
  lastName
  phoneCode
  phoneNumber
  referralCode
  role
  generalStatus
  hasBusiness
  createdAt
  updatedAt
  identities {
    id
    createdAt
    updatedAt
    provider
    providerId
  }
}

query getMerchantAuthProfile {
  getMerchantAuthProfile {
    ...MerchantInfo
  }
}
```

Third Step is to generate the GraphQL Types, Documents, Hooks by running the command `yarn gql:generate`
![GraphQL Codegen](./docs/gql-generate.gif)

Fourth Step is to import any of Types, Documents, Hooks to your components or the places you wants to use it

```js
// example from src/config/getAuthProfile.ts
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
```

# About US

Check out our company profile [LavaX Technologies Sdn Bhd](https://lavax.co), and welcome to reach out for inquires.
