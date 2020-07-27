function generateQuote() {
  var randomNumber = Math.ceil(Math.random() * 10);
  var quotes = [
    "Love yourself first and everything else falls into line.",
    "Lead from the heart, not the head.",
    "Wherever life plants you, bloom with grace.",
    "Don't give it five minutes if you're not going to give it five years.",
    "What comes easy won’t last long, and what lasts long won’t come easy.",
    "Every day is not a success. Every year is not a success. You have to celebrate the good.",
    "No one is you and that is your superpower.",
    "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.",
    "The biggest adventure you can take is to live the life of your dreams.",
    "The best time for new beginnings is now.",
    "Life's most persistent and urgent question is, 'What are you doing for others?'",
    "I've failed over and over and over again in my life and that is why I succeed.",
    "Nothing can dim the light that shines from within.",
    "It's not what we have in life but who we have in our life that matters.",
    "One day or day one. It's your decision.",
    "Embrace the glorious mess that you are.",
    "Every day may not be good, but there is something good in every day.",
    "Sometimes you will never know the value of a moment until it becomes a memory",
    "Difficult roads often lead to beautiful destinations.",
    "Only I can change my life. No one can do it for me.",
    "A diamond is a chunk of coal that did well under pressure.",
    "You can't go back and change the beginning, but you can start where you are and change the ending.",
    "Small steps in the right direction can turn out to be the biggest step of your life.",
    "If everything was perfect, you would never learn and you would never grow.",
    "The best thing to hold onto in life is each other.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Life isn't about finding yourself. Life is about creating yourself.",
    "I have found that if you love life, life will love you back.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "The two most important days in your life are the day you are born and the day you find out why.",
    "It is not the length of life, but depth of life.",
    "Is not this a true autumn day? Just the still melancholy that I love — that makes life and nature harmonize.",
    "And all the lives we ever lived and all the lives to be are full of trees and changing leaves ...",
  ];
  var quoter = [
    "Lucille Ball",
    "Princess Diana",
    "Anonymous",
    "Meghan Markle​",
    "Anonymous",
    "Reese Witherspoon",
    "Roald Dahl",
    "Anonymous",
    "Reba McEntire",
    "Oprah Winfrey",
    "Anonymous",
    "Martin Luther King, Jr.",
    "Michael Jordan",
    "Maya Angelou",
    "Margaret Laurence",
    "Anonymous",
    "Elizabeth Gilbert",
    "Anonymous",
    "Dr. Seuss",
    "Anonymous",
    "Carol Burnett",
    "Anonymous",
    "C.S. Lewis",
    "Anonymous",
    "Beyoncé",
    "Audrey Hepburn",
    "Albert Einstein",
    "George Bernard Shaw",
    "Arthur Rubinstein",
    "Oscar Wilde",
    "Mark Twain",
    "Ralph Waldo Emerson",
    "George Eliot",
    "Virginia Woolf",
  ];
  console.log(randomNumber);
  console.log(quotes[randomNumber]);
  document.getElementById("displayQuote").innerHTML =
    '"' + quotes[randomNumber] + '"';
  document.getElementById("owner").innerHTML = "By : " + quoter[randomNumber];
}

function apj() {
  var randomNumber = Math.ceil(Math.random() * 10);
  var quotes = [
    "Dont depend too much on anyone inn This World.Because,Even your own shadow lweaves you when you are in darkness",
    "I am not handsome but i can give my hand to someone who needs help...Because Beauty is required in heart not in instant relief  but has eternal side_effects",
    "Speak only if you feel your words are better than the Silence",
    "BE SILENT",
    "BE CAREFUL WITH YOUR WORDS, THEY CAN BE FORGIVEN, BUT NOT BE FORGOTTEN ",
    "When one cant feel your feelings and When one can understand you without any words",
    "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck ",
    " You have to dream before your dreams can come true. ",
    "A dream is not that which you see while sleeping, it is something that does not let you sleep. ",
    "You should not give up and we should not allow the problem to defeat us.",
    "f you want to shine like a sun, first burn like a sun. ",
    "I was willing to accept what I couldn’t change.",
    "All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.",
    "Man needs difficulties in life because they are necessary to enjoy success.",
    "Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
    "Let us sacrifice our today so that our children can have a better tomorrow.",
    "The best brains of the nation may be found on the last benches of the classroom.",
    "Excellence happens not by accident. It is a process.",
    "Winners are not those who never fail but those who never quit.",
    "Two rules for a peaceful life: Depression in failure should never go to heart, and ego in success should never go to the brain.s",
    "Luxury and Lies have huge maintenance costs. But Truth and Simplicity are self-maintained without any cost",
    " Empty pocket teaches you a Million thim=ngs in Life , but Full of pockets spoils ypou in a Million ways",
    " Knowledge Will Give you power but the Character will give Respect",
    " Accept your past without regret,handle your present with confidence and face your future without fear ",
    " Respect is like a Mirror,the more you show it to others people,the more they will reflect it back ",
    " If you stand for a reason ,be prepared to stand alone like a tree.If you fall in the ground, fall as a seed that grows back to fight prove you again",
    " if you fail,never give up.It's just First Attempt In Learning ",
    " Life is like a Book.Some Chapters sad,some happy,and some exciting.But if you never turn to next page,You will never know what the next chapyer holds",
    " Rever Never Go Reverse.So Be a River,only to focus on Future.",
    " Your Best Teacher is Your LAST mistake ",
    " The Best Medicine for success is Comfidence and Hard-work to be a successful person ",
    " Better Respect Haters than Hating.Beecause It's them who think You are Better than Them ",
    " Past is Waste paper , Present is Newspaper , Future is Question Paper.So,Read and Write Carefully.Otherwise,Life will be a tissue paper ",
    " All the Problems must be stuck between MIND and MATTER.If you dont mind,It does not Matter",
    "  PAIN'S Psitive Attitude In Negativ Situation ",
    " SMILE is Electricity in the Battery Life ",
    " Pain can hurt you but also changes you ",
    " You have to Salute either Duty or Everyone else ",
    " Trust is like a Glass,Once Broken can never be the same again ",
    " Never Cry to the person who never values  ",
    " It is your innvolvement can lead to success or fail ",
    " Suffering is the essence of Success ",
    " When Flood Comes, Fish eat Ant.When Water Dries , The Ant eats Fish ",
    " EGO is the only requirement to destroy any relationship,So Be a Bigger Person skip the E and let it Go ",
    " It is very Easy to Defeat someone,but Very Hard to Win Someone",
    "When GOD pushes you to the edge of difficulty Trust Him Fully.because two things can happen either He will Catch you when you fall or He will Teach you how to fly",
  ];
  console.log(randomNumber);
  console.log(quotes[randomNumber]);
  document.getElementById("displayQuote").innerHTML =
    '"' + quotes[randomNumber] + '"';
  document.getElementById("owner").innerHTML = "By : A.P.J. Abdul Kalam";
}

function copyQuote() {
  var text = document.getElementById("displayQuote").innerText;
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
  alert("Quote Copied to Clipboard: " + text);
}
