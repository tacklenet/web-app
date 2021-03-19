export function timeDisplay(unixTime) {
  const formattedDate = new Date(unixTime * 1000).toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return formattedDate;
}

export function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
}

export const categories = [
  {
    main: 'Hard Baits',
    sub: [
      'Topwater',
      'Crankbait',
      'Jerkbait',
      'Spoon',
      'Spybait',
      'Spinnerbait',
      'Buzzbait',
    ],
  },
  {
    main: 'Swimbaits',
    sub: ['Hard Body', 'Paddle Tail', 'Soft Body', 'Glide Bait'],
  },
  {
    main: 'Soft Plastics',
    sub: [
      'Worm',
      'Creature',
      'Craw',
      'Grub',
      'Trailer',
      'Frog',
      'Ned',
      'Leech',
      'Rat',
      'Other',
    ],
  },
  {
    main: 'Other',
    sub: ['Rod & Reels', 'Saltwater', 'Softgoods', 'Accessories'],
  },
];

export function subToMain(subcategory) {
  for (const i in categories) {
    for (const j in categories[i].sub) {
      if (subcategory === categories[i].sub[j]) return categories[i].main;
    }
  }
}

export const toastConfig = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  progressClassName: 'fancy-progress-bar',
};

export function validateUrl(value) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
}

export function urlDomain(data) {
  var a = document.createElement('a');
  a.href = data;
  return a.hostname;
}
