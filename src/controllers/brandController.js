const { db } = require('../config/firebase');
const COLLECTION = 'brands';

async function listBrands(req, res) {
  try {
    const snap = await db.collection(COLLECTION).get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    res.json(list);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function getBrand(req, res) {
  try {
    const doc = await db.collection(COLLECTION).doc(req.params.id).get();
    if (!doc.exists) return res.status(404).end();
    res.json({ id: doc.id, ...doc.data() });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function createBrand(req, res) {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'El nombre es requerido' });
    }
    const ref = await db.collection(COLLECTION).add({ name });
    res.status(201).json({ id: ref.id, name });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function updateBrand(req, res) {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'El nombre es requerido' });
    }
    await db.collection(COLLECTION)
            .doc(req.params.id)
            .set({ name }, { merge: true });
    res.json({ id: req.params.id, name });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function deleteBrand(req, res) {
  try {
    const modelsSnap = await db.collection('models')
      .where('brandId', '==', req.params.id)
      .limit(1)
      .get();

    if (!modelsSnap.empty) {
      return res.status(400).json({ 
        error: 'No se puede eliminar la marca porque tiene modelos asociados' 
      });
    }

    await db.collection(COLLECTION).doc(req.params.id).delete();
    res.status(204).end();
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

module.exports = {
  listBrands,
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand
};
