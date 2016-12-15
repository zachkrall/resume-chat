$( document ).ready(function() {

  var nowTime = moment().format("h:mm a");
  console.log(nowTime);
  $('header').append('<b>Today</b> ' + nowTime +'');

  $('.closeThis').click(function(){
    $(this).parent().hide();
  });

  var emoji = {
    'smile':'<img src="emoji/smile.png" class="emoji">',
    'eyes':'<img src="emoji/eyes.png" class="emoji">',
    'heart':'<img src="emoji/heart.png" class="emoji">',
    'think':'<img src="emoji/think.png" class="emoji">',
    'wink':'<img src="emoji/wink.png" class="emoji">',
    'glitter':'<img src="emoji/glitter.png" class="emoji">',
    'twitter':'<img src="emoji/twitter.png" class="emoji">',
    'camera':'<img src="emoji/camera.png" class="emoji">',
    'selfie':'<img src="emoji/selfie.png" class="emoji">',
    'wave':'<img src="emoji/wave.png" class="emoji">',
    'rolleyes':'<img src="emoji/rolleyes.png" class="emoji">',
    'thumbup':'<img src="emoji/thumbup.png" class="emoji">'
  }

  function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
        console.log('Preloaded Image');
    });
  }

  preload([
    'images/admissions.jpg',
    'images/art.jpg',
    'images/artahack.jpg',
    'images/blackmirror.png',
    'images/bye.gif',
    'images/coffee.jpg',
    'images/dog.jpg',
    'images/meckseper.jpg',
    'images/oops.gif',
    'images/selfie.jpg',
    'images/shrug.gif',
    'images/spotify.jpeg',
    'images/thatsme.png',
    'images/travel.jpg',
    'images/whathappenswhen.jpg',
    'http://zachkrall.com/content/01.work/0980.bandwidth/01.jpg',
    'http://68.media.tumblr.com/tumblr_m8t1h2QcKK1rzz3r3o1_500.gif',
    'https://media.giphy.com/media/26AHJ9mZjOjaTt8IM/giphy.gif',
    'https://media.giphy.com/media/xThuWckoD1uAUifpks/giphy.gif',
    'https://media.giphy.com/media/3o85xopQt8hfhur0bK/giphy.gif',
    'https://media.giphy.com/media/BLKswIymJeLFS/giphy.gif'
  ]);

// Call this function when selecting an option
  var hideSiblings = function (ok){

    $(ok).siblings().hide('fast');

    if( $(ok).parent().hasClass('cardgroup') === true){
      $(ok).css({color:"#fff",
                  background:"#E5E5EA",
                  'border-color':'#E5E5EA',
                 'color':'#222'});
      $(ok).removeClass('linkcard');

    } else {
      $(ok).css({color:"#fff",
                  background:"#0B93F6"});
    }
    console.log('hiding siblings of ' + ok + '.');

  };

// Creates a new message bubbles
  var newMessageBubble = function (text){

    $("#chat").append("<div class=\"message from-them\"><p>" + text + "</p></div>").fadeIn('slow');

  };

// Creates a new message bubbles
  var newHtmlBubble = function (text){

    $("#chat").append('<div class="message from-them html"><p>' + text + '</p></div>').fadeIn('slow');

  };
// Creates a new anchor bubbles
  var newAnchorBubble = function (text, url){

    var content = '<div class="card from-them anchor"><p><a href="' + url + '"">' + text + '</a></p></div>';
    $(content).appendTo("#chat").fadeIn('slow');

  };

// Creates a new image bubble
  var newImageBubble = function (url){

    var content = '<div class="message from-them image"><img src="' + url + '""></div>';
    $(content).appendTo("#chat").fadeIn('slow');

  };

// Create OPTIONS
  var createOptions = function(list, group){

    $("#chat").append('<div class="options-from-me"></div>');
    var theRightOne = $('.options-from-me').last();

    for (i = 0; i < list.length; i++){
        var newButton = '<button class="option" data-group="' + group +'" data-response="' + list[i].do + '">' + list[i].say + '</button>';
        $(theRightOne).append(newButton);
    };

    $('html, body').animate({
        scrollTop: $('.from-them').last().offset().top
    }, 1500);

  };

// Create Actions

var createActions = function(list){

  $("#chat").append('<div class="options-from-me"></div>');
  var theRightOne = $('.options-from-me').last();

  for (i = 0; i < list.length; i++){
      var newButton = '<a href="' + list[i].url + '">' + list[i].say + '</a>';
      $(theRightOne).append(newButton);
  };

};

// IMAGE CARDS

var imageCards = function(list){

  $("#chat").append('<div class="cardgroup"></div>');
  var theRightOne = $('.cardgroup').last();

  for (i = 0; i < list.length; i++){
      var newCard = '<div class="card"><img src="' + list[i].imageurl + '"><p class="caption"><b>' + list[i].boldtext + '</b><br>' + list[i].regulartext + '</p></div>';
      $(theRightOne).append(newCard);
  };

};

// TEXT CARDS

var textCards = function(list){

  $("#chat").append('<div class="cardgroup"></div>');
  var theRightOne = $('.cardgroup').last();

  for (i = 0; i < list.length; i++){
      var newCard = '<div class="card"><p><b>' + list[i].boldtext + '</b><br>' + list[i].regulartext + '</p></div>';
      $(theRightOne).append(newCard);
  };

};

// LINK CARDS

var linkCards = function(list){

  $("#chat").append('<div class="cardgroup"></div>');
  var theRightOne = $('.cardgroup').last();

  for (i = 0; i < list.length; i++){

          var newCard = '<div class="card linkcard"><a href="' + list[i].url + '"><p><b>' + list[i].boldtext + '</b><br>' + list[i].regulartext + '</p></a></div>';
          $(theRightOne).append(newCard);

  };

};

// CHOICE CARDS

var chooseCards = function(list, group){

  $("#chat").append('<div class="cardgroup"></div>');
  var theRightOne = $('.cardgroup').last();

  for (i = 0; i < list.length; i++){
      if( list[i].imageurl != undefined){
          var newCard = '<div class="card image linkcard option" data-response="' + list[i].do + '" data-group="' + group + '"><img src="' + list[i].imageurl + '"><p><b>' + list[i].boldtext + '</b><br>' + list[i].regulartext + '</p></a></div>';
          $(theRightOne).append(newCard);
      } else {
          var newCard = '<div class="card linkcard option" data-response="' + list[i].do + '" data-group="' + group + '"><p><b>' + list[i].boldtext + '</b><br>' + list[i].regulartext + '</p></a></div>';
          $(theRightOne).append(newCard);
     }
  };

};

// nevermind

var nvmButton = function(){

  var theRightOne = $('.options-from-me').last();
  var nvmButton = '<button class="option" data-group="start" data-response="nevermind">I\'m Done</button>';
  $(theRightOne).append(nvmButton);

};

// OPTIONS LISTS

  var startOptions = [
    {'say':'Who are you?','do':'listPersonal'},
    {'say':'What have you done?','do':'listExperience'},
    {'say':'What can you do?','do':'listSkills'},
    {'say':'What do you like?','do':'listInterests'},
    {'say':'How do I contact you?','do':'listContact'}
  ];

  var showStart = function (){

    createOptions(startOptions, "start");
    nvmButton();

  };

// Bring back start menu

  var whatElse = function (){

    var whatElseMsg = [
      'What else would you like to know?',
      'What should we talk about next?',
      'What else would you like to know?',
      'How about another topic:',
      'What next?',
      'What are you curious about?',
      'Anything else?'
    ];

    var randomElse = Math.floor(Math.random()*whatElseMsg.length);

    newMessageBubble(whatElseMsg[randomElse]);
    createOptions(startOptions, "start");
    nvmButton();

  };

// END Actions

var endActions = function(){

    createActions([
      {"say":"Visit Website","url":"http://zachkrall.com"},
      {"say":"Send Email","url":"mailto:zach@zachkrall.com"},
      {"say":"Download PDF","url":"resume.pdf"},
      {"say":"Download JSON","url":"resume.json"},
    ]);

    $("#chat").append('<div class="note">Last Updated 2016-11-25</div>');

    $('html, body').animate({
        scrollTop: $('.from-them').last().offset().top
    }, 1500);

};

var errorMessage = function(){

  newImageBubble('images/oops.gif');
  newMessageBubble('oops! Something went wrong. You can report bugs <a href="https://github.com/zachkrall/resume-chat/issues">here</a>');

  whatElse();

};


$(document).on("click", ".option", function(){

    var group = $(this).attr('data-group');
    var response = $(this).attr('data-response');
    console.log('loading response for ' + response +'.');

    hideSiblings(this);

// Do you accept?
    if (response === "nevermind"){

      var byeGIFS = [
        'http://68.media.tumblr.com/tumblr_m8t1h2QcKK1rzz3r3o1_500.gif',
        'images/bye.gif',
        'https://media.giphy.com/media/26AHJ9mZjOjaTt8IM/giphy.gif',
        'https://media.giphy.com/media/xThuWckoD1uAUifpks/giphy.gif',
        'https://media.giphy.com/media/3o85xopQt8hfhur0bK/giphy.gif',
        'https://media.giphy.com/media/BLKswIymJeLFS/giphy.gif'
      ];

      var thisByeGIF = Math.floor(Math.random()*byeGIFS.length);

      newImageBubble(byeGIFS[thisByeGIF]);

      newMessageBubble('Thanks for visiting! ' + emoji.smile + '');
      newMessageBubble('P.S. You can <a href="#" onClick="window.print()">print this page</a> if you\'d like to save our conversation.');

      endActions();

      var theRightOne = $('.options-from-me').last();
      $(theRightOne).append('<button class="option" data-group="welcome" data-reponse="accept">Actually...</button>');

    } else if (response === "whatelse") {

      whatElse();

    }else if (group === "welcome"){

      if (response === "decline"){

        newImageBubble('images/shrug.gif');
        newMessageBubble("Alright then");

        endActions();

        var theRightOne = $('.options-from-me').last();
        $(theRightOne).append('<button class="option" data-group="welcome" data-reponse="accept">Wait, I changed my mind!</button>');

      } else {

        newMessageBubble("Awesome, what would you like to know more about?");
        showStart();

      };

// Now we'll start with the initial options

    } else if (group === "start"){

        if (response === "listExperience"){

          newMessageBubble('Here are some examples');
          newMessageBubble('Which one would you like to learn more about?');
          chooseCards([
            {
              'imageurl':'images/admissions.jpg',
              'do':'admissions1',
              'boldtext':'Admissions Counselor',
              'regulartext':'SVA',
            },
            {
              'imageurl':'images/meckseper.jpg',
              'do':'meckseper1',
              'boldtext':'Studio Assistant',
              'regulartext':'Meckseper Studio',
            },
            {
              'imageurl':'images/artahack.jpg',
              'do':'artahack1',
              'boldtext':'Art-A-Hack',
              'regulartext':' '
            },
            {
              'imageurl':'images/whathappenswhen.jpg',
              'do':'whw1',
              'boldtext':'What Happens When...',
              'regulartext':'A Film Screening I curated'
            },
          ], 'personal');

        } else if (response === "listSkills"){

          newMessageBubble('Here are some things I am good at:');
          textCards([
            {
              'boldtext':'Admin',
              'regulartext':'Excel, SalesForce, Keynote, Public Speaking, Archiving, Project Management'
            },
            {
              'boldtext':'Design',
              'regulartext':'Photoshop, InDesign, Premiere, Final Cut Pro, SketchUp, Unity3D'
            },
            {
              'boldtext':'Programming',
              'regulartext':'HTML, CSS, Javascript &amp; jQuery. (I want to learn C# and improve my basic knowledge of Unix/Command Line)'
            }
          ]);
          newMessageBubble('Also, I built this website ' + emoji.thumbup +'');
          whatElse();

        } else if (response === "listInterests"){

          newMessageBubble('Here are a few of my favorite things:');
          imageCards([
            {
              'imageurl':'images/travel.jpg',
              'boldtext':'Travel',
              'regulartext':' '
            },{
              'imageurl':'images/art.jpg',
              'boldtext':'Contemporary Art',
              'regulartext':' '
            },
            {
              'imageurl':'images/coffee.jpg',
              'boldtext':'Black Coffee',
              'regulartext':'preferably Iced'
            },
            {
              'imageurl':'images/dog.jpg',
              'boldtext':'Dogs',
              'regulartext':'This is my friend\'s dog, Yuki',
            },
          ]);
          createOptions([
            {'do':'books1','say':'Books?'},
            {'do':'music1','say':'Music?'},
            {'do':'tv1','say':'Television?'},
            {'do':'whatelse','say':'Nice.'}
          ], 'interests');

        } else if(response === "listContact"){

// My contact information goes here!

          newMessageBubble('Pick your poison');
          linkCards([
            {
              'boldtext':'Email',
              'regulartext':'zach@zachkrall.com',
              'url':'mailto:zach@zachkrall.com'
            },
            {
              'boldtext':'Twitter',
              'regulartext':'@zachkrall',
              'url':'http://twitter.com/zachkrall'
            },
            {
              'boldtext':'Instagram',
              'regulartext':'@zachkrall',
              'url':'http://instagram.com/zachkrall'
            },
          ]);
          whatElse();

        } else if(response === "listPersonal"){

          var content = '<div class="message from-them image"><img src="images/selfie.jpg"><div class="sticker sticker--topright"><img src="images/thatsme.png"></div></div>';
          $(content).appendTo("#chat").fadeIn('slow');

          newMessageBubble('I\'m a Visual Artist and Creative Technologist in Brooklyn, NY');
          newMessageBubble('I received my BFA in Photography from the School of Visual Arts');
          newMessageBubble('I\'ve also been an Admissions Counselor at the School of Visual Arts since October 2015');
          createOptions([
            {"do":"art1","say":"Tell me more about your Art"},
            {"do":"admissions1","say":"What do you do as an Admissions Counselor?"},
            {"do":"whatelse","say":"Oh, that's cool"},
          ], "personal");

        } else {

          errorMessage();

        };

// PERSONAL CHAT HERE
    } else if (group === "personal"){

      if( response === "admissions1" ){

        newMessageBubble('As an Admissions Counselor, I guide prospective students through their applications to SVA');
        newMessageBubble('I also travel to high schools and college fair events across the US to give them feedback on their portfolios');
        createOptions([
          {'do':'admissions2','say':'Did you work on any special projects?'},
          {"do":"whatelse","say":"Cool."},
          {"do":"art1","say":"What about your art?"}
        ], "personal");

      } else if ( response === "admissions2" ){

        newMessageBubble('I outlined and designed a keynote presentation used during recruitment events');
        newMessageBubble('I can\'t show you here, but I can show you IRL');
        whatElse();

      } else if( response === "meckseper1"){

        newMessageBubble('When I was a Studio Assistant, I helped with creating new artworks but also archiving and documenting projects');
        whatElse();

      } else if( response === "artahack1"){

        newMessageBubble('My team at Art-A-Hack worked in the Integrated Digital Media facilities at NYU Tandon School of Engineering and we worked on making immersive social VR environments');
        newMessageBubble('You can learn more about that <a href="https://artahack.io/projects/kinect-vr/">here</a>');
        whatElse();

      } else if( response === "whw1"){

        newMessageBubble('I curated a film screening of artist videos at POWRPLNT gallery in Brooklyn');
        newMessageBubble('There is an artist list and documentation <a href="http://zachkrall.com/curatorial/what-happens-when/">on my website</a>');
        whatElse();

      } else if ( response === "art1" ) {

        newMessageBubble('I work mostly with digital tools (photo, video, software), to make work about how we define ourselves');
        newMessageBubble('Kind of thinking about the cross over between people and computers');
        createOptions([
          {'do':'art2','say':'Can I see? <img src="emoji/eyes.png" class="emoji">'},
          {'do':'whatelse','say':'Sounds Interesting'},
          {'do':'admissions1','say':'What do you do as an Admissions Counselor?'},
        ], 'personal');

      } else if ( response === "art2"){

        newMessageBubble('Sure, here are a few projects');
        imageCards([
          {'imageurl':'http://zachkrall.com/content/01.work/0992.none-all-of-these-people-are-me/01.jpg',
           'boldtext':'None/All of These People Are Me',
           'regulartext':'<a href="http://zachkrall.com/work/none-all-of-these-people-are-me/">View Project</a>'},
          {'imageurl':'http://zachkrall.com/content/01.work/0987.effort-matrix/thumb.jpg',
            'boldtext':'Effort Matrix (Video)',
            'regulartext':'<a href="http://zachkrall.com/work/effort-matrix/">View Project</a>'},
          {'imageurl':'http://zachkrall.com/content/01.work/0980.bandwidth/thumb.jpg',
             'boldtext':'Bandwidth (Unique Forms of Continuity)',
             'regulartext':'<a href="http://zachkrall.com/work/bandwidth/">View Project</a>'}
        ]);
        createOptions([
          {"do":"art3","say":"I like them!"},
          {"do":"admissions1","say":"You have a dayjob right?"},
        ], "personal");

      } else if ( response === "art3" ){

        newMessageBubble('Thanks! ' + emoji.heart + emoji.glitter +'');
        newMessageBubble('You can see the rest <a href="http://zachkrall.com">on my website</a>');
        createOptions([
          {"do":"art4","say":"Where have you exhibited?"},
          {"do":"whatelse","say":"I'll do that later"},
        ], "personal");

      } else if( response === "art4"){

        newMessageBubble('These are my most recent exhibitions');
        textCards([
          {'boldtext':'Slippery When Wet...',
           'regulartext':'Chinatown Soup (New York, NY)'},
           {'boldtext':'Obstructed Views',
            'regulartext':'Scott Charmin Gallery (Houston, TX)'}
        ]);
        whatElse();

      } else {

        errorMessage();

      };

    } else if (group === "interests"){

            if (response === "books1"){

              newMessageBubble('A started to read Girl on the Train but the movie trailer ruined it for me ' + emoji.rolleyes + '');
              newMessageBubble('rn I\'m rotating through these');
              imageCards([
                {
                  'imageurl':'https://mitpress.mit.edu/sites/default/files/imagecache/booklist_node/9781906897581_0.jpeg',
                  'boldtext':'Academic Diary: Or Why Higher Education Still Matters',
                  'regulartext':'Les Back'
                },
                {
                  'imageurl':'https://mitpress.mit.edu/sites/default/files/imagecache/booklist_node/9781890951474.jpg',
                  'boldtext':'The Claude Glass: Use and Meaning of the Black Mirror in Western Art',
                  'regulartext':'Arnaud Maillet'
                }
              ]);
              createOptions([
                {'do':'music1','say':'Music?'},
                {'do':'tv1','say':'Television?'},
                {'do':'whatelse','say':'Ok.'}
              ], 'interests');

            } else if (response === "music1"){

              newMessageBubble('This is a playlist of my favorite songs rn');
              newImageBubble('images/spotify.jpeg')
              linkCards([
                {'boldtext':'2016 Fall/Winter',
                 'regulartext':'open playlist on Spotify',
                 'url':'https://open.spotify.com/user/zchkrll/playlist/0mXYC9CPUxt5tahk0r5iPB'
                }
              ]);
              createOptions([
                {'do':'books1','say':'Books?'},
                {'do':'tv1','say':'Television?'},
                {'do':'whatelse','say':'Ok.'}
              ], 'interests');

            } else if (response ==="tv1"){

              newImageBubble('images/blackmirror.png');
              newMessageBubble('I finished Black Mirror recently, ugh');
              createOptions([
                {'do':'whatelse','say':'I know right?'},
                {'do':'books1','say':'Books?'},
                {'do':'music1','say':'Music?'},
              ], 'interests');

            } else{

              errorMessage();

            }

    } else {

      errorMessage();

    };

    // END GROUP IF STATEMENTS

  });


}); // END DOCUMENT ready
