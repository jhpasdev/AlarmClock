// Main file to set up alarm clock app
import AlarmApp from './alarmapp.js';
import AlarmView from './alarmview.js';
import AlarmController from './alarmcontroller.js';

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock2 = document.getElementById('clock2');

    var currentTime = new Date();

    var hours = (currentTime.getHours()-1);
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock2.innerText = clockTime;
};


// Current Time
const clock = () => {
  const time = new Date();

  document.getElementById('clock').innerText =
    time.toLocaleTimeString('en-US');
  setTimeout(clock, 1000);
};

document.addEventListener('DOMContentLoaded', () => {
  // Run clock on one second interval
  clock();

  // Grab DOM elements
  const alarmForm = document.getElementById('alarm-form');
  const activePeriodBtn = document.getElementById('am-btn');
  const alarmList = document.getElementById('alarm-list');
  const periodBtns = document.getElementsByClassName('alarm-period');

  // Initialize Components
  const app = new AlarmApp();
  const view = new AlarmView(activePeriodBtn, alarmList);
  const controller = new AlarmController(app, view);

  // Add Listeners
  // Add Listener to each btn and not container
  for (let i = 0; i < periodBtns.length; i++) {
    const btn = periodBtns[i];
    controller.addPeriodBtnListener(btn);
  }
  controller.submitAlarmFormListener(alarmForm);
  controller.checkAlarmListener();
});
