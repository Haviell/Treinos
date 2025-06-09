//<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Login Treinos</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

  :root {
    --color-bg: #ffffff;
    --color-text: #6b7280;
    --color-primary: #000000;
    --shadow-light: rgba(0, 0, 0, 0.06);
    --radius: 0.75rem;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: var(--color-bg);
    color: var(--color-text);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem;
  }

  .container {
    width: 100%;
    max-width: 400px;
    background: var(--color-bg);
    box-shadow: 0 4px 8px var(--shadow-light);
    border-radius: var(--radius);
    padding: 2.5rem 2rem 3rem;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-primary);
    line-height: 1.1;
  }

  p.subtitle {
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 2.5rem;
    color: var(--color-text);
  }

  form {
    text-align: left;
  }

  label {
    display: block;
    margin-bottom: 0.4rem;
    font-weight: 600;
    color: var(--color-primary);
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 0.6rem 0.75rem;
    margin-bottom: 1.4rem;
    border: 1.8px solid #d1d5db;
    border-radius: var(--radius);
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  input[type="text"]:focus,
  input[type="password"]:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px #bfdbfe;
  }

  button {
    width: 100%;
    background-color: var(--color-primary);
    color: #fff;
    border: none;
    padding: 0.9rem 0;
    border-radius: var(--radius);
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  button:hover:not(:disabled) {
    background-color: #333333;
  }

  button:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }

  #login-error {
    margin-top: 1rem;
    color: #dc2626; /* red-600 */
    font-weight: 600;
    display: none;
  }
</style>
</head>
<body>

<div class="container" id="login">
  <h1>Entrar</h1>
  <p class="subtitle">Acesse seu plano de treino personalizado</p>
  <form id="login-form" onsubmit="return false;">
    <label for="user">Usuário</label>
    <input type="text" id="user" name="user" autocomplete="username" required />
    <label for="password">Senha</label>
    <input type="password" id="password" name="password" autocomplete="current-password" required />
    <button id="login-btn" type="submit">Entrar</button>
  </form>
  <div role="alert" id="login-error">Usuário ou senha inválidos. Tente novamente.</div>
</div>

<script>
  // The code you provided will hook here; assuming your JS code already references these IDs,
  // the existing event listener on #login-btn will handle login validation.
</script>

</body>
</html>

