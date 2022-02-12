export const categories = [
  {id: 'cat_1', title: 'Architecture', follow: true},
  {id: 'cat_2', title: 'Tech', follow: false},
  {id: 'cat_3', title: 'Tips - Trick', follow: false},
];

export const getColors = index => {
  if (index % 3 === 1) {
    return '#FFB703';
  } else if (index % 3 === 2) {
    return '#C44536';
  } else {
    return '#118AB2';
  }
};
