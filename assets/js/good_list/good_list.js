var GoodList = function () {
    var table_list = $("#table-list");

    var handleSearch = function () {
        $('#query_search').on('click', function (e) {
            
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
            field: 'creatTime',
            title: '创建时间',
            width: '15%'
        },
        {
            field: 'owner',
            title: '所属星球',
            width: '10%'
        },
        {
            field: 'order_name',
            title: '商品名称',
            width: '15%'
        },
        {
            field: 'type1',
            title: '类目一',
            width: '10%'
        },
        {
            field: 'type2',
            title: '类目二',
            width: '10%'
        },
        {
            field: 'store',
            title: '库存',
            width: '10%'
        },
        {
            field: 'sale',
            title: '销量',
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
                html += '<a class="common-blue" href="#">编辑</a>&nbsp;';
                html += '<a class="common-blue" href="#">下架</a>&nbsp;';
                return html;
            }
        },

    ];
    var tabledata = [{
            id: 1,
            creatTime: 'LM234242141241',
            owner: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            type1: '钱先生',
            type2: '13311644622',
            store: '49',
            sale: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            creatTime: 'LM234242141241',
            owner: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            type1: '钱先生',
            type2: '13311644622',
            store: '49',
            sale: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            creatTime: 'LM234242141241',
            owner: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            type1: '钱先生',
            type2: '13311644622',
            store: '49',
            sale: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            creatTime: 'LM234242141241',
            owner: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            type1: '钱先生',
            type2: '13311644622',
            store: '49',
            sale: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            creatTime: 'LM234242141241',
            owner: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            type1: '钱先生',
            type2: '13311644622',
            store: '49',
            sale: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            creatTime: 'LM234242141241',
            owner: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            type1: '钱先生',
            type2: '13311644622',
            store: '49',
            sale: '普通',
            order_status: '待发货'
        },
        {
            id: 1,
            creatTime: 'LM234242141241',
            owner: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            type1: '钱先生',
            type2: '13311644622',
            store: '49',
            sale: '普通',
            order_status: '待发货'
        }
    ]

    var tabledata2 = [{
            id: 1,
            creatTime: 'LM234242141241',
            owner: '2018-02-03 12:22',
            order_name: '充气蛙蛙',
            type1: '钱先生',
            type2: '13311644622',
            store: '49',
            sale: '普通',
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
    GoodList.init();
})