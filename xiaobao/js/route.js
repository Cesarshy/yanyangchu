var app=angular.module('myApp',['ngRoute']);
app.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){
            if(scope.$last == true){
                $('.my-checkbox').bootstrapSwitch({
                    size: 'mini',
                    /*onSwitchChange: function (e, data) {
                        console.log($(e.currentTarget));//当前元素dom的jquery对象
                        console.log(data);//true代表on，false代表off
                    }*/
                })
            }
        }
    }
})
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/personal_center', {
        templateUrl: 'main/personal_center.html'
    }).when('/organization_center',{
        templateUrl: 'main/organization_center.html'
    }).when('/theSystemLog', {
        templateUrl: 'main/theSystemLog.html'
    }).when('/parameter_settings', {
        templateUrl: 'main/parameter_settings.html'
    }).when('/consult_notes', {
        templateUrl: 'main/consult_notes.html'
    }).when('/addConsult', {
        templateUrl: 'main/addConsult.html'
    }).when('/consultation_record', {
        templateUrl: 'main/consultation_record.html'
    }).when('/communication_manage', {
        templateUrl: 'main/communication_manage.html'
    }).when('/listen_manage', {
        templateUrl: 'main/listen_manage.html'
    }).when('/channel_manage', {
        templateUrl: 'main/channel_manage.html'
    }).when('/market_analysis', {
        templateUrl: 'main/market_analysis.html'
    }).when('/consultation_analysis', {
        templateUrl: 'main/consultation_analysis.html'
    }).when('/communication_analyasis', {
        templateUrl: 'main/communication_analyasis.html'
    }).when('/audition_conversition', {
        templateUrl: 'main/audition_conversition.html'
    }).when('/signUp_analysis', {
        templateUrl: 'main/signUp_analysis.html'
    }).when('/signUp_stu_analysis', {
        templateUrl: 'main/signUp_stu_analysis.html'
    }).when('/channel_category', {
        templateUrl: 'main/channel_category.html'
    }).when('/consult_settings', {
        templateUrl: 'main/consult_settings.html'
    }).when('/office_center', {
        templateUrl: 'main/office_center.html'
    }).when('/theOrderLog', {
        templateUrl: 'main/theOrderLog.html'
    }).when('/signUp', {
        templateUrl: 'main/signUp.html',
        controller: 'myCtr',
        controller: function ($scope) {
            $scope.students = [
                {
                    id: 1,
                    name: '张三'
                },
                {
                    id: 2,
                    name: '李四'
                }
            ]
        }
    }).when('/student_account', {
        templateUrl: 'main/student_account.html',
        controller: 'myCtr',
        controller: function ($scope) {
            $scope.students = [
                {
                    id: 1,
                    name: '张三'
                },
                {
                    id: 2,
                    name: '李四'
                }
            ]
        }
    }).when('/turn_class', {
        templateUrl: 'main/turn_class.html',
        controller: 'myCtr',
        controller: function ($scope) {
            $scope.students = [
                {
                    id: 1,
                    name: '张三'
                },
                {
                    id: 2,
                    name: '李四'
                }
            ]
        }
    }).when('/closed_class', {
        templateUrl: 'main/closed_class.html',
        controller: 'myCtr',
        controller: function ($scope) {
            $scope.students = [
                {
                    id: 1,
                    name: '张三'
                },
                {
                    id: 2,
                    name: '李四'
                }
            ]
        }
    }).when('/reopen', {
        templateUrl: 'main/reopen.html',
        controller: 'myCtr',
        controller: function ($scope) {
            $scope.students = [
                {
                    id: 1,
                    name: '张三'
                },
                {
                    id: 2,
                    name: '李四'
                }
            ]
        }
    }).when('/refund', {
        templateUrl: 'main/refund.html',
        controller: 'myCtr',
        controller: function ($scope) {
            $scope.students = [
                {
                    id: 1,
                    name: '张三'
                },
                {
                    id: 2,
                    name: '李四'
                }
            ]
        }
    }).when('/petty_expenses', {
        templateUrl: 'main/petty_expenses.html',
        controller: 'myCtr',
        controller: function ($scope) {
            $scope.students = [
                {
                    id: 1,
                    name: '张三'
                },
                {
                    id: 2,
                    name: '李四'
                }
            ]
        }
    }).when('/integral', {
        templateUrl: 'main/integral.html'
    }).when('/course', {
        templateUrl: 'main/course.html'
    }).when('/add_newCourse', {
        templateUrl: 'main/add_newCourse.html'
    }).when('/course_type_settings', {
        templateUrl: 'main/course_type_settings.html'
    }).when('/class', {
        templateUrl: 'main/class.html'
    }).when('/add_newClass', {
        templateUrl: 'main/add_newClass.html'
    }).when('/one_to_one', {
        templateUrl: 'main/one_to_one.html'
    }).when('/students', {
        templateUrl: 'main/students.html'
    }).when('/mature_students', {
        templateUrl: 'main/mature_students.html'
    }).when('/students_grade', {
        templateUrl: 'main/students_grade.html'
    }).when('/subjects_settings', {
        templateUrl: 'main/subjects_settings.html'
    }).when('/test_settings', {
        templateUrl: 'main/test_settings.html'
    }).when('/course_list', {
        templateUrl: 'main/course_list.html'
    }).when('/schedule_list', {
        templateUrl: 'main/schedule_list.html'
    }).when('/conflict_agenda', {
        templateUrl: 'main/conflict_agenda.html'
    }).when('/class_schedule', {
        templateUrl: 'main/class_schedule.html'
    }).when('/register_class', {
        templateUrl: 'main/register_class.html'
    }).when('/class_record', {
        templateUrl: 'main/class_record.html'
    }).when('/teacher_class_hour', {
        templateUrl: 'main/teacher_class_hour.html'
    }).when('/teacher_audition', {
        templateUrl: 'main/teacher_audition.html'
    }).when('/card_attendance', {
        templateUrl: 'main/card_attendance.html'
    }).when('/to_findStu', {
        templateUrl: 'main/to_findStu.html'
    }).when('/forget_card', {
        templateUrl: 'main/forget_card.html'
    }).when('/stu_card_record', {
        templateUrl: 'main/stu_card_record.html'
    }).when('/staff_attendance', {
        templateUrl: 'main/staff_attendance.html'
    }).when('/staff_card_record', {
        templateUrl: 'main/staff_card_record.html'
    }).when('/wage', {
        templateUrl: 'main/wage.html',
        controller: 'myCtrl',
        controller: function ($scope) {
            $scope.tem_set = [
                {
                    id: 1,
                    name: '实发工资'
                },
                {
                    id: 2,
                    name: '基本工资'
                },
                {
                    id: 3,
                    name: '我的工资'
                },
                {
                    id: 4,
                    name: '绩效工资'
                },
                {
                    id: 5,
                    name: '课时费'
                },
                {
                    id: 6,
                    name: '转介绍奖金'
                },
                {
                    id: 7,
                    name: '续班奖金'
                },
                {
                    id: 8,
                    name: '加班费'
                },
                {
                    id: 9,
                    name: '全额奖金'
                },
                {
                    id: 10,
                    name: '补课费'
                },
                {
                    id: 11,
                    name: '请假扣款'
                },
                {
                    id: 12,
                    name: '退费扣款'
                },
                {
                    id:13,
                    name: '通讯补贴'
                },
                {
                    id: 14,
                    name: '交通补贴'
                },
                {
                    id: 15,
                    name: '餐补'
                },
                {
                    id: 16,
                    name: '养老保险扣款'
                },
                {
                    id: 17,
                    name: '医疗保险扣款'
                },
                {
                    id: 18,
                    name: '公积金扣款'
                },
                {
                    id: 19,
                    name: '个税扣款'
                },
                {
                    id: 20,
                    name: '工龄工资'
                },
                {
                    id: 21,
                    name: '其他奖金'
                },
                {
                    id: 22,
                    name: '其他扣款'
                },
                {
                    id: 23,
                    name: '应发总工资'
                }

            ]
        }
    }).when('/financial', {
        templateUrl: 'main/financial.html'
    }).when('/add_newAccount', {
        templateUrl: 'main/add_newAccount.html'
    }).when('/acc_management', {
        templateUrl: 'main/acc_management.html'
    }).when('/spending', {
        templateUrl: 'main/spending.html'
    }).when('/other_income_items', {
        templateUrl: 'main/other_income_items.html'
    }).when('/performance_manage', {
        templateUrl: 'main/performance_manage.html',
        controller: 'myCtrl',
        controller: function ($scope) {
            $scope.tem_set = [
                {
                    id: 1,
                    name: '实发工资'
                },
                {
                    id: 2,
                    name: '基本工资'
                },
                {
                    id: 3,
                    name: '我的工资'
                },
                {
                    id: 4,
                    name: '绩效工资'
                },
                {
                    id: 5,
                    name: '课时费'
                },
                {
                    id: 6,
                    name: '转介绍奖金'
                },
                {
                    id: 7,
                    name: '续班奖金'
                },
                {
                    id: 8,
                    name: '加班费'
                },
                {
                    id: 9,
                    name: '全额奖金'
                },
                {
                    id: 10,
                    name: '补课费'
                },
                {
                    id: 11,
                    name: '请假扣款'
                },
                {
                    id: 12,
                    name: '退费扣款'
                },
                {
                    id:13,
                    name: '通讯补贴'
                },
                {
                    id: 14,
                    name: '交通补贴'
                },
                {
                    id: 15,
                    name: '餐补'
                },
                {
                    id: 16,
                    name: '养老保险扣款'
                },
                {
                    id: 17,
                    name: '医疗保险扣款'
                },
                {
                    id: 18,
                    name: '公积金扣款'
                },
                {
                    id: 19,
                    name: '个税扣款'
                },
                {
                    id: 20,
                    name: '工龄工资'
                },
                {
                    id: 21,
                    name: '其他奖金'
                },
                {
                    id: 22,
                    name: '其他扣款'
                },
                {
                    id: 23,
                    name: '应发总工资'
                }

            ]
        }
    }).when('/performance_settings', {
        templateUrl: 'main/performance_settings.html'
    }).when('/staff', {
        templateUrl: 'main/staff.html'
    }).when('/add_staff', {
        templateUrl: 'main/add_staff.html'
    }).when('/add_newSet', {
        templateUrl: 'main/add_newSet.html'
    }).when('/textbook', {
        templateUrl: 'main/textbook.html'
    }).when('/textbook_settings', {
        templateUrl: 'main/textbook_settings.html'
    }).when('/spending_settings', {
        templateUrl: 'main/spending_settings.html'
    }).otherwise({
        templateUrl: 'main/index.html'
    })
}])