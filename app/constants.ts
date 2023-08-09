export enum PAGES {
    // eslint-disable-next-line no-unused-vars
    HOME = '/',
    // eslint-disable-next-line no-unused-vars
    FEATURES = "/features",
    // eslint-disable-next-line no-unused-vars
    BLOG = "/blog",
    // eslint-disable-next-line no-unused-vars
    SHOP = "/shop",
    // eslint-disable-next-line no-unused-vars
    ABOUT = "/about",
    // eslint-disable-next-line no-unused-vars
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
