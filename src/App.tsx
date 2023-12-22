import ExampleAnimation from './components/ExampleAnimation';
import './styles/main.scss';

function App() {
  return (
    <div style={{ height: 600, width: 600 }}>
      <ExampleAnimation path="../public/animations/bracelet_animation.json" />
    </div>
  );
}

export default App;
