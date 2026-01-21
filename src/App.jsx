import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <div className="mainContainer">
        <h1 className="mainTitle">Recetas deliciosas para todos</h1>
        <p className="subtitle">Descubre las mejores recetas caseras</p>
        
        <div className="cardsContainer">
          <Card
            name='Tacos al Pastor'
            type='Almuerzo'
            image='taco'
            time='45 minutos'
            difficulty='Medio'
            description='Deliciosos tacos de carne marinada en adobo de chile, acompañados de piña, cilantro y cebolla. Un clásico de la comida mexicana que no puede faltar en tu mesa.'
          />
          
          <Card
            name='Fluffy Pancakes'
            type='Desayuno'
            image='pancakes'
            time='20 minutos'
            difficulty='Fácil'
            description='Panqueques suaves y esponjosos, perfectos para empezar el día. Sírvelos con jarabe de arce, fruta fresca y un toque de mantequilla derretida.'
          />
          
          <Card
            name='Chocolate Brownie'
            type='Postre'
            image='brownie'
            time='35 minutos'
            difficulty='Fácil'
            description='Brownies húmedos y chocolatosos con un centro derretido. Perfectos para los amantes del chocolate, ideales para compartir en reuniones familiares.'
          />
          
          <Card
            name='Caesar Salad'
            type='Almuerzo'
            image='ensalada'
            time='15 minutos'
            difficulty='Fácil'
            description='Ensalada fresca con lechuga romana, crutones crujientes, queso parmesano y aderezo Caesar casero. Una opción ligera y deliciosa para cualquier ocasión.'
          />
          
          <Card
            name='Sushi Rolls'
            type='Almuerzo'
            image='sushi'
            time='60 minutos'
            difficulty='Difícil'
            description='Rulos de sushi caseros con arroz, alga nori, salmón fresco, aguacate y pepino. Una experiencia culinaria japonesa en tu propia cocina.'
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;