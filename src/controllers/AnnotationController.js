const Annotations = require('../models/AnnotationData');


module.exports = {
    
    // CRUD
    
    // Read - tem que ser assíncrono devido ao delay de conexão com o banco
    async read(request, response) {
        const annotationList = await Annotations.find();
        return response.json(annotationList);
    },

    // Create
    async create(request, response) {
        const { title, notes, priority } = request.body;

        if (!title || !notes) {
            return response.status(400).json({
                error:"Necessário um título ou anotação!"
            });
        }

        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        });

        return response.json(annotationCreated);
    },

    // Delete
    async delete(request, response) {
        // Atribui o parâmetro da request na variável id
        const { id } = request.params;
        const annotationDeleted = await Annotations.findOneAndDelete({_id : id}); // Função do mongoose
        
        if (annotationDeleted) {
            return response.json(annotationDeleted);
        } else {
            return response.status(401).json({ error : "Não foi ecnontrado o registro para deletar!" });
        }
    }

}