import Header from "./components/Header";
import ProfileList from "./components/ProfileList";
import { profiles } from "./data/profiles";

import "./components/styles/styles.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <ProfileList perfiles={profiles} />
    </div>
  );
}

export default App;
