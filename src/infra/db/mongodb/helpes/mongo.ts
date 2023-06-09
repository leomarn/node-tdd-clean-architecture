
import { MongoClient, type Collection } from 'mongodb'
export const MongoHelper = {
  client: null as unknown as MongoClient,
  async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL as unknown as string
      // , {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // }
    )
  },

  async disconnect(): Promise<void> {
    await this.client.close()
  },

  getCollection(name: string): Collection {
    return this.client.db().collection(name)
  },

  map: (collection: any, data: any): any => {
    const id = collection.insertedId.toString()
    return { ...data, id }
  }
}
