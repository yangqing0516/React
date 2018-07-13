// 一级路由和详情页面
import Guide from "../components/Guide";
import Detail from "../components/Detail";
// 二级路由
import Home from "../components/guide/Home";
import University from "../components/guide/University";
import Msg from "../components/guide/Msg";
import Idea from "../components/guide/Idea";
import Mine from "../components/guide/Mine";
// 三级路由
import Hot from "../components/guide/home/Hot";
import Follow from "../components/guide/home/Follow";
import Recommend from "../components/guide/home/Recommend";

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