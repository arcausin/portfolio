<?php
include ("../db_portfolio.php");
$repertoire_include = "../";
?>
<!DOCTYPE HTML>
<html>
	<head>
		<title>Alexis D'Ambrosio - CV</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
		<link rel="stylesheet" href="<?php echo $repertoire_include ?>assets/css/main.css" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
	</head>
	<body class="is-preload">

		<?php include('../include/header.php'); ?>

		<div id="main" style="padding-top: 50px;">
			<section id="one">
				<ul class="actions">
					<li><a href="../" class="button">Retour</a></li>
				</ul>
			</section>

			<section id="two">
				<header class="major">
					<h3>Experiences Professionnelles</h3>
				</header>

				<?php
				$requete_experience_professionnelle = $conn_portfolio->prepare("SELECT experience_professionnelle.id, experience_professionnelle.domaine, experience_professionnelle.date, experience_professionnelle.nom, experience_professionnelle.description FROM experience_professionnelle ORDER BY id DESC");
				$requete_experience_professionnelle->execute();
				while ($experience_professionnelle = $requete_experience_professionnelle->fetch()) {
				?>
					<hr style="width: 40%;">
					<h4><?php echo $experience_professionnelle['date']; ?></h4>
					<h4><?php echo $experience_professionnelle['domaine']; ?></h4>
					<h5><?php echo $experience_professionnelle['nom']; ?></h5>
					<p><?php echo $experience_professionnelle['description']; ?> <br/>
				<?php
				}
				$requete_experience_professionnelle->closeCursor();
				?>
			</section>

			<section id="three">
				<header class="major">
					<h3>Formations</h3>
				</header>

				<?php
				$requete_formation = $conn_portfolio->prepare("SELECT formation.id, formation.etablissement, formation.date, formation.nom, formation.description FROM formation ORDER BY id DESC");
				$requete_formation->execute();
				while ($formation = $requete_formation->fetch()) {
				?>
					<hr style="width: 40%;">
					<h4><?php echo $formation['date']; ?></h4>
					<h4><?php echo $formation['etablissement']; ?></h4>
					<p><?php echo $formation['nom']; ?></p>
					<code><?php echo $formation['description']; ?></code>
				<?php
				}
				$requete_formation->closeCursor();
				?>
			</section>

			<section id="four">
				<header class="major">
					<h3>Compétences</h3>
				</header>
				<hr style="width: 40%;">
				<h4>Langages de programmation et Outils</h4>

				<p>HTML, CSS, Bootstrap, Javascript, PHP, SQL.</p>
				<p>Suite Affinity, Blender, Davinci Resolve, Unreal Engine, Krita.</p>

				<hr style="width: 40%;">
				<h4>Savoir-Faire</h4>

				<p>- Intégration de maquettes graphiques web<br/>
				- Concevoir une base de données<br/>
				- Créer une interface web de gestion de données<br/>
				- Création d'outils applicatifs web (messagerie, forum,
				système de compte utilisateurs, envoi de mails)<br/>
				- Analyser et auditer le référencement naturel d'un site web</p>
				<ul class="actions">
					<li><a href="#" class="button">Retourner en haut</a></li>
				</ul>
			</section>

			<?php include('../include/contactez-moi.php'); ?>

		</div>

		<?php include('../include/footer.php'); ?>

		<script src="../assets/js/jquery.min.js"></script>
		<script src="../assets/js/jquery.poptrox.min.js"></script>
		<script src="../assets/js/browser.min.js"></script>
		<script src="../assets/js/breakpoints.min.js"></script>
		<script src="../assets/js/util.js"></script>
		<script src="../assets/js/main.js"></script>
	</body>
</html>
