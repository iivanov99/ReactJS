const cartService = {
  loadAll: async () => {
    const res = await fetch('http://localhost:8080/api/cart-items', {
      method: 'GET',
      credentials: 'include',
      'Content-Type': 'application/json'
    });
    return res.json();
  }
};

export default cartService; 