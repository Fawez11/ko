import React from 'react';
import Phrase from './Phrase.jsx'
const PhraseList = (props) => (
  <div>
    <h1>Phrase List</h1>
      <div className="phrases">
        <div className="phrase-table">
          <div className="phrase-header phrase-row">
            <div className="phrase-data">Korean</div>
            <div className="phrase-data">Romanization</div>
            <div className="phrase-data">English</div>
            <div className="phrase-data">Status</div>
          </div>
          {props.phrases.map((phrase, index) => <Phrase phrase={phrase} key = {phrase.id}/>)}
          </div>
      </div>
  </div>
);

export default PhraseList;