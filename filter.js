var words= ["extra","two","trackers","googlemaps"];

function myfilter(array, test){
    var passedTest =[];
    for (var i = 0; i < array.length; i++) {
       if(test( array[i]))
          passedTest.push(array[i]);

    }

    return passedTest;
}

var passedWords = myfilter(words,function(currentWord){
     //return (currentWords.startsWith('t'));
     console.log(currentWord.indexOf('ra'), currentWord);
     return (currentWord.indexOf('ra') !== -1);
     //return(currentWords.length==10);
     //return(currentWords.endsWith('a'));
    // return(currentWords.substr('ra'));

});

console.log(passedWords);