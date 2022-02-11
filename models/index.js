import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

class Database {
    constructor() {
        const file = join(__dirname, 'db.json')
        const adapter = new JSONFile(file)
        this.db = new Low(adapter)
        this.db.data = this.db.data || { posts: [] }
    }

    async getAll() {
        await this.db.read()
        return this.db.data
    }

    async set(data) {
        const { posts } = this.db.data
        posts.push(data)
        await this.db.write()
    }
}

const db = new Database()

export default db
