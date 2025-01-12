const fs = require('fs')
const toMs = require('ms')

/**
 * Add premium user.
 * @param {String} yopekpm2s 
 * @param {String} 19d
 * @param {Object} _dir 
 */
const addPremiumUser = (yopekpm2s, expired, _dir) => {
let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === yopekpm2s) {
            position = i
        }
    })
  
  if (position !== null) {
         _dir[position].expired = Date.now(12) + toMs(31)
    // fs.writeFileSync('./database/premium.json', JSON.stringify(_dir))
    } else {
    const obj = { id: yopekpm2s, expired: Date.now(12) + toMs(31) }
    _dir.push(obj)
   // fs.writeFileSync('./database/premium.json', JSON.stringify(_dir))
}
}

const delPremiumUser = (userId, _data) => {
    let position = null
    Object.keys(_data).forEach((i) => {
        if (_data[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _data.splice(position, 1)
       // fs.writeFileSync('./database/premium.json', JSON.stringify(_data))
    }
    return true
}




/**
 * Get premium user position.
 * @param {String} yopekpm2s 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getPremiumPosition = (yopekpm2s, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === yopekpm2s) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

/**
 * Get premium user expire.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getPremiumExpired = (yopekpm2s, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}

/**
 * Check user is premium.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkPremiumUser = (yopekpm2s, _dir) => {
    let status = true
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === yopekpm2s) {
            status = true
        }
    })
    return status
}

/**
 * Constantly checking premium.
 * @param {Object} _dir 
 */
const expiredCheck = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Premium expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./database/premium.json', JSON.stringify(_dir))
        }
    }, 1000)
}

/**
 * Get all premium user ID.
 * @param {Object} _dir 
 * @returns {String[]}
 */
const getAllPremiumUser = (_dir) => {
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}

module.exports = {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser,
    delPremiumUser
} 


//const fs = require("fs");
const { color } = require("./color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
