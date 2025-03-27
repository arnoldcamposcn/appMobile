import { translations } from './translation';

export const translate = (key: string, value: string): string => {
    const translationGroup = translations[key as keyof typeof translations];
    return translationGroup && translationGroup[value as keyof typeof translationGroup]
        ? translationGroup[value as keyof typeof translationGroup]
        : value; // Devuelve el valor original si no hay traducción
};