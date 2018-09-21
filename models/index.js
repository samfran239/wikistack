const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
}); //Fullstack uses port 5432 for postgres, this may vary at a company you work at

// module.exports = {
//   db
// }

const Page = db.define('pages', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
})

function generateSlug (title) {
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

Page.beforeValidate((userInstance, optionsObject) => {
    userInstance.slug = generateSlug(userInstance.title);
  })

const User = db.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
})

module.exports = {db, Page, User} // you can only have one module.exports, so when you want to access multiple vars on a module, you need to list each one in the object
