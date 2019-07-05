module.exports = {
    title: '技术总结',
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }]
    ],
    themeConfig: {
        sidebarDepth: 3,
        nav: [
            {
                text: '技术总结',
                link: '/pages/technology/',
            },
            {
                text: '技术分享',
                link: '/pages/share/',
            },
            {
                text: '收藏',
                link: '/pages/collect/',
            },
        ],
        sidebar: {
            '/pages/technology/': [
                {
                    title: '技术学习',
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
						'mysql'
                    ]
                }
            ],
            '/pages/share/': [
                // {
                //     title: 'Node + express + mysql',
                //     children: [
                //         'mysql',
                //         'node',
                //         'express'
                //     ]
                // }
            ],
            '/pages/collect/':[
                {
                    title: '收藏',
                    children: [
                        ''
                    ]
                }
            ]
        }
    }
}
