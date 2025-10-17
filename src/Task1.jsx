    import React, { useState } from "react";
    import "./Task1.css";

    function Task1() {
    const [activeTab, setActiveTab] = useState("add");
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        price: "",  
        description: "",
        image: "",
    });
    const [cards, setCards] = useState([]);
    const [message, setMessage] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image" && files[0]) {
        const imageUrl = URL.createObjectURL(files[0]);
        setFormData({ ...formData, image: imageUrl });
        } else {
        setFormData({ ...formData, [name]: value });
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.brand || !formData.price) {
        setMessage("⚠️ Please fill all required fields!");
        return;
        }

        setCards([...cards, formData]); // store temporarily
        setMessage("Data added successfully!");

        // Clear form fields
        setFormData({
        name: "",
        brand: "",
        price: "",
        description: "",
        image: "",
        });
    };

    // Clear form fields manually
    const handleClear = () => {
        setFormData({
        name: "",
        brand: "",
        price: "",
        description: "",
        image: "",
        });
        setMessage("");
    };

    return (
        <div className="page-container">
        {/* Header Section */}
        <header className="header">
            <button
            className={`tab-btn ${activeTab === "add" ? "active" : ""}`}
            onClick={() => setActiveTab("add")}
            >
            Add Card
            </button>
            <button
            className={`tab-btn ${activeTab === "visit" ? "active" : ""}`}
            onClick={() => setActiveTab("visit")}
            >
            Visit Card
            </button>
        </header>

        {/* Body Section */}
        <main className="main-section">
            {activeTab === "add" ? (
            <div className="form-container">
                <h2>Add Details</h2>
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Product Name"
                />
                <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="Brand"
                />
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Price"
                />
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                ></textarea>
                

                <div className="form-buttons">
                    <button
                    type="button"
                    onClick={handleClear}
                    className="clear-btn"
                    >
                    Clear
                    </button>
                    <button type="submit" className="submit-btn">
                    Submit
                    </button>
                </div>
                </form>
                {message && <p className="message">{message}</p>}
            </div>

            ) : (
            <div className="cards-section">
                <h2>Submitted Product Cards</h2>
                {cards.length === 0 ? (
                <p className="no-cards">No cards added yet.</p>
                ) : (
                <div className="cards-grid">
                    {cards.map((card, index) => (
                    <div key={index} className="card">
                        {card.image && (
                        <img
                            src={card.image}
                            alt={card.name}
                            className="card-img"
                        />
                        )}
                        <div className="card-content">
                        <h3>{card.brand}</h3>
                        <p className="price">₹{card.price}</p>
                        <p className="name">{card.name}</p>
                        <p className="desc">{card.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
                )}
            </div>
            )}
        </main>
        </div>
    );
    }

    export default Task1;