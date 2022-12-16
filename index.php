<?php
include ("db_portfolio.php");
$repertoire_include = "";
?>
<!DOCTYPE HTML>
<html>
	<head>
		<title>Alexis D'Ambrosio</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
		<link rel="stylesheet" href="<?php echo $repertoire_include ?>assets/css/main.css" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
	</head>
	<body class="is-preload">

		<?php include('include/header.php'); ?>

		<div id="main" style="padding-top: 50px;">
			<section id="one">
				<ul class="actions">
					<li><a href="cv/" class="button">CV</a></li>
					<li><a href="portfolio/" class="button">Portfolio</a></li>
					<li><a href="#contactez-moi" class="button">Contactez-moi</a></li>
				</ul>
			</section>

			<section id="two">
				<h2>Travaux récents</h2>
				<div class="row">
				<?php
				$requete_projet = $conn_portfolio->prepare("SELECT projet.id, projet.titre, projet.description, projet.image, projet.lien, projet.nom_lien FROM projet ORDER BY id DESC LIMIT 6");
				$requete_projet->execute();
				while ($projet = $requete_projet->fetch()) {
				?>
					<article class="col-6 col-12-xsmall work-item">
						<a href="images/fulls/<?php echo $projet['image']; ?>" class="image fit thumb"><img src="images/thumbs/<?php echo $projet['image']; ?>" alt="" /></a>
						<h3><?php echo $projet['titre']; ?></h3>
						<p><?php echo $projet['description']; ?></p>
						<a target="_blank" href="<?php if (substr($projet['lien'], 0, 4) === "http") {echo "";} else {echo "portfolio/projet/";} echo $projet['lien']; ?>"><?php echo $projet['nom_lien']; ?></a></p>
						<ul class="actions" style="margin-top: 25px;">
							<li><a href="portfolio/projet?id=<?php echo $projet['id']; ?>" class="button">En savoir plus</a></li>
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

			<?php include('include/contactez-moi.php'); ?>

		</div>

		<?php include('include/footer.php'); ?>

		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/jquery.poptrox.min.js"></script>
		<script src="assets/js/browser.min.js"></script>
		<script src="assets/js/breakpoints.min.js"></script>
		<script src="assets/js/util.js"></script>
		<script src="assets/js/main.js"></script>
	</body>
</html>
