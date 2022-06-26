const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {
    const { userId, name= 'No name', page, limit } = req.query;
    res.json({
        "succes": true,
        msg: "This is CORS-enabled for all origins!**",
        userId,
        name,
        page,
        limit
    })
}

const usuariosPut =  (req, res = response) => {
    const userId = req.params?.userId || -1;
    res.json({
        "succes": true,
        msg: "metodo put",
        userId
    })
}

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        "succes": true,
        msg: "metodo post",
        nombre,
        edad
    })
}

const usuariosDelete =  (req, res = response) => {
    res.json({
        "succes": true,
        msg: "metodo delete"
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        "succes": true,
        msg: "metodo patch"
    })
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
}