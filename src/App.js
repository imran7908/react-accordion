import './App.css';
import Questions from './components/Questions';
import './components/styles.css'

const App = () => {
  return (
    <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <section className='info'>
          <Questions />
        </section>
      </div>
    </main>
  );
}

export default App;
