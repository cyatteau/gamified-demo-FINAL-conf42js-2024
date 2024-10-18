import { lazy, useContext, Suspense } from "react";
import "./App.css";
import MapComponent from "./MapComponent";
const ProgressBar = lazy(() => import("./ProgressBar"));
import { GameContext } from "./GameContext";
import SocialShare from "./SocialShare";

function App() {
  const { state, dispatch } = useContext(GameContext);

  const handleClick = () => {
    dispatch({ type: "INCREMENT_XP", payload: 10 });
  };

  return (
    <>
      <MapComponent />
      <button onClick={handleClick}>Gain XP</button>
      <p>Current XP: {state.xp}</p>
      <Suspense fallback={<div>Loading ProgressBar...</div>}>
        <ProgressBar xp={state.xp} />
      </Suspense>
      <SocialShare xp={state.xp} />
    </>
  );
}

export default App;
