import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import Subnav from './components/Subnav';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';
import AuthContainer from './components/AuthContainer'; //
import Home from './components/Home';
import PasswordReset from './components/PasswordReset';
import BlackChip from './components/BlackChip';
import Intertoops from './components/Intertoops';
import ACR from './components/ACR';
import Betonline from './components/Betonline';
import NitrogenSports from './components/NitrogenSports';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Faq from './components/Faq';
import ForgotPassword from './components/ForgotPassword';
import Login2 from './components/Login2';
import Register from './components/Register';
import Tos from './components/Tos';
import Single from './components/Single';

import SWC from './components/SWC';

const App = () => (
        <div>
            <Header />
            <Subnav />
            <div className="div-wrappper">
                <Switch>
                    <AuthContainer
                        exact
                        path="/reset-password"
                        name="reset"
                        Comp={PasswordReset}
                    />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/faq" component={Faq} />
                    <Route exact path="/forgot-password" component={ForgotPassword} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/login" component={Login2} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/tos" component={Tos} />
                    <Route exact path="/blog/:slug" component={Single} />
                    <Route exact path="/tools" component={Home} />
                    <Route exact path="/sports" component={Home} />
                    <Route exact path="/trading" component={Home} />
                    <Route exact path="/blackchip-poker" component={BlackChip} />
                    <Route exact path="/nitrogensports" component={NitrogenSports} />
                    <Route exact path="/intertoops" component={Intertoops} />
                    <Route exact path="/americas-cardroom" component={ACR} />
                    <Route exact path="/betonline" component={Betonline} />
                    <Route exact path="/swc" component={SWC} />
                    <AuthContainer
                        exact
                        path="/dashboard"
                        name="dashboard"
                        Comp={Dashboard}
                    />
                    <AuthContainer exact path="/admin" name="admin" Comp={Admin} />
                </Switch>
            </div>
            <Footer />
        </div>
);

export default App;
