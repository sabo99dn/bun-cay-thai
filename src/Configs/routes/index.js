import StackConfig from './StackConfig';
import TabConfig, {headerRightLogout} from './TabConfig';
import AuthHeaderConfig from './AuthHeaderConfig';
import StackHeaderNoShadowConfig from './StackHeaderNoShadowConfig';

export default {
  AuthStack: {
    name: 'AUTH_STACK',
    props: {
      ...AuthHeaderConfig,
      initialRouteName: 'AUTH_STACK_SIGN_IN',
    },
    modeScreen: 'STACK',
    screens: {
      SignIn: {
        i18n: 'AUTH_STACK_SIGN_IN',
        modeScreen: 'SCREEN',
        name: 'AUTH_STACK_SIGN_IN',
        screenName: 'SignIn',
        props: {options: {headerShown: false}},
      },
      FormSignUp: {
        i18n: 'AUTH_STACK_FORM_SIGN_UP',
        modeScreen: 'SCREEN',
        name: 'AUTH_STACK_FORM_SIGN_UP',
        screenName: 'FormSignUp',
        props: {},
      },
      FormSignIn: {
        i18n: 'AUTH_STACK_FORM_SIGN_IN',
        modeScreen: 'SCREEN',
        name: 'AUTH_STACK_FORM_SIGN_IN',
        screenName: 'FormSignIn',
        props: {},
      },
      ResetPassword: {
        i18n: 'AUTH_STACK_RESET_PASSWORD',
        modeScreen: 'SCREEN',
        name: 'AUTH_STACK_RESET_PASSWORD',
        screenName: 'ResetPassword',
        props: {},
      },
      ResetPasswordSuccess: {
        i18n: 'AUTH_STACK_RESET_PASSWORD_SUCCESS',
        modeScreen: 'SCREEN',
        name: 'AUTH_STACK_RESET_PASSWORD_SUCCESS',
        screenName: 'ResetPasswordSuccess',
        props: {},
      },
      ChangePassword: {
        i18n: 'AUTH_STACK_CHANGE_PASSWORD',
        modeScreen: 'SCREEN',
        name: 'AUTH_STACK_CHANGE_PASSWORD',
        screenName: 'ChangePassword',
        props: {},
      },
    },
  },
  MainStack: {
    name: 'MAIN_STACK',
    props: {
      ...StackConfig,
      initialRouteName: 'MAIN_STACK_BOTTOM_TABS',
    },
    modeScreen: 'STACK',
    screens: {
      BottomTabs: {
        name: 'MAIN_STACK_BOTTOM_TABS',
        modeScreen: 'TAB',
        props: {
          ...TabConfig,
          options: {headerShown: false},
          initialRouteName: 'MAIN_STACK_BOTTOM_TABS_CART_STACK',
        },
        screens: {
          Home: {
            i18n: 'MAIN_STACK_BOTTOM_TABS_HOME',
            modeScreen: 'SCREEN',
            name: 'MAIN_STACK_BOTTOM_TABS_HOME',
            screenName: 'Home',
            props: {},
          },
          MemberCards: {
            i18n: 'MAIN_STACK_BOTTOM_TABS_MEMBER_CARDS',
            modeScreen: 'STACK',
            name: 'MAIN_STACK_BOTTOM_TABS_MEMBER_CARDS',
            screenName: 'MemberCards',
            props: {
              ...StackConfig,
            },
            screens: {
              MemberCards: {
                i18n: 'MAIN_STACK_SCREEN_MEMBER_CARDS',
                modeScreen: 'SCREEN',
                name: 'MAIN_STACK_SCREEN_MEMBER_CARDS',
                screenName: 'MemberCards',
                props: {},
              },
            },
          },
          CartStack: {
            name: 'MAIN_STACK_BOTTOM_TABS_CART_STACK',
            modeScreen: 'STACK',
            props: {
              initialRouteName: 'MAIN_STACK_BOTTOM_TABS_CART_STACK_PRODUCT',
              options: {
                tabBarLabel: () => null,
              },
              ...StackConfig,
            },
            screens: {
              Product: {
                i18n: 'MAIN_STACK_BOTTOM_TABS_CART_STACK_PRODUCT',
                modeScreen: 'SCREEN',
                name: 'MAIN_STACK_BOTTOM_TABS_CART_STACK_PRODUCT',
                screenName: 'Product',
                props: {
                  options: {headerShown: false},
                },
              },
              ProductDetail: {
                i18n: 'MAIN_STACK_BOTTOM_TABS_CART_STACK_PRODUCT_DETAIL',
                modeScreen: 'SCREEN',
                name: 'MAIN_STACK_BOTTOM_TABS_CART_STACK_PRODUCT_DETAIL',
                screenName: 'ProductDetail',
                props: {},
              },
              PaymentDone: {
                i18n: 'MAIN_STACK_BOTTOM_TABS_CART_STACK_PAYMENT_DONE',
                modeScreen: 'SCREEN',
                name: 'MAIN_STACK_BOTTOM_TABS_CART_STACK_PAYMENT_DONE',
                screenName: 'PaymentDone',
                props: {
                  options: {headerShown: false},
                },
              },
            },
          },
          Promotion: {
            i18n: 'MAIN_STACK_BOTTOM_TABS_PROMOTION',
            modeScreen: 'STACK',
            name: 'MAIN_STACK_BOTTOM_TABS_PROMOTION',
            props: {
              ...StackHeaderNoShadowConfig,
              initialRouteName: 'MAIN_STACK_BOTTOM_TABS_PROMOTION',
            },
            screens: {
              Promotion: {
                i18n: 'MAIN_STACK_SCREEN_PROMOTION',
                modeScreen: 'SCREEN',
                name: 'MAIN_STACK_SCREEN_PROMOTION',
                screenName: 'Promotion',
                props: {},
              },
            },
          },
          ProfileStack: {
            name: 'MAIN_STACK_BOTTOM_TABS_PROFILE_STACK',
            modeScreen: 'STACK',
            props: {
              initialRouteName: 'MAIN_STACK_BOTTOM_TABS_PROFILE_STACK_PROFILE',
              ...StackConfig,
            },
            screens: {
              Profile: {
                i18n: 'MAIN_STACK_BOTTOM_TABS_PROFILE_STACK_PROFILE',
                modeScreen: 'SCREEN',
                name: 'MAIN_STACK_BOTTOM_TABS_PROFILE_STACK_PROFILE',
                screenName: 'Profile',
                props: {},
              },
              Account: {
                i18n: 'MAIN_STACK_BOTTOM_TABS_PROFILE_STACK_ACCOUNT',
                modeScreen: 'SCREEN',
                name: 'MAIN_STACK_BOTTOM_TABS_PROFILE_STACK_ACCOUNT',
                screenName: 'Account',
                props: {
                  options: {
                    headerRight: headerRightLogout,
                  },
                },
              },
              Branchs: {
                i18n: 'MAIN_STACK_BOTTOM_TABS_PROFILE_STACK_BRANCHS',
                modeScreen: 'SCREEN',
                name: 'MAIN_STACK_BOTTOM_TABS_PROFILE_STACK_BRANCHS',
                screenName: 'Branchs',
                props: {},
              },
              OrderList: {
                i18n: 'MAIN_STACK_BOTTOM_TABS_PROFILE_STACK_ORDER_LIST',
                modeScreen: 'SCREEN',
                name: 'MAIN_STACK_BOTTOM_TABS_PROFILE_STACK_ORDER_LIST',
                screenName: 'OrderList',
                props: {},
              },
            },
          },
        },
      },
      ChangePassword: {
        i18n: 'MAIN_STACK_CHANGE_PASSWORD',
        modeScreen: 'SCREEN',
        name: 'MAIN_STACK_CHANGE_PASSWORD',
        screenName: 'AccountChangePassword',
        props: {},
      },
      AddReport: {
        i18n: 'MAIN_STACK_ADD_REPORT',
        modeScreen: 'SCREEN',
        name: 'MAIN_STACK_ADD_REPORT',
        screenName: 'AddReport',
        props: {},
      },
      Order: {
        i18n: 'MAIN_STACK_ORDER_SCREEN',
        modeScreen: 'SCREEN',
        name: 'MAIN_STACK_ORDER_SCREEN',
        screenName: 'Order',
        props: {
          options: {headerShown: false},
        },
      },
      ShippingAddressOrder: {
        i18n: 'MAIN_STACK_BOTTOM_TABS_CART_STACK_SHIPPING_ADDRESS',
        modeScreen: 'SCREEN',
        name: 'MAIN_STACK_BOTTOM_TABS_CART_STACK_SHIPPING_ADDRESS',
        screenName: 'ShippingAddressOrder',
        props: {},
      },
      BranchsOrder: {
        i18n: 'MAIN_STACK_BOTTOM_TABS_BRANCHS_ORDER',
        modeScreen: 'SCREEN',
        name: 'MAIN_STACK_BOTTOM_TABS_BRANCHS_ORDER',
        screenName: 'BranchsOrder',
        props: {},
      },
      Vouchers: {
        i18n: 'MAIN_STACK_BOTTOM_TABS_VOUCHERS',
        modeScreen: 'SCREEN',
        name: 'MAIN_STACK_BOTTOM_TABS_VOUCHERS',
        screenName: 'Vouchers',
        props: {},
      },
      Product: {
        i18n: 'MAIN_STACK_BOTTOM_TABS_PRODUCT',
        modeScreen: 'SCREEN',
        name: 'MAIN_STACK_BOTTOM_TABS_PRODUCT',
        screenName: 'Product',
        props: {
          options: {headerShown: false},
        },
      },
      ProductPromotion: {
        i18n: 'MAIN_STACK_PRODUCT_PROMOTION',
        modeScreen: 'SCREEN',
        name: 'MAIN_STACK_PRODUCT_PROMOTION',
        screenName: 'ProductPromotion',
        props: {},
      },
      Payment: {
        i18n: 'MAIN_STACK_BOTTOM_TABS_PAYMENT',
        modeScreen: 'SCREEN',
        name: 'MAIN_STACK_BOTTOM_TABS_PAYMENT',
        screenName: 'Payment',
        props: {
          options: {headerShown: false},
        },
      },
      ShippingAddress: {
        i18n: 'MAIN_STACK_BOTTOM_TABS_PROFILE_STACK_SHIPPING_ADDRESS',
        modeScreen: 'SCREEN',
        name: 'MAIN_STACK_SHIPPING_ADDRESS',
        screenName: 'ShippingAddress',
        props: {},
      },
      AddShippingAddress: {
        i18n: 'MAIN_STACK_BOTTOM_TABS_PROFILE_STACK_ADD_SHIPPING_ADDRESS',
        modeScreen: 'SCREEN',
        name: 'MAIN_STACK_ADD_SHIPPING_ADDRESS',
        screenName: 'AddShippingAddress',
        props: {},
      },
      UpdateShippingAddress: {
        i18n: 'MAIN_STACK_BOTTOM_TABS_PROFILE_STACK_UPDATE_SHIPPING_ADDRESS',
        modeScreen: 'SCREEN',
        name: 'MAIN_STACK_UPDATE_SHIPPING_ADDRESS',
        screenName: 'UpdateShippingAddress',
        props: {},
      },
    },
  },
};
