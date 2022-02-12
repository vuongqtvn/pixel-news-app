import Images from '../../assets/images';

export const defaultCate = [{id: 'default', title: 'Latest'}];

export const categories = [
  {id: 'cat_1', title: 'Architecture'},
  {id: 'cat_2', title: 'Tech'},
  {id: 'cat_3', title: 'Tips - Trick'},
];

export const formatData = (cateArr, posts) => {
  let result = [];
  for (let i = 0; i < cateArr.length; i++) {
    let postInCate = [];
    const cateItem = cateArr[i];
    for (let j = 0; j < posts.length; j++) {
      const postItem = posts[j];
      if (postItem.category.id === cateItem.id) {
        postInCate.push(postItem);
      }
    }
    result.push({...cateItem, posts: postInCate});
  }
  return result;
};

export const sampleNews = [
  {
    id: 'new_1',
    title: 'Dream home design inspiration for you in the future.',
    duration: 3,
    category: {id: 'cat_1', title: 'Architecture'},
    image: Images.new1,
  },
  {
    id: 'new_2',
    title: '(Update) Iphone 13 Rumor New design?',
    duration: 7,
    category: {id: 'cat_2', title: 'Tech'},
    image: Images.new2,
  },
  {
    id: 'new_3',
    title: 'best time to see the sunset \nin the afternoon.',
    duration: 9,
    category: {id: 'cat_3', title: 'Tips & Trick'},
    image: Images.new3,
  },
  {
    id: 'new_4',
    title: 'best time to see the sunset \nin the afternoon.',
    duration: 2,
    category: {id: 'cat_3', title: 'Tips & Trick'},
    image: Images.new3,
  },
  {
    id: 'new_5',
    title: '(Update) Iphone 13 Rumor New design?',
    duration: 2,
    category: {id: 'cat_2', title: 'Tech'},
    image: Images.new2,
  },
];
