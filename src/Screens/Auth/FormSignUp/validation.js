import * as Yup from "yup";
import {phoneRegex, emailRegex} from "../../../Utils/common"
export const validationSchema = (i18n) => {
    return Yup.object().shape({
        full_name: Yup.string().required(i18n.t("auth:full_name.required")),
        number_phone: Yup.string().required(i18n.t("auth:number_phone.required"))
            .matches( phoneRegex, i18n.t("auth:number_phone.wrong_format")),
        email: Yup.string().required(i18n.t("auth:email.required"))
            .matches( emailRegex, i18n.t("auth:email.wrong_format")),
        password: Yup.string().required(i18n.t("auth:password.required")),
        city: Yup.string().required(i18n.t("auth:city.required")),
        district: Yup.string().required(i18n.t("auth:district.required")),
        ward: Yup.string().required(i18n.t("auth:ward.required")),
        street_address: Yup.string().required(i18n.t("auth:street_address.required")),
        agree_security: Yup.bool().oneOf([true], i18n.t("auth:agree_security.required")),
    });
}
