export interface Account {
  username: string; // 用户名
  nick: string; // 姓名
  password: string; // 密码
  avatar: string; // 照片
  type: string; // 类型
  email: string; // 邮箱
  mobile: string; // 手机号码
  roles: string[]; // 角色分组
  isDisable: boolean; // 是否禁用
  isAdmin: boolean; // 是否管理员
  isApproved: boolean; // 是否审核
  secret: string; // 密保
  expired: Date; // 有效期
}
