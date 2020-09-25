import Head from "next/head";
import { withTranslation } from "i18n";
// import { MyAppContext } from "@types";

const Home = (props) => {
  const { authUser } = props;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      My QR
      <br />
      {authUser && `${authUser.firstName} ${authUser.lastName}`}
    </>
  );
};

Home.getInitialProps = async (/* context: MyAppContext */) => {
  return {
    namespacesRequired: ["common"]
  };
};

export default withTranslation(["common"])(Home);
