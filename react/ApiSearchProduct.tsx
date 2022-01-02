import React, { useState } from 'react';
import axios from 'axios';
import { useCssHandles } from 'vtex.css-handles';
import { FormattedCurrency } from 'vtex.format-currency';

const CSS_HANDLES = [
  'editDivMainCustom',
  'editDivLoadingCustom',
  'editLoading',
  'editMessageError',
  'editDivApiError',
  'editSecondDivLoadingCustom',
  'editImageUrl',
  'editParagraphName',
  'editParagraphPriceWithoutDiscount',
  'editParagraphPrice',
  'editDivResult',
  'editDivImageUrl',
  'editLabelProduct',
  'editInputProduct',
  'editButtonSearchProduct',
  'editDivProductInput'
] as const

export default function ApiSearchProduct() {
  const HANDLES = useCssHandles(CSS_HANDLES);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [productId, setProductInput] = useState('');
  const [skuId, setSkuId] = useState('');
  const [apiError, setApiError] = useState('');

  function searchProduct() {
    setLoading(true);
    axios.get(`api/catalog_system/pub/products/search?fq=productId:${productId}`)
      .then(res => {
        const api = res.data;
        setData(api);
        console.log('api', api);
        setLoading(false);
        api == '' ? setApiError('* Product não encontrado!') : setApiError('');
      })
      .catch((error) => {
        console.log('Erro em requisitar a API ' + error);
      })
  }

  function searchProductSKU() {
    setLoading(true);
    axios.get(`api/catalog_system/pub/products/search?fq=skuId:${skuId}`)
      .then(res => {
        const api = res.data;
        setData(api);
        console.log('api', api);
        setLoading(false);
        api == '' ? setApiError('* Product não encontrado!') : setApiError('');
      })
      .catch((error) => {
        console.log('Erro em requisitar a API ' + error);
      })
  }

  return (
    <div className={`${HANDLES.editDivMainCustom}`}>
      <div className={`${HANDLES.editDivProductInput}`}>
        <label className={`${HANDLES.editLabelProduct}`}>ID:</label> <br />
        <input className={`${HANDLES.editInputProduct}`} onChange={e => setProductInput(e.target.value)} />
        <input onClick={() => { searchProduct() }} className={`${HANDLES.editButtonSearchProduct}`} type="image" src="https://img.icons8.com/ios-filled/50/ffffff/search.png" />
        <label className={`${HANDLES.editLabelProduct}`}>SKU:</label> <br />
        <input className={`${HANDLES.editInputProduct}`} onChange={e => setSkuId(e.target.value)} />
        <input onClick={() => { searchProductSKU() }} className={`${HANDLES.editButtonSearchProduct}`} type="image" src="https://img.icons8.com/ios-filled/50/ffffff/search.png" />
      </div>

      <div className={`${HANDLES.editDivLoadingCustom}`}>
        <div className={`${HANDLES.editSecondDivLoadingCustom}`}>
          {loading == true ? (<img className={`${HANDLES.editLoading}`} src="https://i.stack.imgur.com/ATB3o.gif" />) : ''}
          <div className={`${HANDLES.editDivResult}`}>
            <div className={`${HANDLES.editDivImageUrl}`}>
              <img className={`${HANDLES.editImageUrl}`} src={data[0]?.items[0]?.images[0]?.imageUrl} />
            </div>
            <p className={`${HANDLES.editParagraphName}`}>
              {data[0]?.items[0]?.nameComplete}
            </p>
            <p className={`${HANDLES.editParagraphPriceWithoutDiscount}`}>
              {data.length > 0 ? <FormattedCurrency value={data[0]?.items[0]?.sellers[0]?.commertialOffer.PriceWithoutDiscount} /> : null}
            </p>
            <p className={`${HANDLES.editParagraphPrice}`}>
              {data.length > 0 ? <FormattedCurrency value={data[0]?.items[0]?.sellers[0]?.commertialOffer.Price} /> : null}
            </p>
          </div>
        </div>
      </div>
      <div className={`${HANDLES.editDivApiError}`}>
        <p className={`${HANDLES.editMessageError}`}>{apiError}</p>
      </div>
    </div>
  )

}
