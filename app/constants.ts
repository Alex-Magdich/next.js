export enum PAGES {
    HOME = '/',
    FEATURES = "/features",
    BLOG = "/blog",
    SHOP = "/shop",
    ABOUT = "/about",
    CONTACT_US = "/contact-us",
}

export const NAVIGATION = [
    {
        name: 'Home',
        path: PAGES.HOME
    },
    {
        name: 'Features',
        path: PAGES.FEATURES,
        additional: [
            'Feature 1',
            'Feature 2',
            'Feature 3',
        ]
    },
    {
        name: 'Blog',
        path: PAGES.BLOG
    },
    {
        name: 'Shop',
        path: PAGES.SHOP
    },
    {
        name: 'About',
        path: PAGES.ABOUT
    },
    {
        name: 'Contact',
        path: PAGES.CONTACT_US
    },
]
