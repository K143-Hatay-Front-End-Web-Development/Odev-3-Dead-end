import { Routes, Route } from 'react-router-dom';
import RoundProvider from './context/use-round';
import TotalsProvider from './context/use-totals';
import ResultProvider from './context/use-result';
import AnswerProvider from './context/use-answer';
import Layout from './components/layout';
import HomePage from './pages/home';
import RoundPage from './pages/round';
import ResultPage from './pages/result';

export default function App() {
   return (
      <AnswerProvider>
         <RoundProvider>
            <ResultProvider>
               <TotalsProvider>
                  <Layout>
                     <Routes>
                        <Route path='/' exact element={<HomePage />} />
                        <Route path='/round' element={<RoundPage />} />
                        <Route path='/result' element={<ResultPage />} />
                     </Routes>
                  </Layout>
               </TotalsProvider>
            </ResultProvider>
         </RoundProvider>
      </AnswerProvider>
   );
}