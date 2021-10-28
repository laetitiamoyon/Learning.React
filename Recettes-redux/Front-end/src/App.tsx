import Navigation from './domains/navigation/Navigation/Navigation';
import store from './domains/root/root.store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation/>
        <ToastContainer/>
      </Provider>
    </div>
  );
}

export default App;
