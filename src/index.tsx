import { Suspense } from 'react';
import { BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <Suspense fallback={(<div></div>)}>
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);
