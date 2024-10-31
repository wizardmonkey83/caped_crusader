// Intro Screen Setup
document.addEventListener("keydown", function startGame() {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    displayLines(); // Begin the dialogue
    document.removeEventListener("keydown", startGame); // Remove listener after use
});

// Full dialogue with each line as an entry in the array
const dialogueLines = [
    "Location: Wayne Manor, Grand Ballroom. Bruce Wayne is mingling at a charity event.",
    "Alfred: Sir, apologies for the interruption, but there's… an urgent matter requiring your attention.",
    "Bruce: Alfred, can't it wait? I’ve just pledged half a million to Gotham's youth outreach program.",
    "Alfred: Ordinarily, I’d agree, Master Wayne. But this is… unusual. Citizens downtown are reporting hearing voices, distorted memories, even loss of control over their own actions. Commissioner Gordon believes it may be connected to the recent disturbances.",
    "Bruce: Very well. Keep the guests entertained, Alfred. Tell them... I’ll double the pledge if they don’t miss me.",
    "Location: Outside the Gotham Museum, Batman meets Robin and Commissioner Gordon.",
    "Commissioner Gordon: Glad you could make it. We’re dealing with something I haven’t seen before. People have been collapsing on the streets, saying they’re hearing voices.",
    "Batman: Hallucinations, paranoia… it sounds like Scarecrow. Any sign of his fear toxin?",
    "Commissioner Gordon: No, none of the usual traces. And here’s the strangest part; three of the witnesses I spoke to say they can’t recall anything that happened afterward.",
    "Robin: That doesn’t add up. Scarecrow’s toxin doesn’t usually have that effect. And if it were the Riddler, he’d be leaving us puzzles out in the open.",
    "Batman: This feels different… almost as if it’s designed to create chaos without a trace. Gordon, what exactly happened here at the museum?",
    "Commissioner Gordon: Around midnight, a security guard saw strange shadows moving through the exhibits. He said he heard someone whispering, but there was no one there. A few minutes later, he was on the floor, clutching his head and muttering about ‘echoes’ and ‘lost time.’ He can’t remember anything after that.",
    "Batman: Shadows, whispers, and memory loss… This isn’t just about fear or riddles. It’s psychological warfare—it’s tapping into the mind directly.",
    "Robin: Do we have any leads? Or are we going to have to wait until whoever’s behind this decides to strike again?",
    "Commissioner Gordon: Just one. We found this scrawled on the guard's notepad after he came to. It’s not his handwriting.",
    "Batman: ‘The hurrier I go, the behinder I get...’ Sounds like something that would interest the Mad Hatter. Hypnosis, mental manipulation—it fits his profile, and he’d know how to slip into places unnoticed.",
    "Robin: So… what now? Track down the Hatter and see what he knows?",
    "Batman: Yes, but we approach carefully. If Hatter has managed to turn the minds of Gotham’s citizens against them, we can’t be sure who else might be affected.",
    "Commissioner Gordon: Be careful out there, Batman. We’re already dealing with a city on edge. The last thing Gotham needs is for this to spiral out of control.",
    "Batman: We’ll put a stop to it, Jim. One way or another, we’re going to get to the bottom of this.",
    "Location: Inside Gotham Museum.",
    "Robin: You think Mad Hatter would pick a more… whimsical place than a museum. This doesn’t exactly scream ‘Wonderland.’",
    "Batman: Agreed. But this setup… it feels calculated.",
    "They move further inside. Suddenly, a faint green glow illuminates a nearby display case, where Batman spots a card placed on a pedestal in the center, inscribed with a riddle.",
    "Robin: That’s… interesting. Doesn’t exactly fit Mad Hatter’s usual style.",
    "Batman: Hatter’s known for his mind games, but this level of precision is… unusual.",
    "Batman reads the riddle on the card aloud.",
    "RIDDLE_TRIGGER_1", // first riddle trigger
    "Robin: No voice… no face… but it ‘echoes.’ Batman, this isn’t just a puzzle; it’s almost like a description.",
    "Batman: Not just a riddle—it’s a reflection. Scarecrow’s trying to make us see something about Gotham… something that’s always here but never seen directly. Something haunting every corner. The answer is ‘darkness’",
    "The room’s lights flicker in response. A hidden speaker crackles to life, and a taunting voice fills the room.",
    "Riddler: Oh, bravo, Batman! I’m almost impressed. But don’t flatter yourself too much; that was merely a warm-up. I’ll keep this interesting if you promise to keep up.",
    "Batman: Looks like someone’s been spending too much time alone with his thesaurus.",
    "Robin: You think he’d get better material if he started socializing.",
    "They move through the hall as another message echoes.",
    "Riddler: Follow the clues, Dark Knight. But be warned: even your clever mind cannot solve this labyrinth of madness.",
    "Robin: Madness, labyrinths… think Riddler’s working with Hatter?",
    "Batman: They’re not exactly the collaborative type.",
    "They proceed deeper into the museum, the green glow following them as the sound of laughter fades away.",
    "Robin: This place feels like a haunted house. Wasn’t it supposed to be a Hatter lead? All this green… I’d say we’ve walked into Riddler’s maze.",
    "Batman: Hatter may have set the trap, but it looks like Riddler left his mark.",
    "They move forward, reaching a display of ancient artifacts. One of the pedestals has a digital timer counting down in green numbers. Riddler’s voice echoes from speakers embedded in the walls.",
    "Riddler: Tick-tock, Dark Knight. I hope you don’t mind a little friendly competition. You’re running out of time… or are you just running in circles?",
    "Robin: Friendly competition, huh? How many times has he tried to ‘outsmart’ you now?",
    "Batman: Enough to prove he’s consistent. But right now, Riddler’s not the problem—this isn’t his usual setup.",
    "They search the room, passing displays of rare artifacts and ancient relics. In the center of the room, Batman spots a single, uncovered painting leaning against a wall. It shows a twisted version of the Gotham skyline, overlooked by a rabbit wearing a bright pink hat. A hastily scrawled note is stuck to the corner of the painting.",
    "Batman: ‘Madness begins where light ends. Come down, dear Knight, if you wish to see the true Wonderland.’",
    "Robin: So, Mad Hatter’s been watching us all along. Guess that explains the eerie lighting.",
    "Batman: It explains more than that. This wasn’t just a chase—Hatter and Riddler were guiding us here, step by step.",
    "Robin: But why lure us here? What’s the endgame?",
    "Batman: Mad Hatter thrives on control, and Riddler? He wouldn’t work with anyone unless there was something in it for him. My guess? They want us to see something—something we’re not supposed to find.",
    "As Batman finishes speaking, a metallic clink echoes through the room. Both turn as a trapdoor opens beneath the painting, revealing a narrow staircase leading into darkness. Batman steps forward, scanning the entrance.",
    "Robin: Guess there’s only one way forward.",
    "Batman: And conveniently, it’s the path they’ve laid out for us. If this leads where I think it does, we need to be ready for anything.",
    "After several turns down the winding staircase, they reach a heavy metal door labeled 'Restricted Access: Research Division.'",
    "Robin: A ‘research division’ in the museum basement? When did Gotham get so hospitable?",
    "Batman: There’s always more to Gotham than meets the eye. Keep your guard up. Whatever we’re about to walk into, they’ve prepared for us.",
    "Batman kicks open the door, and they enter a dimly lit laboratory. The room is lined with shelves holding jars filled with murky liquid and strange specimens. Blueprints and scribbled notes are scattered across a large metal table at the center of the room. A single spotlight flickers on, illuminating a monitor with a live video feed of Mad Hatter’s face.",
    "Mad Hatter: Welcome to my little Wonderland, Batsy! How do you like it? Cozy, isn’t it?",
    "Batman: Looks like we’re finally getting to the heart of the matter.",
    "Mad Hatter: Oh, not quite yet, dear Bat. You’ve only seen the beginning of my Wonderland. I’ve left you clues, haven’t I? Echoes in the dark… whispers that crawl under the skin.",
    "Robin: This whole setup… he’s trying to get into our heads.",
    "Batman: Hatter’s hypnosis isn’t just in Wonderland anymore. This setup means he’s using something—some new method to influence minds directly.",
    "Mad Hatter: You’ve always been clever, Batman, but can you solve a riddle when your own mind starts to turn against you? Come now, follow the clues. My little bird’s almost ready.",
    "The screen cuts to static, and the spotlight shuts off, plunging them into darkness.",
    "Robin: Did he just say… ‘my little bird’?",
    "Batman: He’s talking about you.",
    "Robin: Guess it’s time we find out exactly what he means by that.",
    "Batman: Agreed. Whatever Hatter’s planning, we’re not stopping until we shut it down.",
    "Batman and Robin exit the museum, stepping into the cold Gotham night. As they walk away, the museum doors lock behind them.",
    "Robin: Well, that was… unsettling. Riddles, hidden messages, green lights... But why lead us here just to leave us hanging?",
    "Batman: Because the museum was never the endgame. It was a distraction. Mad Hatter and Riddler were setting the stage. The real question is—",
    "Batman’s words are cut off as his communicator crackles to life. Commissioner Gordon begins to speak.",
    "Commissioner Gordon: Batman, we’ve got another situation. I don’t know if it’s connected, but you’ll want to see this. I’m at Gotham Psychiatric—east wing.",
    "Batman: We’re on our way.",
    "Robin: Gotham Psychiatric? Isn’t that Scarecrow’s old haunt?",
    "Batman: It was. If he’s there now, it means they’re escalating. Buckle up, it’s going to be a bumpy ride.",
    "Location: Gotham Psychiatric Hospital",
    "Commissioner Gordon: Batman, Robin. I had a couple of officers inspect this place after a call came in about strange sounds. By the time I got here, they were… different. They couldn’t remember who I was, barely knew their own names.",
    "Batman: Scarecrow’s work. Likely a new version of his fear toxin—something that affects memory and perception.",
    "Robin: So, this is the new ‘Wonderland’ they were talking about? Riddler’s tricks were one thing, but… this feels different.",
    "Commissioner Gordon: You’re not wrong. I’ve seen Scarecrow’s work before, but this is on another level. He’s refined it somehow.",
    "Batman and Robin enter the east wing of Gotham Psychiatric Hospital.",
    "Robin: This place… it’s like it’s holding its breath. Creepy.",
    "Batman: Stay close. Scarecrow’s work lingers here. If Scarecrow is in on this, there’s no telling what they’ve set up.",
    "As they move deeper into the ward, they pass cells filled with scattered debris and faded, cryptic graffiti on the walls.",
    "Robin: You ever get the feeling Gotham’s past doesn’t stay buried? Like… it keeps coming back, reminding us it’s still here.",
    "Batman: Fear leaves traces, Robin. Scarecrow knows that better than anyone. We can’t let his games get in our heads.",
    "They continue down the hallway and enter a small observation room. Various objects—a phonograph, a projector, and a dusty mirror—are arranged in an odd layout.",
    "Robin: I don’t like this. It feels like we’re being… watched.",
    "RIDDLE_TRIGGER_2", // second riddle trigger
    "Suddenly, the phonograph crackles to life with a soft, distorted melody, playing a haunting lullaby that echoes through the room. Robin’s gaze lingers on the phonograph, Batman, meanwhile, steps forward to examine the other objects.",
    "Batman: Scarecrow’s handiwork—this setup is designed to disorient us. The phonograph, the flickering lights, even the temperature drop. He’s weaponizing the environment.",
    "Robin: It’s just… the music. It’s familiar. Strange.",
    "Batman: Stay focused. If Hatter’s involved, he could be using subliminal cues to pull us in. Keep your guard up.",
    "Batman: He’s layering these pieces to create an illusion. This isn’t just a trap; it’s a psychological assault, meant to shake us.",
    "Robin: Or to show us… what’s already there.",
    "Batman: Robin. Focus. Don’t let Hatter get under your skin.",
    "Robin: Right… right. Sorry, it’s just this place. Gets under your skin.",
    "Batman: Three pieces, all designed to elicit something primal. The past, a shadow, and unveiling the truth. Scarecrow and Hatter want us to face something… something we fear.",
    "Robin: Maybe it’s not just about fear. Maybe… it’s about control.",
    "Batman: Fear. It’s the only thing Scarecrow would consider worth building all this for.",
    "As Batman says fear, the projector flickers to life, casting a clear image of a hidden trapdoor in the corner of the room.",
    "Batman: They’ve led us here, and they want us to go further.",
    "Robin: Well, if they’re waiting for us… let’s not keep them.",
    "The trapdoor opens into a dark, expansive chamber with high ceilings and walls lined with archaic medical equipment.",
    "Robin: This place just keeps getting worse. I’d say they went all out with the decor.",
    "Batman: They want us on edge. It’s part of the game.",
    "They move cautiously through the chamber, their footsteps echoing in the vast silence. In the center of the room stands a large, rusted metal door, sealed shut, with an inscription scratched into it.",
    "Batman: Look at this—more symbols. Scarecrow’s leaving breadcrumbs.",
    "Robin: Breadcrumbs? No, this feels like a dead end. They’ve led us down here, and for what? Just to run in circles?",
    "Batman: Focus. Every detail matters, especially with Scarecrow and Hatter involved.",
    "As Batman reaches out to inspect the door, a hidden panel slides open beside it. A faint voice echoes from within the walls, distorted and menacing — a recording of Scarecrow.",
    "Scarecrow: You’ve followed well, Dark Knight. But only those who truly understand fear may enter. Answer my final riddle, and we’ll see if you’re worthy to face your own demons.",
    "RIDDLE_TRIGGER_3", // third riddle trigger
    "Robin: A whisper… sight… breath… it could be anything. But it sounds like something that traps you, keeps you from seeing clearly.",
    "Batman: ‘Governs where you’ve been.’ This isn’t just about sensation; it’s something that controls, something inescapable.",
    "Robin: Maybe it’s not even meant to make sense. Maybe they’re just trying to mess with us.",
    "Batman: That’s exactly what they want you to think. Fear is their weapon, but it’s not random. They want us to feel helpless, like the answer is out of reach.",
    "Robin: Well, they’re doing a good job of it. I feel like we’re running in circles here.",
    "Batman: ‘The whisper that deafens, the sight that blinds…’ Scarecrow’s fear toxin. It’s what they’ve both been using against us—the idea of fear, of being held back by it.",
    "Robin: Fear… it’s always fear. But maybe there’s more than that. Maybe it’s about control—about seeing only what they want us to see.",
    "Batman: Fear is part of it, but what Scarecrow’s describing here isn’t just fear—it’s control. The answer is ‘the mind.’ The mind governs everything we’ve seen, everything we fear.",
    "As Batman speaks the word mind, the door slowly creaks open, revealing a dark, narrow hallway lined with monitors. A recording of Mad Hatter’s voice begins to play, soft and taunting, as if he’s speaking directly to them from somewhere down the corridor.",
    "Mad Hatter: Oh, Batsy, Batsy! You’ve been such a clever detective, but it’s time you meet my little… surprise.",
    "Batman: Stay close. They’re trying to lead us into something. We can’t let them get inside our heads.",
    "Robin: Maybe… maybe it’s too late for that.",
    "Batman: What did you say?",
    "Robin: Nothing. Let’s keep going.",
    "They move down the corridor, reaching a room filled with monitors displaying distorted, flickering images of Gotham—empty streets, dark alleyways, and fleeting shadows of familiar faces. In the center of the room is a high-backed chair facing away from them, with wires and tubes dangling from it.",
    "Batman: This looks like a setup for Scarecrow’s fear experiments. But there’s something off… it’s not just meant for anyone. It’s meant for someone specific.",
    "Mad Hatter (over the PA system): Yes, indeed! I’ve saved it for the finest mind in Gotham. All it needs is a willing participant… or perhaps an unwilling one.",
    "As Hatter’s voice fades, Robin’s eyes fixate on the chair, a strange, distant look crossing his face. He takes a step toward it, almost involuntarily, as if drawn in by an invisible force.",
    "Batman: Robin? What are you doing?",
    "Robin: It… it feels familiar, like I’m supposed to… I just need to…",
    "Batman steps forward, grabbing Robin’s shoulder to snap him out of his trance. Robin shakes his head, blinking as if waking from a dream.",
    "Batman: They’re getting to you, using you as part of their game. Don’t let them.",
    "Robin: I… I know. I just… I can’t explain it. It’s like I’m supposed to be here, like I was always meant to end up in this place.",
    "Batman: That’s the hypnosis talking. They’ve planted thoughts, tried to make you doubt yourself. Stay focused. We’re going to get through this.",
    "Robin nods, but the uncertainty in his eyes remains. They continue past the monitors, and Batman approaches a control panel. Just as he’s about to disable the system, a monitor flickers to life, displaying Scarecrow and Mad Hatter standing side by side in a shadowed room, their faces twisted into matching smiles.",
    "Scarecrow: Ah, Batman, you’ve arrived at the climax. But tell me, do you even know who stands beside you?",
    "Mad Hatter: Yes, our little bird has been such a help to us! A willing participant, if ever I’ve seen one. Isn’t that right, Robin?",
    "Batman: Robin, listen to me. Whatever you’re feeling, whatever thoughts they’ve put in your head, it isn’t real. You’re stronger than this.",
    "Robin: Am I, though? They’re right… I’m just here, following you, always in your shadow. Maybe… maybe I need to see the truth for myself.",
    "Batman: That’s not you talking. Hatter’s planted this doubt, this anger. Fight it, Robin. Remember who you are.",
    "Robin’s gaze flickers. A shadow of doubt crosses his face.",
    "Robin: You always say that. But maybe I’m more than what you think, more than the person you want me to be.",
    "Batman: This isn’t about me, Robin. It’s about us—about Gotham. You’re letting them take control. Don’t let them turn you into someone you’re no…",
    "To be continued..."
];

// Array of riddles with question and answer for each
const riddles = [
    { question: "I have no voice but echo well, I am not seen but cast a spell. I linger in the silent dread, Where shadows dance and fears are fed. I’m older than time, yet birthed anew, A specter unseen, but ever in view. What am I?", answer: "darkness" },
    { question: "Three voices, yet none speak. One is a whisper from the past. Another, a shadow cast. The third, a shroud that uncovers truth. Together, they reveal my name.", answer: "fear" },
    { question: "I am the whisper that deafens, the sight that blinds, I am the breath that strangles, the key that binds. Ever-present, never seen, Yet I govern where you’ve been. What am I?", answer: "the mind" }
];

let currentLineIndex = 0;
let isTyping = false;
let riddleMode = false;
let currentRiddleIndex = 0;  // Track which riddle is being presented

// Function to display the riddle screen
function showRiddleScreen(riddleIndex) {
    document.getElementById("typewriter-container").style.display = "none"; // Hide dialogue
    document.getElementById("riddle-container").style.display = "block";    // Show riddle
    document.getElementById("riddle-question").innerText = riddles[riddleIndex].question;
    riddleMode = true;
    currentRiddleIndex = riddleIndex; // Set the current riddle index
}

// Function to resume dialogue after riddle is solved
function resumeDialogue() {
    document.getElementById("typewriter-container").style.display = "block"; // Show dialogue
    document.getElementById("riddle-container").style.display = "none";      // Hide riddle
    document.getElementById("riddle-answer").value = ""; // Clear the answer field
    riddleMode = false;
    displayLines(); // Continue with the next lines
}

// Event listener for Enter key to check riddle answer
document.getElementById("riddle-answer").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {  // Check if Enter key is pressed
        const userAnswer = event.target.value.trim().toLowerCase();
        if (userAnswer === riddles[currentRiddleIndex].answer) {
            resumeDialogue();  // If correct, resume dialogue
        }
    }
});

// Function to display each line with typewriter effect
function displayLines() {
    const container = document.getElementById("typewriter-container");
    container.innerHTML = "";  // Clear previous lines

    let lineCount = 0;
    const maxLines = Math.min(currentLineIndex + 5, dialogueLines.length);

    function typeNextLine() {
        if (currentLineIndex < maxLines) {
            const line = dialogueLines[currentLineIndex];

            // Trigger specific riddle based on the riddle trigger encountered
            if (line.startsWith("RIDDLE_TRIGGER")) {
                const riddleIndex = parseInt(line.split("_")[2], 10) - 1;  // Extract riddle number from trigger
                showRiddleScreen(riddleIndex);  // Show the appropriate riddle
                currentLineIndex++; // Move past the riddle trigger
                return;
            }

            const lineElement = document.createElement("p");
            lineElement.classList.add("dialogue-line");
            container.appendChild(lineElement);

            typeWriter(line, lineElement, function() {
                currentLineIndex++;
                lineCount++;
                if (lineCount < 5 && currentLineIndex < dialogueLines.length) {
                    setTimeout(typeNextLine, 500); // Delay between lines
                } else {
                    isTyping = false;  // Enable keypress once 5 lines are displayed
                }
            });
        }
    }

    // Start typing lines
    isTyping = true;
    typeNextLine();
}

// Typewriter function for each line
function typeWriter(text, element, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 30);  // Adjust typing speed here
        } else {
            callback();  // Call next line when current line is done
        }
    }
    type();
}

function formatDialogue(line) {
    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
        const speaker = line.slice(0, colonIndex);
        const dialogue = line.slice(colonIndex + 1);
        return `<span class="speaker">${speaker}:</span>${dialogue}`;
    }
    return line; // If no colon, return the line as-is
}

// Key press event to display the next set of lines
document.addEventListener("keydown", function () {
    if (!isTyping && !riddleMode && currentLineIndex < dialogueLines.length) {
        displayLines();  // Show next 5 lines
    }
});
