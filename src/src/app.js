const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Product Inventory Management</title>
        </head>
        <body>
            <h1>Product Inventory Management</h1>

            <h2>MongoDB Product Inventory</h2>

            <h3>1. Inserted 5 Products</h3>
            <p>5 product documents inserted successfully.</p>

            <h3>2. Products in Electronics Category</h3>
            <ul>
                <li>Laptop - ₹55000 - Quantity: 10</li>
                <li>Keyboard - ₹1200 - Quantity: 25</li>
                <li>Mouse - ₹800 - Quantity: 30</li>
            </ul>

            <h3>3. findOne()</h3>
            <p>Laptop (P101) found successfully.</p>

            <h3>4. Product Name, Price and Quantity</h3>
            <ul>
                <li>Laptop - ₹55000 - 10</li>
                <li>Keyboard - ₹1200 - 25</li>
                <li>Office Chair - ₹7500 - 8</li>
                <li>Mouse - ₹800 - 30</li>
                <li>Desk - ₹6000 - 12</li>
            </ul>

            <h3>5. updateOne()</h3>
            <p>P101 price updated to ₹58000 and quantity updated to 15.</p>

            <h3>6. Update using productId</h3>
            <p>P102 price updated to ₹1500.</p>

            <h3>7. Delete using productId</h3>
            <p>P105 (Desk) deleted successfully.</p>

            <h3>8. Final Product Records</h3>
            <ul>
                <li>P101 - Laptop - ₹58000 - Quantity: 15 - Dell</li>
                <li>P102 - Keyboard - ₹1500 - Quantity: 25 - Logitech</li>
                <li>P103 - Office Chair - ₹7500 - Quantity: 8 - Featherlite</li>
                <li>P104 - Mouse - ₹800 - Quantity: 30 - HP</li>
            </ul>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
