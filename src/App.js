import { RouterProvider } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import './App.css';
import router from './Router/Routes/Routes';
function App() {
  return (
    <div className='lg:px-36' data-theme='lofi'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
