const CreateElectronic = () => {
  return (
    <div>
    <div className="cpContainer">
      <h1 className="post-header">List a Phone | Computer | Tablet</h1>

      <form
        action="/electronicsCompose"
        method="post"
        enctype="multipart/form-data"
      >
        <div id="form-group">
          <label for="title">Posting Title</label>
          <input
            className="form-control"
            type="text"
            name="electronicTitle"
            required
          />
          <label for="brand">Brand</label>
          <input className="form-control" type="text" name="electronicBrand" />
          <label for="brand">Model</label>
          <input className="form-control" type="text" name="electronicModel" />
          <label for="brand">Color</label>
          <input className="form-control" type="text" name="electronicColor" />
          <label for="location">Location</label>
          <input
            className="form-control"
            type="text"
            name="electronicLocation"
          />
          <label for="price">Price $</label>
          <input className="form-control" type="text" name="electronicPrice" />
          <label for="tel">Phone Number</label>
          <input className="form-control" type="number" name="electronicTel" />

          <label for="">Description</label>
          <textarea
            className="form-control"
            name="electronicDescription"
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
    </div>
  );
};

export default CreateElectronic;
