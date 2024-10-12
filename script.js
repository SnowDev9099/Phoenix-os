// First Time Boot Setup
document.getElementById('submit-preferences').addEventListener('click', function() {
  const lockPhoto = document.getElementById('lock-photo').files[0];
  const homePhoto = document.getElementById('home-photo').files[0];

  if (lockPhoto && homePhoto) {
    const lockScreenURL = URL.createObjectURL(lockPhoto);
    const homeScreenURL = URL.createObjectURL(homePhoto);

    // Set backgrounds for lock and home screens
    document.getElementById('lock-screen').style.backgroundImage = `url(${lockScreenURL})`;
    document.getElementById('home-screen').style.backgroundImage = `url(${homeScreenURL})`;

    // Hide boot screen and show lock screen
    document.getElementById('boot-screen').style.display = 'none';
    document.getElementById('lock-screen').style.display = 'flex';
  }
});

// Swipe to unlock
let isUnlocked = false;
document.getElementById('lock-screen').addEventListener('click', function() {
  if (!isUnlocked) {
    document.getElementById('lock-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'flex';
    isUnlocked = true;
  }
});

// Dynamic Island Logic
let dynamicIslandContent = document.getElementById('dynamic-content');
let notificationCount = 0;

function showNotification(message) {
  dynamicIslandContent.textContent = message;
  setTimeout(() => {
    dynamicIslandContent.textContent = 'No notifications';
  }, 5000); // Hide after 5 seconds
}

// Simulate notification
setTimeout(() => {
  showNotification("Incoming Call");
}, 3000);

setTimeout(() => {
  showNotification("New Message");
}, 8000);
