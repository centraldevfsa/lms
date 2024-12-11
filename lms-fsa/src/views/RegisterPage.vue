<template>
    <div class="register-page">
      <h1>Cadastro</h1>
      <form>
        <div>
          <label for="username">Nome de usuário:</label>
          <input type="text" id="username" placeholder="Digite seu nome de usuário" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Digite seu email" />
        </div>
        <div>
          <label for="password">Senha:</label>
          <input type="password" id="password" placeholder="Digite sua senha" />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "RegisterPage",
  };
  </script>
  
  <style scoped>
  .register-page {
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  button {
    background-color: #1d4ed8;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #2563eb;
  }
  </style>
  