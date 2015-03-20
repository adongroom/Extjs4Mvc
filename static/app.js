/**
 * Created by hanzhendong on 15/3/16.
 */
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        app: '/Extjs4Mvc/static/app'
    }
});
Ext.application({

    requires: ['Ext.container.Viewport'],

    name: 'SMS',

    appFolder: 'app',
    controllers: [

        'main'

    ],

    launch: function () {

        Ext.create("SMS.view.viewPort");
        console

    }


});