import express from 'express'
import cors from 'cors'
import mongose from 'mongoose'

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
    }

    private middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
    }
}
module.exports = App
