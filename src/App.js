import { Routes, Route } from 'react-router-dom';
import RoundProvider from './context/use-round';
import TotalsProvider from './context/use-totals';
import ResultProvider from './context/use-result';
import HomePage from './pages/home';
import RoundPage from './pages/round';
import ResultPage from './pages/result';
import './App.scss';

export default function App() {
   return (
      <RoundProvider>
         <ResultProvider>
            <TotalsProvider>
               <Routes>
                  <Route path='/' exact element={<HomePage />} />
                  <Route path='/round' element={<RoundPage />} />
                  <Route path='/result' element={<ResultPage />} />
               </Routes>
            </TotalsProvider>
         </ResultProvider>
      </RoundProvider>
   );
}