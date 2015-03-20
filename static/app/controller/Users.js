/**
 * Created by hanzhendong on 15/3/19.
 */

Ext.define('AM.controller.Users', {

    extend: 'Ext.app.Controller',
    views: [

        'user.List',
        'user.Edit'

    ],
    stores: [

        'Users'

    ],
    model: ['User'],
    init: function () {

        this.control({

            'userlist': {

                itemdblclick: this.editUser

            },
            'useredit button[action=save]': {

                click: this.updateUser

            }

        });

    },

    updateUser: function (button) {

        var win = button.up('window'),

            form = win.down('form'),

            record = form.getRecord(),

            values = form.getValues();


        record.set(values);

        win.close();

    },
    editUser: function (grid, record) {
        var view = Ext.widget('useredit');


        view.down('form').loadRecord(record);
        console.log('Double clicked on ' + record.get('name'));

    }


});