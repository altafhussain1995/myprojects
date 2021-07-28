$(document).ready(function () {
  var points = 0;
  var randomColorClass;
  var stopTimer;
  var stopCircleTimer;
  var circleSpeed;
  var durationSeconds;
  var popupFlag = 0;
  var setGameWidth;
  var setGameHeight;
  var randomXaxis;
  var randomYaxis;
  var colorClass = [{
    class: 'section-red',
  }, {
    class: 'section-violet',
  }, {
    class: 'section-green',
  }, {
    class: 'section-yellow',
  }, {
    class: 'section-blue',
  }];

  $('#btnset').on('click', function () {
    setScreenResolution();
    setDuration();
    setShape();
  });

  function setScreenResolution() {
    var setResolution = $('input[name=screensize]:checked').val();
    switch (setResolution) {
      case '1':
        $('.section-box').css({
          'width': 600 + 'px',
          'height': 480 + 'px'
        });
        circleSpeed = 1200;
        setGameWidth = 600;
        setGameHeight = 480;
        break;
      case '2':
        $('.section-box').css({
          'width': 800 + 'px',
          'height': 600 + 'px'
        });
        circleSpeed = 1000;
        setGameWidth = 800;
        setGameHeight = 600;
        break;
      case '3':
        $('.section-box').css({
          'width': 1024 + 'px',
          'height': 800 + 'px'
        });
        circleSpeed = 750;
        setGameWidth = 1024;
        setGameHeight = 800;
        break;
      default:
        break;
    }
  }

  function setDuration() {
    if (durationSeconds > 180) {
      alert("MAX is 180");
    }
    durationSeconds = $('input[class=timer-seconds]').val();
  }

  function setShape() {
    var Shape = $('input[name=shape]:checked').val();

    switch (Shape) {
      case '1':
        $('.section-red,.section-violet,.section-green,.section-yellow,.section-blue ').css({
          'border-radius': 50 + '%'
        });
        break;
      case '2':
        $('.section-red,.section-violet,.section-green,.section-yellow,.section-blue ').css({
          'border-radius': 0 + '%'
        });
        break;
      default:
        break;
    }
  }
  //Start Button
  $('#btnstart').on('click', function () {
    $('#btnstart').attr('disabled', 'disabled');
    stopCircleTimer = setInterval(init, circleSpeed);
    startTimer(durationSeconds);
  });
  //Reset Button 
  $('#btnreset').on('click', function () {
    $('#btnstart').prop('disabled', false);
    $('.section-points h2').text("Your Score:" + points);
    clearInterval(stopTimer);
    clearInterval(stopCircleTimer);
    clearCircle();
    $('.stop-watch span').text("0");
    $('.section-points h2').text("Your Score: 0");
  });
  //initial Function
  function init() {
    var randomNumber = Math.floor(Math.random() * 5);
    randomPostion(randomNumber);
    displayShape(randomNumber);
  }

  //funciton to get Random Postions
  function randomPostion(randomNumber) {
    clearCircle();
    randomXaxis = Math.floor(Math.random() * setGameWidth - 20);
    randomYaxis = Math.floor(Math.random() * setGameHeight - 100);

  }

  function displayShape(randomNumber) {
    randomColorClass = colorClass[randomNumber].class;
    $('.' + randomColorClass).css({
      'visibility': 'visible',
      'position': 'relative',
      'top': randomYaxis + 'px',
      'left': randomXaxis + 'px'
    });
  }
  //start timer
  function startTimer(durationSeconds) {
    var seconds = durationSeconds;
    stopTimer = setInterval(function () {
      $('.stop-watch span').text(seconds);
      seconds = seconds - 1;
      if (seconds < 0) {
        clearElements();
        alert("Game Over");
      }
    }, 1000);

  }
  $('.section-red').on('click', function () {
    points = points - 2;
    updateScore();
    clearCircle();
  });
  $('.section-violet').on('click', function () {
    points = points - 1;
    updateScore();
    clearCircle();
  });
  $('.section-green').on('click', function () {
    points = points + 3;
    updateScore();
    clearCircle();
  });
  $('.section-yellow').on('click', function () {
    points = points + 2;
    updateScore();
    clearCircle();
  });
  $('.section-blue').on('click', function () {
    points = points + 1;
    updateScore();
    clearCircle();
  });

  function updateScore() {
    $('.section-points h2').text("Your Score:" + points);
  }
  //clear the circle Visibility 
  function clearCircle() {
    $('.' + randomColorClass).css({
      'visibility': 'hidden'
    });
  }
  //clear when time  is over
  function clearElements() {
    clearInterval(stopTimer);
    clearInterval(stopCircleTimer);
    clearCircle();
  }
  //Toggle settings
  $('.toggle-button').on('click', function () {

    if (popupFlag == 0) {
      $('.popup-menu').hide(1000);
      popupFlag = 1;
    } else {
      $('.popup-menu').show();
      popupFlag = 0;
    }
  });















});