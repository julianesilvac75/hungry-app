import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DetalhesDeBebidas,
  DetalhesDeComidas,
  Login,
  ReceitasDeComidas,
  ReceitasDeBebidas,
  ProgressoDeComida,
  ProgressoDeBebida,
  Explorar,
  ExplorarComida,
  ExplorarBebidas,
  ExplorarComidasIngredientes,
  ExplorarComidasNacionalidade,
  ReceitasFeitas,
  Perfil,
  ReceitasFavoritas,
  ExplorarBebidasIngredientes } from './pages';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ ReceitasDeComidas } />
        <Route exact path="/drinks" component={ ReceitasDeBebidas } />
        <Route exact path="/foods/{id-da-receita}" component={ DetalhesDeComidas } />
        <Route exact path="/drinks/{id-da-receita}" component={ DetalhesDeBebidas } />
        <Route
          exact
          path="/foods/{id-da-receita}/in-progress"
          component={ ProgressoDeComida }
        />
        <Route
          exact
          path="/drinks/{id-da-receita}/in-progress"
          component={ ProgressoDeBebida }
        />
        <Route exact path="/explore" component={ Explorar } />
        <Route exact path="/explore/foods" component={ ExplorarComida } />
        <Route exact path="/explore/drinks" component={ ExplorarBebidas } />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExplorarComidasIngredientes }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExplorarBebidasIngredientes }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExplorarComidasNacionalidade }
        />
        <Route exact path="/profile" component={ Perfil } />
        <Route exact path="/done-recipes" component={ ReceitasFeitas } />
        <Route exact path="/favorite-recipes" component={ ReceitasFavoritas } />
      </Switch>
    </div>
  );
}

export default App;
