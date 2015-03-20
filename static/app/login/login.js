/**
 * Created by hanzhendong on 15/3/18.
 */
Ext.onReady(function () {
    var winLogin = Ext.create("Ext.window.Window", {
        width: 400,
        height: 270,
        modal: true, // 窗口弹出，其他地方不可操作
        title: '&nbsp;登陆 ',
        collapsible: true,  // 收缩按钮
        closable: false, // 是否显示关闭窗口按钮
        iconCls: 'key', // cog , database_gear
        resizable: false, // 窗体是否可以拉伸
        constrain: true,
        items: [{
            xtype: 'panel',
            width: '100%',
            height: 70,
            padding: '1px',
            html: "<img src='' alt='LOGO' height='100%' width='100%'/>"
        }, {
            xtype: 'form',
            width: '100%',
            id: 'myform',
            height: 140,
            //frame: true,
            padding: '1px',
            buttonAlign: 'center',
            items: [{
                xtype: 'textfield',
                id: 'username',
                name: 'username',
                fieldCls: 'login_account',
                fieldLabel: '账&nbsp;&nbsp;号&nbsp;&nbsp;',
                width: 300,
                margin: '10,10,10,10',
                labelAlign: 'right',
                allowBlank: false
            }, {
                xtype: "textfield",
                id: 'password',
                name: 'password',
                fieldCls: 'login_password',
                width: 300,
                fieldLabel: '密&nbsp;&nbsp;码&nbsp;&nbsp;',
                margin: '10,10,10,10',
                labelAlign: 'right',
                inputType: 'password',
                allowBlank: false
            },
                {
                    xtype: 'radiogroup',
                    vertical: true,
                    items: [
                        {boxLabel: '学生', name: 'radio', margin: '0 0 0 120', inputValue: 1, checked: true},
                        {boxLabel: '学工', name: 'radio', margin: '0 0 0 50', inputValue: 2}
                    ]
                }

            ],
            buttons: [
                {
                    text: '登陆',
                    layout: 'fit',
                    type: 'submit',
                    margin: '0 0 0 30',
                    handler: function () {
                        var _username = Ext.getCmp('username').getValue();
                        var _password = Ext.getCmp('password').getValue();

                        if (_username == "" || _password == "") {
                            Ext.Msg.alert("提示", "用户名或密码不能为空，请重新输入");
                        } else {
                            // 掩饰层 (遮罩效果)
                            var myMask = new Ext.LoadMask(Ext.getBody(), {msg: "正在登陆，请稍后..."});
                            myMask.show();
                            window.location.href = "index.html";
                            /* Ext.Ajax.request({
                             url: '',
                             method: 'POST',
                             success: function (response, opts) {
                             var sf = Ext.JSON.decode(response.responseText);
                             if (sf.success) {
                             myMask.hide();
                             Ext.Msg.alert("提示", "登陆成功!!!");
                             window.location.href = "index.html";
                             } else {
                             myMask.hide();
                             Ext.Msg.alert("提示", "登陆失败...");
                             }
                             },
                             failure: function (response, opts) {
                             myMask.hide();
                             Ext.Msg.alert("提示", "登陆失败");
                             },
                             params: {
                             username: _username,
                             password: _password
                             }
                             })*/
                        }
                    }
                }, {
                    text: '重置',
                    margin: '0 0 0 20',
                    handler: function () {
                        Ext.getCmp('myform').form.reset();
                    }
                }]
        }],
        renderTo: Ext.getBody()
    });
    winLogin.show();
})