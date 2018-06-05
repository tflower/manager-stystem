
var typeHtml = '<div class="type_box">'+
                '<div class="form-group">'+
                '<label class="fixwidth">规格名称：</label>'+
                '<input type="text" class="type_title"><span class="detial_light">请不要大于三个字，例如“颜色”、“型号”、“尺寸”等</span>'+
                '</div>'+
                '<div class="form-group clearfix">'+
                '<label class="fixwidth">规格项：</label>'+
                '<input type="text" class="type_inner">'+
                '<span class="addtypeitem" id="addtypeitem">添加规格项</span>'+
                '</div>' + 
                '<span class="glyphicon glyphicon-remove removeTypebox"></span>'+
                '</div>';
var typeitemHtml = '<input type="text" class="type_inner">';
var columnsDefault = [
    {
        field:'price',
        title:'售价（元）',
        formatter: function () {
            var html = '';
            html += '<input class="table_input input_price" type="text">';
            return html;
        }
    },
    {
        field:'market_price',
        title:'市场价（元）',
        formatter: function () {
            var html = '';
            html += '<input class="table_input input_mar" type="text">';
            return html;
        }
    },
    {
        field:'store',
        title:'库存（件）',
        formatter: function () {
            var html = '';
            html += '<input class="table_input input_store" type="text">';
            return html;
        }
    },
    {
        field:'weight',
        title:'重量（kg）',
        formatter: function () {
            var html = '';
            html += '<input class="table_input input_weight" type="text">';
            return html;
        }
    },
    {
        field:'img',
        title:'规格图',
        formatter: function () {
            var html = '';
            html += '<div class="preview_imgbox"></div>';
            return html;
        }
    },
    {
        field:'operate',
        title:'规格图编辑',
        formatter: function () {
            var html = '';
            html += '<div class="tb_upload_box"><span class="tb_uploadbtn">上传</span><input type="file" multiple="multiple" class="tb_uploadfile"></div>';
            return html;
        }
    },
];


var Good_add = function () {
    var $textarea = $('#description');
    var $textcount = $('.description_num');
    var $addtype = $('#addtype');
    var $addtypebox = $('.addtypebox');
    var $typetabl = $('.typetabl');
    var $table = $('#table-list');
    var $totalbox = $('.total_gen');
    var $bornTable = $('.bornTable');
    var handleInput = function(){
        if(this.value.length > 300){
            this.value = this.value.slice(0,300)
        }
        $textcount.text(this.value.length);
    };

    var handleAddType = function(e){
        $addtypebox.append(typeHtml)
    };

    var handleAddTypeItem = function(e) {
        var $target = $(e.target);
        $target.before(typeitemHtml)
    };

    var handlereomveTypeBox = function(e) {
        var $target = $(e.target);
        $target.parent().remove();
    }

    var handleGenTable = function() {
        var tabledata = [];
        var tableobj = {};
        var $typebox = $('.type_box');
        var totalLen = 1;
        var columns = [].concat(columnsDefault);
        for(var i=0; i < $typebox.length; i++){
            var $typetitle = $($typebox[i]).find('.type_title');
            var $typeinner = $($typebox[i]).find('.type_inner');
            var typevalue = $typetitle.val();
            if(!typevalue){
                continue;
            }
            var til = 0;
            for(var j=0 ; j < $typeinner.length; j++){
                if($typeinner[j].value){
                    til++;
                    if(!tableobj[typevalue]){
                        tableobj[typevalue] = [];
                    }
                    tableobj[typevalue].push($typeinner[j].value);
                }
            }
            if(til){
                totalLen = totalLen * til;
            }else{

            }
            columns.unshift({
                field:typevalue,
                title:typevalue,
                width:'8%'
            })
        };
        for(var key in tableobj){
            var rate = totalLen / tableobj[key].length;
            var tmp = [].concat(tableobj[key]);
            for(var n = 0; n < rate;n++){
                tableobj[key] = tmp.concat(tableobj[key]);
            }
        }
        for(var m = 0; m < totalLen; m++){
            
            var obj = {};
            for(var key in tableobj){
                obj[key] = tableobj[key][m]
            }
            
            tabledata.push(obj);
        }
        $table.bootstrapTable('destroy');
        $table.bootstrapTable({
            columns: columns,
            data: tabledata
        });
        $totalbox.show()
    }

    var handleFileUpload = function(e){
        var files = e.target.files;
        var imgbox = $(e.target).parents('tr').find('.preview_imgbox');
        imgbox.html('');
        for(var i=0 ; i<files.length; i++){
            var reader = new FileReader();
            reader.onload = function(event) {
                var eImg = document.createElement('img');
                eImg.src = event.target.result;
                imgbox.append(eImg);
            }
            reader.readAsDataURL(files[0]);
        }
    }

    var handelTotalAdd = function(e){
        var $target = $(e.target);
        var inputval = $target.siblings('input').val();
        var type = $target.data('type');
        $('.' + type).val(inputval);
    };
    var bindEvent = function(){
        $textarea.on('keyup',handleInput);
        $addtype.on('click',handleAddType);
        $addtypebox.on('click','.addtypeitem',handleAddTypeItem);
        $addtypebox.on('click','.removeTypebox',handlereomveTypeBox);
        $typetabl.on('click','.bornTable',handleGenTable);
        $typetabl.on('change','.tb_uploadfile',handleFileUpload);
        $('.total_btn').on('click',handelTotalAdd)
    };

    return {
        init: function () {
            bindEvent();
        }
    }
}();
$(document).ready(function () {
    Good_add.init();
})