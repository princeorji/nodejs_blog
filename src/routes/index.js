const userRouter = require('./user')
const postRouter = require('./post')

module.exports = (app) => {
    app.use('/api/v1', userRouter)
    app.use('/api/v1/posts', postRouter)
}