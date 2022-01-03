import React, {ChangeEvent, useState, FC, useEffect} from "react";
import i18next from "i18next";
import {useQuery} from "react-query";
import {useTranslation} from "react-i18next";

import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_ZH } from "./zhTranlation";
import { TRANSLATIONS_EN } from "./enTranlation";
import i18n from "./i18n";

export const ExampleComponent = () =>
{
    const [language, setLanguage] = useState('en');
    const { t } = useTranslation();
    const onLanguageChange = (event: ChangeEvent<HTMLSelectElement>) =>
    {
        event.preventDefault();
        setLanguage(event.target.value);
        i18n.changeLanguage(event.target.value);
    }

    return <>
        <h2>Localization</h2>

        <div>Current language is : {language}</div>
        <div>{t("welcome")}</div>

        <select value={language} onChange={onLanguageChange}>
            <option value="en">English</option>
            <option value="zh">Chinois</option>
        </select>
    </>
};