import React, { useState, useEffect } from 'react';
import './App.css';
import { Tile } from './component';

const arr = [...Array(9)];

const App = () => {
  const [selectedTiles, setSelectedTiles] = useState([]);

  useEffect(() => {
    let intervalId=null;
    if (selectedTiles.length === 8) {
       intervalId = setInterval(() => {
        setSelectedTiles(p => {
          const t = [...p];
          t.pop();
          if (t.length === 0 ) {
            clearInterval(intervalId);
          }
          return t;
        })
      }, 300)

    }

  }, [selectedTiles]);

  const onClickHanlder = (index) => {
    setSelectedTiles(t => [...t, index]);
  };

  return (
    <div className='main__container'>      
      <div className='tiles__container'>
        {
          arr.map((_, index) => {
            return <Tile className={`tile_${index} ${selectedTiles.includes(index) ? 'green' : ''}`} onClick={() => onClickHanlder(index)} />
          })
        }
      </div>
    </div>
  )
}

export default App