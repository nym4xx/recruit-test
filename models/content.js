import db from './index.js'

class ContentModel {
    findAll() {
        return db.getAll()
    }
}

export const Content = new ContentModel()
