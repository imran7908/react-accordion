import './App.css';
import Questions from './components/Questions';

const App = () => {
  return (
    <main className='container'>
      <section className='left-section'>
        <p>Questions And Answers About Login</p>
      </section>
      <section className='right-section'>
        <Questions />
      </section>
    </main>
  );
}

export default App;
