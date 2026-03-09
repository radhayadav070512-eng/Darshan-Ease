import Header from './components/common/Header';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App min-h-screen">
      <Header />
      <main>
        <AppRoutes/>
      </main>
      <Footer />
    </div>
  );
}

export default App;