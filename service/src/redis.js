import Redis from 'ioredis'

const redis = new Redis()

const createRedisInstance = async () => {
  redis.connect(() => console.log('Connected to Redis server'))
  try {
      await redis.set('cat', 'Garfield')
      redis.get('cat').then((res) => {
        console.log('Name of cat: ', res)
      })
  } catch (error) {
      console.error(error)
  }
  redis.disconnect()
}

export default createRedisInstance
