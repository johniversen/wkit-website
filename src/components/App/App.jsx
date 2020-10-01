import React,{lazy, Suspense} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


const StartContainer= lazy(() => import('../Start'));
const AboutContainer= lazy(() => import('../About'));
const PolicyContiner= lazy(() => import('../Policy'));
const CareerContainer= lazy(() => import('../Career'));
// Här importeras alla komponenter. Detta är huvudkomponenten.

function App() {
  return (
    <div className="App">
      <div className="content" id="app-content">
      <Suspense fallback={"loading...."}>
        <Switch>
          <Route exact path="/" component={ StartContainer } />
          <Route path="/about" component={ AboutContainer } />
          <Route path="/policy" component={ PolicyContiner } />
          <Route path="/career" component={ CareerContainer } />
        </Switch>
      </Suspense>
      </div>
    </div>
  );
}

export default App;
