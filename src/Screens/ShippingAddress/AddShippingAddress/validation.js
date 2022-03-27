import * as Yup from 'yup';
import {phoneRegex, emailRegex} from '../../../Utils/common';
export const validationSchema = i18n => {
  return Yup.object().shape({
    address_name: Yup.string().required(i18n.t('auth:address_name')),
    city: Yup.string().required(i18n.t('auth:city.required')),
    district: Yup.string().required(i18n.t('auth:district.required')),
    ward: Yup.string().required(i18n.t('auth:ward.required')),
    street_address: Yup.string().required(
      i18n.t('auth:street_address.required'),
    ),
  });
};
