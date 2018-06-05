var Order = function () {
    var table_list = $("#table-list");

    var handleTabClick = function () {
        $('.nav-tabs').on('click', 'li', function (e) {
            //请求新数据，把拿到的数据丢给这个tabledata2参数
            table_list.bootstrapTable('load', tabledata2)
        })
    };
    var handleSearch = function () {
        $('#query_search').on('click', function (e) {
            //请求新数据，把拿到的数据丢给这个tabledata2参数
            table_list.bootstrapTable('load', tabledata2)
        })
    };
    var bindEvents = function () {
        handleTabClick();
        handleSearch();
    }
    var columns = [{
            field: 'id',
            title: '序号',
            width: '5%'
        },
        {
            field: 'order_num',
            title: '订单编号',
            width: '15%'
        },
        {
            field: 'order_time',
            title: '下单时间',
            width: '15%'
        },
        {
            field: 'order_name',
            title: '商品名称',
            width: '10%'
        },
        {
            field: 'order_owner',
            title: '收货人',
            width: '10%'
        },
        {
            field: 'order_phone',
            title: '手机',
            width: '12%'
        },
        {
            field: 'order_price',
            title: '总价',
            width: '10%'
        },
        {
            field: 'order_type',
            title: '订单类型',
            width: '5%'
        },
        {
            field: 'order_status',
            title: '状态',
            width: '8%'
        },
        {
            field: 'order_operate',
            title: '操作',
            formatter: function (value, row, index) {
                var html = '';
                html += '<a class="common-blue" href="#">详情</a>&nbsp;';
                html += '<a class="common-blue" href="#">待收货</a>&nbsp;';
                return html;
            }
        },

    ];
    var tabledata = [{
            id: 1,
            order_num: 'LM234242141241',
            order_time: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            order_owner: '钱先生',
            order_phone: '13311644622',
            order_price: '49',
            order_type: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            order_num: 'LM234242141241',
            order_time: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            order_owner: '钱先生',
            order_phone: '13311644622',
            order_price: '49',
            order_type: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            order_num: 'LM234242141241',
            order_time: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            order_owner: '钱先生',
            order_phone: '13311644622',
            order_price: '49',
            order_type: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            order_num: 'LM234242141241',
            order_time: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            order_owner: '钱先生',
            order_phone: '13311644622',
            order_price: '49',
            order_type: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            order_num: 'LM234242141241',
            order_time: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            order_owner: '钱先生',
            order_phone: '13311644622',
            order_price: '49',
            order_type: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            order_num: 'LM234242141241',
            order_time: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            order_owner: '钱先生',
            order_phone: '13311644622',
            order_price: '49',
            order_type: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            order_num: 'LM234242141241',
            order_time: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            order_owner: '钱先生',
            order_phone: '13311644622',
            order_price: '49',
            order_type: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            order_num: 'LM234242141241',
            order_time: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            order_owner: '钱先生',
            order_phone: '13311644622',
            order_price: '49',
            order_type: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            order_num: 'LM234242141241',
            order_time: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            order_owner: '钱先生',
            order_phone: '13311644622',
            order_price: '49',
            order_type: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            order_num: 'LM234242141241',
            order_time: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            order_owner: '钱先生',
            order_phone: '13311644622',
            order_price: '49',
            order_type: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            order_num: 'LM234242141241',
            order_time: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            order_owner: '钱先生',
            order_phone: '13311644622',
            order_price: '49',
            order_type: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            order_num: 'LM234242141241',
            order_time: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            order_owner: '钱先生',
            order_phone: '13311644622',
            order_price: '49',
            order_type: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            order_num: 'LM234242141241',
            order_time: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            order_owner: '钱先生',
            order_phone: '13311644622',
            order_price: '49',
            order_type: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            order_num: 'LM234242141241',
            order_time: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            order_owner: '钱先生',
            order_phone: '13311644622',
            order_price: '49',
            order_type: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            order_num: 'LM234242141241',
            order_time: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            order_owner: '钱先生',
            order_phone: '13311644622',
            order_price: '49',
            order_type: '普通',
            order_status: '待发货'
        }
    ]

    var tabledata2 = [{
        id: 1,
        order_num: 'LM234242141241',
        order_time: '2018-02-03 12:22',
        order_name: '充气蛙蛙',
        order_owner: '钱先生',
        order_phone: '13311644622',
        order_price: '49',
        order_type: '普通',
        order_status: '待发货'
    }]
    return {
        init: function () {
            table_list.bootstrapTable({
                columns: columns,
                pagination: true,
                showFullscreen: false,
                showColumns: false,
                showRefresh: false,
                data: tabledata
            });
            $('.form_datetime_start').datetimepicker();
            $('.form_datetime_end').datetimepicker();
            bindEvents()
        }
    }
}();
$(document).ready(function () {
    Order.init();
})