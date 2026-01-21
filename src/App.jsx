import Card from './components/Card';

function App() {
  return (
    <div className="app">
      <h1>Recipe Cards</h1>
      <Card 
        name="Tacos" 
        description="Delicious tacos"
      />
    </div>
  );
}

export default App;