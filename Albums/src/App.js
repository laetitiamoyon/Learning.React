import './App.css';
import {QueryClientProvider, QueryClient} from 'react-query';
import Navigation from './domains/navigation/Navigation';


const App = () =>
{
  const queryClient = new QueryClient()

  return <QueryClientProvider client={queryClient}>
    <Navigation/>
  </QueryClientProvider>
}

export default App;
