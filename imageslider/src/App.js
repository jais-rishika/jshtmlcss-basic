import ImageSlider from "./imageSlider/imageSlider";
import slides from "./sliderData";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <ImageSlider data={slides}/>
    </div>
  );
};

export default App;
