import './App.css';
import Slider from '../src/components/Slider';


function App() {
  const data = [
    {
      id:1,
      question:"question-1",
      answer: "This is answer-1"
    },
    {
      id:2,
      question:"question-2",
      answer: "This is answer-2"
    },
    {
      id:3,
      question:"question-3",
      answer: "This is answer-3"
    },
    {
      id:4,
      question:"question-4",
      answer: "This is answer-4"
    },
    {
      id:5,
      question:"question-5",
      answer: "This is answer-5"
    },
  ]
  return (
    <div className="App">
        <Slider data={data} />
    </div>
  );
}

export default App;