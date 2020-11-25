import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";

const Home = React.lazy(() => import("./Home/Home"));
const Watch = React.lazy(() => import("./Watch/Watch"));
const Search = React.lazy(() => import("./Search/Search"));
const App = (props) => {
    // show() {
    //     if (this.props.selectedVideo) {
    //         return (
    //             <div className={`${classes.App} ${classes.Select}`}>
    //                 <VideoDetial />
    //                 <VideoList />
    //             </div>
    //         );
    //     }
    //     return (
    //         <div className={`${classes.App}`}>
    //             <VideoList />
    //         </div>
    //     );
    // }

    return (
        <React.Fragment>
            <Layout>
                <Suspense fallback={null}>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/watch" component={Watch} exact />
                        <Route path="/search" component={Search} exact />
                    </Switch>
                </Suspense>
            
            </Layout>
        </React.Fragment>
    );
};
// const mapStateToProps = (state) => {
//     return {
//         loading: state.ui.loading,
//         selectedVideo: state.videos.selectedVideo,
//         list: state.ui.listRef,
//     };
// };

// const mapDispatchToProps = {
//     loadVideos: actionCreators.loadVideos,
//     loadRequest: actionCreators.loadRequest,
//     scrollVideos: actionCreators.scrollVideos,
// };
export default App;
