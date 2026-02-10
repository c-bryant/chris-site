import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'
import './App.scss'

function App() {
  return (
    <div className="app-grid">
      <Header />
      <main className="content">
        <MainContent />
      </main>
      <Footer />
    </div>
  )
}

export default App
