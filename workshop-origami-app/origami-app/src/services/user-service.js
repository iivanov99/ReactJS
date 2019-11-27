const userService = {
  register: async (data) => {
    const res = await fetch('http://localhost:9999/api/user/register', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    });
    return res.json();
  },
  login: async (data) => {
    const res = await fetch('http://localhost:9999/api/user/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(data)
    });

    if ([401, 500].includes(res.status)) {
      throw new Error('Unauthorized');
    }

    return res.json();
  },
  logout: async () => {
    const res = await fetch('http://localhost:9999/api/user/logout', {
      method: 'POST',
      credentials: 'include'
    });
    return res.text();
  }
};

export default userService;