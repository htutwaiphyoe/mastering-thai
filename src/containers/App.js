import React, { Suspense } from "react";
import { Route } from "react-router-dom";

import Layout from "./Layout/Layout";

const Home = React.lazy(() => import("./Home/Home"));

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
                    <Route path="/" component={Home} exact />
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
