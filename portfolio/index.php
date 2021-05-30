<?php
include ("../db_portfolio.php");
$repertoire_include = "../";
?>
<!DOCTYPE HTML>
<html>
	<head>
		<title>Alexis D'Ambrosio - Portfolio</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
		<link rel="stylesheet" href="<?php echo $repertoire_include ?>/assets/css/main.css" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
	</head>
	<body class="is-preload">

		<?php include('../include/header.php'); ?>

		<div id="main" style="padding-top: 50px;">
			<section id="one">
				<ul class="actions">
					<li><a href="../" class="button">Retour</a></li>
				</ul>
				<h1>Portfolio</h1>
				<h2>Tous les travaux</h2>
				<div class="row">
				<?php
				$requete_projet = $conn_portfolio->prepare("SELECT projet.id, projet.titre, projet.description, projet.image, projet.lien, projet.nom_lien FROM projet ORDER BY id DESC");
				$requete_projet->execute();
				while ($projet = $requete_projet->fetch()) {
				?>
					<article class="col-6 col-12-xsmall work-item">
						<img class="image fit thumb" src="../images/thumbs/<?php echo $projet['image']; ?>" alt="" />
						<h3><?php echo $projet['titre']; ?></h3>
						<p><?php echo $projet['description']; ?></p>
						<a href="<?php echo $projet['lien']; ?>"><?php echo $projet['nom_lien']; ?></a></p>
						<ul class="actions" style="margin-top: 25px;">
							<li><a href="projet?id=<?php echo $projet['id']; ?>" class="button">En savoir plus</a></li>
						</ul>
					</article>
				<?php
				}
				$requete_projet->closeCursor();
				?>
				</div>
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
