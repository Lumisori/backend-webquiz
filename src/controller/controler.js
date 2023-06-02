const service = require("../service/service");

const create = async (req, res) => {
    const body = req.body;
    try {
        await service.create(body);
        res.status(201).send('Question created');
    } catch (err) {
        res.status(500).send('Error while creating in:' + err);
    }
};

const getAll = async (req, res) => {
    res.send(await service.getAll());
};

const getById = async (req, res) => {
    try {
        const data = await service.getById(req.params.id, 10);
        if (data) {
            res.send(data)
        } else {
            res.status(404).send('Invalid id to show')
        }
    } catch (err) {
        res.status(500).send('Error in server in:' + err)
    }
    
};

const update = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            await service.update(id, req.body);
            res.status(200).send("Quiz updated");
        } else {
            res.status(404).send('Invalid id to update')
        }
    } catch(err) {
        res.status(500).send("Error while updating" + err)
    }
    
};

const remove = async (req, res) => {
    const id = req.params.id;

    
    try {
        if (id) {
            await service.remove(id);
            res.status(200).send("Quiz removed");
        } else {
            res.status(404).send('Invalid id to reove')
        }
    } catch(err) {
        res.status(500).send("Error while removing quiz" + err)
    }
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};