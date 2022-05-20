let aries =
  "ARIES - Today is a great day to check off all the items on that list of yours, Aries. Get it done. At the same time, realize that your emotions might be a bit clouded and that things that seem genuine may actually be just a mirage. Issues of a spiritual nature are of primary concern. You should smake sure you're nurturing this side of your being. Think with your heart.";
let taurus =
  "TAURUS - Today is a great day to let your artistic nature shine through, Taurus. Your sense of color and pattern is right on target and your words are more poetic than usual. Create a time and space for your creative inner nature to manifest on the physical plane. Let your fantasy world spill onto a piece of paper for others to see. You have tremendous gifts. Feel free to share them with the world.";
let gemini =
  "GEMINI - Your emotions may be confused today, Gemini. People may seem to rub you the wrong way, and you may feel like you're all alone in the world. Keep in mind that you're very sensitive and capable of picking up things that other people miss. You cut through the masks and see right to the core of every issue. Give yourself credit for being a passionate detective.";
let cancer =
  "CANCER - You may be out of step with the rest of the world today, Cancer, but don't sweat it. This is a good day to finish projects. Your head may be in the clouds and your emotions foggier than usual. Bring more of your fantasy world to the current reality. Don't just talk about lofty ideas and beautiful dreams - live them. You have the power to change every situation for the better.";
let leo =
  "LEO - Stay grounded and focused today, Leo, You can accomplish a lot if you set your mind to it. You may sense a blurry cloud lingering - this is your emotion talking. Amid all the goal-oriented pursuits, mental processes, and work-related issues, you have given short shrift to your feelings. It's OK to cry. Recognize that emotions are an important part of you. They deserve your attention.";
let virgo =
  "VIRGO - Today's events may cause disruption in your routine, Virgo. Your emotions may seem clouded, and other people may challenge aspects of your ego. Relationships with the opposite sex may not be great today, so don't try to force an issue that you know will end up in conflict. There's an air of conservatism throughout the day that may not pair well with your unconventional nature. Lay low.";
let libra =
  "LIBRA - Turn up your fantasy dial and let your imagination run wild. Your intuition is strong today, Libra, and you should give your emotions room to flow. Work to clear the blockages that keep you from doing things you truly want to do. Get your ideas on paper and manifest more of your fantasy world in reality. People may be stingy, so now isn't the best time to ask for a raise or loan.";
let scorpio =
  "SCORPIO - Issues may be clouded today, Scorpio. The things that seem real may actually be illusions. You might find that you feel a bit more reserved than usual and that you want to hold tight to your material possessions for comfort. Keep in mind that other people are extremely important to you now and you would benefit greatly by offering your hand to those who are less fortunate.";
let sagittarius =
  "SAGITTARIUS - Terrific energy flows your way today, Sagittarius. Make sure that what you're dealing with is genuine. There's a tendency for people to get lost in their fantasy worlds. Be aware that what seems practical today could be the opposite tomorrow. Your emotions may seem confused, but if you concentrate on releasing instead of judging them, you can sail through the day without any trouble.";
let capricorn =
  "CAPRICORN - The heaviness of the day weighs on you, Capricorn. Take your time with projects and carefully evaluate all the facts before making a decision. People can be deceptive, so be careful in all your dealings. You may be going through a period in which you care less about material possessions and concern yourself with spiritual things. This is a great time to delve into the occult";
let aquarius =
  "AQUARIUS - Your fantasy world is especially piqued today, Aquarius. Your need to escape physical reality is strong. Be careful about how you go about this. Dreams may take you there, but be rational so you aren't left more confused than before. Keep your energy pure and clean. Other people will recognize you for your tender, sensitive nature, so feel free to be confident with your words.";
let pisces =
  "PISCES - People may tug at you from all sides today, Pisces. No matter which way you turn, someone is there. Be patient and levelheaded. Your time will come. For now, look at these challenges as lessons for the future and learn from them. Your point of view isn't the only one in the world. It would probably be a good thing if you worked on incorporating other people's opinions into your own.";

// document.getElementById("aquarius").addEventListener("click", message1);
$("#aquarius").on("click", message1);
$("#pisces").on("click", message2);
$("#aries").on("click", message3);
$("#taurus").on("click", message4);
$("#gemini").on("click", message5);
$("#cancer").on("click", message6);
$("#leo").on("click", message7);
$("#virgo").on("click", message8);
$("#libra").on("click", message9);
$("#scorpio").on("click", message10);
$("#sagittarius").on("click", message11);
$("#capricorn").on("click", message12);

function message1() {
  //message 1
  //   document.getElementById("hInfo1").innerText = aquarius;
  //   document.getElementById("hInfo1").classList.toggle("hidden");

  $("#hInfo1").text(aquarius);
  $("#hInfo1").toggleClass("hidden");

  //message 2
  //   document.getElementById("hInfo2").innerText = pisces;
  //   document.getElementById("hInfo2").classList.add("hidden");

  $("#hInfo2").text(pisces);
  $("#hInfo2").addClass("hidden");

  //message 3
  $("#hInfo3").text(aries);
  $("#hInfo3").addClass("hidden");

  //message 4
  $("#hInfo4").text(taurus);
  $("#hInfo4").addClass("hidden");

  //message 5
  $("#hInfo5").text(gemini);
  $("#hInfo5").addClass("hidden");

  //message 6
  $("#hInfo6").text(cancer);
  $("#hInfo6").addClass("hidden");

  //message 7
  $("#hInfo7").text(leo);
  $("#hInfo7").addClass("hidden");

  //message 8
  $("#hInfo8").text(virgo);
  $("#hInfo8").addClass("hidden");

  //message 9
  $("#hInfo9").text(libra);
  $("#hInfo9").addClass("hidden");

  //message 10
  $("#hInfo10").text(scorpio);
  $("#hInfo10").addClass("hidden");

  //message 11
  $("#hInfo11").text(sagittarius);
  $("#hInfo11").addClass("hidden");

  //message 12
  $("#hInfo12").text(capricorn);
  $("#hInfo12").addClass("hidden");
}

function message2() {
  //message 1
  //   document.getElementById("hInfo1").innerText = aquarius;
  //   document.getElementById("hInfo1").classList.toggle("hidden");

  $("#hInfo1").text(aquarius);
  $("#hInfo1").addClass("hidden");

  //message 2
  //   document.getElementById("hInfo2").innerText = pisces;
  //   document.getElementById("hInfo2").classList.add("hidden");

  $("#hInfo2").text(pisces);
  $("#hInfo2").toggleClass("hidden");

  //message 3
  $("#hInfo3").text(aries);
  $("#hInfo3").addClass("hidden");

  //message 4
  $("#hInfo4").text(taurus);
  $("#hInfo4").addClass("hidden");

  //message 5
  $("#hInfo5").text(gemini);
  $("#hInfo5").addClass("hidden");

  //message 6
  $("#hInfo6").text(cancer);
  $("#hInfo6").addClass("hidden");

  //message 7
  $("#hInfo7").text(leo);
  $("#hInfo7").addClass("hidden");

  //message 8
  $("#hInfo8").text(virgo);
  $("#hInfo8").addClass("hidden");

  //message 9
  $("#hInfo9").text(libra);
  $("#hInfo9").addClass("hidden");

  //message 10
  $("#hInfo10").text(scorpio);
  $("#hInfo10").addClass("hidden");

  //message 11
  $("#hInfo11").text(sagittarius);
  $("#hInfo11").addClass("hidden");

  //message 12
  $("#hInfo12").text(capricorn);
  $("#hInfo12").addClass("hidden");
}

function message3() {
  //message 1
  //   document.getElementById("hInfo1").innerText = aquarius;
  //   document.getElementById("hInfo1").classList.toggle("hidden");

  $("#hInfo1").text(aquarius);
  $("#hInfo1").addClass("hidden");

  //message 2
  //   document.getElementById("hInfo2").innerText = pisces;
  //   document.getElementById("hInfo2").classList.add("hidden");

  $("#hInfo2").text(pisces);
  $("#hInfo2").addClass("hidden");

  //message 3
  $("#hInfo3").text(aries);
  $("#hInfo3").toggleClass("hidden");

  //message 4
  $("#hInfo4").text(taurus);
  $("#hInfo4").addClass("hidden");

  //message 5
  $("#hInfo5").text(gemini);
  $("#hInfo5").addClass("hidden");

  //message 6
  $("#hInfo6").text(cancer);
  $("#hInfo6").addClass("hidden");

  //message 7
  $("#hInfo7").text(leo);
  $("#hInfo7").addClass("hidden");

  //message 8
  $("#hInfo8").text(virgo);
  $("#hInfo8").addClass("hidden");

  //message 9
  $("#hInfo9").text(libra);
  $("#hInfo9").addClass("hidden");

  //message 10
  $("#hInfo10").text(scorpio);
  $("#hInfo10").addClass("hidden");

  //message 11
  $("#hInfo11").text(sagittarius);
  $("#hInfo11").addClass("hidden");

  //message 12
  $("#hInfo12").text(capricorn);
  $("#hInfo12").addClass("hidden");
}

function message4() {
  //message 1
  //   document.getElementById("hInfo1").innerText = aquarius;
  //   document.getElementById("hInfo1").classList.toggle("hidden");

  $("#hInfo1").text(aquarius);
  $("#hInfo1").addClass("hidden");

  //message 2
  //   document.getElementById("hInfo2").innerText = pisces;
  //   document.getElementById("hInfo2").classList.add("hidden");

  $("#hInfo2").text(pisces);
  $("#hInfo2").addClass("hidden");

  //message 3
  $("#hInfo3").text(aries);
  $("#hInfo3").addClass("hidden");

  //message 4
  $("#hInfo4").text(taurus);
  $("#hInfo4").toggleClass("hidden");

  //message 5
  $("#hInfo5").text(gemini);
  $("#hInfo5").addClass("hidden");

  //message 6
  $("#hInfo6").text(cancer);
  $("#hInfo6").addClass("hidden");

  //message 7
  $("#hInfo7").text(leo);
  $("#hInfo7").addClass("hidden");

  //message 8
  $("#hInfo8").text(virgo);
  $("#hInfo8").addClass("hidden");

  //message 9
  $("#hInfo9").text(libra);
  $("#hInfo9").addClass("hidden");

  //message 10
  $("#hInfo10").text(scorpio);
  $("#hInfo10").addClass("hidden");

  //message 11
  $("#hInfo11").text(sagittarius);
  $("#hInfo11").addClass("hidden");

  //message 12
  $("#hInfo12").text(capricorn);
  $("#hInfo12").addClass("hidden");
}

function message5() {
  //message 1
  //   document.getElementById("hInfo1").innerText = aquarius;
  //   document.getElementById("hInfo1").classList.toggle("hidden");

  $("#hInfo1").text(aquarius);
  $("#hInfo1").addClass("hidden");

  //message 2
  //   document.getElementById("hInfo2").innerText = pisces;
  //   document.getElementById("hInfo2").classList.add("hidden");

  $("#hInfo2").text(pisces);
  $("#hInfo2").addClass("hidden");

  //message 3
  $("#hInfo3").text(aries);
  $("#hInfo3").addClass("hidden");

  //message 4
  $("#hInfo4").text(taurus);
  $("#hInfo4").addClass("hidden");

  //message 5
  $("#hInfo5").text(gemini);
  $("#hInfo5").toggleClass("hidden");

  //message 6
  $("#hInfo6").text(cancer);
  $("#hInfo6").addClass("hidden");

  //message 7
  $("#hInfo7").text(leo);
  $("#hInfo7").addClass("hidden");

  //message 8
  $("#hInfo8").text(virgo);
  $("#hInfo8").addClass("hidden");

  //message 9
  $("#hInfo9").text(libra);
  $("#hInfo9").addClass("hidden");

  //message 10
  $("#hInfo10").text(scorpio);
  $("#hInfo10").addClass("hidden");

  //message 11
  $("#hInfo11").text(sagittarius);
  $("#hInfo11").addClass("hidden");

  //message 12
  $("#hInfo12").text(capricorn);
  $("#hInfo12").addClass("hidden");
}

function message6() {
  //message 1
  //   document.getElementById("hInfo1").innerText = aquarius;
  //   document.getElementById("hInfo1").classList.toggle("hidden");

  $("#hInfo1").text(aquarius);
  $("#hInfo1").addClass("hidden");

  //message 2
  //   document.getElementById("hInfo2").innerText = pisces;
  //   document.getElementById("hInfo2").classList.add("hidden");

  $("#hInfo2").text(pisces);
  $("#hInfo2").addClass("hidden");

  //message 3
  $("#hInfo3").text(aries);
  $("#hInfo3").addClass("hidden");

  //message 4
  $("#hInfo4").text(taurus);
  $("#hInfo4").addClass("hidden");

  //message 5
  $("#hInfo5").text(gemini);
  $("#hInfo5").addClass("hidden");

  //message 6
  $("#hInfo6").text(cancer);
  $("#hInfo6").toggleClass("hidden");

  //message 7
  $("#hInfo7").text(leo);
  $("#hInfo7").addClass("hidden");

  //message 8
  $("#hInfo8").text(virgo);
  $("#hInfo8").addClass("hidden");

  //message 9
  $("#hInfo9").text(libra);
  $("#hInfo9").addClass("hidden");

  //message 10
  $("#hInfo10").text(scorpio);
  $("#hInfo10").addClass("hidden");

  //message 11
  $("#hInfo11").text(sagittarius);
  $("#hInfo11").addClass("hidden");

  //message 12
  $("#hInfo12").text(capricorn);
  $("#hInfo12").addClass("hidden");
}

function message7() {
  //message 1
  //   document.getElementById("hInfo1").innerText = aquarius;
  //   document.getElementById("hInfo1").classList.toggle("hidden");

  $("#hInfo1").text(aquarius);
  $("#hInfo1").addClass("hidden");

  //message 2
  //   document.getElementById("hInfo2").innerText = pisces;
  //   document.getElementById("hInfo2").classList.add("hidden");

  $("#hInfo2").text(pisces);
  $("#hInfo2").addClass("hidden");

  //message 3
  $("#hInfo3").text(aries);
  $("#hInfo3").addClass("hidden");

  //message 4
  $("#hInfo4").text(taurus);
  $("#hInfo4").addClass("hidden");

  //message 5
  $("#hInfo5").text(gemini);
  $("#hInfo5").addClass("hidden");

  //message 6
  $("#hInfo6").text(cancer);
  $("#hInfo6").addClass("hidden");

  //message 7
  $("#hInfo7").text(leo);
  $("#hInfo7").toggleClass("hidden");

  //message 8
  $("#hInfo8").text(virgo);
  $("#hInfo8").addClass("hidden");

  //message 9
  $("#hInfo9").text(libra);
  $("#hInfo9").addClass("hidden");

  //message 10
  $("#hInfo10").text(scorpio);
  $("#hInfo10").addClass("hidden");

  //message 11
  $("#hInfo11").text(sagittarius);
  $("#hInfo11").addClass("hidden");

  //message 12
  $("#hInfo12").text(capricorn);
  $("#hInfo12").addClass("hidden");
}

function message8() {
  //message 1
  //   document.getElementById("hInfo1").innerText = aquarius;
  //   document.getElementById("hInfo1").classList.toggle("hidden");

  $("#hInfo1").text(aquarius);
  $("#hInfo1").addClass("hidden");

  //message 2
  //   document.getElementById("hInfo2").innerText = pisces;
  //   document.getElementById("hInfo2").classList.add("hidden");

  $("#hInfo2").text(pisces);
  $("#hInfo2").addClass("hidden");

  //message 3
  $("#hInfo3").text(aries);
  $("#hInfo3").addClass("hidden");

  //message 4
  $("#hInfo4").text(taurus);
  $("#hInfo4").addClass("hidden");

  //message 5
  $("#hInfo5").text(gemini);
  $("#hInfo5").addClass("hidden");

  //message 6
  $("#hInfo6").text(cancer);
  $("#hInfo6").addClass("hidden");

  //message 7
  $("#hInfo7").text(leo);
  $("#hInfo7").addClass("hidden");

  //message 8
  $("#hInfo8").text(virgo);
  $("#hInfo8").toggleClass("hidden");

  //message 9
  $("#hInfo9").text(libra);
  $("#hInfo9").addClass("hidden");

  //message 10
  $("#hInfo10").text(scorpio);
  $("#hInfo10").addClass("hidden");

  //message 11
  $("#hInfo11").text(sagittarius);
  $("#hInfo11").addClass("hidden");

  //message 12
  $("#hInfo12").text(capricorn);
  $("#hInfo12").addClass("hidden");
}

function message9() {
  //message 1
  //   document.getElementById("hInfo1").innerText = aquarius;
  //   document.getElementById("hInfo1").classList.toggle("hidden");

  $("#hInfo1").text(aquarius);
  $("#hInfo1").addClass("hidden");

  //message 2
  //   document.getElementById("hInfo2").innerText = pisces;
  //   document.getElementById("hInfo2").classList.add("hidden");

  $("#hInfo2").text(pisces);
  $("#hInfo2").addClass("hidden");

  //message 3
  $("#hInfo3").text(aries);
  $("#hInfo3").addClass("hidden");

  //message 4
  $("#hInfo4").text(taurus);
  $("#hInfo4").addClass("hidden");

  //message 5
  $("#hInfo5").text(gemini);
  $("#hInfo5").addClass("hidden");

  //message 6
  $("#hInfo6").text(cancer);
  $("#hInfo6").addClass("hidden");

  //message 7
  $("#hInfo7").text(leo);
  $("#hInfo7").addClass("hidden");

  //message 8
  $("#hInfo8").text(virgo);
  $("#hInfo8").addClass("hidden");

  //message 9
  $("#hInfo9").text(libra);
  $("#hInfo9").toggleClass("hidden");

  //message 10
  $("#hInfo10").text(scorpio);
  $("#hInfo10").addClass("hidden");

  //message 11
  $("#hInfo11").text(sagittarius);
  $("#hInfo11").addClass("hidden");

  //message 12
  $("#hInfo12").text(capricorn);
  $("#hInfo12").addClass("hidden");
}

function message10() {
  //message 1
  //   document.getElementById("hInfo1").innerText = aquarius;
  //   document.getElementById("hInfo1").classList.toggle("hidden");

  $("#hInfo1").text(aquarius);
  $("#hInfo1").addClass("hidden");

  //message 2
  //   document.getElementById("hInfo2").innerText = pisces;
  //   document.getElementById("hInfo2").classList.add("hidden");

  $("#hInfo2").text(pisces);
  $("#hInfo2").addClass("hidden");

  //message 3
  $("#hInfo3").text(aries);
  $("#hInfo3").addClass("hidden");

  //message 4
  $("#hInfo4").text(taurus);
  $("#hInfo4").addClass("hidden");

  //message 5
  $("#hInfo5").text(gemini);
  $("#hInfo5").addClass("hidden");

  //message 6
  $("#hInfo6").text(cancer);
  $("#hInfo6").addClass("hidden");

  //message 7
  $("#hInfo7").text(leo);
  $("#hInfo7").addClass("hidden");

  //message 8
  $("#hInfo8").text(virgo);
  $("#hInfo8").addClass("hidden");

  //message 9
  $("#hInfo9").text(libra);
  $("#hInfo9").addClass("hidden");

  //message 10
  $("#hInfo10").text(scorpio);
  $("#hInfo10").toggleClass("hidden");

  //message 11
  $("#hInfo11").text(sagittarius);
  $("#hInfo11").addClass("hidden");

  //message 12
  $("#hInfo12").text(capricorn);
  $("#hInfo12").addClass("hidden");
}

function message11() {
  //message 1
  //   document.getElementById("hInfo1").innerText = aquarius;
  //   document.getElementById("hInfo1").classList.toggle("hidden");

  $("#hInfo1").text(aquarius);
  $("#hInfo1").addClass("hidden");

  //message 2
  //   document.getElementById("hInfo2").innerText = pisces;
  //   document.getElementById("hInfo2").classList.add("hidden");

  $("#hInfo2").text(pisces);
  $("#hInfo2").addClass("hidden");

  //message 3
  $("#hInfo3").text(aries);
  $("#hInfo3").addClass("hidden");

  //message 4
  $("#hInfo4").text(taurus);
  $("#hInfo4").addClass("hidden");

  //message 5
  $("#hInfo5").text(gemini);
  $("#hInfo5").addClass("hidden");

  //message 6
  $("#hInfo6").text(cancer);
  $("#hInfo6").addClass("hidden");

  //message 7
  $("#hInfo7").text(leo);
  $("#hInfo7").addClass("hidden");

  //message 8
  $("#hInfo8").text(virgo);
  $("#hInfo8").addClass("hidden");

  //message 9
  $("#hInfo9").text(libra);
  $("#hInfo9").addClass("hidden");

  //message 10
  $("#hInfo10").text(scorpio);
  $("#hInfo10").addClass("hidden");

  //message 11
  $("#hInfo11").text(sagittarius);
  $("#hInfo11").toggleClass("hidden");

  //message 12
  $("#hInfo12").text(capricorn);
  $("#hInfo12").addClass("hidden");
}

function message12() {
  //message 1
  //   document.getElementById("hInfo1").innerText = aquarius;
  //   document.getElementById("hInfo1").classList.toggle("hidden");

  $("#hInfo1").text(aquarius);
  $("#hInfo1").addClass("hidden");

  //message 2
  //   document.getElementById("hInfo2").innerText = pisces;
  //   document.getElementById("hInfo2").classList.add("hidden");

  $("#hInfo2").text(pisces);
  $("#hInfo2").addClass("hidden");

  //message 3
  $("#hInfo3").text(aries);
  $("#hInfo3").addClass("hidden");

  //message 4
  $("#hInfo4").text(taurus);
  $("#hInfo4").addClass("hidden");

  //message 5
  $("#hInfo5").text(gemini);
  $("#hInfo5").addClass("hidden");

  //message 6
  $("#hInfo6").text(cancer);
  $("#hInfo6").addClass("hidden");

  //message 7
  $("#hInfo7").text(leo);
  $("#hInfo7").addClass("hidden");

  //message 8
  $("#hInfo8").text(virgo);
  $("#hInfo8").addClass("hidden");

  //message 9
  $("#hInfo9").text(libra);
  $("#hInfo9").addClass("hidden");

  //message 10
  $("#hInfo10").text(scorpio);
  $("#hInfo10").addClass("hidden");

  //message 11
  $("#hInfo11").text(sagittarius);
  $("#hInfo11").addClass("hidden");

  //message 12
  $("#hInfo12").text(capricorn);
  $("#hInfo12").toggleClass("hidden");
}
