<h2>Création d'une annonce</h2>
<form method="post" action="{{ route('newAds.store') }}">
    @csrf
          <div class="mt-4">
              <label for="title">Titre</label>
              <input type="text" class="form-control" name="title" required/>
          </div>
          <div class="form-group">
              <label for="category">Categorie</label>
              <input type="text" class="form-control" name="category" required/>
          </div>
          <div class="form-group">
              <label for="description">Description</label>
              <textarea type="text" class="form-control" name="description"></textarea>
          </div>
          <div class="form-group">
              <label for="photo">Photo</label>
              <input type="text" class="form-control" name="photo" required/>
          </div>
          <div class="form-group">
              <label for="price">Prix</label>
              <input type="text" class="form-control" name="price" required/>
          </div>
          <div class="form-group">
              <label for="price">Ville</label>
              <input type="text" class="form-control" name="location" required/>
          </div>
          <button type="submit" class="btn btn-primary">Creation de l'annonce</button>
</form>