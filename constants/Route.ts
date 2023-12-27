    export const Navigation = [
        {
            title: 'ホーム',
            path: '/',
        },
        {
            title: '書籍検索',
            path: '/search-public-books',
        },
        {
            title: '貸出し',
            path: '/book-collection',
        },
        {
            title: 'お問い合わせ',
            path: '/inquiry',
        },
    ]

    export enum Route {
        Home = "home",
        About = "about",
        Login = "login",
    }

    export const RoutePath = {
        [Route.Home] : "/",
        [Route.About] : "/about",
        [Route.Login] : "/login",
    }