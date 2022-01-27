import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

function App() {
  return (
  <>
  <h1>Slider V1</h1>
    <ImageSlider slides={SliderData}/>
  </>
  )}

export default App;
