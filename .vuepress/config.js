module.exports = {
    themeConfig: {
        logo: '/assets/img/favicon.ico',    // Navbar Logo
        displayAllHeaders: true,     // Display Header LInks of All Pages
        nav: [
            { text: 'Home', link: '/'},
            { text: '업무화면', link: '/category1/'},
            { text: 'Layout구성', link: '/category2/'},
            { text: '전체공통', link: '/category3/'},
            { text: 'VuePress', link: 'https://vuepress.vuejs.org'},
        ],
        lastUpdated: 'Last Upadted',
        markdown: {
            lineNumbers: true,
        },
        sidebarDepth: 2,
        sidebar: {
            '/category1/' : [
                '',
                'button',
                'input',
                'calendar',
            ]
        }
    }
}