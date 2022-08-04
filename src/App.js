import Navbar from './components/navbar';
import About from './components/about';
import ContactForm from './components/contact';
import WorkExperience from './components/workexperience';
import ArticleList from './components/articlelist';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <About/>
    <WorkExperience/>
    <ArticleList/>
    {/*<ContactForm/>*/}
    </>
  );
}

export default App;
