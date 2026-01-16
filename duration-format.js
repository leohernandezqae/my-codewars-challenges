const seconds = 4677142;

function formatDuration(sec) {
  var finalDuration = '';
  var timeText = [];

  if (sec == 0) {
    timeText.push('now');
  }

  if (sec >= 31536000) {
    timeText.push(Math.trunc(sec / 31536000) > 1 ? `${Math.trunc(sec / 31536000)} years` : `${Math.trunc(sec / 31536000)} year`);
    sec = sec - (Math.trunc(sec / 31536000) * 31536000);
  }

  if (sec >= 86400) {
    timeText.push(Math.trunc(sec / 86400) > 1 ? `${Math.trunc(sec / 86400)} days` : `${Math.trunc(sec / 86400)} day`);
    sec = sec - (Math.trunc(sec / 86400) * 86400);
  }

  if (sec >= 3600) {
    timeText.push(Math.trunc(sec / 3600) > 1 ? `${Math.trunc(sec / 3600)} hours` : `${Math.trunc(sec / 3600)} hour`);
    sec = sec - (Math.trunc(sec / 3600) * 3600);
  }

  if (sec >= 60) {
    timeText.push(Math.trunc(sec / 60) > 1 ? `${Math.trunc(sec / 60)} minutes` : `${Math.trunc(sec / 60)} minute`);
    sec = sec - (Math.trunc(sec / 60) * 60);
  }

  if (sec < 60 && sec != 0) {
    timeText.push(Math.trunc(sec > 1) ? `${Math.trunc(sec)} seconds` : `${Math.trunc(sec)} second`);
  }

  for (var i = 0; i < timeText.length; i++) {
    if (timeText.length == 1) {
      finalDuration = timeText[i];
    }

    if (timeText.length == 2) {
      if (i < timeText.length - 1) {
        finalDuration = timeText[i] + ' and ';
      }

      if (i == timeText.length - 1) {
        finalDuration = finalDuration + timeText[i];
      }
    }

    if (timeText.length > 2) {
      if (i < timeText.length - 2) {
        finalDuration = finalDuration + timeText[i] + ', ';
        continue;
      }

      if (i < timeText.length - 1) {
        finalDuration = finalDuration + timeText[i] + ' and ';
      }

      if (i == timeText.length - 1) {
        finalDuration = finalDuration + timeText[i];
      }
    }
  }

  return finalDuration;
}
console.log(formatDuration(seconds));

/*
function formatDuration2 (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}
*/

module.exports = formatDuration;