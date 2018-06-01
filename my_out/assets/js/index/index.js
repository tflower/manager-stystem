/**
 * 权限管理
 */
var Account = function () {
    var request_url = {}, table_list = $("#table-list"),save_form = $("#save-form"),role_modal=$("#role-modal"),role_save_button=$("#modal_bind_save_button"),role_form=$("#role-form"),
        save_modal= $("#add-modal"),modal_save_button=$("#modal_save_button"),search_form=$("#search-form"),search_enable = $("#search-enable");
        request_url = {
        list: "/account/list",
    };

    $(document).find('.bs-select').selectpicker({
        iconBase: 'fa',
        tickIcon: 'fa-check'
    });

    var validate_form = save_form.validate({
        errorElement: 'span',
        errorClass: 'help-block help-block-error',
        focusInvalid: false,
        rules: {
            name: {
                maxlength: 50,
                required: true
            },
            password: {
                required: true
            },
            mobile : {
                number: true
            }
        },
        errorPlacement: function (error, element) {
            if ($(element).parent('.input-group')) {
                $(element).parent('.input-group').after(error);
            } else {
                element.after(error);
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        success: function (label) {
            label.closest('.form-group').removeClass('has-error');
        },
    });

    save_modal.on('hide.bs.modal',function () {
        save_form.get(0).reset();
        validate_form.resetForm();
    })
    //查询 清空
    search_form.on('click', '#clear-form', function () {
        search_form.get(0).reset();
        search_enable.selectpicker("refresh");
        table_list.bootstrapTable("refreshOptions", {refreshParams: {}, pageNumber: 1});
    })

    //查询 操作
    search_form.on('click', '#search-data', function () {
        var search_params = {};
        if(search_form.find("input[name=name]").val())   search_params.admin_name = search_form.find("input[name=name]").val();
        if(search_form.find("input[name=mobile]").val()) search_params.mobile    = search_form.find("input[name=mobile]").val();
        if(search_enable.val()) search_params.enable =search_enable.val();
        table_list.bootstrapTable("refreshOptions", {refreshParams: search_params, pageNumber: 1});
    })

    modal_save_button.on("click", this, function(){
        if(!save_form.valid()) return false;
        var save_button = $(this), params = {};
        params.admin_name = save_form.find("input[name=name]").val();
        params.password   = save_form.find("input[name=password]").val();
        params.real_name  = save_form.find("input[name=realName]").val();
        params.mobile     = save_form.find("input[name=mobile]").val();
        var restore_pw = save_form.find("input[name=pw]").val();
        if(restore_pw == params.password) delete params.password;
        save_form.find("input[name=enable]").each(function(){
            if(this.checked) params.enable = this.value;
        });
        var id = save_form.find("input[name=id]").val();
        if(id && new RegExp("^[0-9]*$").test(id)) params.id = id;
        save_button.attr("disabled", true);
        $.ajax({
            url: request_url.save,
            type: "POST",
            data: params,
            success: function(response){
                save_button.attr("disabled", false);
                if(response.code === 1){
                    save_modal.modal('hide');
                    table_list.bootstrapTable("refresh");
                }else{
                    $.Lemon.showError(response);
                }
            },
            error: function(response){
                save_button.attr("disabled", false);
                $.Lemon.showError(response);
            }
        });
    });


    return {
        init :function () {
            table_list.bootstrapTable({
                columns: [
                    {
                        field: 'id',
                        title: 'ID',
                        width: '10%'
                    },
                    {
                        field: 'admin_name',
                        title: '登录名',
                        width: '10%'
                    },
                    {
                        field: 'real_name',
                        title: '用户名',
                        width: '8%'
                    },
                    {
                        field: 'mobile',
                        title: '手机号',
                        width: '15%'
                    },
                    {
                        field: 'enable',
                        title: '是否启用',
                        formatter: function (value, row, index) {
                            return value === "1" ? "<span style='color:green'>启用<span>" : "<span style='color:red'>禁用<span>";
                        }
                    },
                    {
                        field: 'create_time',
                        title: '创建时间'
                    },
                    {
                        field: '',
                        title: '操作',
                        formatter: function (value, row, index) {
                            var html = '';
                            html += '<button class="btn btn-sm btn-circle purple btn-outline edit" data-toggle="modal" data-target="#add-modal" primary_id="' + row.id + '" ><i class="fa fa-edit"></i> 编辑</button>'
                            html += '<button class="btn btn-outline btn-circle dark btn-sm black enable" enable="'+ row.enable +'" primary_id="' + row.id + '">' + (row.enable === "1" ? "禁用":"启用" )+' </button>&nbsp;';
                            html += '<button  class="btn btn-outline btn-circle red btn-sm blue bind" data-toggle="modal" data-target="#role-modal" primary_id=' + row.id + '><i class="fa fa-edit"></i> 绑定角色 </button>&nbsp;';
                            return html;
                        }
                    }
                ],
                
                pagination: true,
                showFullscreen: true,
                showColumns: true,
                showRefresh: true,
                data: [{ id: 1,  admin_name: 'admin', real_name: 'Mr.Quent','mobile':13162662170, enable: "1" ,create_time:'2018-05-28:12:00:00'}] 
            });
        }
    }
}();
$(document).ready(function () {
    Account.init();
})