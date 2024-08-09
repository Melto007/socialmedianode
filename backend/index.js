import app from './app.js'
import mongoose from 'mongoose'
import config from './config/index.js'

(async () => {
    await mongoose.connect(config.DB_URL)
    console.log('DB is connected')

    app.on('error', (error) => {
        console.log('DataBase is not connected')
        throw error
    })

    const onListenHandler = () => {
        console.log(`APP LISTENING ON PORT ${config.PORT}`)
    }

    app.listen(config.PORT, onListenHandler)
})()