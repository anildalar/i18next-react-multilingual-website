import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

class AA extends Component {
     
    render() {
        const { t } = this.props;
        return (
            <div>
                <h1>{t('welcome_to_react')}</h1>
            </div>
        )
    }
}


export default withTranslation()(AA);