/**
 * Created by hanzhendong on 15/3/19.
 */
Ext.define('AM.view.user.List', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.userlist',


    title: 'All Users',

    store: 'Users',
    initComponent: function () {


        this.columns = [

            {header: 'id', dataIndex: 'id', flex: 1},
            {header: 'Name', dataIndex: 'name', flex: 1},

            {header: 'Email', dataIndex: 'email', flex: 1}

        ];


        this.callParent(arguments);

    }

});