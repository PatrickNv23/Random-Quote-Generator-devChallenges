import './App.css'
import Layout from './Layout/Layout.jsx'
import QuoteMain from './components/QuoteMain';
import QuoteList from './components/QuoteList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app_container'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<QuoteMain />} />
            <Route path='/author/:name' element={<QuoteList />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div >
  )
}
export default App
