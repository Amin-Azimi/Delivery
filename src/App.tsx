import React from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';
import About from './common/components/about';

import Home from './common/components/home';
import Layout from './common/components/layout';
import Deliveries  from './features/delivery/components/Deliveries';
import DeliveryDetail from './features/delivery/components/delivery.detail';

function App(){
  return(
    <Routes>
      <Route path="/"  element={<Layout />} >
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route  path="deliveris" element={<Deliveries/>} />
        <Route  path="delivery" >
          <Route path=":id" element={<DeliveryDetail/>}/>
        </Route>
      </Route>
    </Routes>
  );
}
export default App;
