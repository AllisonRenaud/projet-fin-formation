module.exports = (user, booking, offer) => {
  return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body style="height: 600px;">

	<header>
		<a href="https://ochalet-api.herokuapp.com/">O'chalet</a>
	</header>

	<main style="height: 100%; display:flex; flex-direction: column; justify-content: space-evenly; align-items: center;">
		<h1>${user.firstname} ${user.lastname}, O'chalet vous remercie pour votre réservation</h1>
		<h2>Vous trouverez le récapitualtif de votre réservation ci-dessous</h2>

		<table>
			<thead>
				<tr>
					<td>Numero de reservation</td>
					<td>Date de réservation</td>
					<td>Chalet</td>
					<td>Prix TTC</td>
				</tr>
				
			</thead>
			<tbody>
				<tr>
					<td>${booking.id}</td>
					<td>${booking.reservation_start}</td>
					<td>${offer.title}</td>
					<td>${offer.price_ht * offer.tax}€</td>
				</tr>
			</tbody>
		</table>

	</main>

	<footer style="line-height: 30%;">
		<p>O'chalet</p>
		<p>Mail: ochaleto@gmail.com</p>
		<p>Tel: 0178459620</p>
	</footer>
	
</body>
</html>`
}
