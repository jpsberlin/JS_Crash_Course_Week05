const YogasetModel = require('../models/yogaset')
const AsanaModel = require('../models/asana')
const PranayamaModel = require('../models/pranayama')
const MeditationModel = require('../models/meditation')


async function addYogakriya(yogasetId, techyogiId) {
    const yogaset = await YogasetModel.findOne({ _id: yogasetId })
    const asana = await AsanaModel.findOne({ _id: asanaId })
    const meditation = await MeditationModel.findOne({ _id: meditationId })
    const pranayama = await PranayamaModel.findOne({ _id: pranayamaId })


    yogaset.yogakriya.push(asana, pranayama, meditation)

    await yogaset.save()

    return yogaset
}

async function findAll() {
    return YogasetModel.find().populate('yogakriya')
}

async function add(asana) {
    return YogasetModel.create(asana)
}

async function add(pranayama) {
    return YogasetModel.create(pranayama)
}

async function add(meditation) {
    return YogasetModel.create(meditation)
}


async function del(_id) {
    return YogasetModel.remove({ _id })
}

async function find(_id) {
    return YogasetModel.findOne({ _id }).populate('yogakriya')
}

module.exports = {
    addYogaset,
    findAll,
    find,
    add,
    del
}
