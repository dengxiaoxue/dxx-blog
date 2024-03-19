<template>
  <div class="login-wrap">
    <div class="content">
      <div class="login-title">后台管理系统</div>
      <dxx-form :model="formInline" ref="ruleFormRef">
        <dxx-form-item labDxx="" prop="user" :error="errors.user">
          <dxx-input size="large" :prefix-icon="User" v-model="formInline.user" placeholder="用户名" clearable />
        </dxx-form-item>
        <dxx-form-item labDxx="" prop="password" :error="errors.password">
          <dxx-input size="large" :prefix-icon="Lock" v-model="formInline.password" placeholder="密码" clearable />
          <div class="forget-password"><span>忘记密码</span></div>
        </dxx-form-item>
      </dxx-form>
      <dxx-button type="success" class="submit" @click="submitForm">登录</dxx-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DxxForm, DxxFormItem, DxxInput, DxxButton, User, Lock } from 'dxx-web-ui'
import { ref } from 'vue'
import { login } from './api'

const formInline = ref({
  user: '',
  password: '',
})

const ruleFormRef = ref(null)
const errors = ref({
  user: '',
  password: '',
})

const validateForm = () => {
  const { user, password } = formInline.value
  const emptyRegex = /^.+$/
  errors.value = {
    user: !emptyRegex.test(user) ? '请输入用户名' : '',
    password: !emptyRegex.test(password) ? '请输入密码' : '',
  }
  return Object.values(errors.value).every((item: any) => !item)
}
const submitForm = async () => {
  if (!validateForm()) return
  const res = await login(formInline.value)
  console.log(res)
}
</script>

<style scoped lang="scss">
.login-wrap {
  background-color: #f4f6f9;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content {
    width: 300px;
    .forget-password {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      line-height: 21px;
      font-size: 14px;
      color: #25bb73;
      cursor: pointer;
      position: absolute;
      top: 40px;
    }
    .submit {
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
