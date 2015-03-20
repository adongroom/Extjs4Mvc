/**
 * Created by hanzhendong on 15/3/19.
 */

Ext.define('AM.store.Users', {

    extend: 'Ext.data.Store',

    model: 'AM.model.User',
    autoLoad: true,


    proxy: {

        type: 'ajax',

        api: {
            read: 'data/user.json',

            update: 'data/updateUser.json'


        },

        reader: {

            type: 'json',

            root: 'users',

            successProperty: 'success'

        }

    }

});