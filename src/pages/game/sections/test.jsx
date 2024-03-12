import React, { useState } from 'react';

const Test = () => {
  
  const [activeTab, setActiveTab] = useState('custom');

  return (
    <>
      <div className={"header"} style={{justifyContent:'flex-start'}}>
        <div>
          <button 
            style={{width:'fit-content', padding:'0 15px', backgroundColor: activeTab === 'custom' ? '#001528' : '#15314b', fontWeight: 600,whiteSpace: 'nowrap'}}
            onClick={() => setActiveTab('custom')}
          >
            Custom Output
          </button>
        </div>
        <div>
          <button
            style={{width:'fit-content', padding:'0 15px', backgroundColor: activeTab === 'raw' ? '#001528' : '#15314b', fontWeight: 600,whiteSpace: 'nowrap'}} 
            onClick={() => setActiveTab('raw')}
          >
            Raw Output
          </button>
        </div>
      </div>

      {activeTab === 'custom' && <div style={{height:'100%'}}>Custom tab content</div>}
      {activeTab === 'raw' && <div style={{height:'100%'}}>Raw tab content</div>}

    </>
  );
}

export default Test;
