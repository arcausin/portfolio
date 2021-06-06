<?php
include ("../../db_portfolio.php");
$repertoire_include = "../../";

$requete_fiche_projet = $conn_portfolio->prepare("SELECT projet.id, projet.titre, projet.description, projet.image, projet.image2, projet.image3, projet.image4, projet.image5, projet.lien, projet.nom_lien, projet.date, projet.technologie, projet.video FROM projet WHERE projet.id = '".$_GET['id']."'");
$requete_fiche_projet->execute();
$fiche_projet = $requete_fiche_projet->fetch();
$requete_fiche_projet->closeCursor();
?>
<!DOCTYPE HTML>
<html>
	<head>
		<title>Alexis D'Ambrosio - Portfolio</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
		<link rel="stylesheet" href="<?php echo $repertoire_include ?>assets/css/main.css" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
	</head>
	<body class="is-preload">

		<?php include('../../include/header.php'); ?>

		<div id="main" style="padding-top: 50px;">
			<section id="one">
				<ul class="actions">
					<li><a href="../" class="button">Retour</a></li>
				</ul>
				<h1>Fiche Projet</h1>
				<h2><?php echo $fiche_projet['titre']; ?></h2>
				<div class="row">
					<article class="col-md-6 col-xs-12 work-item">
						<?php if (isset($fiche_projet['video'])) {
						?>
							<video controls width="100%" height="auto">
								<source src="../../videos/<?php echo $fiche_projet['video'] ?>" type="video/mp4">
								Votre navigateur ne permet pas de lire les vidéos.
							  Mais vous pouvez toujours
							  <a href="../../videos/<?php echo $fiche_projet['video'] ?>">la télécharger</a> !
							</video>
						<?php
						}
						else {
						?>
							<img class="image fit thumb" src="../../images/fulls/<?php echo $fiche_projet['image']; ?>" alt="" />
						<?php
						}
						?>
            <h3><?php echo $fiche_projet['date']; ?></h3>
            <p><?php echo $fiche_projet['description']; ?></p>
            <p>Technologie : <?php echo $fiche_projet['technologie']; ?></p>
						<?php if (isset($fiche_projet['lien'])) {
							?>
								<p><a target="_blank" href="<?php echo $fiche_projet['lien']; ?>"><?php echo $fiche_projet['nom_lien']; ?></a></p>
							<?php
						} ?>

						<?php if (isset($fiche_projet['video'])) {
							?>
							<img class="image fit thumb" src="../../images/fulls/<?php echo $fiche_projet['image']; ?>" alt="" />
							<?php
						} ?>

						<?php if (isset($fiche_projet['image2'])) {
						?>
							<img style="margin-top: 25px;" class="image fit thumb" src="../../images/fulls/<?php echo $fiche_projet['image2']; ?>" alt="2">
						<?php
						} ?>
						<?php if (isset($fiche_projet['image3'])) {
						?>
							<img style="margin-top: 25px;" class="image fit thumb" src="../../images/fulls/<?php echo $fiche_projet['image3']; ?>" alt="3">
						<?php
						} ?>
						<?php if (isset($fiche_projet['image4'])) {
						?>
							<img style="margin-top: 25px;" class="image fit thumb" src="../../images/fulls/<?php echo $fiche_projet['image4']; ?>" alt="4">
						<?php
						} ?>
						<?php if (isset($fiche_projet['image5'])) {
						?>
							<img style="margin-top: 25px;" class="image fit thumb" src="../../images/fulls/<?php echo $fiche_projet['image5']; ?>" alt="5">
						<?php
						} ?>

					</article>
				</div>
			</section>
		</div>

		<?php include('../../include/footer.php'); ?>

		<script src="../../assets/js/jquery.min.js"></script>
		<script src="../../assets/js/jquery.poptrox.min.js"></script>
		<script src="../../assets/js/browser.min.js"></script>
		<script src="../../assets/js/breakpoints.min.js"></script>
		<script src="../../assets/js/util.js"></script>
		<script src="../../assets/js/main.js"></script>
	</body>
</html>
