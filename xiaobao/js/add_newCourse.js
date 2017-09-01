$(function () {
  $('#addCourseType').on('click', function () {
      $('.add_newCourse-box-shadow').show()
  })
    $('.add_newCourse-box-shadow').on('click', ' .cancel', function () {
        $('.add_newCourse-box-shadow').hide()
    })
});
app.controller('myCtrl', ['$scope', function ($scope) {
    $scope.courseType = [
        '围棋类',
        '模特'
    ];
    $scope.b = '小明在这';
}]);