import WeatherApp from "./WeatherApp";
import WeatherProvider from "./WeatherProviser/WeatherProvider";

function App() {

  return (
    <WeatherProvider>
      <WeatherApp/>  
    </WeatherProvider>
   );
}

export default App;
