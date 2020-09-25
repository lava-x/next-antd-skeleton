import React from "react";
import { withTranslation } from "i18n";
import TSPinNumberView from "components/TSPinNumberView";

const Page = () => {
  return (
    <>
      <h1>ES6 page with TypeScript Component</h1>
      <TSPinNumberView pin="1234567" />
    </>
  );
};

Page.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation(["common"])(Page);
