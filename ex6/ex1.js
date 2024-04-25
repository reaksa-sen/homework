1.

// Mock database
const database = [
  { id: 1, name: "sok" },
  { id: 2, name: "sao" },
  { id: 3, name: "pisey" },
];

// Function to get user by ID
function getUser(id, callback) {
  setTimeout(() => {
    const user = database.find((item) => item.id === id);
    if (user) {
      callback(null, user);
    } else {
      callback("User not found");
    }
  }, 2000);
}

// Function to process user data
function processUser(user, callback) {
  setTimeout(() => {
    if (user) {
      user.name = user.name.toUpperCase();
      callback(null, user);
    } else {
      callback("User not available");
    }
  }, 1500);
}

// Execute functions asynchronously
getUser(1, (err, user) => {
  if (err) {
    console.log(err);
  } else {
    processUser(user, (err, processedUser) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Processed User:", processedUser);
      }
    });
  }
});







