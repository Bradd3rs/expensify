import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import AddExpenspensePage from '../components/AddExpenspensePage';
import EditExpenspensePage from '../components/EditExpenspensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpenspensePage} />
                <Route path="/edit/:id" component={EditExpenspensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;