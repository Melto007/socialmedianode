import dotenv from 'dotenv'

dotenv.config()

const config = {
    DB_URL: process.env.DB_URL,
    PORT: process.env.PORT
}

export default config