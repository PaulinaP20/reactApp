const initialState = {
    posts: [
      {
        id: '1',
        title: 'How to Learn React',
        shortDescription: 'Tips and tricks for mastering React.js quickly.',
        content: 'Learning React can be overwhelming at first, but breaking it down into small projects helps a lot...',
        publishedDate: '2024-12-01',
        category:'news',
        author: 'John Doe',
      },
      {
        id: '2',
        title: 'Understanding Redux',
        shortDescription: 'Managing global state efficiently in React apps.',
        content: 'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently...',
        publishedDate: '2025-01-15',
        category:'sport',
        author: 'Jane Smith',
      },
      {
        id: '3',
        title: 'Top 10 Code Extensions',
        shortDescription: 'Boost your coding speed with these extensions!',
        content: 'Visual Studio Code is powerful on its own, but with these extensions you can supercharge your development experience...',
        publishedDate: '2025-04-10',
        category:'movies',
        author: 'Mike Johnson',
      }
    ],
    categories: [
      { id: 'sport', label: 'Sport' },
      { id: 'news', label: 'News' },
      { id: 'movies', label: 'Movies' }
    ],
  };

  export default initialState;
