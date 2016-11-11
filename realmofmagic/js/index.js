$(document).ready(function() {
  var health = document.getElementById("hpbar");
  var hellfire;
  var riptide = 0;
  var eye = 0;
  var drain = 0;
  var light = 0;
  health.value = 100;
  $('#hpbar').hide();
  $('#gameover').hide();
  $('#gamewin').hide();
  $('#error').hide();
  $('#seph').hide();
  $('#gwyn').hide();
  $('#baron').hide();
  $('#illfang').hide();
  $('#hpbarsdiv').hide();
  $('#enemydiv').hide();
  $('#buttondiv').hide();

  $('#playbutton').click(function() {
    //this is the code that runs when play  button is clicked;
    hellfire = 0;
    $('#hpbar').show();
    $(this).hide();
    $('#illfang').show();
    $('#hellfire').show();
    $('#three').show();
    $('#four').hide();
    $('#five').hide();
    $('#six').hide();
    $('#seven').hide();
    $('#hpbarsdiv').show();
    $('#illfang').show();
    $('#buttondiv').show();
    $('#enemydiv').show();
    $('#riptide').hide();
    $('#light').hide();
    $('#drain').hide();
    $('#eye').hide();
  });


  function hellfirespell() {
    if (hellfire == 3) {
      alert("Then you fire a stream of rockets that blow its face up in flames. You have defeated the Baron Nashor. He drops a scroll that glows with light. You pick it up and unlock a new spell! Spell Unlocked: Light of Redemption");
      health.value = 100;
      $('#baron').hide();
      $('#light').show();
      $('#gwyn').show();
      $('#riptide').show();
    } else if (hellfire == 2) {
      alert("You fire a stream of rockets at its face, but it deflects them with his water enhanced tail. You Died.");
      $('#baron').hide();
      $('#riptide').hide();
      $('#hpbar').hide();
      $('#gameover').show();
      $('#hellfire').hide();
    } else if (hellfire == 4) {
      alert("You fire hellfire rockets at the boss. He is a master of his blade and reflects them back into your face. You Died.");
      $('#hellfire').hide();
      $('#riptide').hide();
      $('#light').hide();
      $('#hpbar').hide();
      $('#gwyn').hide();
      $('#gameover').show();
    } else if (hellfire == 5) {
      alert(" Then while he is blinded you fire a stream of rockets blasting his long thin blade out of his hand. This hurts him alot and you remove 80% of his health");
      health.value = 15;
      $('#hellfire').hide();
      riptide = 2;
    } else if (hellfire == 6) {
      alert("Then you blast his face with hellfire rockets. However his blade enhanced him to give him immunity to fire. You did barely and damage. He swiftly kills you with his fiery blade.");
      $('#hellfire').hide();
      $('#riptide').hide();
      $('#light').hide();
      $('#drain').hide();
      $('#hpbar').hide();
      $('#seph').hide();
      $('#gameover').show();

    } else if (hellfire == 7) {
      alert("Then you blast his face with hellfire rockets, you spot his soul. You dont do much damage and only bring him down to 68% health but its ok, his soul is exposed now!");
      $('#hellfire').hide();
      health.value = 68;
      light++;
    } else if (hellfire == 8) {
      alert("You try to fire hellfire rockets but he had a fiery shield that reflects all fire attacks. He reflected back to you and you died.");
      $('#hellfire').hide();
      $('#hpbar').hide();
      $('#riptide').hide();
      $('#error').hide();
      $('#light').hide();
      $('#drain').hide();
      $('#eye').hide();
      $('#gameover').show();
    } else if (hellfire == 9) {
      alert("Then you fire a stream of rockets, you do a bit of damage and stagger him. You take away 5% of his health");
      $('#hellfire').hide();
      health.value = 35;
      drain++;
    }
  }

  function riptidespell() {
    if (riptide == 2) {
      alert('You run up to him and try to fight him with your sword. His blade skill is far superior to yours. He knocks your sword out of your hand and kills you.');
      $('#hellfire').hide();
      $('#riptide').hide();
      $('#light').hide();
      $('#hpbar').hide();
      $('#gwyn').hide();
      $('#gameover').show();
    } else if (riptide == 3) {
      alert('Then you run up to him with your own blade and chop him up. You unlocked: Ionic Drain');
      $('#gwyn').hide();
      health.value = 100;
      $('#drain').show();
      $('#hellfire').show();
      $('#light').show();
      $('#riptide').show();
      $('#seph').show();

    } else if (riptide == 4) {
      alert('You try to duel him with your water blade, and since he has a fire blade it should be able to do damage, but it fails! He is too strong. You died.');
      $('#hellfire').hide();
      $('#riptide').hide();
      $('#light').hide();
      $('#drain').hide();
      $('#hpbar').hide();
      $('#seph').hide();
      $('#gameover').show();

    } else if (riptide == 5) {
      alert('Then you run up to him and extinguish his fiery blade with your water blade. This deals quite a bit of damage. Reducing the boss to 70% health');
      $('#riptide').hide();
      health.value = 70;
      hellfire++;

    } else if (riptide == 6) {
      alert('He kills you before you could pull out your sword and run up to him. You Died');
      $('#riptide').hide();
      $('#hellfire').hide();
      $('#light').hide();
      $('#drain').hide();
      $('#eye').hide();
      $('#error').hide();
      $('#hpbar').hide();
      $('#gameover').show();
      health.value = 100;

    } else if (riptide == 7) {
      alert('Then you use your water blade to destroy some of his health. You brought down 60% of his health.');
      $('#riptide').hide();
      health.value = 40;
      hellfire = 8;

    }
  }

  function lightspell() {
    if (light == 3) {
      alert(' Knowing his soul is weak to light. As he tries to get up you smite him with a holy beam of light. Ending his life. You have unlocked: the Eye of Agamotto. You are now strong enough to face the final boss!');
      $('#hellfire').show();
      $('#riptide').show();
      $('#drain').show();
      $('#eye').show();
      $('#gwyn').hide();
      $('#seph').hide();
      $('#error').show();
      health.value = 100;

    } else if (light == 2) {
      alert('You try to smite him with a holy beam of light. However he is a dark monster and only his soul is vulnerable to light. He laughs it off and kills you. You Died!');
      $('#hellfire').hide();
      $('#riptide').hide();
      $('#light').hide();
      $('#drain').hide();
      $('#hpbar').hide();
      $('#seph').hide();
      $('#gameover').show();
    } else if (light == 5) {
      alert("You use the light of redemption to reveal the boss to you!");
      $('#light').hide();
      riptide = 6;
    } else if (light == 4) {
      alert("You use the light of redemption to reveal the boss to you. He kills you before you could even blink.");
      $('#light').hide();
      $('#hpbar').hide();
      $('#hellfire').hide();
      $('#riptide').hide();
      $('#drain').hide();
      $('#eye').hide();
      $('#error').hide();
      $('#gameover').show();

    }
  }

  function drainspell() {
    if (drain == 2) {
      alert("Then you try to do an ionic drain, he was shielded though and blows you up with unknown means.");
            $('#light').hide();
      $('#hpbar').hide();
      $('#hellfire').hide();
      $('#riptide').hide();
      $('#drain').hide();
      $('#eye').hide();
      $('#error').hide();
      $('#gameover').show();
    } else if (drain == 3) {
      alert("You use your ionic drain to drain the boss of his final energy. Then you stand up tall super proud. And you trip and die. Thanks to your timeloop you come back to life and win.");
      $('#gamewin').show();
      $('#hpbar').hide();
      $('#drain').hide();
      $('#error').hide();
    }
  }

  //.one means the function only runs once - in this case, the alert only shows once
  $('#hellfire').one("click", function() {
    alert("You send a barrage of hellfire rockets destroying Illfangs health bar. Level Up! You have unloked a new spell! You have unlocked: Anklusmos");
    health.value = 0;
    $('#illfang').hide();
    $('#riptide').show();
    health.value = 100;
    $('#baron').show();
  });
  $('#riptide').one("click", function() {
    alert("You run upto the snake like monster. Slicing it in the middle with your blade. You eliminate 60% of its health");
    health.value = 40;
    hellfire++;
    $('#riptide').hide();
  });
  $('#light').one("click", function() {
    alert("You use your newly learnt Light of Redemption spell to smite the enemy with a holy beam of light. Temporarily disabling his ability to attack. You remove of 5% of his health");
    health.value = 95;
    hellfire++;
    $('#light').hide();
  });
  $('#drain').one("click", function() {
    alert("You use your newly learn Ionic Drain to drain the boss of his energy. He gets super tired and is temporalily unable to fight. You take away 5% of his health!");
    health.value = 95;
    riptide++;
    $('#drain').hide();
  });
  $('#eye').one("click", function() {
    alert("You use the eye of agamotto to slip into an infinite time loop.");
    health.value = 100;
    light++;
    $('#eye').hide();
  });
  $('#hellfire').click(function() {
    hellfire++;
    hellfirespell();
  });

  $('#riptide').click(function() {
    riptide++;
    riptidespell();
  });

  $('#light').click(function() {
    light++;
    lightspell();
  });

  $('#drain').click(function() {
    drain++;
    drainspell();
  });

  $('#eye').click(function() {
    eye++;
    eyespell();
    
  });
});
//closing bracket for doc.ready, goes at the bottom of ALL your code