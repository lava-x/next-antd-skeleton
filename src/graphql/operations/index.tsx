/**
 * GraphQL Operations will overwrite this file
 */
import gql from "graphql-tag";

export const MerchantInfoFragmentDoc = gql`
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
  }
`;

export const GetMerchantAuthProfileDocument = gql`
  query getMerchantAuthProfile {
    getMerchantAuthProfile {
      ...MerchantInfo
    }
  }
  ${MerchantInfoFragmentDoc}
`;
