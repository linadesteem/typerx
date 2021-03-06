"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const log_service_1 = require("./log.service");
class UserService {
    login(context, loginDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { request, response, next } = context;
            const result = yield this.validate(request, response, next);
            yield log_service_1.LogService.save({
                name: 'login',
                operator: loginDto.username,
                operatorIp: request.connection.remoteAddress,
                operation: request.method.toLowerCase() + request.originalUrl,
                comment: '用户登录',
            });
            return result;
        });
    }
    validate(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new Promise((resolve, reject) => {
                passport.authenticate('local', (err, user, info) => {
                    if (err) {
                        reject(false);
                    }
                    if (user) {
                        request.logIn(user, err => {
                            if (err) {
                                reject(false);
                            }
                            const picked = (({ username, nick, avatar, type, email, mobile, roles, isDisable, isAdmin, isApproved, expired }) => ({
                                username,
                                nick,
                                avatar,
                                type,
                                email,
                                mobile,
                                roles,
                                isDisable,
                                isAdmin,
                                isApproved,
                                expired
                            }))(user);
                            resolve(picked);
                        });
                    }
                    else {
                        resolve(false);
                    }
                })(request, response, next);
            });
            return result;
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map