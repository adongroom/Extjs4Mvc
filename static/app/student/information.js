/**
 * Created by hanzhendong on 15/3/18.
 */
Ext.define("app.student.information", {

    extend: 'Ext.form.Panel',
    title: '学生信息',
    itemId: 'inforManagerId',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    closable: true,
    items: [
        {
            xtype: 'form',
            layout: 'hbox',
            items: [
                {
                    closeAction: 'true',
                    title: '个人头像',
                    buttonAlign: 'center',
                    items: [
                        {
                            xtype: 'panel',
                            border: true,
                            html: '<img src="http://www.sencha.com/img/20110215-feat-html5.png">'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '个人照片',
                            width: 150,
                            Height: 180,
                            inputType: 'image',
                            anchor: '100%',
                            listeners: { // 该项被载入时加载照片
                                'render': function (_filed) {
                                    _filed.getEl().dom.src = "qing.jpg";//这里图片的路径可以预先从store中读取，赋给变量然后给它
                                }     //动态显示图片
                            }
                        }]
                },
                {
                    xtype: 'fieldset',
                    title: '个人信息',
                    defaultType: 'textfield',
                    layout: 'anchor',
                    collapsible: true,
                    columnWidth: 0.5,
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [{
                                fieldLabel: '学号',
                                name: 'email',
                                allowBlank: false
                            }, {
                                fieldLabel: '曾用名',
                                name: 'phone'
                            }]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [{
                                fieldLabel: '姓名',
                                allowBlank: false
                            }, {
                                fieldLabel: '姓名拼音',
                                name: 'phone'
                            }]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [
                                {

                                    fieldLabel: '性别',
                                    xtype: 'combo',
                                    id: 'sexId',
                                    store: {
                                        fields: [
                                            {name: "sexId"},
                                            {name: "name"}
                                        ],
                                        data: [
                                            {"statusId": "0", "name": "男"},
                                            {"statusId": "1", "name": "女"}

                                        ]
                                    },
                                    emptyText: '请选择',
                                    //value: "0",
                                    valueField: 'sexId',
                                    displayField: 'name'

                                },
                                {
                                    fieldLabel: '英文名',
                                    name: 'phone'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [
                                {

                                    fieldLabel: '国籍',
                                    xtype: 'combo',
                                    id: 'contryId',
                                    store: {
                                        fields: [
                                            {name: "contryId"},
                                            {name: "name"}
                                        ],
                                        data: [
                                            {"statusId": "0", "name": "中国"},
                                            {"statusId": "1", "name": "外国"}

                                        ]
                                    },
                                    emptyText: '请选择',
                                    //value: "0",
                                    valueField: 'contryId',
                                    displayField: 'name'

                                },
                                {
                                    fieldLabel: '民族',
                                    name: 'native'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [
                                {
                                    xtype: "datefield",
                                    fieldLabel: '出生日期',
                                    id: 'borthId',
                                    format: 'Y-m-d'
                                    /*convert: function (v) {
                                     return new Date(v)
                                     },*/
                                    //value: new Date()
                                },
                                {

                                    fieldLabel: '政治面貌',
                                    xtype: 'combo',
                                    id: 'zjId',
                                    store: {
                                        fields: [
                                            {name: "contryId"},
                                            {name: "name"}
                                        ],
                                        data: [
                                            {"statusId": "0", "name": "团员"},
                                            {"statusId": "1", "name": "党员"}

                                        ]
                                    },
                                    emptyText: '请选择',
                                    //value: "0",
                                    valueField: 'contryId',
                                    displayField: 'name'

                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [{
                                fieldLabel: '身份证号',
                                allowBlank: false
                            }, {
                                fieldLabel: '电子邮箱',
                                name: 'email'
                            }]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [{
                                fieldLabel: '手机号',
                                allowBlank: false
                            }, {
                                fieldLabel: 'QQ号',
                                name: 'phone'
                            }]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [{
                                fieldLabel: '银行卡号',
                                allowBlank: false
                            }, {
                                fieldLabel: '开户行名称',
                                name: 'phone'
                            }]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [
                                {
                                    fieldLabel: '一卡通卡号',
                                    name: 'native'
                                },
                                {

                                    fieldLabel: '婚姻状况',
                                    xtype: 'combo',
                                    itemId: 'contryId',
                                    store: {
                                        fields: [
                                            {name: "contryId"},
                                            {name: "name"}
                                        ],
                                        data: [
                                            {"statusId": "0", "name": "已婚"},
                                            {"statusId": "1", "name": "未婚"}

                                        ]
                                    },
                                    emptyText: '请选择',
                                    //value: "0",
                                    valueField: 'contryId',
                                    displayField: 'name'

                                }

                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',

                            defaultType: 'combo',
                            margin: '0 0 5 0',
                            items: [
                                {
                                    xtype: 'combo',
                                    fieldLabel: '籍贯',
                                    maxWidth: 220,
                                    margin: '0 8 0 0',
                                    store: {
                                        fields: [
                                            {name: "pId"},
                                            {name: "name"}
                                        ],
                                        proxy: {
                                            type: "ajax",
                                            url: ""
                                        },
                                        autoLoad: true,
                                        listeners: {
                                            load: function (_this, records, successful, eOpts) {
                                                var range = this.getRange();
                                                var v = this.getRange()[0].data.pId;
                                                Ext.getCmp("pId").setValue(v);
                                            }
                                        }
                                    },
                                    emptyText: '省',
                                    valueField: 'pId',
                                    displayField: 'name'
                                },
                                {
                                    xtype: 'combo',
                                    maxWidth: 220,
                                    margin: '0 8 0 0',
                                    store: {
                                        fields: [
                                            {name: "pId"},
                                            {name: "name"}
                                        ],
                                        proxy: {
                                            type: "ajax",
                                            url: ""
                                        },
                                        autoLoad: true,
                                        listeners: {
                                            load: function (_this, records, successful, eOpts) {
                                                var range = this.getRange();
                                                var v = this.getRange()[0].data.pId;
                                                Ext.getCmp("pId").setValue(v);
                                            }
                                        }
                                    },
                                    emptyText: '市',
                                    valueField: 'pId',
                                    displayField: 'name'
                                },
                                {
                                    xtype: 'combo',
                                    maxWidth: 220,
                                    margin: '0 8 0 0',
                                    itemId: 'xianId',
                                    store: {
                                        fields: [
                                            {name: "pId"},
                                            {name: "name"}
                                        ],
                                        proxy: {
                                            type: "ajax",
                                            url: ""
                                        },
                                        autoLoad: true,
                                        listeners: {
                                            load: function (_this, records, successful, eOpts) {
                                                var range = this.getRange();
                                                var v = this.getRange()[0].data.pId;
                                                Ext.getCmp("pId").setValue(v);
                                            }
                                        }
                                    },
                                    emptyText: '县(市、区)',
                                    valueField: 'pId',
                                    displayField: 'name'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',

                            defaultType: 'combo',
                            margin: '0 0 5 0',
                            items: [
                                {
                                    xtype: 'combo',
                                    fieldLabel: '生源地',
                                    maxWidth: 220,
                                    margin: '0 8 0 0',
                                    store: {
                                        fields: [
                                            {name: "pId"},
                                            {name: "name"}
                                        ],
                                        proxy: {
                                            type: "ajax",
                                            url: ""
                                        },
                                        autoLoad: true,
                                        listeners: {
                                            load: function (_this, records, successful, eOpts) {
                                                var range = this.getRange();
                                                var v = this.getRange()[0].data.pId;
                                                Ext.getCmp("pId").setValue(v);
                                            }
                                        }
                                    },
                                    emptyText: '省',
                                    valueField: 'pId',
                                    displayField: 'name'
                                },
                                {
                                    xtype: 'combo',
                                    maxWidth: 220,
                                    margin: '0 8 0 0',
                                    store: {
                                        fields: [
                                            {name: "pId"},
                                            {name: "name"}
                                        ],
                                        proxy: {
                                            type: "ajax",
                                            url: ""
                                        },
                                        autoLoad: true,
                                        listeners: {
                                            load: function (_this, records, successful, eOpts) {
                                                var range = this.getRange();
                                                var v = this.getRange()[0].data.pId;
                                                Ext.getCmp("pId").setValue(v);
                                            }
                                        }
                                    },
                                    emptyText: '市',
                                    valueField: 'pId',
                                    displayField: 'name'
                                },
                                {
                                    xtype: 'combo',
                                    maxWidth: 220,
                                    margin: '0 8 0 0',
                                    itemId: 'xianId',
                                    store: {
                                        fields: [
                                            {name: "pId"},
                                            {name: "name"}
                                        ],
                                        proxy: {
                                            type: "ajax",
                                            url: ""
                                        },
                                        autoLoad: true,
                                        listeners: {
                                            load: function (_this, records, successful, eOpts) {
                                                var range = this.getRange();
                                                var v = this.getRange()[0].data.pId;
                                                Ext.getCmp("pId").setValue(v);
                                            }
                                        }
                                    },
                                    emptyText: '县(市、区)',
                                    valueField: 'pId',
                                    displayField: 'name'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'fit',
                            width: 505,
                            defaultType: 'textareafield',
                            margin: '0 0 5 0',
                            items: [{
                                fieldLabel: '特长爱好',
                                name: 'phone'
                            }]
                        }
                    ]
                }
            ],
            buttons: [{
                text: '保存',
                scope: this
            }, {
                text: '重置',
                scope: this
                //handler: this.onCompleteClick
            }]
        },
        {
            xtype: 'form',
            items: [
                {
                    xtype: 'fieldset',
                    title: '家庭信息',
                    defaultType: 'textfield',
                    layout: 'anchor',
                    collapsible: true,
                    columnWidth: 0.5,
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'container',
                            layout: 'hbox',

                            defaultType: 'combo',
                            margin: '0 0 5 0',
                            items: [
                                {
                                    xtype: 'combo',
                                    fieldLabel: '家庭地址',
                                    maxWidth: 220,
                                    margin: '0 8 0 0',
                                    store: {
                                        fields: [
                                            {name: "pId"},
                                            {name: "name"}
                                        ],
                                        proxy: {
                                            type: "ajax",
                                            url: ""
                                        },
                                        autoLoad: true,
                                        listeners: {
                                            load: function (_this, records, successful, eOpts) {
                                                var range = this.getRange();
                                                var v = this.getRange()[0].data.pId;
                                                Ext.getCmp("pId").setValue(v);
                                            }
                                        }
                                    },
                                    emptyText: '省',
                                    valueField: 'pId',
                                    displayField: 'name'
                                },
                                {
                                    xtype: 'combo',
                                    labelWidth: 80,
                                    maxWidth: 220,
                                    margin: '0 8 0 0',
                                    store: {
                                        fields: [
                                            {name: "pId"},
                                            {name: "name"}
                                        ],
                                        proxy: {
                                            type: "ajax",
                                            url: ""
                                        },
                                        autoLoad: true,
                                        listeners: {
                                            load: function (_this, records, successful, eOpts) {
                                                var range = this.getRange();
                                                var v = this.getRange()[0].data.pId;
                                                Ext.getCmp("pId").setValue(v);
                                            }
                                        }
                                    },
                                    emptyText: '市',
                                    valueField: 'pId',
                                    displayField: 'name'
                                },
                                {
                                    xtype: 'combo',
                                    labelWidth: 80,
                                    maxWidth: 220,
                                    margin: '0 8 0 0',
                                    itemId: 'xianId',
                                    store: {
                                        fields: [
                                            {name: "pId"},
                                            {name: "name"}
                                        ],
                                        proxy: {
                                            type: "ajax",
                                            url: ""
                                        },
                                        autoLoad: true,
                                        listeners: {
                                            load: function (_this, records, successful, eOpts) {
                                                var range = this.getRange();
                                                var v = this.getRange()[0].data.pId;
                                                Ext.getCmp("pId").setValue(v);
                                            }
                                        }
                                    },
                                    emptyText: '县(市、区)',
                                    valueField: 'pId',
                                    displayField: 'name'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'fit',
                            width: 300,
                            defaultType: 'textareafield',
                            margin: '0 0 5 0',
                            items: [{
                                fieldLabel: '详细地址',
                                name: 'phone'
                            }]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [{
                                fieldLabel: '邮政编码',
                                allowBlank: false
                            }, {
                                fieldLabel: '家庭电话',
                                name: 'phone'
                            }]
                        }
                    ]
                },
                {
                    title: '家庭成员',
                    xtype: 'grid',
                    autoHeight: true,
                    itemId: 'gridId',
                    name: 'familyGridId',
                    multiSelect: true,
                    collapsible: true,
                    selModel: {
                        selType: 'checkboxmodel'
                    },
                    plugins: [
                        Ext.create('Ext.grid.plugin.CellEditing', {
                            clicksToEdit: 1
                        })
                    ],
                    store: {
                        fields: [
                            {name: 'cName'},
                            {name: 'name'},
                            {name: 'company'},
                            {name: 'position'},
                            {name: 'phone'}
                        ],
                        proxy: {
                            type: 'ajax',
                            url: '',

                            reader: {
                                type: 'json',
                                root: 'rows',
                                totalProperty: 'total'
                            }
                        }
                    },
                    columns: [
                        {header: "称谓", dataIndex: "cName", editor: 'textfield'},
                        {header: "姓名", dataIndex: "name", editor: 'textfield'},
                        {header: "工作单位", dataIndex: "company", editor: 'textfield'},
                        {header: "职务", dataIndex: "position", editor: 'textfield'},
                        {header: "联系电话", dataIndex: "phone", editor: 'textfield'}
                    ]

                }
            ],
            buttons: [
                {
                    itemId: 'addInfo',
                    text: '添加',
                    handler: function () {
                        var model = {
                            cName: '父亲',
                            name: '张三',
                            company: '济南',
                            position: '农业',
                            phone: '18363018952'
                        };
                        Ext.ComponentQuery.query("grid[name='familyGridId']")[0].getStore().insert(0, model);
                        Ext.ComponentQuery.query("grid[name='familyGridId']")[0].CellEditing.startEditByPosition({
                            row: 0,
                            column: 0
                        });
                    }
                },
                {
                    itemId: 'modifyInfo',
                    text: "删除",
                    handler: function () {
                        var famlilyGrid = Ext.ComponentQuery.query("grid[name='familyGridId']")[0];
                        var sm = famlilyGrid.getSelectionModel();

                        var record = sm.getSelection();
                        famlilyGrid.getStore().remove(record);
                        /*
                         var rowIndex = famlilyGrid.getStore().getRecord().index;
                         famlilyGrid.getStore().removeAt(rowIndex);*/
                    }
                },
                {
                    text: '保存',
                    scope: this
                }, {
                    text: '重置',
                    scope: this
                    //handler: this.onCompleteClick
                }]
        },
        {
            xtype: 'form',
            items: [
                {
                    xtype: 'fieldset',
                    title: '录取信息',
                    defaultType: 'textfield',
                    layout: 'anchor',
                    collapsible: true,
                    columnWidth: 0.5,
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'container',
                            layout: 'hbox',

                            defaultType: 'combo',
                            margin: '0 0 5 0',
                            items: [
                                {
                                    xtype: 'combo',
                                    fieldLabel: '中学所在地',
                                    maxWidth: 220,
                                    margin: '0 8 0 0',
                                    store: {
                                        fields: [
                                            {name: "pId"},
                                            {name: "name"}
                                        ],
                                        proxy: {
                                            type: "ajax",
                                            url: ""
                                        },
                                        autoLoad: true,
                                        listeners: {
                                            load: function (_this, records, successful, eOpts) {
                                                var range = this.getRange();
                                                var v = this.getRange()[0].data.pId;
                                                Ext.getCmp("pId").setValue(v);
                                            }
                                        }
                                    },
                                    emptyText: '省',
                                    valueField: 'pId',
                                    displayField: 'name'
                                },
                                {
                                    xtype: 'combo',
                                    maxWidth: 220,
                                    margin: '0 8 0 0',
                                    store: {
                                        fields: [
                                            {name: "pId"},
                                            {name: "name"}
                                        ],
                                        proxy: {
                                            type: "ajax",
                                            url: ""
                                        },
                                        autoLoad: true,
                                        listeners: {
                                            load: function (_this, records, successful, eOpts) {
                                                var range = this.getRange();
                                                var v = this.getRange()[0].data.pId;
                                                Ext.getCmp("pId").setValue(v);
                                            }
                                        }
                                    },
                                    emptyText: '市',
                                    valueField: 'pId',
                                    displayField: 'name'
                                },
                                {
                                    xtype: 'combo',
                                    maxWidth: 220,
                                    margin: '0 8 0 0',
                                    itemId: 'xianId',
                                    store: {
                                        fields: [
                                            {name: "pId"},
                                            {name: "name"}
                                        ],
                                        proxy: {
                                            type: "ajax",
                                            url: ""
                                        },
                                        autoLoad: true,
                                        listeners: {
                                            load: function (_this, records, successful, eOpts) {
                                                var range = this.getRange();
                                                var v = this.getRange()[0].data.pId;
                                                Ext.getCmp("pId").setValue(v);
                                            }
                                        }
                                    },
                                    emptyText: '县(市、区)',
                                    valueField: 'pId',
                                    displayField: 'name'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [{
                                fieldLabel: '中学名称',
                                name: 'email',
                                allowBlank: false
                            }, {
                                fieldLabel: '证明人',
                                name: 'phone'
                            }]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [{
                                fieldLabel: '证明人职务',
                                allowBlank: false
                            }, {
                                fieldLabel: '证明人手机号',
                                name: 'phone'
                            }]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [{
                                fieldLabel: '准考证号',
                                allowBlank: false
                            }, {
                                fieldLabel: '高考分数',
                                name: 'phone'
                            }]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [{
                                xtype: "datefield",
                                fieldLabel: '录取年份',
                                format: 'Y-m-d'
                                /*convert: function (v) {
                                 return new Date(v)
                                 },*/
                                //value: new Date()
                            }, {
                                fieldLabel: '外语语种',
                                name: 'phone'
                            }]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',

                            defaultType: 'combo',
                            margin: '0 0 5 0',
                            items: [
                                {
                                    xtype: 'combo',
                                    fieldLabel: '学生来源',
                                    maxWidth: 220,
                                    margin: '0 8 0 0',
                                    store: {
                                        fields: [
                                            {name: "pId"},
                                            {name: "name"}
                                        ],
                                        proxy: {
                                            type: "ajax",
                                            url: ""
                                        },
                                        autoLoad: true,
                                        listeners: {
                                            load: function (_this, records, successful, eOpts) {
                                                var range = this.getRange();
                                                var v = this.getRange()[0].data.pId;
                                                Ext.getCmp("pId").setValue(v);
                                            }
                                        }
                                    },
                                    emptyText: '省',
                                    valueField: 'pId',
                                    displayField: 'name'
                                },
                                {
                                    xtype: 'combo',
                                    maxWidth: 220,
                                    margin: '0 8 0 0',
                                    store: {
                                        fields: [
                                            {name: "pId"},
                                            {name: "name"}
                                        ],
                                        proxy: {
                                            type: "ajax",
                                            url: ""
                                        },
                                        autoLoad: true,
                                        listeners: {
                                            load: function (_this, records, successful, eOpts) {
                                                var range = this.getRange();
                                                var v = this.getRange()[0].data.pId;
                                                Ext.getCmp("pId").setValue(v);
                                            }
                                        }
                                    },
                                    emptyText: '市',
                                    valueField: 'pId',
                                    displayField: 'name'
                                },
                                {
                                    xtype: 'combo',
                                    maxWidth: 220,
                                    margin: '0 8 0 0',
                                    itemId: 'xianId',
                                    store: {
                                        fields: [
                                            {name: "pId"},
                                            {name: "name"}
                                        ],
                                        proxy: {
                                            type: "ajax",
                                            url: ""
                                        },
                                        autoLoad: true,
                                        listeners: {
                                            load: function (_this, records, successful, eOpts) {
                                                var range = this.getRange();
                                                var v = this.getRange()[0].data.pId;
                                                Ext.getCmp("pId").setValue(v);
                                            }
                                        }
                                    },
                                    emptyText: '县(市、区)',
                                    valueField: 'pId',
                                    displayField: 'name'
                                }
                            ]
                        }
                    ]
                }
            ],
            buttons: [{
                text: '保存',
                scope: this
            }, {
                text: '重置',
                scope: this,
                handler: function () {
                }
            }]
        }

    ],


    constructor: function (configData) {
        this.callParent(arguments);
    }
})
;