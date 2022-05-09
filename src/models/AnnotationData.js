const mongoose = require('mongoose');

const annotationDataSchema = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean
});

module.exports = mongoose.model('Annotations', annotationDataSchema);