$(document).ready(function() {
  $("form#celebrity").submit(function(event) {

    const gender = $("select#gender").val();
    const thing = $("select#thing").val();
    const color = $("select#color").val();



      let person;
      if(gender==='female') {
        if(thing==='shopping' && color!=='blue' ){
          person = "Rachel";
        }
        else if(thing==='shopping' || thing==='eating' ) {
          person = "Monica";
        }
        else if (thing ==='smoking'){
          person = "Chandler";
        }
        else {
          person = "Phoebe";
        }
      }
      else {
        if(thing ==='eating'){
          person = "Joey";
        }
        else if(thing === 'smoking') {
          person = "Chandler";
        }
        else if(thing==='shopping' || color==='pink' ) {
          person = "Rachel";
        }
        else {
          person = "Ross";
        }
      }

      $("#match").text(person);
      $("#result").show();

    event.preventDefault();
  });
});