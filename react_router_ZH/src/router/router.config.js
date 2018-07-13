import Loadable from "react-loadable";
import Loading from "../components/common/loading";
// 一级路由和详情页面
// import Guide from "../components/Guide";
/* import Detail from "../components/Detail";
// 二级路由
import Home from "../components/guide/Home";
import University from "../components/guide/University";
import Msg from "../components/guide/Msg";
import Idea from "../components/guide/Idea";
import Mine from "../components/guide/Mine";
// 三级路由
import Hot from "../components/guide/home/Hot";
import Follow from "../components/guide/home/Follow";
import Recommend from "../components/guide/home/Recommend"; */

const Guide = Loadable({
    loader: () =>
        import ("../components/Guide"),
    loading: Loading
})
const Detail = Loadable({
    loader: () =>
        import ("../components/Detail"),
    loading: Loading
})
const Home = Loadable({
    loader: () =>
        import ("../components/guide/Home"),
    loading: Loading
})
const University = Loadable({
    loader: () =>
        import ("../components/guide/University"),
    loading: Loading
})
const Msg = Loadable({
    loader: () =>
        import ("../components/guide/Msg"),
    loading: Loading
})
const Idea = Loadable({
    loader: () =>
        import ("../components/guide/Idea"),
    loading: Loading
})
const Mine = Loadable({
    loader: () =>
        import ("../components/guide/Mine"),
    loading: Loading
})
const Hot = Loadable({
    loader: () =>
        import ("../components/guide/home/Hot"),
    loading: Loading
})
const Follow = Loadable({
    loader: () =>
        import ("../components/guide/home/Follow"),
    loading: Loading
})
const Recommend = Loadable({
    loader: () =>
        import ("../components/guide/home/Recommend"),
    loading: Loading
})
export default {
    routes: [{
        path: "/detail",
        component: Detail
    }, {
        path: "/guide",
        component: Guide,
        children: [{
            path: "/guide/home",
            component: Home,
            children: [{
                    path: "/guide/home/follow",
                    component: Follow
                },
                {
                    path: "/guide/home/hot",
                    component: Hot
                },
                {
                    path: "/guide/home/recommend",
                    component: Recommend
                }
            ]
        }, {
            path: "/guide/university",
            component: University
        }, {
            path: "/guide/msg",
            component: Msg
        }, {
            path: "/guide/idea",
            component: Idea
        }, {
            path: "/guide/mine",
            component: Mine
        }]
    }]
}