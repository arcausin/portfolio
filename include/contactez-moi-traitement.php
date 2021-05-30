<?php
function validationDonnees($donnees) {
	$donnees = trim($donnees); // Supprime les espaces (ou d'autres caractères) en début et fin de chaîne
	$donnees = stripslashes($donnees); // Supprime les antislashs d'une chaîne
	$donnees = htmlspecialchars($donnees); // Convertit les caractères spéciaux en entités HTML
}

if (isset($_POST['submit'])) { // si le bouton Envoyer est appuyé
	if (empty($_POST['name'])) { // si le champ Nom n'est pas rempli
		header('Location: ../?nom#contactez-moi');
	} else {
		if (empty($_POST['email'])) { // si le champ Email n'est pas rempli
			header('Location: ../?email#contactez-moi');
		} else {
			if (empty($_POST['message'])) { // si le champ Message n'est pas rempli
				header('Location: ../?message#contactez-moi');
			} else {
				// tout les champs sont correctement rempli
				// on récupère et sécurise les informations envoyé par le formulaire de contact
				$name = validationDonnees($_POST['name']);
				$email = validationDonnees($_POST['email']);
				$message = validationDonnees($_POST['message']);
				// on prépare le mail
				$headers = "MIME-Version: 1.0" . "\r\n";
				$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

				$subjectFrom = "Nouveau message de " . $name;
				$subjectTo = "Confirmation de reception - Alexis D'Ambrosio";

				$messageFrom = "<p>Bonjour, <br/>
				Vous avez recu un nouveau message de la part de : " . $name . "<br/>
				E-mail : " . $email . "<br/>
				<code>Message : " . $message . "</code><br/>
				<div style=\"text-align: right;\">Cordialement <br/>
				Emma</div></p>";
				$messageTo = "<p>Bonjour, <br/>
				Nous vous confirmons avoir reçu votre message de la part de : " . $name . "<br/>
				E-mail : " . $email . "<br/>
				<code>Message : " . $message . "</code><br/>
				<div style=\"text-align: right;\">Cordialement <br/>
				Alexis D'Ambrosio</div></p>";

				$corpsEmailFrom = "
				<html>
					<head>
						<title>". $subjectFrom ."</title>
					</head>
					<body>
						". $messageFrom ."
					</body>
				</html>
				";
				$corpsEmailTo = "
				<html>
					<head>
						<title>". $subjectTo ."</title>
					</head>
					<body>
						". $messageTo ."
					</body>
				</html>
				";
				// envoie du mail
				if (mail("adao.dambrosio@gmail.com, arcausin@gmail.com", $subjectFrom, $corpsEmailFrom, $headers) && mail($email, $subjectTo, $corpsEmailTo, $headers)) {
					header('Location: ../?envoyer#contactez-moi');
				} else {
					header('Location: ../?renvoyer#contactez-moi');
				}
			}
		}
	}
}
?>
