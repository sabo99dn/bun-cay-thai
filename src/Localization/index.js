import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en'
import enNavigation from './en/navigation'
import enHome from './en/home'
import enMemberCard from './en/memberCard'
import enProfile from './en/profile'
import vi from './vi'
import viNavigation from './vi/navigation'
import viHome from './vi/home'
import viMemberCard from './vi/memberCard'
import viProfile from './vi/profile'
import DropDownPicker from "react-native-dropdown-picker";

DropDownPicker.addTranslation("vi", vi.DropDownPicker);

DropDownPicker.addTranslation("en", en.DropDownPicker);

export const languages = {
  en: {
    navigation: {
      ...enNavigation
    },
    ...en,
    home: {
      ...enHome
    },
    memberCard: {
      ...enMemberCard
    },
    profile: {
      ...enProfile
    }
  },
  vi: {
    navigation: {
      ...viNavigation
    },
    ...vi,
    home: {
      ...viHome
    },
    memberCard: {
      ...viMemberCard
    },
    profile: {
      ...viProfile
    }
  },
}

i18next.use(initReactI18next).init({
  fallbackLng: 'vi',
  lng: 'vi',

  resources: languages,

  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',

  debug: false,

  // cache: {
  //   enabled: true
  // },

  interpolation: {
    escapeValue: false, // not needed for react as it does escape per default to prevent xss!
  },
})

export default i18next

