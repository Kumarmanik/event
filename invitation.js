// Handle live preview updates
document.querySelector('.card-form').addEventListener('input', function() {
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventLocation = document.getElementById('event-location').value;
    const cardMessage = document.getElementById('card-message').value;
    const cardColor = document.getElementById('card-color').value;
  
    document.getElementById('preview-event-name').textContent = eventName ? eventName : 'Your Event Name Here';
    document.getElementById('preview-event-date').textContent = eventDate ? `Date: ${eventDate}` : 'Date: ';
    document.getElementById('preview-event-location').textContent = eventLocation ? `Location: ${eventLocation}` : 'Location: ';
    document.getElementById('preview-card-message').textContent = cardMessage ? cardMessage : 'Your custom message will appear here.';
    document.querySelector('.card-preview').style.backgroundColor = cardColor;
  });
  
  // Download card as an image
  document.getElementById('download-btn').addEventListener('click', function() {
    html2canvas(document.querySelector("#card-preview")).then(canvas => {
      let link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'invitation_card.png';
      link.click();
    });
  });
  