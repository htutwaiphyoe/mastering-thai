import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Layout/Layout";

const Home = React.lazy(() => import("./Home/Home"));
const Watch = React.lazy(() => import("./Watch/Watch"));
const Search = React.lazy(() => import("./Search/Search"));
const App = (props) => {
    return (
        <React.Fragment>
            <Layout>
                <Suspense fallback={null}>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/watch" component={Watch} exact />
                        <Route path="/search" component={Search} exact />
                        <Redirect to="/" />
                    </Switch>
                </Suspense>
            </Layout>
        </React.Fragment>
    );
};
export default App;
