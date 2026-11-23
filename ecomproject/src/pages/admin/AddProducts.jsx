
import { useState } from "react";


function AddProducts() {
  const [data, setData] = useState({
    name: "",
    slug: "",
    category: "",
    actualPrice: "",
    discountedPrice: "",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
console.log(ankihg)
    try {
      const response = await instance.post("/products", data);

      console.log("Product added:", response.data);

      setData({
        name: "",
        slug: "",
        category: "",
        actualPrice: "",
        discountedPrice: "",
        description: "",
      });

    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Product Name"
            value={data.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label>Product Slug</label>
          <input
            type="text"
            name="slug"
            placeholder="Enter Product Slug"
            value={data.slug}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label>Product Category</label>
          <input
            type="text"
            name="category"
            placeholder="Enter Product Category"
            value={data.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label>Actual Price</label>
          <input
            type="number"
            name="actualPrice"
            placeholder="Enter Actual Price"
            value={data.actualPrice}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label>Discounted Price</label>
          <input
            type="number"
            name="discountedPrice"
            placeholder="Enter Discounted Price"
            value={data.discountedPrice}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Enter Product Description"
            value={data.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Add Product
        </button>

      </form>
    </div>
  );
}

export default AddProducts;
