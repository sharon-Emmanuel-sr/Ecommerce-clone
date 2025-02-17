router.get('/product/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found.' });
        }
        res.status(200).json({ product });
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ error: 'Server error. Could not fetch product.' });
    }
});


router.put('/update-product/:id', pupload.array('images', 10), async (req, res) => {
    const { id } = req.params;
    const { name, description, category, tags, price, stock, email } = req.body;


    try {
        const existingProduct = await Product.findById(id);
        if (!existingProduct) {
            return res.status(404).json({ error: 'Product not found.' });
        }


        let updatedImages = existingProduct.images;
        if (req.files && req.files.length > 0) {
            updatedImages = req.files.map((file) => {
                return `/products/${path.basename(file.path)}`;
            });
        }


        const validationErrors = validateProductData({
            name,
            description,
            category,
            price,
            stock,
            email,
        });


        if (validationErrors.length > 0) {
            return res.status(400).json({ errors: validationErrors });
        }


        existingProduct.name = name;
        existingProduct.description = description;
        existingProduct.category = category;
        existingProduct.tags = tags;
        existingProduct.price = price;
        existingProduct.stock = stock;
        existingProduct.email = email;
        existingProduct.images = updatedImages;


        await existingProduct.save();


        res.status(200).json({
            message: '✅ Product updated successfully',
            product: existingProduct,
        });
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ error: 'Server error. Could not update product.' });
    }
});
