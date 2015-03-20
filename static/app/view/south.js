/**
 * Created by hanzhendong on 15/3/20.
 */

Ext.define('SMS.view.South', {
    extend: 'Ext.Toolbar',
    initComponent: function () {

        Ext.apply(this, {
            id: "bottom",  //frame:true,
            region: "south", height: 23,

            items: []
        });

        this.callParent(arguments);

    }

}) 