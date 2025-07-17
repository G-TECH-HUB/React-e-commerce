import { useTranslation } from "react-i18next";
import s from "./CopyRightsText.module.scss";

const CopyRightsText = () => {
  const developerProfile = "https://g-tech-hub.github.io/My-Portfolio/";
  const designerProfile = "https://g-tech-hub.github.io/My-Portfolio/";
  const copyRightTrans = "footer.copyRightsText";
  const { t } = useTranslation();

  return (
    <p className={s.copyRights}>
      <span>{t(`${copyRightTrans}.designedBy`)}</span>
      <a href={designerProfile} target="_blank">
        Ohakwe Great
      </a>

      <span>{t(`${copyRightTrans}.codedBy`)}</span>
      <a href={developerProfile} target="_blank">
        Ohakwe Great
      </a>
    </p>
  );
};
export default CopyRightsText;
