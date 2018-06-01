var Detail = function () {
    
    var detailData = {
        //订单信息
        orderInfo:{
            num:'8653453422452',//订单号
            name:'充气蛙蛙',//商品名
            price:3.45,//商品价格
            creatTime:'2018-03-12  12:42:42',//下单时间
            username:'钱先生',//会员名
            totalTime:12,//购买次数
            totalPrice:4235.40,//累积消费
            commentNum:4.7,//历史评价
            //发货信息
            sendInfo:{
                receiver:'钱先生',//收货人姓名
                phone:'13311644322',//电话
                address:'上海市闵行区水清路158号水清幼儿园',//发货地址
                note:'要包装好一点',//备注
            }
        },
        //快递信息
        deliveryInfo:{
            name:'韵达快递',
            num:'8653453422452',
            time:'2018-03-22  21:34:22',//发货时间
            process:[
                {
                    time:'2018-03-22',
                    info:'正在派件 快递员：王大力 13333244532'
                },
                {
                    time:'2018-03-22',
                    info:'快递已收件'
                },
                {
                    time:'2018-03-22',
                    info:'已到达上海分捡站'
                },
                {
                    time:'2018-03-22',
                    info:'用户已签收，签收人：钱先生'
                }
            ]
        },
        //用户评价
        userComment:{
            name:'钱先生',
            phone:'13311644322',
            score:'4.7',
            time:'2018-03-25 21:34:22',
            comment:'我以为是充气那个你知道吧，结果你给我发了一个充气青蛙的玩具！真的是搞事！我40几岁的激情燃烧的青壮年，当然要买的就是那个那个那个了，你发给我个4岁孩子的玩具，差评差评差评！'
        }
    }
    var orderInfoTemplate = _.template($('#tpl').html())(detailData);
    var insertData = function(){
        $('.portlet.light').append(orderInfoTemplate)
    };
    
    return {
        init: function () {
            insertData();
        }
    }
}();
$(document).ready(function () {
    Detail.init();
})


