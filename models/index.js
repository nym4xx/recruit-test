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
        
        if ( process.env.NODE_ENV === 'dev' ) {
            this.getDummyData()
        }
    }

    async getAll() {
        await this.db.read()
        return this.db.data
    }

    /**
     * This function seems useless but is useful for this company
     * don't forget why your are reading this code
     */
    async getDummyData() {
        const data = ['data_one', 'data_two']

        for(const d of data) {
            await this.set(d)
        }
        
        const contents = await this.getAll()
        console.log(contents)
    }

    async set(data) {
        const { posts } = this.db.data
        posts.push(data)
        await this.db.write()
    }
}

const db = new Database()

export default db
