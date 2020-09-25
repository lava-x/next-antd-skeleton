import React from "react";
import { Avatar } from "antd";
import {
  GlobalOutlined,
  LineChartOutlined,
  LogoutOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  CodepenOutlined
} from "@ant-design/icons";
import { MenuItemOption } from "@bit/lavax.lxnext.lxhelpers";

export const headerMenus: MenuItemOption[] = [
  {
    key: "languages",
    icon: <GlobalOutlined />,
    authentication: false,
    submenu: [
      {
        key: "lang-en",
        title: "🇺🇸 English",
        tooltip: "English",
        onActionClick: (e: any, context: any): void => {
          // eslint-disable-next-line
          console.log("onActionClick lang ----->", e, context);
        }
      },
      {
        key: "lang-cn",
        title: "🇨🇳 简体中文",
        tooltip: "Chinese",
        onActionClick: (e: any, context: any): void => {
          // eslint-disable-next-line
          console.log("onActionClick lang ----->", e, context);
        }
      }
    ]
  },
  {
    key: "account",
    icon: <Avatar icon={<UserOutlined />} />,
    title: (context: any): string => {
      const { authUser } = context;
      if (!authUser) return null;
      return `Hi ${authUser.firstName} ${authUser.lastName}`;
    },
    authentication: true,
    submenu: [
      {
        key: "account-profile",
        icon: <UserOutlined />,
        title: "Account",
        path: "/account",
        tooltip: "Account"
      },
      {
        key: "account-settings",
        icon: <SettingOutlined />,
        title: "Settings",
        path: "/settings",
        tooltip: "Settings"
      },
      { key: "some-divider", type: "divider" },
      {
        key: "account-signout",
        icon: <LogoutOutlined />,
        title: "Signout",
        onActionClick: (e: any, context: any): void => {
          if (context.onActionSignOut) {
            context.onActionSignOut();
          }
        }
      }
    ]
  }
];

export const menus: MenuItemOption[] = [
  {
    key: "es6",
    type: "menu",
    icon: <CodepenOutlined />,
    title: "ES6",
    path: "/es6-pure",
    includes: ["/es6-pure"]
  },
  {
    key: "es6-with-ts-component",
    type: "menu",
    icon: <CodepenOutlined />,
    title: "ES6 with TS component",
    path: "/es6-with-ts-component",
    includes: ["/es6-with-ts-component"]
  },
  {
    key: "dashboard",
    type: "menu",
    icon: <LineChartOutlined />,
    title: "Dashboard",
    path: "/app/dashboard",
    includes: ["/app/dashboard"],
    authentication: true
  },
  {
    key: "product-catalog",
    type: "menu",
    icon: <ShopOutlined />,
    title: "Catalog",
    path: "/products",
    authentication: true,
    includes: [
      "/app/products/collections",
      "/app/products/collections/[type]",
      "/app/products/inventory",
      "/app/products/package",
      "/app/products/category",
      "/app/products/brand"
    ],
    submenu: [
      {
        key: "collection",
        type: "menu",
        title: "Collection",
        path: "/app/products/collections",
        includes: [
          "/app/products/collections",
          "/app/products/collections/[type]"
        ]
      },
      {
        key: "inventory",
        type: "menu",
        title: "Inventory",
        path: "/app/products/inventory",
        includes: ["/app/products/inventory"]
      },
      {
        key: "package",
        type: "menu",
        title: "Package",
        path: "/app/products/package",
        includes: ["/app/products/package"]
      },
      {
        key: "category",
        type: "menu",
        title: "Category",
        path: "/app/products/category",
        includes: ["/app/products/category"]
      },
      {
        key: "brand",
        type: "menu",
        title: "Brand",
        path: "/app/products/brand",
        includes: ["/app/products/brand"]
      }
    ]
  },
  {
    key: "orders",
    type: "menu",
    icon: <ShoppingCartOutlined />,
    title: "Orders",
    path: "/orders",
    authentication: true,
    includes: [
      "/app/orders/purchase-order",
      "/app/orders/sales-order",
      "/app/orders/delivery-order",
      "/app/orders/job-sheet"
    ],
    submenu: [
      {
        key: "purchase-order",
        type: "menu",
        title: "Purchase Order",
        path: "/app/orders/purchase-order",
        includes: ["/app/orders/purchase-order"]
      },
      {
        key: "sales-order",
        type: "menu",
        title: "Sales Order",
        path: "/app/orders/sales-order",
        includes: ["/app/orders/sales-order"]
      },
      {
        key: "delivery-order",
        type: "menu",
        title: "Delivery Order",
        path: "/app/orders/delivery-order",
        includes: ["/app/orders/delivery-order"]
      },
      {
        key: "job-sheet",
        type: "menu",
        title: "Job Sheet",
        path: "/app/orders/job-sheet",
        includes: ["/app/orders/job-sheet"]
      }
    ]
  },
  {
    key: "setting",
    type: "menu",
    icon: <SettingOutlined />, // style={{ fontSize: 18 }}
    title: "Settings",
    includes: [
      "/my-qr",
      "/app/setting/faq",
      "/app/setting/tax",
      "/app/setting/email",
      "/app/setting/misc",
      "/app/setting/preference"
    ],
    authentication: true,
    submenu: [
      {
        key: "faq",
        type: "menu",
        title: "FAQ",
        path: "/my-qr",
        includes: ["/app/setting/faq"]
      },
      {
        key: "tax",
        type: "menu",
        title: "Taxation",
        path: "/app/setting/tax",
        includes: ["/app/setting/tax"]
      },
      {
        key: "email",
        type: "menu",
        title: "Email Setting",
        path: "/app/setting/email",
        includes: ["/app/setting/email"]
      },
      {
        key: "misc",
        type: "menu",
        title: "Miscellaneous",
        path: "/app/setting/misc",
        includes: ["/app/setting/misc"]
      },
      {
        key: "preference",
        type: "menu",
        title: "Preference",
        path: "/app/setting/preference",
        includes: ["/app/setting/preference"]
      }
    ]
  }
];

export default { menus, headerMenus };
