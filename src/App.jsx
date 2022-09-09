import { QueryClient, QueryClientProvider } from "react-query";
import 'bootstrap/dist/css/bootstrap.min.css';

import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const query = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={query}>
      <div className="App">
        <Navbar />
        <Hero />
        <Gallery />
      </div>
    </QueryClientProvider>
  );
}

export default App;
