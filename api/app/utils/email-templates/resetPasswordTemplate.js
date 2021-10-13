module.exports = (token) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Réinitialiser mon mot de passe</title>
    <style>
      body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background-color: #333;
        font-family: 'Roboto', sans-serif;
        color: #EAEAEA;
      }
  
      header {
        display: flex;
        justify-content: center;
        width: 100%;
      }
  
      header img {
        width: 200px;
        margin-bottom: 2rem;
      }
  
      main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
  
      main p {
  
      }
  
      main a {
        margin: 2rem;
        padding: 1rem;
        border-radius: .6rem;
        background-color: beige;
        color: black;
        text-decoration: none;
        transition: .3s;
      }
  
      main a:hover {
        background-color: blanchedalmond;
      }
  
      footer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 2rem;
      }
  
      footer img {
        width: 100px;
        height: auto;
        margin: 0 1rem;
      }
  
      footer p {
        margin: 0 1rem;
      }
  
      footer p i {
        margin-right: .4rem;
      }
    </style>
  </head>
  <body>
    <header>
      <a href="https://ochalet.surge.sh/" target="_blank">
        <img src="https://ochalet.surge.sh/images/6010ed08a3c8a69a89f277cfe4987ee5.png" alt="">
      </a>
    </header>
  
    <main>
      <p>Vous avez demandé la réinitialisation de votre mot de passe</p>
      <p>Si vous n'êtes pas à l'origine de cette demande, merci d'ignorer cet email.</p>
      <p>Si vous avez oublié votre mot de passe et souhaitez le réinitialiser, veuillez cliquer sur le bouton ci-dessous.</p>
  
      <a href="http://localhost:3000/confirm_reset?token=${token}" target=blank>Réinitailiser mon mot de passe</a>
        <p>${token}</p>
  
    </main>
  
    <footer>
      <img src="https://ochalet.surge.sh/images/6010ed08a3c8a69a89f277cfe4987ee5.png" alt="">
      <p><i class="fas fa-envelope"></i> ochaleto@gmail.com</p>
      <p><i class="fas fa-phone"></i> 0178459620</p>
    </footer>
  </body>
  </html>
  `
};
