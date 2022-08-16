import './App.scss';
import { Routes, Route } from 'react-router-dom';
import GamePage from './pages/game';
import IntroPage from './pages/intro';
import ResultPage from './pages/result';
import TotalsProvider from './context/use-totals';
import RoundProvider from './context/use-round';

export default function App() {
   return (
      <RoundProvider>
         <TotalsProvider>
            <Routes>
               <Route path='/' exact element={<IntroPage />} />
               <Route path='/game' element={<GamePage />} />
               <Route path='/result' element={<ResultPage />} />
            </Routes>
         </TotalsProvider>
      </RoundProvider>
   );
}