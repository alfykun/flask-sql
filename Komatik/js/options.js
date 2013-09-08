// Save this script as `options.js`

// Saves options to localStorage.
function save_options() {
  var select = document.getElementById("loginid");
  var username = select.children[select.selectedIndex].value;
  localStorage["path_username"] = username;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var check = localStorage["path_username"];
  if (!check) {
    return false;
  }
  var select = document.getElementById("loginid");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == check) {
      child.selected = "true";
      break;
    }
  }
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);