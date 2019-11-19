const postService = {
  load: async (limit) => {
    const url = limit ? `http://localhost:9999/api/origami?limit=${limit}` : 'http://localhost:9999/api/origami';
    const res = await fetch(url);
    return res.json();
  }
};

export default postService;