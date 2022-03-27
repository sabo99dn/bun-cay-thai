import * as Yup from "yup";
import {phoneRegex} from "../../../Utils/common"
export const validationSchema = (i18n) => {
    return Yup.object().shape({
        number_phone: Yup.string().required(i18n.t("auth:number_phone.required"))
            .matches( phoneRegex, i18n.t("auth:number_phone.wrong_format")),
        password: Yup.string().required(i18n.t("auth:password.required")),
    });
}
