$(function () {
  $('#addCourseType').on('click', function () {
      $('.add_newCourse-box-shadow').show()
  })
    $('.add_newCourse-box-shadow').on('click', ' .cancel', function () {
        $('.add_newCourse-box-shadow').hide()
    })
})