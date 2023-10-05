import { Provider } from "./context/Provider"
import Home from "./pages/Home"
import InfoCountry from "./pages/InfoCountry"
import Router from "./Routes/routes"

function App() {

  return (
    <Provider>
      <Router>
        <Home />
        <InfoCountry />
      </Router>
    </Provider>
  )
}

export default App
