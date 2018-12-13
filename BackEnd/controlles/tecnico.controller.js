const Tecnico = require('../models/tecnico'),
    tecnicoCtrl = {};

tecnicoCtrl.getTecnicos = async (req, res) => {
    // Tecnico.find({}, (err, data) => { 
    // });
    let tecnicos = await Tecnico.find();
    res.json(tecnicos);
}
tecnicoCtrl.getTecnico = async (req, res) => {
    let tecnico = await Tecnico.findById(req.params._id);
    res.json(tecnico);
}
tecnicoCtrl.createTecnicos = async (req, res) => {
    // let tecnico = new Tecnico(req.body); // Esto se usaba para recibir todo pero ahora cambiremos para poder recibir el id
    let tecnico = new Tecnico({
        fullnameTec: req.body.fullnameTec,
        emailTec: req.body.emailTec,
        passwordTec: req.body.passwordTec,
        photoTec: req.body.photoTec,
        phoneTec: req.body.phoneTec,
        dniTec: req.body.dniTec
    });
    await tecnico.save();
    res.json({
        'status': 'Tecnico Guardado'
    });
}
tecnicoCtrl.editTecnico = async (req, res) => {
    let {id} = req.params._id;
    let tecnicos = {
        fullnameTec: req.body.fullnameTec,
        emailTec: req.body.emailTec,
        passwordTec: req.body.passwordTec,
        photoTec: req.body.photoTec,
        phoneTec: req.body.phoneTec,
        dniTec: req.body.dniTec
    }
    Tecnico.findByIdAndUpdate(id, {$set: tecnicos}, {new: true});
    res.json({status: 'Tecnico Actualizado'});
}
tecnicoCtrl.deleteTecnico = async (req, res) => {
    await Tecnico.findByIdAndRemove(req.params._id);
    res.json({status: 'Tecnico Eliminado'});
}

module.exports = tecnicoCtrl;