import db from './index.js'

class ContentModel {
    async findAll() {
        return await db.getAll()
    }
}

export const Content = new ContentModel()
