const FIELDS = ["name", "age", "email"];

function Profile({ setFormData }) {
  const handleChange = (e) => {
    const {
      value,
      dataset: { field },
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [field]: value, // updates only the changed key
    }));
  };

  return (
    <div className="profile">
      {FIELDS.map((field) => (
        <div key={field}>
          <label htmlFor={field}>
            {field[0].toUpperCase() + field.slice(1)}
          </label>
          <input
            type="text"
            id={field}
            name={field}
            data-field={field}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
}

export default Profile;
