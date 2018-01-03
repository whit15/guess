const Service = require('egg').Service;

class UserService extends Service {
    async getUserList() {
        const users = await this.app.db_guess.select('users');
        return users;
    }

    async getUser(uid) {
        const user = await this.app.db_guess.get('users', { id: uid });
        return user;
    }

    async getUserByUnionId(unionid) {
        const user = await this.app.db_guess.get('users', { unionid: unionid });
        return user;
    }

    async userRegister(unionid, nickname, avatar, city) {
        const result = await this.app.db_guess.insert('users', {
            unionid: unionid,
            nickname: nickname,
            avatar: avatar,
            city: city
        });
        if (result.affectedRows) {
            const user = await this.app.db_guess.get('users', { id: result.insertId });
            return user;
        }
    }

    async userLogin(id) {
        let user = await this.app.db_guess.get('users', { id: id });
        user.nickname = 'test';
        // user.last_login_time = this.app.mysql.literals.now;

        const result = await this.app.db_guess.update('users', {
            id: user.id,
            nickname: user.nickname,
            last_login_time: user.last_login_time
        });
        if (result.affectedRows === 1) {
            return user;
        }
    }
}

module.exports = UserService;
