const jwt = require("jsonwebtoken");
const { response, request } = require("express");
const Usuario = require("../models/usuario");

const validarJWT = async(req = request, res = response, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      msg: "no hay token en la petición",
    });
  }

  try {
    const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    //leer el usuario que corresponde al uid
    const usuario = await Usuario.findById(uid);

    if(!usuario) {
        return res.status(401).json({
            msg: 'Token no válido - usuario no existe DB'
        })
    }

    //Verificar si el uid tiene estado tru
    if(!usuario.estado){
        return res.status(401).json({
            msg: 'Token no válido - usuario con estado: false'
        })
    }

    req.usuario = usuario;

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({
        msg: "Token no válido"
    })
  }

};

module.exports = {
  validarJWT,
};
