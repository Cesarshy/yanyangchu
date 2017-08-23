$(document).ready(function() {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    console.log(m);
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        allDaySlot: false,
        axisFormat: 'H:mm',
        titleFormat: {
            month:  'yyyy MMMM',
            week: 'yyyy MMMMd日 { \'—\'yyyy MMMMd日}',
            day: 'yyyy MMMMd日 dddd'
        },
        columnFormat: {
            month: 'ddd',
            week: 'MMMd日 ddd',
            day: 'MMMd日 ddd'
        },
        monthNames: [
            '1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'
        ],
        dayNamesShort: [
            '周一',  '周二','周三','周四','周五','周六','周日'
        ],
        monthNamesShort: [
            '1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'
        ],
        dayNames: [
          '周一',  '周二','周三','周四','周五','周六','周日'
        ],
        buttonText: {
            prev: '‹', // ‹
            next: '›', // ›
            prevYear: '«', // «
            nextYear: '»', // »
            today: '今天',
            month: '月',
            week: '周',
            day: '日'
        },
        editable: true,
        timeFormat: 'H:mm',
        /*titleFormat: {
            month: 'yyyy MMMM',
            week:
        },*/
        events: [
            {
                title: 'All Day Event',
                start: new Date(y, m, 1)
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d-5),
                end: new Date(y, m, d-2)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d-3, 16, 0),
                allDay: false
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d+4, 16, 0),
                allDay: false
            },
            {
                title: 'Meeting Birthday Party Birthday Party Birthday Party Birthday Party Birthday Party Birthday Party Birthday Party ',
                start: new Date(y, m, d, 10, 30),
                allDay: false
            },
            {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d+1, 19, 0),
                end: new Date(y, m, d+1, 22, 30),
                allDay: false
            },
            {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/'
            }
        ]
    });

});