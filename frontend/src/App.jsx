import { useState } from "react";
import {
  useCreateItemMutation,
  useDeleteItemMutation,
  useEditItemMutation,
  useGetItemsQuery,
} from "./RTKQuery";

const App = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [currentItem, setCurrentItem] = useState(null);

  const { data, isLoading, error, refetch } = useGetItemsQuery();
  const [CreateItem] = useCreateItemMutation();
  const [deleteItem] = useDeleteItemMutation();
  const [EditItem] = useEditItemMutation();

  const handleAddToDatabase = async (e) => {
    e.preventDefault();
    if (currentItem) {
      try {
        const _id = currentItem._id;
        // console.log(_id);
        const updatedItem = await EditItem({
          id: _id,
          name,
          description,
        }).unwrap();
        console.log("Received updated item:", updatedItem);
        setName("");
        setDescription("");
        setCurrentItem(null);
        refetch();
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await CreateItem({ name, description }).unwrap();
        setName("");
        setDescription("");

        refetch();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleDeleteFromDatabase = async (e, id) => {
    e.preventDefault();
    try {
      await deleteItem(id).unwrap();
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditFromDatabase = async (e, item) => {
    setName(item.name);
    setDescription(item.description);
    setCurrentItem(item);
  };

  const response = data?.response;
  console.log(response);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>
        <h4>Add New items to the List</h4>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            gap: "12px",
            marginBottom: "12px",
          }}
        >
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Enter the name of item"
          />
          <label>Description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            placeholder="Enter the description of item"
          />
          <button onClick={handleAddToDatabase} type="submit" value="Submit">
            {currentItem ? "Save Changes" : "Add To Database"}
          </button>
        </form>
      </div>
      {response.map((item) => (
        <div key={item._id}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <button onClick={(e) => handleDeleteFromDatabase(e, item._id)}>
            Delete from database
          </button>
          <button onClick={(e) => handleEditFromDatabase(e, item)}>
            Edit from database
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
