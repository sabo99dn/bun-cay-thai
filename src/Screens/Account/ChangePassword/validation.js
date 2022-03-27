import * as Yup from 'yup';
import {passwordRegex} from '../../../Utils/common';
export const validationSchema = i18n => {
  return Yup.object().shape({
    password_temp: Yup.string()
      .required(i18n.t('auth:password_temp.required'))
      .oneOf(
        [Yup.ref('old_password'), null],
        i18n.t('auth:password_old.match'),
      ),
    password_new: Yup.string()
      .required(i18n.t('auth:password_new.required'))
      .matches(passwordRegex, i18n.t('auth:password_new.wrong_format')),
    password_new_confirm: Yup.string()
      .required(i18n.t('auth:password_new_confirm.required'))
      .oneOf(
        [Yup.ref('password_new'), null],
        i18n.t('auth:password_new_confirm.match'),
      ),
  });
};
