let date = new Date();
let Year = date.getFullYear();
let Month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let dayNumber = date.getDate()

/* get and set task value from input field */
function getValue() {
    if ($('#task').val() !== '') {
        $('.tasks-list').append(
            $('<li></li>', {
                class: 'flex'
            }).append(
                $('<div>', {
                    class: 'task-content'
                }).append(
                    checkBtn(),
                    $('<span>', {
                        text: $('#task').val()
                    })
                ),
                removeBtn()
            )
        );
        $('#task').val('');
    }
}
/*-----------------------------*/

/* function return a check button */
function checkBtn() {
    let check_i = $('<i>', {
            class: 'far fa-check-circle'
        }),
        btn = $('<button>', {
            class: "check"
        });
    btn.append(check_i)
    return btn
}
/*-----------------------------*/

/* function return a remove button */
function removeBtn() {
    let remove_i = $('<i>', {
            class: 'far fa-trash-alt'
        }),
        btn = $('<button>', {
            class: "remove"
        });
    btn.append(remove_i)
    return btn
}
/*-----------------------------*/

/* adding a new tast */
$('#add').on('click', function () {
    getValue()
})
$('#task').keypress(function (event) {
    if (event.which === 13) {
        getValue();
    }
});
/*-----------------------------*/

/* remove task on click on remove button */
$('.tasks-list').on('click', '.remove', function (event) {
    $(this).parent().fadeOut(125, function () {
        $(this).remove();
    });
    event.stopPropagation();
});
/*-----------------------------*/

/* check task on click on it */
$('.tasks-list').on('click', 'li', function () {
    $(this).toggleClass('checked');
    
    if($(this).hasClass('checked')) {
        $(this).slideUp(125, ()=>{
            $(this).appendTo('.tasks-list')
        })
        $(this).slideDown(125)
    }
}).on('mouseenter mouseleave', 'li', function () {
    $(this).children('.remove').animate({
        width: 'toggle',
        opacity: 'toggle'
    }, 125);
});
/*-----------------------------*/

$(document).ready(function () {
    $('.day-number').text(dayNumber);
    $('.month').text(Month[date.getMonth()]);
    $('.year').text(Year);
    $('.day').text(Day[date.getDay()]);
});
