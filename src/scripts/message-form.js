/* globals $ */

const $messageForm = $('#message-form');

$messageForm.on('submit', (event) => {
    event.preventDefault();

    $.ajax({
        url: 'https://formspree.io/krasen.ilkov@gmail.com',
        method: 'POST',
        data: $messageForm.serialize(),
        dataType: 'json',
        success: (response) => {
            console.log(response);
        },
        error: (thrownError) => {
            console.log(thrownError);
        },
    });
});
