import Header from './components/Header';
import HomePage from './pages/HomePage';

export default function Routes() {
  return (
    <div className="flex flex-col bg-blue-100 h-screen">
      <Header />
      <div className="flex-1">
        <HomePage />
      </div>
    </div>
  );
}
