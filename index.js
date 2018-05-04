import express, {
    static
} from "express";
import {
    join
} from "path";
const PORT = process.env.PORT || 5000

express()
    .use(static(join(__dirname, 'public')))
    .set('views', join(__dirname, 'public'))
    .set('view engine', 'html')
    .get('/', (req, res) => res.render('public'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))