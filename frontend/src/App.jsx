import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import NewExpense from './Pages/NewExpense';
import Intial from './Pages/Initial';
import List from './Pages/List';
import NotFound from './Pages/NotFound';
import Month from './Pages/Month';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Intial} />
        <Route path="/new" component={NewExpense} />
        <Route path="/list/:month" component={Month} />
        <Route path="/list" component={List} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
