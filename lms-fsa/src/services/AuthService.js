// src/services/AuthService.js

const mockUsers = [
  { email: 'admin@fsa.com', password: '123456', name: 'Admin User' },
];

export default {
  login(email, password) {
    const user = mockUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) throw new Error('Credenciais inválidas');
    return { ...user, token: 'fake-jwt-token' };
  },
  register(newUser) {
    const userExists = mockUsers.some((user) => user.email === newUser.email);
    if (userExists) throw new Error('Usuário já cadastrado');
    mockUsers.push({ ...newUser });
    return { ...newUser, token: 'fake-jwt-token' };
  },
  getUsers() {
    return mockUsers;
  },
};
