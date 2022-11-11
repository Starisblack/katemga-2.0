const CreateCars = () => {
  return (
    <div className="cpContainer">
      <h1 class="post-header">List a Car or Truck</h1>

      <form action="/carsCompose" method="post">
        <div id="form-group">
          <label for="title">Posting Title</label>
          <input
            className="form-control"
            type="text"
            name="carTitle"
            required
            autoFocus
          />
          <label for="brand">Brand</label>
          <input className="form-control" type="text" name="carBrand" />
          <label for="brand">Model</label>
          <input className="form-control" type="text" name="carModel" />
          <label for="brand">Mileage</label>
          <input className="form-control" type="number" name="carMileage" />
          <label for="brand">Year</label>
          <input className="form-control" type="number" name="carYear" />
          <label for="brand">Color</label>
          <input className="form-control" type="text" name="carColor" />
          <label for="location">Location</label>
          <input className="form-control" type="text" name="carLocation" />
          <label for="price">Price $</label>
          <input className="form-control" type="text" name="carPrice" />
          <label for="tel">Phone Number</label>
          <input className="form-control" type="number" name="carTel" />
          {/* <!-- <label for="image">Add Images</label>
    <input type="file" name="pic1" multiple /> --> */}

          <label for="">Description</label>
          <textarea
            className="form-control"
            name="carDescription"
            value=""
            id=""
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary post-btn" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreateCars;
