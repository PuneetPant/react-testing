import React from "react";
import "./App.css";
import Greet from "./components/Greet/greet";
import { Application } from "./components/Application/application";
import { Skills } from "./components/Skills/skills";
import { Counter } from "./components/counter/counter";
import { AppProviders } from "./providers/AppProviders";
import { MuiMode } from "./components/mui/muiMode";
import { CounterTwo } from "./components/CounterTwo/counterTwo";
import { Users } from "./components/users/Users";

function App() {
  const skillsArr = ["HTML", "CSS", "JS", "React", "TypeScript"];
  return (
    <AppProviders>
      <div className="App">
        {/* <Greet name="Puneet" />
      <Application />
      <Skills skills={skillsArr} /> */}
        {/* <Counter /> */}
        {/* <MuiMode /> */}
        {/* <CounterTwo count={0} /> */}
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
