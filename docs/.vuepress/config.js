module.exports = {
    title: "文学故事集",
    description: "该网站用于收集文学故事，仅用于学习与交流",
    theme: 'reco',
    base: '/story/',
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    plugins: [
        [
            "sakura",
            {
                num: 5, // 默认数量
                show: true, //  是否显示
                zIndex: -1, // 层级
                img: {
                    replace: false, // false 默认图 true 换图 需要填写httpUrl地址
                },
            },
        ],
        [
            "cursor-effects",
            {
                size: 4, // size of the particle, default: 2
                shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
                zIndex: 999999999, // z-index property of the canvas, default: 999999999
            },
        ],
    ],
    themeConfig: {
        nav: [
            { text: "首页", link: "/" },
            {
                text: "Stoic的世界",
            }
        ],
        sidebar: [
            {
                title: "欢迎学习",
                path: "/",
                collapsable: false,  // 是否折叠
                children: [{ title: "网站简介", path: "/" }],
            },
            {
                title: "民间故事",
                path: "/blogs/1",
                collapsable: true,
                children: [
                    { title: "第一篇", path: "/blogs/1" },
                    { title: "第二篇", path: "/blogs/2" },
                ]
            }
        ]
    }
}

