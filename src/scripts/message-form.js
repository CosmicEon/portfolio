/* globals $ */

const $messageForm = $("#message-form");

$messageForm.on("submit", event => {
  event.preventDefault();

  $.ajax({
    url: "https://formspree.io/krasen.ilkov@gmail.com",
    method: "POST",
    data: $messageForm.serialize(),
    dataType: "json",
    error: thrownError => {
      console.log(thrownError);
    }
  });

  const $divElement = $("<div />", {
    class: "message-success"
  });
  const $pElement = $("<h3 />", {
    text: "Message Send"
  });

  const $documentFragment = $(document.createDocumentFragment());

  $divElement.append($pElement);
  $documentFragment.append($divElement);
  $messageForm.html($documentFragment);

  setTimeout(function() {
    location.reload(true);
  }, 5000);
});
