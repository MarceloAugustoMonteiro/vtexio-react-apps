import React, { useEffect, useState } from 'react';
import { useCssHandles } from 'vtex.css-handles';
import { canUseDOM } from 'vtex.render-runtime';

const CSS_HANDLES = [
  'modalFirstElement',
  'modalContainer',
  'modalHeader',
  'modalContainerImage',
  'modalContainerForm',
  'modalButtonClose',
  'modalButton',
  'modalImage'
] as const

interface ModalChildren {
  srcImage : string,
  children : React.ReactNode,
  titleWelcome : string
  cookieDays : number
}

const MODAL = ({srcImage, children, titleWelcome, cookieDays} :ModalChildren) => {
  const HANDLES = useCssHandles(CSS_HANDLES);
  const [modalVisible, setModalVisible] = useState(false);
  const title = titleWelcome ? titleWelcome : "Cadastre-se"
  const setCookieDays = cookieDays ? cookieDays : 3

  /*SetCookie*/
  function setCookie(cname: string, cvalue: any, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function HandleClick() {
    setCookie('EditCookies', 'Pronto', setCookieDays),
      setModalVisible(false)
  }

  /*GetCookie*/
  function getCookie(cname: string) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    console.log('ca ', ca)
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        console.log('c ', c)
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  /*Verificar cookie*/
  useEffect(() => {
    const checkCookie = canUseDOM
      ? getCookie('EditCookies')
      : ''

    if (checkCookie !== 'Pronto') {
      setModalVisible(true);
    }
  }, [])

  if (modalVisible === false) return null;

  return (
    <div onClick={() => { setModalVisible(false) }} className={`${HANDLES.modalFirstElement}`}>
      <div onClick={(e) => e.stopPropagation()} className={`${HANDLES.modalContainer}`}>
        <div className={`${HANDLES.modalButtonClose}`}>
          <button onClick={HandleClick} className={`${HANDLES.modalButton}`}>X</button>
        </div>
        <div className={`${HANDLES.modalContainerImage}`}>
          <img className={`${HANDLES.modalImage}`} src= {srcImage}/>
        </div>
        <div className={`${HANDLES.modalContainerForm}`}>
          <h2 className={`${HANDLES.modalHeader}`}>{title}</h2>
          {children}
        </div>
      </div>
    </div>
  )
}

MODAL.schema = {
  title: 'Custom',
  type: 'object',
  properties: {
    titleWelcome: {
      title: 'TítuloCustom',
      type: 'string',
      default: "Cadastre-se",
      description: "Título Modal"
    },
    srcImage: {
      title: 'ImagemCustom',
      type: 'string',
      default: "",
      description: "Imagem Modal"
    },
    cookieDays: {
      title: 'Dias Cookies',
      type: 'number',
      default: 3,
      description: "Número de dias para cookie expirar"
    }
  },
}

export default MODAL;
