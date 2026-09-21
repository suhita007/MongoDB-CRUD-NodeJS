const { MongoClient } = require("mongodb");

const uri = "mongodb://user_453w4qu65:YOUR_MONGODB_PASSWORD@db01.dbhost.dev:5050/db_453w4qu65";

const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB successfully!");

        const db = client.db("db_453w4qu65");
        const products = db.collection("products");

        // 1. Insert at least 5 product documents
        await products.deleteMany({});

        await products.insertMany([
            {
                productId: "P101",
                productName: "Laptop",
                category: "Electronics",
                price: 55000,
                quantity: 10,
                supplier: "Dell"
            },
            {
                productId: "P102",
                productName: "Keyboard",
                category: "Electronics",
                price: 1200,
                quantity: 25,
                supplier: "Logitech"
            },
            {
                productId: "P103",
                productName: "Office Chair",
                category: "Furniture",
                price: 7500,
                quantity: 8,
                supplier: "Featherlite"
            },
            {
                productId: "P104",
                productName: "Mouse",
                category: "Electronics",
                price: 800,
                quantity: 30,
                supplier: "HP"
            },
            {
                productId: "P105",
                productName: "Desk",
                category: "Furniture",
                price: 6000,
                quantity: 12,
                supplier: "IKEA"
            }
        ]);

        console.log("\n1. 5 products inserted successfully.");

        // 2. Display all products belonging to a specific category
        console.log("\n2. Electronics products:");

        const electronics = await products.find({
            category: "Electronics"
        }).toArray();

        console.log(electronics);

        // 3. Find one product using findOne()
        console.log("\n3. Find one product:");

        const oneProduct = await products.findOne({
            productId: "P101"
        });

        console.log(oneProduct);

        // 4. Display only product name, price and quantity
        console.log("\n4. Product name, price and quantity:");

        const selectedProducts = await products.find(
            {},
            {
                projection: {
                    _id: 0,
                    productName: 1,
                    price: 1,
                    quantity: 1
                }
            }
        ).toArray();

        console.log(selectedProducts);

        // 5. Update price and quantity using updateOne()
        console.log("\n5. Updating price and quantity of P101:");

        await products.updateOne(
            { productId: "P101" },
            {
                $set: {
                    price: 58000,
                    quantity: 15
                }
            }
        );

        console.log("P101 updated successfully.");

        // 6. Update a product using its productId
        console.log("\n6. Updating product using productId:");

        await products.updateOne(
            { productId: "P102" },
            {
                $set: {
                    price: 1500
                }
            }
        );

        console.log("P102 updated successfully.");

        // 7. Delete one product using its productId
        console.log("\n7. Deleting product P105:");

        await products.deleteOne({
            productId: "P105"
        });

        console.log("P105 deleted successfully.");

        // 8. Display final product records
        console.log("\n8. Final product records:");

        const finalProducts = await products.find({}).toArray();

        console.log(finalProducts);

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
        console.log("\nMongoDB connection closed.");
    }
}

main();
