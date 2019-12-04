const postService = {
  load: async (limit) => {
    const url = limit ? `http://localhost:9999/api/origami?limit=${limit}` : 'http://localhost:9999/api/origami';
    const res = await fetch(url);
    return res.json();
  },
  create: async (newPostData) => {
    const res = await fetch('http://localhost:9999/api/origami', {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(newPostData)
    });
    return res.json();
  }
};

export default postService;