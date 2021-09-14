<template>
  <div class="index">
    <h2>
      <span class="back" @click="back">
        <i class="el-icon-arrow-left"></i>
        返回
      </span>
      创建工单
    </h2>
    <p class="title">创建故障单</p>
    <!-- <div class="form-box"> -->
    <el-form ref="form" :model="form" :label-position="labelPosition" label-width="120px">
      <el-form-item label="建障单位：">
        <h3>广东电信网络操作维护中心</h3>
      </el-form-item>
      <el-form-item label="报障人员：">
        <h3>陈先生</h3>
      </el-form-item>
      <el-form-item label="报障人电话：">
        <el-input v-model="form.name" placeholder="请选择报障人电话"></el-input>
      </el-form-item>
      <el-form-item label="故障设备：">
        <el-select v-model="form.region1" placeholder="请选择故障设备">
          <el-option label="2305吉祥路-省政府侧门1" value="2305吉祥路-省政府侧门1"></el-option>
          <el-option label="2305吉祥路-省政府侧门2" value="2305吉祥路-省政府侧门2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="故障类型：">
        <el-select v-model="form.region2" placeholder="请选择故障类型">
          <el-option label="图像故障/画面偏色1" value="图像故障/画面偏色1"></el-option>
          <el-option label="图像故障/画面偏色2" value="图像故障/画面偏色2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="受理公司：">
        <el-select v-model="form.region3" placeholder="请选择受理公司">
          <el-option label="广州物业管理公司1" value="广州物业管理公司1"></el-option>
          <el-option label="广州物业管理公司2" value="广州物业管理公司2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="故障等级：">
        <el-select v-model="form.region4" placeholder="请选择故障等级">
          <el-option label="紧急" value="紧急"></el-option>
          <el-option label="一般" value="一般"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="故障描述：">
        <el-input type="textarea" v-model="form.desc" placeholder="请输入故障描述"></el-input>
      </el-form-item>
      <!-- <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item> -->
    </el-form>
    <!-- </div> -->
    <div class="upload-box">
      <h4>上传封面图：</h4>
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
      <p class="img-txt">只能上传jpg/png文件，且不超过2M</p>
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region1: '',
        region2: '',
        region3: '',
        region4: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      labelPosition: 'right'
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({
        name: 'OrderList',
        params: {
          date: '20191010-000002',
          name: this.form.region1,
          province: this.form.region2,
          city: this.form.region3,
          address: this.form.region4,
          zip: '待分配',
          time: '2019.09.21 08:50:08'
        }
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  border: 1px solid rgba(32, 115, 158, 1);
  box-shadow: 0px 0px 10px 0px rgba(23, 60, 144, 1);
  padding-bottom: 34px;
}
p.title {
  padding-left: 16px;
  padding-bottom: 20px;
  margin-top: 26px;
  color: #a2d4e6;
}
.back {
  float: left;
  color: #00b1fb;
  margin-left: 20px;
  opacity: 1;
}
h2 {
  text-align: center;
  padding: 12px 0;
  // border-bottom: 1px solid #ddd;
  margin-bottom: 40px;
  color: #a9ddee;
  border-bottom: 1px solid #20739e;
  background: linear-gradient(0deg, rgba(2, 31, 73, 0.5) 0%, rgba(1, 65, 127, 0.5) 100%);
  // opacity: 0.5;
}
/deep/.el-select .el-input {
  width: 500px;
}
/deep/.el-input {
  width: 500px;
}
.el-textarea {
  width: 500px;
}
.upload-box {
  margin-left: 40px;
}
.upload-box h4 {
  margin-bottom: 16px;
  color: #606266;
  font-size: 14px;
}
.el-button {
  margin-top: 28px;
}
p.img-txt {
  font-size: 12px;
  margin-top: 14px;
}
.upload-box h4,
.upload-box p {
  color: #a2d4e6;
}
</style>

<style>
.el-form-item__label {
  color: #a2d4e6;
}
.el-form h3 {
  color: #a2d4e6;
}
.el-input__inner {
  color: #a2d4e6;
  background: rgba(0, 0, 0, 0);
  border: 1px solid #a2d4e6;
}
.el-input__inner::placeholder {
  color: #a2d4e6;
  opacity: 0.4;
}
.el-textarea__inner {
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #a2d4e6;
  color: #a2d4e6;
}
.el-textarea__inner::placeholder {
  color: #a2d4e6;
  opacity: 0.4;
}
.el-upload--picture-card {
  background-color: rgba(0, 0, 0, 0);
  border: 1px dashed #a2d4e6;
}
.el-upload--picture-card i {
  color: #a2d4e6;
}
</style>
