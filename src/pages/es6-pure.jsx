import React from "react";
import { withTranslation } from "i18n";
import ES6Component from "src/components/ES6PinNumberView";

const Page = () => {
  return (
    <>
      <h1>PURE ES6 page with ES6 Component</h1>
      <ES6Component pin="1234567" />
    </>
  );
};

Page.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation(["common"])(Page);
