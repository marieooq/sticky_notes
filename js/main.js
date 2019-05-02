function getNewNote(){
  return '<div class="note" draggable="true">' +
         '<input type="text">' +
         '<input class="delete-button" type="button" value="delete">' +
         '</div>';
}

$(function(){
  $(document).ready(function(){
    $('#add-button').on('click', function(){
      var $note = $(getNewNote());
      $note.draggable();
      $note.children(".delete-button").on('click', function(){
        $(this).parents('.note').remove();
      });
      $('#sticky-note-container').append($note);
    });
  });
});


