import Feedback from "./compoonents/Feedback";

export default function App() {
  return (
    <div>
      <Feedback
        initialGood={0}
        initialNeutral={0}
        initialBad={0}
        initialTotal={0}
        initialPositiveFeedback={0}
      />
    </div>
  );
}
