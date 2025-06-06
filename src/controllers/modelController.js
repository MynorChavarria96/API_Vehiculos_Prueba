const { db } = require('../config/firebase');
const COLLECTION = 'models';

async function listModels(req, res) {
  try {
    let query = db.collection(COLLECTION);
    
    if (req.query.brandId) {
      query = query.where('brandId', '==', req.query.brandId);
    }
    
    const snap = await query.get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    res.json(list);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function getModel(req, res) {
  try {
    const doc = await db.collection(COLLECTION).doc(req.params.id).get();
    if (!doc.exists) return res.status(404).end();
    res.json({ id: doc.id, ...doc.data() });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function createModel(req, res) {
  try {
    const { name, brandId } = req.body;
    if (!name || !brandId) {
      return res.status(400).json({ error: 'El nombre de la Marca es requerido' });
    }

    const brandDoc = await db.collection('brands').doc(brandId).get();
    if (!brandDoc.exists) {
      return res.status(400).json({ error: 'Marca no encontrada' });
    }

    const modelData = {
      name,
      brandId,
      brandName: brandDoc.data().name 
    };

    const ref = await db.collection(COLLECTION).add(modelData);
    res.status(201).json({ id: ref.id, ...modelData });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function updateModel(req, res) {
  try {
    const { name, brandId } = req.body;
    if (!name || !brandId) {
      return res.status(400).json({ error: 'Nombre y brandId es requerido' });
    }

 
    const brandDoc = await db.collection('brands').doc(brandId).get();
    if (!brandDoc.exists) {
      return res.status(400).json({ error: 'Marca no encontrada' });
    }

    const modelData = {
      name,
      brandId,
      brandName: brandDoc.data().name
    };

    await db.collection(COLLECTION)
            .doc(req.params.id)
            .set(modelData, { merge: true });
    res.json({ id: req.params.id, ...modelData });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function deleteModel(req, res) {
  try {
  
    const vehiclesSnap = await db.collection('vehicles')
      .where('modelId', '==', req.params.id)
      .limit(1)
      .get();

    if (!vehiclesSnap.empty) {
      return res.status(400).json({ 
        error: 'No se puede eliminar el modelo porque tiene vehículos asociados' 
      });
    }

    await db.collection(COLLECTION).doc(req.params.id).delete();
    res.status(204).end();
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

module.exports = {
  listModels,
  getModel,
  createModel,
  updateModel,
  deleteModel
};
