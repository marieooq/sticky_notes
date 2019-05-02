function getNewNote(){
  return '<div class="note" draggable="true">' +
         '<input type="text">' +
         '<input class="delete-button" type="button" value="delete">' +
         '<input data-color="#e0020" class="color-button" type="button" value="red">'+
         '<input data-color="#e0ff20" class="color-button" type="button" value="yellow">'+
         '</div>';
}

$(function(){
  $(document).ready(function(){
    function appendFunctions($note) {
      $note.draggable();

      $note.children(".delete-button").on('click', function(){
        $(this).parents('.note').remove();
      });

      $note.children(".color-button").on('click', function(){
        const color = $(this).data('color');
        $(this).parents('.note').css('background-color', color);
      });
    }

    $('#add-button').on('click', function(){
      var $note = $(getNewNote());
      appendFunctions($note);

      $('#sticky-note-container').append($note);
    });
  });
});


