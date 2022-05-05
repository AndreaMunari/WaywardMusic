var handleQuoteData = (function main() {

  var quoteOrigin = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',
    speechbubble = document.getElementById('speech-bubble'),
    quote = Array.prototype.map.call(speechbubble.getElementsByTagName('p'), $);

  function handleQuoteData(quotedata) {
    var text = quotedata.quoteText,
      author = quotedata.quoteAuthor ? quotedata.quoteAuthor : 'Unknown';
    quote[0].hide().html(text).fadeIn(800);
    quote[1].hide().html(handleQuoteData.icon + author).fadeIn(800);

  }
  handleQuoteData.icon = '<i class="glyphicon glyphicon-user" aria-hidden="true"></i> ';

  function handleError(jqXHR, textStatus, errorThrown) {
    quote[1].html(handleError.icon);
    quote[0].html(handleError.message);
    console.warn(textStatus + '\n' + errorThrown);
  }

  handleError.icon = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>';
  handleError.message = handleError.icon + ' ERROR<br>Make sure to load the page with HTTP <em>not</em> HTTPS! Change the HTTPS in the address bar to HTTP. Otherwise, check your browser console';

  function getQuoteData() {

    quote[0].html(getQuoteData.whileloading);
    quote[1].html(getQuoteData.whileloading);

    $.getJSON(quoteOrigin, handleQuoteData).fail(handleError);
  }

  getQuoteData.whileloading = '<i class="fa fa-spinner" aria-hidden="true"></i> Loading ...';
  getQuoteData();

})();