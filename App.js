var handleQuoteData = (function main() {
  /* Commented out code demonstrates how you would manually use jsonp to get quotes data without JQuery */
  // var quoteOrigin = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=handleQuoteData',
  var quoteOrigin = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',
    //tweetIntent = 'https://twitter.com/intent/tweet?text=';
speechbubble = document.getElementById('speech-bubble'),
    quote = Array.prototype.map.call(speechbubble.getElementsByTagName('p'), $);
    //buttons = quote[2][0].getElementsByTagName('a');

  function handleQuoteData(quotedata) {
    var text = quotedata.quoteText,
      author = quotedata.quoteAuthor ? quotedata.quoteAuthor : 'Unknown';
    quote[0].hide().html(text).fadeIn(800);
    quote[1].hide().html(handleQuoteData.icon + author).fadeIn(800);
    //buttons[1].href = tweetIntent + encodeURIComponent(text + '\n\t~ ' + author);
    //buttons[1].target = "_blank";
  }
  handleQuoteData.icon = '<i class="glyphicon glyphicon-user" aria-hidden="true"></i> ';

  function handleError(jqXHR, textStatus, errorThrown) {
    quote[1].html(handleError.icon);
    quote[0].html(handleError.message);
    console.warn(textStatus + '\n' + errorThrown);
  }
  // function handleError(msg, src, lineno, colno, error) {
  // 	quote[1].html(handleError.icon);
  // 	quote[0].html(handleError.message);
  // 	console.warn("ERROR: " + msg + "\n" + "source: " + src + "\n" + "error: " + error);
  // 	return false;
  // }
  handleError.icon = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>';
  handleError.message = handleError.icon + ' ERROR<br>Make sure to load the page with HTTP <em>not</em> HTTPS! Change the HTTPS in the address bar to HTTP. Otherwise, check your browser console';

  function getQuoteData() {
    // var prevscript = document.getElementById('newquotefetcher'),
    // 	newscript = document.createElement("script");
    // if (prevscript) document.body.removeChild(prevscript);
    quote[0].html(getQuoteData.whileloading);
    quote[1].html(getQuoteData.whileloading);
    // newscript.id = "newquotefetcher";
    // newscript.type = 'text/javascript';
    // newscript.src = quoteOrigin;
    // document.body.appendChild(newscript);
    $.getJSON(quoteOrigin, handleQuoteData).fail(handleError);
  }

  getQuoteData.whileloading = '<i class="fa fa-spinner" aria-hidden="true"></i> Loading ...';
  getQuoteData();

  //buttons[0].addEventListener('click', getQuoteData);
  // window.onerror = handleError;
  // return handleQuoteData;
})();