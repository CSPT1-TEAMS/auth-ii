const makeToken = (user) => {
    const payload = {
        sub: user._id,
        name: user.username,
        race: user.race
    }
    const options = {
        expiresIn: '24h'
    }
    return jwt.sign(payload, SECRET, options)
}

export default { makeToken };