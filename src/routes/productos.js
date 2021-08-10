const express = require('express');
const router = express.Router();
const producto = require('../models/producto');

router.get('/productos/nuevo-producto', (req, res)=>{
    res.render('productos/nuevo-producto');
});

router.post('/productos/nuevo-producto', async (req, res)=>{
    const {Nombre, Categoria, Proveedor, Precio, Existencia} = req.body;
    //console.log(Precio)
    const errors = [];
    if(!Nombre){
        errors.push({text: 'Por favor escriba un nombre'});
    }
    if(!Categoria){
        errors.push({text: 'Por favor escriba una categoria'});
    }
    if(!Proveedor){
        errors.push({text: 'Por favor escriba un proveedor'});
    }
    if(errors.length > 0){
        res.render('productos/nuevo-producto', {
            errors,
            Nombre,
            Categoria,
            Proveedor,
            Precio,
            Existencia
        });
    }else{
        const nuevoProducto = new producto({Nombre, Categoria, Proveedor, Precio, Existencia});
        await nuevoProducto.save();
        res.redirect('/productos')
    }
});

router.get('/productos', async (req,res)=>{
    const productos = await producto.find().lean();
    res.render('productos/lista-productos', { productos });
  
});

router.get('/productos/editar/:id', async (req, res)=>{
    const productoEdit = await producto.findById(req.params.id).lean();
    res.render('productos/editar-producto', {productoEdit});
})

router.put('/productos/editar-producto/:id', async (req, res)=>{
    const {Nombre, Categoria, Proveedor, Precio, Existencia} = req.body;
    await producto.findByIdAndUpdate(req.params.id, {Nombre, Categoria, Proveedor, Precio, Existencia});
    res.redirect('/productos')
});

router.delete('/productos/delete/:id', async (req, res) => {
    await producto.findByIdAndDelete(req.params.id);
    res.redirect('/productos');
});

module.exports = router;
