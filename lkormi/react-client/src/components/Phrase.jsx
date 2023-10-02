
import React from 'react';

const Phrase = (props) => (

<div className="phrase-row">
            <div className="phrase-data">{props.phrase.kor}</div>
            <div className="phrase-data">{props.phrase.rom}</div>
            <div className="phrase-data">{props.phrase.eng}</div>
            <div className="phrase-data">{props.phrase.status}</div>
          </div>

)     

export default Phrase;