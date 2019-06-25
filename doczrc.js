/**
 * Docz config
 */
export default {
    title: 'Lime Web Components',
    description: 'Documentation for Lime Web Components',
    typescript: true,
    base: '/lime-web-components/',
    hashRouter: true,
    themeConfig: {
        colors: {
            primary: '#00b3a7',
        },
    },
    menu: [
        'Home',
        'Installation',
        {
            name: 'Concepts',
            menu: [
                'Lime Web Component',
                'Slots',
                'Context',
                'Platform services',
                'State',
                'Lime Elements',
            ],
        },
        {
            name: 'Tutorials',
            menu: [
                'Hello, world!',
                'Hello, CRM!',
                'Hello, Grid!',
                'Hello, Command!',
                'Hello, Event!',
            ],
        },
        {
            name: 'API reference',
            menu: [
                'CommandBusService',
                'Commands',
                'DialogService',
                'EventDispatcherService',
                'HttpService',
                'LimeWebComponent',
                'NotificationService',
                'RouteService',
                'StateServices',
                'TranslateService'
            ],
        },
    ],
};
