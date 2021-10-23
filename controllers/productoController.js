const Producto = require("../models/Producto");


exports.crearProducto = async (req, res) => {

    try {
        let producto;

        //crear producto
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
        
    }
    
}

exports.obtenerProductos = async (req, res )=> {

    try {
        
        const productos = await Producto.find();
        res.json(productos)
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
        
    }

}

exports.actualizarProducto = async (req, res )=> {

    try {
        
        const { id, nombre, valor, stock} = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'Producto no existe'})
        }
        producto.id = id;
        producto.nombre = nombre;
        producto.valor = valor;
        producto.stock = stock;

        producto = await Producto.findByIdAndUpdate( {id: req.params.id}, producto, {new: true} )
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
        
    }
}

exports.obteberProducto = async (req, res )=> {

    try {
        
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'Producto no existe'})
        }

        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
        
    }
}

exports.eliminarProducto = async (req, res )=> {

    try {
        
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'Producto no existe'})
        }

        await Producto.findOneAndRemove({_id: req.params.id})
        res.json({ msg: 'Producto Eliminado con exito'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
        
    }
}