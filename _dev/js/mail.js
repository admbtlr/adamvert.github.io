module.exports = {

  send: function(fromName, fromEmail, text) {
    var subject = 'Message from Spryker.com';

    setButtonState('sending');
    $.ajax({
      method: "POST",
      url: "//formspree.io/info@spryker.com",
      data: {
        'message': text,
        'name': fromName,
        '_replyto': fromEmail,
        '_subject': subject
      },
      dataType: 'json'
    }).done(function(response) {
      setButtonState('sent');
    }).error(function(response) {
      if (response.responseJSON.name == 'ValidationError') {
        addErrorMessage(getField('email'), 'Are you sure this email is correct?');
        setButtonState('default');
      } else {
        setButtonState('error');
      }
    });
  },

  validateContactForm: function() {
    var valid = true,
        fields = [{
      'name': 'name',
      '$el': getField('name')
    }, {
      'name': 'email',
      '$el': getField('email')
    }, {
      'name': 'message',
      '$el': getField('text')
    }];

    for (var i = fields.length - 1; i >= 0; i--) {
      var $el = fields[i].$el,
          name = fields[i].name;
      if ($el.val().length === 0) {
        var msg = 'Please enter '+(name == 'email' ? 'an ' : 'a ')+name;
        addErrorMessage($el, msg);
        valid = false;
      } else {
        removeErrorMessage($el);
      }
    };
    if (valid) {
      return {
        'name': getField('name').val(),
        'email': getField('email').val(),
        'text': getField('text').val()
      }
    }
  }
}

var numTicks = 0,
    intervalId;

var setButtonState = function(state) {
  switch (state) {
    case 'sending':
      $('.js-contact-send').attr('disabled', 'true');
      intervalId = window.setInterval(updateSendingMessage, 500);
      break;
    case 'sent':
      window.clearInterval(intervalId);
      $('.js-contact-send').val('Message sent').addClass('mail-sent');
      break;
    case 'error':
      window.clearInterval(intervalId);
      $('.js-contact-send').val('Error, please try again later.').addClass('send-error');
      break;
    case 'default':
      window.clearInterval(intervalId);
      $('.js-contact-send').val('Send');
      $('.js-contact-send').attr('disabled', false);
      break;
  }
};

var updateSendingMessage = function() {
  var message = 'Sending',
      phase = numTicks % 4;
  message += getEllipsis(phase);
  setButtonText(message);
  numTicks++;
}

var getEllipsis = function(phase) {
  if (phase === 0) {
    return '   ';
  } else if (phase === 1) {
    return '.  ';
  } else if (phase === 2) {
    return '.. ';
  } else {
    return '...';
  }
}

var setButtonText = function(text) {
  $('.js-contact-send').val(text);
}

var getField = function(fieldName) {
  return $('.js-contact-'+fieldName);
}

var addErrorMessage = function($el, msg) {
  if ($el.next('.error-message').length === 0) {
    $el.after($('<span></span>').addClass('error-message').text(msg));
  }
}

var removeErrorMessage = function($el) {
  $el.next('.error-message').remove();
}