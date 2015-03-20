/**
 * Created by hanzhendong on 15/3/20.
 */

Ext.define('SMS.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'fit',
    hideBorders: true,
    requires: ['SMS.view.head', 'SMS.view.menu', 'SMS.view.tabPanel',
        'SMS.view.south'
    ],

    initComponent: function () {

        var me = this;

        Ext.apply(me, {
            items: [{
                id: 'desk',


                layout: 'border',
                items: [
                    Ext.create('SMS.view.head'), Ext.create('SMS.view.menu'), Ext.create('SMS.view.tabPanel'), Ext.create('SMS.view.south')]

            }
            ]

        })
        ;

        me.callParent(arguments);

    }

})