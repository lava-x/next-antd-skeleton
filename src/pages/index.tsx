import Head from "next/head";
import { withTranslation } from "i18n";
import HomeScreen from "screens/Home";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeScreen {...props} />
    </>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation(["common"])(Home);
