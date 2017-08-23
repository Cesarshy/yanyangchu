$(function () {
    var i = 2;
    var a = '<tr>\n' +
        '                <td>\n' +
        '                    <span style="color: red">*</span>\n' +
        '                    上课日期：\n' +
        '                </td>\n' +
        '                <td colspan="3"  style="position:relative">\n' +
        '                    <div class="input-group date form_date" data-date="" data-date-format="yyyy MM dd" data-link-field="dtp_input'+(i+1)+'" data-link-format="yyyy-mm-dd">\n' +
        '                        <input style="background-color:#fff;" name="staDate'+i+'" class="form-control" size="16" type="text" value="" readonly>\n' +
        '                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>\n' +
        '                    </div>\n' +
        '                    <input type="hidden" id="dtp_input'+(i + 1)+'" value="" />\n' +
        '                    至\n' +
        '                    <div class="input-group date form_date" data-date="" data-date-format="yyyy MM dd" data-link-field="dtp_input'+(i + 2)+'" data-link-format="yyyy-mm-dd">\n' +
        '                        <input style="background-color:#fff;" name="stoDate'+ (i + 1) +'" class="form-control" size="16" type="text" value="" readonly>\n' +
        '                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>\n' +
        '                    </div>\n' +
        '                    <input type="hidden" id="dtp_input'+ (i + 2)+'" value="" />\n' +
        '                    &nbsp;&nbsp;&nbsp;&nbsp;\n' +
        '                    最多排 <input type="text" class="form-control" name="times'+ i +'">次\n' +
        '                    <span style="color: red">\n' +
        '                        不排则按日期排课\n' +
        '                    </span>\n' +
        '                    <a href="javascript:;" class="btn btn-default" style="position: absolute; top: 4px;right: 23px;padding: 2px;">\n' +
        '                        <i class="iconfont icon-guanbi" style="font-size: 12px"></i>\n' +
        '                    </a>' +
        '                </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>\n' +
        '                    <span style="color: red">*</span>\n' +
        '                    重复设置：\n' +
        '                </td>\n' +
        '                <td>\n' +
        '                    <label class="checkbox-inline">\n' +
        '                        <input type="checkbox" name="repeat'+ i +'" id="repeat'+ i +'" value="option1"> 全选\n' +
        '                    </label>\n' +
        '                    <label class="checkbox-inline">\n' +
        '                        <input type="checkbox" name="repeat'+ i +'" id="repeat'+ (i + 1)+'" value="option2"> 周一\n' +
        '                    </label>\n' +
        '                    <label class="checkbox-inline">\n' +
        '                        <input type="checkbox" name="repeat'+ i +'" id="repeat'+ (i + 2)+'" value="option3"> 周二\n' +
        '                    </label>\n' +
        '                    <label class="checkbox-inline">\n' +
        '                        <input type="checkbox" name="repeat'+ i +'" id="repeat'+ (i + 3)+'" value="option4"> 周三\n' +
        '                    </label>\n' +
        '                    <label class="checkbox-inline">\n' +
        '                        <input type="checkbox" name="repeat'+ i +'" id="repeat'+ (i + 4) +'" value="option5"> 周四\n' +
        '                    </label>\n' +
        '                    <label class="checkbox-inline">\n' +
        '                        <input type="checkbox" name="repeat'+ i +'" id="repeat'+ (i + 5)+'" value="option6"> 周五\n' +
        '                    </label>\n' +
        '                    <label class="checkbox-inline">\n' +
        '                        <input type="checkbox" name="repeat'+ i +'" id="repeat'+ (i + 6)+'" value="option7"> 周六\n' +
        '                    </label>\n' +
        '                    <label class="checkbox-inline">\n' +
        '                        <input type="checkbox" name="repeat'+ i +'" id="repeat'+ (i + 7)+'" value="option8"> 周日\n' +
        '                    </label>\n' +
        '                </td>\n' +
        '                <td>\n' +
        '                    <span style="color: red">*</span>\n' +
        '                    上课时段：\n' +
        '                </td>\n' +
        '                <td>\n' +
        '                    <select name="timeFrame'+ i +'" class="form-control" id="timeFrame'+ i +'">\n' +
        '                        <option value="1">08:00-12:00</option>\n' +
        '                    </select>\n' +
        '                    <a href="javascript:;">自定义时间</a>\n' +
        '                </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>上课主题：</td>\n' +
        '                <td colspan="3">\n' +
        '                    <input type="text" class="form-control" name="theme'+ i +'" style="width: 100%;">\n' +
        '                </td>\n' +
        '            </tr>';
    $('#editTime').on('click', '#addTime' ,function () {
        $('#editTime').html($('#editTime').html() + a);
        i++;
    })
    $('#editTime').on('click', '.icon-guanbi', function () {
        $(this).parent().parent().parent().parent().remove()
    })
})