var trigger = [
    ["hi","hey","hello","hai"], 
	["how are you", "how is life", "how are things"],
	["what are you doing", "what is going on"],
	["how old are you"],
	["who are you", "are you human", "are you bot", "are you robot", "are you human or bot" , "are you human or robot"],
	["who created you", "who made you"],
	["your name please",  "your name", "may i know your name", "what is your name"],
	["i love you"],
	["happy", "good"],
	["bad", "bored", "tired"],
	["help me", "tell me story", "tell me joke"],
	["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
	["bye", "good bye", "goodbye", "see you later"]
];

var reply = [
    ["Hi","Hey","Hello"], 
	["Fine", "Pretty well", "Fantastic"],
	["Nothing much", "About to go to sleep", "Can you guest?", "I don't know actually"],
	["I am 1 day old"],
	["I am just a Robot", "I am a Robot. What are you?"],
	["Kani Veri", "My God"],
	["I am nameless", "I don't have a name"],
	["I love you too", "Me too"],
	["Have you ever felt bad?", "Glad to hear it"],
	["Why?", "Why? You shouldn't!", "Try watching TV"],
	["I will", "What about?"],
	["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
	["Bye", "Goodbye", "See you later"]
];

var alternatives = ["Ehh" , "Ahh" , "Hahaha"];


document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("userInput")
    inputField.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            var input = document.getElementById("userInput").value;
            document.getElementById("user").innerHTML = input;
            output(input);
        }
    });
});

function output(input) {

    try {
        var result = input + "=" + eval(input);
    } catch (e) {
        var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, "");
        text = text.replace(/ a /g , " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");

        if (compare(trigger, reply, text)) {
            var result = compare(trigger, reply, text)
        } else {
            var result = alternatives[Math.floor(Math.random() * alternatives.length)];
        }
    }


    document.getElementById("bot").innerHTML = result;


    document.getElementById("userInput").value = "";
}

function compare(arr, array, string) {
    var item;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (arr[i][j] == string) {
                items = array[i];
                item = items[Math.floor(Math.random() * items.length)];
            }
        }
    }
    return item;
}


