import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/** Custom imports */
import Menu from './components/Menu';
import LoginPage from './pages/login/LoginPage';
import UserPage from './pages/user/UserPage';
import BalancePage from './pages/balance/BalancePage';
import PurchasesListPage from './pages/purchase/purchasesList/PurchasesListPage';
import PurchasePage from './pages/purchase/purchase/PurchasePage';
import MyDepositsListPage from './pages/deposit/myDepositsList/MyDepositsListPage';
import DepositsListPage from './pages/deposit/depositsList/DepositsListPage';
import DepositPage from './pages/deposit/deposit/DepositPage';
import DepositDetailPage from './pages/deposit/depositDetail/DepositDetailPage';
import Page404 from './pages/404/Page404';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            {/* <Route path="/" exact={true}>
              <Redirect to="/page/Inbox" />
            </Route>
            <Route path="/page/:name" exact={true}>
              <Page />
            </Route> */}
            <Redirect from="**" to="/page-404" exact />
            <Route path="/login" component={LoginPage} exact />
            <Route path="/user" component={UserPage} exact />
            <Route path="/balance" component={BalancePage} exact />
            <Route path="/purchases" component={PurchasesListPage} exact />
            <Route path="/purchase" component={PurchasePage} exact />
            <Route path="/my-deposits" component={MyDepositsListPage} exact />
            <Route path="/deposits" component={DepositsListPage} exact />
            <Route path="/deposit" component={DepositPage} exact />
            <Route path="/deposit-details/:id" component={DepositDetailPage} exact />
            <Route path="/page-404" component={Page404} exact />
            <Redirect from="/" to="/user" exact />
            
            {/* <Redirect from="**" to="/login" exact /> */}
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
