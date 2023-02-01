import { useState } from 'react';
import moment from 'moment';



function App() {

  let [time, setTime] = useState(moment().format('LTS'));

  setInterval(() => setTime(moment().format('LTS')), 1000);

  return (
    <div className="App">
      {time}
    </div>
  );
}

export default App;
