import React, { FC } from 'react';
import { useProduct } from 'vtex.product-context';
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = [
  'editFirstDivContext',
  'editDivContextOne',
  'editDivContextTwo',
  'editDivContextThree'
] as const

const ApiProductContext: FC = () => {
  const HANDLES = useCssHandles(CSS_HANDLES);
  const productContextValue = useProduct()

  return (
    <div className={`${HANDLES.editFirstDivContext}`}>

      {productContextValue?.product?.categories[0] == '/Woman/' ?

      <div>

        <div className={`${HANDLES.editDivContextOne}`}>
          {productContextValue?.product?.productClusters[1]?.name}
        </div>

        <div className={`${HANDLES.editDivContextTwo}`}>
          {productContextValue?.product?.productClusters[2]?.name}
        </div>

        <div className={`${HANDLES.editDivContextThree}`}>
          {productContextValue?.product?.productClusters[3]?.name}
        </div>

      </div>

      : null}
    </div>
  )
}

export default ApiProductContext;
