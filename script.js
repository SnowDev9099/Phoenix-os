// First Time Boot Setup
document.getElementById('submit-preferences').addEventListener('click', function() {
  const lockPhoto = document.getElementById('lock-photo').files[0];
  const homePhoto = document.getElementById('home-photo').files[0];
  const password = document.getElementById('password').value;

  if (lockPhoto && homePhoto && password) {
    const lockScreenURL = URL.createObjectURL(lockPhoto);
    const homeScreenURL = URL.createObjectURL(homePhoto);

    // Set backgrounds for lock and home screens
    document.getElementById('lock-screen').style.backgroundImage = `url(${lockScreenURL})`;
    document.getElementById('home-screen').style.backgroundImage = `url(${homeScreenURL})`;

    // Save password to localStorage
    localStorage.setItem('password', password);

    // Hide boot screen and show lock screen
    document.getElementById('boot-screen').style.display = 'none';
    document.getElementById('lock-screen').style.display = 'flex';
  } else {
    alert('Please upload photos and set a password.');
  }
});

// Unlock Screen with Password
document.getElementById('unlock-button').addEventListener('click', function() {
  const enteredPassword = document.getElementById('unlock-password').value;
  const savedPassword = localStorage.getItem('password');

  if (enteredPassword === savedPassword) {
    document.getElementById('lock-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'flex';
  } else {
    alert('Incorrect password!');
  }
});

// Dynamic Island Logic
let dynamicIslandContent = document.getElementById('dynamic-content');
let dynamicIsland = document.getElementById('dynamic-island');

function showNotification(message) {
  dynamicIslandContent.textContent = message;
  dynamicIsland.classList.add('active'); // Animates the dynamic island

  setTimeout(() => {
    dynamicIslandContent.textContent = 'No notifications';
    dynamicIsland.classList.remove('active'); // Reverts the animation
  }, 5000); // Hide after 5 seconds
}

// Simulate notifications
setTimeout(() => {
  showNotification("Incoming Call");
}, 3000);

setTimeout(() => {
  showNotification("New Message");
}, 8000);

// Time and Date for Lock Screen
function updateTimeAndDate() {
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');
  
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;

  const dateString = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  timeElement.textContent = timeString;
  dateElement.textContent = dateString;
}

// Update time and date every second
setInterval(updateTimeAndDate, 100
