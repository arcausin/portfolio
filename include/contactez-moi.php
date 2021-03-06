<section id="contactez-moi">
  <?php
  if (isset($_GET['prenom'])) { ?>
    <div class="alert alert-danger" role="alert">Veuillez entrer votre Prénom.</div>
  <?php }

  if (isset($_GET['nom'])) { ?>
    <div class="alert alert-danger" role="alert">Veuillez entrer votre Nom.</div>
  <?php }

  if (isset($_GET['email'])) { ?>
    <div class="alert alert-danger" role="alert">Veuillez entrer votre Email.</div>
  <?php }

  if (isset($_GET['email'])) { ?>
    <div class="alert alert-danger" role="alert">Veuillez entrer votre Sujet.</div>
  <?php }

  if (isset($_GET['message'])) { ?>
    <div class="alert alert-danger" role="alert">Veuillez entrer votre Message.</div>
  <?php }

  if (isset($_GET['renvoyer'])) { ?>
    <div class="alert alert-danger" role="alert">Votre message n'a pas été envoyé.</div>
  <?php }

  if (isset($_GET['envoyer'])) { ?>
    <div class="alert alert-success" role="alert">Votre message a été envoyé.</div>
  <?php }
  ?>
  <h2>Contactez-moi</h2>
  <div class="row">
    <div class="col-md-8 col-xs-12">
      <form method="post" action="<?php echo $repertoire_include ?>include/contactez-moi-traitement.php">
        <div class="row gtr-uniform gtr-50">
          <div class="col-6 col-12-xsmall"><input type="text" name="prenom" id="prenom" placeholder="Prénom" maxlength="100" required/></div>
          <div class="col-6 col-12-xsmall"><input type="text" name="nom" id="nom" placeholder="Nom" maxlength="100" required/></div>
          <div class="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" maxlength="100" required/></div>
          <div class="col-6 col-12-xsmall"><input type="text" name="sujet" id="sujet" placeholder="Sujet" maxlength="100" required/></div>
          <div class="col-12"><textarea name="message" id="message" placeholder="Message" rows="4" maxlength="2000" required></textarea></div>
        </div>
        <ul class="actions">
          <li class="mt-3"><input type="submit" value="Envoyer" name="submit"/></li>
        </ul>
      </form>
    </div>
    <div class="col-md-4 col-xs-12">
      <ul class="labeled-icons">
        <li>
          <h3 class="icon solid fa-home"><span class="label">Address</span></h3>
          3 Rue Monsieur le Prince<br />
          95270 Luzarches<br />
          France
        </li>
        <li>
          <h3 class="icon solid fa-mobile-alt"><span class="label">Phone</span></h3>
          07.81.28.52.37
        </li>
        <li>
          <h3 class="icon solid fa-envelope"><span class="label">Email</span></h3>
          <a href="mailto:adao.dambrosio@gmail.com">adao.dambrosio@gmail.com</a>
        </li>
      </ul>
    </div>
  </div>
</section>
