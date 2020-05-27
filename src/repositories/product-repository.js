'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product.find({
        active: true // só traz os ativos
    }, 'title price slug'); // trazer esses campos 
    return res;
}

exports.getBySlug = async() => {
    const res = await Product.findOne({ // traz 1
        slug: req.params.slug,
        active: true 
    }, 'title description price slug tags');
    return res;
}

exports.getById = async(id) => {
    const res = await Product.findById(id)// traz pelo id
    return res;
}

exports.getByTag = async(tag) => {
    const res = await Product.find({ 
        // filtra uma tag dentro da lista de tags
        tags: tag,
        active: true 
    }, 'title description price slug tags');
    return res;
}

exports.create = async(data) => {
    var product = new Product(data);
    await product.save(); // esse nao precisa retornar
}

exports.update = async(id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set: { // oq será alterado no produto
            title: data.title,
            description: data.description,
            price: data.price,
            slug: data.slug
        }
    })
}

exports.delete = async(id) => {
    await Product.findOneAndRemove(id);
}