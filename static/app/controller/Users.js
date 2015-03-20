/**
 * Created by hanzhendong on 15/3/19.
 */

Ext.define('AM.controller.Users', {

    extend: 'Ext.app.Controller',
    //视图
    views: [
        /*可以使用全路径名字或者使用报下面的相对路径*/
        'AM.view.user.List',
        'user.Edit'

    ],

    stores: [

        'Users'

    ],
    model: ['User'],
    init: function () {

        this.control({
            /*view视图层的事件*/
            'userlist': {

                itemdblclick: this.editUser

            },
            'useredit button[action=save]': {

                click: this.updateUser

            }

        });

    },
    /*更讯用户的方法，参数button 就是对象本身*/

    updateUser: function (button) {

        var win = button.up('window'),

            form = win.down('form'),

            record = form.getRecord(),

            values = form.getValues();


        record.set(values);

        win.close();
        /*告诉store去同步更新数据*/
        this.getUsersStore().sync();

    },
    editUser: function (grid, record) {
        var view = Ext.widget('useredit');

        /*修改用户的window界面， loadRecord 填充表单内容*/
        view.down('form').loadRecord(record);
        console.log('Double clicked on ' + record.get('name'));

    }


});