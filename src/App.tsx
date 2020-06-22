import React, {
} from 'react';
import routes from './router';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';

interface IApp {
  history: History;
}

function App ({ history }: IApp)  {


  return (
    <ConnectedRouter history={history}>
      {
        routes
      }
    </ConnectedRouter>
  );
}

export default App;
