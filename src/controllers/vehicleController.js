
const { db } = require('../config/firebase');
const { vehicleSchema } = require('../schemas/schemas');
const COLLECTION = 'vehicles';

async function listVehicles(req, res) {
  try {
    const snap = await db.collection(COLLECTION).get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    res.json(list);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function getVehicle(req, res) {
  try {
    const doc = await db.collection(COLLECTION).doc(req.params.id).get();
    if (!doc.exists) return res.status(404).end();
    res.json({ id: doc.id, ...doc.data() });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function createVehicle(req, res) {
  try {
    const { modelId, ...vehicleData } = req.body;
    

    const { error } = vehicleSchema.validate({ modelId, ...vehicleData });
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const modelDoc = await db.collection('models').doc(modelId).get();
    if (!modelDoc.exists) {
      return res.status(400).json({ error: 'Modelo no encontrado' });
    }

    const modelData = modelDoc.data();
    const completeVehicleData = {
      ...vehicleData,
      modelId,
      modelName: modelData.name,
      brandId: modelData.brandId,
      brandName: modelData.brandName
    };

    const ref = await db.collection(COLLECTION).add(completeVehicleData);
    res.status(201).json({ id: ref.id, ...completeVehicleData });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function updateVehicle(req, res) {
  try {
    const { modelId, ...vehicleData } = req.body;
    
    if (modelId) {
      const modelDoc = await db.collection('models').doc(modelId).get();
      if (!modelDoc.exists) {
        return res.status(400).json({ error: 'Modelo no encontrado' });
      }

      const modelData = modelDoc.data();
      vehicleData.modelId = modelId;
      vehicleData.modelName = modelData.name;
      vehicleData.brandId = modelData.brandId;
      vehicleData.brandName = modelData.brandName;
    }

    await db.collection(COLLECTION)
            .doc(req.params.id)
            .set(vehicleData, { merge: true });
    res.json({ id: req.params.id, ...vehicleData });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function deleteVehicle(req, res) {
  try {
    await db.collection(COLLECTION).doc(req.params.id).delete();
    res.status(204).end();
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

module.exports = {
  listVehicles,
  getVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle
};
