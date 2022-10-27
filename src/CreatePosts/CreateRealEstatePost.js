function CreateRealEstatePost() {
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1 class="post-header">Post a listing</h1>

        <div className="inputGp">
          <label>Title</label>
          <input type="text" />
        </div>

        <div className="inputGp">
          <label>Location</label>
          <input type="text" />
        </div>

        <div className="inputGp">
          <label>Price</label>
          <input type="number" />
        </div>

        <div className="inputGp">
          <label>Phone Number</label>
          <input type="number" />
        </div>

        <div className="inputGp">
          <label>Description </label>
          <textarea type="text"></textarea>
        </div>

        <button class="" type="submit">
          Post listing
        </button>
      </div>
    </div>
  );
}

export default CreateRealEstatePost;
