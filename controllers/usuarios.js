const {response, request} = require('express')


const usuariosGet = (req = request, res = response) => {

    const {q, nombre, apikey} = req.query;

    res.json({
        msg: 'Get API - controlador',
        q,
        nombre,
        apikey
    });
}
const usuariosPost = (req, res = response) => {
    const {nombre, data} = req.body;

    res.json({
        msg: 'Post API - controlador',
        nombre,
        data
    });
}
//Actualización a un usuario
const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'Put API - controlador',
        id
    });
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - controlador'
    });
}
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}; 