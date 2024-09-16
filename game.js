const storyText = document.getElementById('story-text');
const choicesContainer = document.getElementById('choices-container');

let currentScene = 0;

const storyData = [
    {
        text: "You find yourself standing before an old, abandoned mansion. Do you dare enter?",
        choices: [
            { text: "Enter the mansion", nextScene: 1 },
            { text: "Walk away", nextScene: 2 },
            { text: "Circle the house", nextScene: 3 },
            { text: "Call for help", nextScene: 4 }
        ]
    },
    {
        text: "The door creaks as you step inside. You feel a chill down your spine. What do you do next?",
        choices: [
            { text: "Explore the hallway", nextScene: 5 },
            { text: "Look for the basement", nextScene: 6 },
            { text: "Check upstairs", nextScene: 7 },
            { text: "Leave immediately", nextScene: 8 }
        ]
    },
    {
        text: "You decide not to enter. Suddenly, the door slams shut, and you hear something behind you.",
        choices: [
            { text: "Run away", nextScene: 9 },
            { text: "Turn and face it", nextScene: 10 },
            { text: "Scream for help", nextScene: 11 },
            { text: "Look for another way in", nextScene: 12 }
        ]
    },
    {
        text: "You walk around the house. It's eerily quiet until you notice a cellar door.",
        choices: [
            { text: "Open the cellar", nextScene: 13 },
            { text: "Ignore the door", nextScene: 14 },
            { text: "Knock on it", nextScene: 15 },
            { text: "Run away", nextScene: 16 }
        ]
    },
    {
        text: "No one answers your call for help. The mansion looms, waiting for you.",
        choices: [
            { text: "Enter the mansion", nextScene: 1 },
            { text: "Run away", nextScene: 9 }
        ]
    },
    // ... Continue adding scenes and choices to build up the story ...

    // Example of ending:
    {
        text: "You ran away, but the nightmares never stopped. You will never escape what you saw that night.",
        choices: [
            { text: "Play Again", nextScene: 0 }
        ]
    },
    // Add all 10 endings with different outcomes based on the player's choices.
];

function loadScene(sceneIndex) {
    const scene = storyData[sceneIndex];
    storyText.innerHTML = scene.text;
    choicesContainer.innerHTML = '';

    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice-button';
        button.innerText = choice.text;
        button.onclick = () => loadScene(choice.nextScene);
        choicesContainer.appendChild(button);
    });
}

// Start the game
loadScene(currentScene);
