import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';


import A from './A';

import './i18n';
import AA from './AA';

function changeLang(cl){ // now we can recieve the formal argument
   //alert('ok');
   return ()=>{
     //alert('ok ' + cl);
     i18n.changeLanguage(cl);
    //Save the current language in local Storeage
    localStorage.setItem('curlang',cl);


   } // i am returning a anonymous function
}
function App(){
  const { t } = useTranslation()  //t is a  function. which is named exported
  
  //Page load event
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('curlang'));
  }, [])

  return (
    <div>
      <h1>{ t('welcome_to_react') }</h1>
      <button onClick={ changeLang('en') }>English</button>
      <button onClick={ changeLang('fr') }>French</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <AA/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
