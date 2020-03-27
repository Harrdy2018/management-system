<template>
<div class="my-rule-form">
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="refForm"
    label-width="100px"
    class="demo-ruleForm">
    <el-form-item label="真实姓名" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="您的手机" prop="tel">
      <el-input v-model="ruleForm.tel"></el-input>
    </el-form-item>
    <el-form-item label="电子邮箱" prop="email">
      <el-input v-model="ruleForm.email"></el-input>
    </el-form-item>
    <el-form-item label="您的学号" prop="studentNumber">
      <el-input v-model="ruleForm.studentNumber"></el-input>
    </el-form-item>
    <el-form-item label="您的专业" prop="major">
      <el-input v-model="ruleForm.major"></el-input>
    </el-form-item>
    <el-form-item label="户籍地址" prop="domicileAddress">
      <el-input v-model="ruleForm.domicileAddress"></el-input>
    </el-form-item>
    <el-form-item label="快递地址" prop="EMS">
      <el-input v-model="ruleForm.EMS"></el-input>
    </el-form-item>
    <el-form-item label="登录密码" prop="pwd">
      <el-input v-model="ruleForm.pwd"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('refForm')">提交</el-button>
      <el-button type="" @click="cancelForm('refForm')">取消</el-button>
      <el-button @click="resetForm('refForm')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<script>
export default {
    data() {
      return {
        ruleForm: {
          name: '',
          tel: '',
          email: '',
          studentNumber: '',
          major: "",
          domicileAddress: "",
          EMS: '',
          pwd: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入您的真实姓名', trigger: 'blur' },
            { min: 2, max: 7, message: '长度在 2 到 7 个字符', trigger: 'blur' }
          ],
          tel: [
            { required: true, message: '请输入您的电话', trigger: 'change' }
          ],
          pwd: [
            { required: true, message: '请输入您的密码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        console.log(this);
        console.log(formName);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let postData =this.ruleForm;
            console.log(postData);
            window.fetch('http://127.0.0.1:3000/registe', {
              method: 'POST',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(postData)
            }).then(res=>{
                //console.log(res);
                return res.json();
              },e=>console.log(e)).then(function(res){
                if(res.status==="200"){
                  alert("registe success");
                }else{
                  alert(`registe faild: ${res.msg}`);
                }
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      cancelForm(refForm){
        this.$router.push({ path: '/pages/login.html' });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
.my-rule-form{
  width: 50%;
  margin: 20px auto 0px auto;
}
</style>