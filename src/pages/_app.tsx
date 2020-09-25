import compose from "lodash/flowRight";
import App, { AppProps } from "next/app";
import { Modal } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { appWithTranslation } from "i18n";
import { DashboardPanel } from "@bit/lavax.lxnext.lxantd";
import { withAuthSync, withApolloClient } from "@bit/lavax.lxnext.lxnext";
import { MyAppContext, MyPageContext } from "@types";
import apolloOptions from "config/apollo.config";
import authOptions from "config/auth.config";
import { menus, headerMenus } from "config/layout.config";
import Logo from "assets/Logo.svg";
import LogoBrand from "assets/logo-brand.png";
import "styles/styles.less";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { config, authUser } = pageProps;

  const onActionSignOut = () => {
    Modal.confirm({
      title: "Are you want to signout?",
      icon: <LogoutOutlined />,
      centered: true,
      okButtonProps: {
        type: "primary"
      },
      onOk() {
        if (pageProps.signOutAuthUser) {
          pageProps.signOutAuthUser();
        }
      }
    });
  };

  return (
    <DashboardPanel
      theme="light"
      indicatorColor="#f85656"
      title="Lava X"
      heading="Admin Panel"
      fixedHeader
      enableSider
      logo={LogoBrand}
      brand={Logo}
      config={config}
      authUser={authUser}
      sideMenus={menus}
      headerMenus={headerMenus}
      isSiderExpand={false}
      onActionSignOut={onActionSignOut}>
      <Component {...pageProps} />
    </DashboardPanel>
  );
};

MyApp.getInitialProps = async (context: MyAppContext) => {
  const { Component, authUser } = context;
  if (Component.getInitialProps) {
    const pageContext: MyPageContext = { ...context.ctx, authUser };
    return {
      ...(await Component.getInitialProps(pageContext))
    };
  }
  return { ...(await App.getInitialProps(context)) };
};

export default compose(
  appWithTranslation,
  withApolloClient({ ssr: true, options: apolloOptions }),
  withAuthSync({ ssr: true, options: authOptions })
)(MyApp);
