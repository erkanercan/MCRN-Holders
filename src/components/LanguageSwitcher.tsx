import * as React from "react";
import { Select, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { t, i18n, ready } = useTranslation();

  const onLanguageChange = React.useCallback(
    (e: any) => {
      const lang: string = e.target?.value || "en-GB";
      i18n.changeLanguage(lang);
    },
    [i18n]
  );

  return (
    <Box>
      {ready && (
        <Select placeholder={t(i18n.language)} onChange={onLanguageChange}>
          {i18n.language === "en-GB" ? (
            <option key="tr-TR" value="tr-TR">
              {t("tr-TR")}
            </option>
          ) : (
            <option key="en-GB" value="en-GB">
              {t("en-GB")}
            </option>
          )}
        </Select>
      )}
    </Box>
  );
};
