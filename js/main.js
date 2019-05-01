function getNewNote(){
  return '<div class="note">' +
         '<input type="text>' +
         '</div>';
}

$('#add-button').on('click', function(){
  const note = getNewNote();
  $('#sticky-note-container').append(note);
})

  