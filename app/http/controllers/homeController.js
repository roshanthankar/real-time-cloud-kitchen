const Menu = require('../../models/menu')
function homeController() {
    return {
        async index(req, res) {

            const delish = await Menu.find()
            
            return res.render('home',{delish:delish})

        }
    }
}

module.exports = homeController