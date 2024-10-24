import {useState} from 'react';
const App=()=>{
const [isColored,setIsColored]=useState(false);
return(
  <div>
    <p>
        <span style={
          {
            color:isColored?'green':''
          }
        }>
          VVIT GUNTUR.COM
        </span>
        Nambur
      </p>
      <button onClick={()=>setIsColored(isColored=>!isColored)}>
        Toggle is colored
      </button>
    </div>
  );
};
export default App;
