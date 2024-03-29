<?php
include ("../db_portfolio.php");

function validationDonnees($donnees) {
	$donnees = trim($donnees); // Supprime les espaces (ou d'autres caractères) en début et fin de chaîne
	$donnees = stripslashes($donnees); // Supprime les antislashs d'une chaîne
	$donnees = htmlspecialchars($donnees); // Convertit les caractères spéciaux en entités HTML
	return $donnees;
}

if (isset($_POST['submit'])) {
	if (empty(validationDonnees($_POST['prenom']))) {
		header('Location: ../?prenom#contactez-moi');
		exit();
	} // si le champ Prénom n'est pas rempli
	elseif (empty(validationDonnees($_POST['nom']))) {
		header('Location: ../?nom#contactez-moi');
		exit();
	} // si le champ Nom n'est pas rempli
	elseif (empty(validationDonnees($_POST['email']))) {
		header('Location: ../?email#contactez-moi');
		exit();
	} // si le champ Email n'est pas rempli
	elseif (empty(validationDonnees($_POST['sujet']))) {
		header('Location: ../?sujet#contactez-moi');
		exit();
	} // si le champ Sujet n'est pas rempli
	elseif (empty(validationDonnees($_POST['message']))) {
		header('Location: ../?message#contactez-moi');
		exit();
	} // si le champ Message n'est pas rempli
	elseif ($_POST['questionContact'] != 2) {
		header('Location: ../?question#contactez-moi');
		exit();
	} // si la réponse à la question de sécurité est incorrecte
	else {
		// tout les champs sont correctement rempli
		// on récupère et sécurise les informations envoyé par le formulaire de contact
		$prenom = validationDonnees($_POST['prenom']);
		$nom = validationDonnees($_POST['nom']);
		$email = validationDonnees($_POST['email']);
		$sujet = validationDonnees($_POST['sujet']);
		$message = validationDonnees($_POST['message']);
		// on prépare le mail
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

		$subjectFrom = "Nouveau message de " . $prenom . " " . $nom . " - " . $sujet;

		$subjectTo = "Confirmation de reception - Alexis D'Ambrosio";

		ob_start();
		?>
		E-mail : <a href="mailto:<?php echo $email ?>"><i><?php echo $email ?></i></a><br/><br/>
		<p>Bonjour Alexis,<br/>
		Vous avez reçu de la part de <i><?php echo $prenom . " " . $nom ?></i> le message suivant :<br/><br/>
		<i><?php echo nl2br($message) ?></i><br/>
		___________________________<br/><br/>
		Cordialement<br/>
		Ana<br/><br/></p>
		<?php
		$messageFrom = ob_get_clean();

		ob_start();
		?>
		<p>Bonjour <?php echo $prenom . " " .$nom ?>,<br/>
		Je vous confirme avoir bien reçu de votre part le message suivant :<br/><br/>
		<i><?php echo nl2br($message) ?></i><br/>
		___________________________<br/><br/>
		Cordialement<br/>
		Alexis D'Ambrosio<br/><br/>
		<i>Si vous n'êtes pas à l'origine de cette activité, veuillez <a href="http://alexis-dambrosio.fr/#contactez-moi">me contacter</a>.</i></p>
		<?php
		$messageTo = ob_get_clean();

		ob_start();
		?>
		<html>
			<head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
				<title><?php echo $subjectFrom ?></title>
			</head>
			<body>
				<?php echo $messageFrom ?>
			</body>
		</html>
		<?php
		$corpsEmailFrom = ob_get_clean();

		ob_start();
		?>
		<html>
			<head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
				<title><?php echo $subjectTo ?></title>
			</head>
			<body>
				<?php echo $messageTo ?>
			</body>
		</html>
		<?php
		$corpsEmailTo = ob_get_clean();

		// envoie du mail
		if (mail("arcausin@gmail.com, adao.dambrosio@gmail.com", $subjectFrom, $corpsEmailFrom, $headers)) {
		  if (mail($email, $subjectTo, $corpsEmailTo, $headers)) {
				$envoie_mail_bdd = $conn_portfolio->prepare("INSERT INTO historique_email (prenom, nom, email, sujet, message, date_ajout) VALUES (:prenom, :nom, :email, :sujet, :message, NOW())");
				$envoie_mail_bdd->execute(array(
					'prenom' => $prenom,
					'nom' => $nom,
					'email' => $email,
					'sujet' => $sujet,
					'message' => $message
				));
		    header('Location: ../?envoyer#contactez-moi');
				exit();
		  } // si les deux mails sont envoyé
			else {
		  	header('Location: ../?renvoyer#contactez-moi');
				exit();
		  } // si le second mail n'est pas envoyé
		} // si le premier mail est envoyé
		else {
			header('Location: ../?renvoyer#contactez-moi');
			exit();
		} // si le premier mail n'est pas envoyé
	} // si toutes les données sont envoyé
} // si le bouton Envoyer est appuyé
else {
	header('Location: ../?renvoyer#contactez-moi');
	exit();
} // si le bouton envoyé n'est pas appuyé
