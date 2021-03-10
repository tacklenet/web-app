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
      'Other',
    ],
  },
  {
    main: 'Other',
    sub: ['Rod & Reel', 'Softgoods', 'Saltwater', 'Accessories'],
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
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  progressClassName: 'fancy-progress-bar',
};
