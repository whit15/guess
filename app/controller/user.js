const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        const { ctx } = this;
        const users = await ctx.service.user.getUserList();
        ctx.body = users;
    }

    async new() {

    }


    async create() {

    }

    async show() {
        const { ctx } = this;
        const { id } = ctx.params;

        const user = await ctx.service.user.getUser(id);
        ctx.body = user;
    }

    async edit() {

    }

    async update() {

    }

    async destroy() {
    }

    async login() {
        const { ctx } = this;
        const { unionid, nickname, avatar, city } = ctx.request.body;
        let user = await ctx.service.user.getUserByUnionId(unionid);
        if (user) {
            user = await ctx.service.user.userLogin(user.id);
        } else {
            user = await ctx.service.user.userRegister(unionid, nickname, avatar, city);
        }
        ctx.body = user;
    }
}
module.exports = UserController;
