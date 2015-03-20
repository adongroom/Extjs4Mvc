/**
 * Created by hanzhendong on 15/3/16.
 */
Ext.define('app.menu.menu', {
    extend: 'Ext.tree.Panel',
    title: '菜单',
    width: '200px',
    rootVisible: false,
    region: 'west',
    store: Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [
                {
                    text: "学生管理", expanded: true, children: [
                    {text: "学生信息", leaf: true},
                    {text: "algebra", leaf: true}
                ]
                },
                {text: "buy lottery tickets", leaf: true}
            ]
        }
    }),
    constructor: function (config) {
        this.callParent(arguments);
    },
    listeners: {
        itemclick: function (_this, record, item, index, e, eOpts) {
            if (record.data.leaf) {
                var MainContiner = Ext.getCmp("MainContiner");
                var action = Ext.create("app.student.information");
                /*if (!MainContiner.child(action) ||
                 record.raw.action.package == "app.actionPanel.ActionPanel") {
                 MainContiner.add(action);
                 }*/
                MainContiner.add(action);
                MainContiner.setActiveTab(action);
            }
        }
    }
})
;