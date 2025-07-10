function runCommand(type) {
  const terminal = document.getElementById('terminal');

  let lines = [];

  switch(type) {
    case 'upgrade':
      lines = [
        "Initializing upgrade protocol...",
        "Backing up giggle files...",
        "Installing maturity.exe... ERROR ❌",
        "Upgrade complete. Jayce and Maddie now 3% more obedient."
      ];
      break;

    case 'ninja':
      lines = [
        "Engaging Ninja Mode...",
        "Loading smoke bomb.wav...",
        "Jayce has vanished into the shadows. 🥷"
      ];
      break;

    case 'unicorn':
      lines = [
        "Sparkles loading...",
        "Rainbow unicorn DNA fusion initialized...",
        "Maddie has entered Unicorn Mode. 🦄"
      ];
      break;

    case 'iq':
      lines = [
        "Boosting IQ...",
        "Downloading Wikipedia into brain.zip...",
        "Error: Too many fart jokes detected. IQ boost paused."
      ];
      break;

    case 'prank':
      lines = [
        "Activating prank mode...",
        "Deploying digital whoopee cushion...",
        "💩💩💩💩💩"
      ];
      break;

    case 'dance':
      lines = [
        "Loading beat.mp3...",
        "Starting dance party...",
        "Now playing: ‘Dad Jams Vol. 1’"
      ];
      break;

    case 'shutdown':
      lines = [
        "Powering down...",
        "Saving last eye roll...",
        "Goodnight, KidOS 💻"
      ];
      break;
  }

  terminal.innerText += lines.join("\n") + "\n\n";
  terminal.scrollTop = terminal.scrollHeight;
}
