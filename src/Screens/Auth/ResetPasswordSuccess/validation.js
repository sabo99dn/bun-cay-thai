import * as Yup from "yup";
import {emailRegex} from "../../../Utils/common"
export const validationSchema = (i18n) => {
    return Yup.object().shape({
        email: Yup.string().required(i18n.t("auth:email.required"))
            .matches( emailRegex, i18n.t("auth:email.wrong_format"))
    });
}
