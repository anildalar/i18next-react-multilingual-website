import React from 'react'
import { useTranslation } from 'react-i18next';

export default function C() {
    const { t } = useTranslation() ;
    return (
        <div>
            <h1>{ t('welcome_to_react') } </h1>
        </div>
    )
}
