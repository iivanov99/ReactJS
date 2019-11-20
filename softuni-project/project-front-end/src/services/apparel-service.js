const apparelService = {
  loadAll: async (apparel, limit) => {
    let url = limit
      ? `http://localhost:8080/api/apparel/${apparel}?limit=${limit}`
      : `http://localhost:8080/api/apparel/${apparel}`;

    const res = await fetch(url);
    return res.json();
  },
  loadOne: async (apparel, id) => {
    const res = await fetch(`http://localhost:8080/api/apparel/${apparel}/${id}`);
    return res.json();
  }
};

export default apparelService;