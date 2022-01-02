import React, { useState } from 'react';
import axios from 'axios';
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = [
  'editDivMain',
  'editDivButton',
  'editButton',
  'editDivTable',
  'editDivList',
  'editTableUl',
  'editLoading',
  'editTableLi',
  'editTableLiMasterData'
] as const

interface Post {
  userId: number;
  id: number;
  title: String;
  body: String;
}

export default function Api() {
  const HANDLES = useCssHandles(CSS_HANDLES);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  function buscarDados() {
    setLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const api = res.data;
        setData(api);
        console.log(api);
        setLoading(false);
      })
      .catch((error) =>{
        console.log('Erro em requisitar a API ' +error);
      })
  }

  return (
    <div className={`${HANDLES.editDivMain}`}>
      <div className={`${HANDLES.editDivButton}`}>
        <button onClick={() => { buscarDados() }} className={`${HANDLES.editButton}`}>API TypiCode</button>
      </div>
      <div className={`${HANDLES.editDivTable}`}>
        <div className={`${HANDLES.editDivList}`}>
          {loading == true ? (<img className={`${HANDLES.editLoading}`} src="https://i.stack.imgur.com/ATB3o.gif" />) : ''}
          <ul className={`${HANDLES.editTableUl}`}>
            {data.map((apiMap: Post) =>
              <li className={`${HANDLES.editTableLi}`}>
                {apiMap['id']} <br/> <br/> {apiMap['title']} <br/> <br/> {apiMap['body']} </li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
