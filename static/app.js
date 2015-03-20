/**
 * Created by hanzhendong on 15/3/16.
 */
Ext.application({

    requires: ['Ext.container.Viewport'],

    name: 'AM',


    appFolder: 'app',
    controllers: [

        'Users'

    ],

    launch: function () {

        Ext.create('Ext.container.Viewport', {

            layout: 'fit',

            items: [

                {

                    xtype: 'userlist'
                }

            ]

        });

    }

});