import React from 'react'
import { useTranslation } from 'react-i18next';
import C from './C'

export default function B() {
    const { t } = useTranslation() ;
    return (
        <div>
            <h1>{ t('welcome_to_react') }</h1>
            <C></C>
        </div>
    )
}
