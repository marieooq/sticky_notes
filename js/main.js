function getNewNote(){
  return '<div class="note" draggable="true">' +
         '<input type="text">' +
         '</div>';
}

$(document).ready(function(){
  $('#add-button').on('click', function(){
    var $note = $(getNewNote());
    $note.draggable();
    $('#sticky-note-container').append($note);
  });
});

