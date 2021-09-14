<template>
  <div class="index">
    <h2 class="ord-title">
      <span class="back" @click="back">
        <i class="el-icon-arrow-left"></i>
        返回
      </span>
      工单列表
    </h2>
    <div class="form-box">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="故障单号：">
          <el-input v-model="formInline.user" placeholder="请输入故障单号"></el-input>
        </el-form-item>
        <el-form-item label="故障设备：">
          <el-select v-model="formInline.region" placeholder="请选择故障设备">
            <el-option label="2305吉祥路-省政府侧门1" value="2305吉祥路-省政府侧门1"></el-option>
            <el-option label="2305吉祥路-省政府侧门2" value="2305吉祥路-省政府侧门2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="受理公司：">
          <el-select v-model="formInline.user" placeholder="请选择受理公司">
            <el-option label="广州物业管理公司1" value="广州物业管理公司1"></el-option>
            <el-option label="广州物业管理公司2" value="广州物业管理公司2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button class="serch" type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="cz" @click="onSubmit">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="tag-box">
      <div class="tag-container">
        <span>待处理3</span>
        <span>待分配6</span>
        <span>待接单6</span>
        <span>处理中6</span>
        <span>已挂起6</span>
        <span>已完成6</span>
      </div>
      <div class="btn" @click="toAddOrder">创建故障单</div>
    </div>
    <div class="table-box">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="date" label="故障单号" width="220"> </el-table-column>
        <el-table-column prop="name" label="故障设备" width="230"> </el-table-column>
        <el-table-column prop="province" label="故障类型" width="230"> </el-table-column>
        <el-table-column prop="city" label="受理公司" width="200"> </el-table-column>
        <el-table-column prop="address" label="故障等级" width="150"> </el-table-column>
        <el-table-column prop="zip" label="故障状态" width="150"> </el-table-column>
        <el-table-column prop="time" label="申告时间" width="250"> </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage1"
        :page-sizes="[10, 15, 20, 50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="3"
        background="#173C90"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      currentPage1: 1,
      tableData: [
        {
          date: '20191010-000001',
          name: '2305吉祥路-省政府侧门',
          province: '图像故障/画面偏色',
          city: '广州物业管理公司',
          address: '紧急',
          zip: '待分配',
          time: '2019.09.21 08:50:08'
        },
        {
          date: '20191010-000001',
          name: '2305吉祥路-省政府侧门',
          province: '图像故障/画面偏色',
          city: '广州物业管理公司',
          address: '紧急',
          zip: '待分配',
          time: '2019.09.21 08:50:08'
        },
        {
          date: '20191010-000001',
          name: '2305吉祥路-省政府侧门',
          province: '图像故障/画面偏色',
          city: '广州物业管理公司',
          address: '紧急',
          zip: '待分配',
          time: '2019.09.21 08:50:08'
        }
      ]
    }
  },
  created() {
    let obj
    if (this.$route.params.name) {
      obj = this.$route.params
      this.tableData.unshift(obj)
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleClick(row) {
      console.log(row)
    },
    toAddOrder() {
      this.$router.push('/AddOrder')
    },
    back() {
      this.$router.go(-1)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="scss" scoped>
// .el-icon-arrow-left {
//   color: #00b4ff;
// }
.index {
  background: rgba(255, 255, 255, 0);
  border: 1px solid rgba(32, 115, 158, 1);
  box-shadow: 0px 0px 10px 0px rgba(23, 60, 144, 1);
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
.back {
  float: left;
  color: #00b1fb;
  margin-left: 20px;
  opacity: 1;
}
.form-box {
  margin: 0 40px;
  padding: 40px 0;
  border-bottom: 1px solid rgba(162, 212, 230, 0.5);
}
.tag-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 16px 40px 16px;
}
.tag-container {
  width: 800px;
}
.tag-box span {
  display: inline-block;
  padding: 9px 13px;
  text-align: center;
  // background: #1a7df5;
  background: rgba(162, 212, 230, 0.4);
  border-radius: 4px;
  margin-right: 20px;
  color: #a2d4e6;
  font-size: 12px;
  margin-bottom: 19px;
}
.tag-box span:first-child {
  // background-color: #ff738c;
  color: #00b4ff;
}
.table-box {
  background-color: #021132;
}
.el-button.cz {
  background: rgba(162, 212, 230, 0.2);
  color: #a2d4e6;
  border: 1px solid rgba(162, 212, 230, 1);
}
.btn {
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px 16px;
  line-height: 20px;
  background-color: #00b4ff;
  margin-left: 350px;
  font-size: 14px;
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
}
.block {
  margin-top: 20px;
  height: 55px;
  padding-right: 20px;
}
/deep/.el-table {
  background-color: #021132;
}
/deep/.el-input__inner {
  background: rgba(255, 255, 255, 0);
}
input::-webkit-input-placeholder {
  color: #a2d4e6;
}
input::-moz-placeholder {
  color: #a2d4e6;
}
/deep/.el-form-item__label {
  color: #a2d4e6;
}
.el-form-item {
  margin-right: 24px;
}
/deep/.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background-color: #021132;
}
/deep/.el-table,
.el-table__expanded-cell {
  background-color: #021132;
}
</style>

<style>
.el-table th,
.el-table tr {
  background-color: rgba(0, 0, 0, 0);
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid rgba(162, 212, 230, 0.5);
}
.el-checkbox__inner {
  background-color: rgba(0, 0, 0, 0);
}
.el-table thead {
  color: #a2d4e6;
}
.el-table {
  color: #a2d4e6;
}
.el-input__inner {
  border-color: #a2d4e6;
}
.el-input__inner::placeholder {
  color: #a2d4e6;
}
.el-pagination.is-background .btn-prev {
  background-color: #021132;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: rgba(0, 0, 0, 0);
  color: #00e4ff;
}
.el-pagination__total {
  color: #a2d4e6;
}
.el-input__inner {
  color: #a2d4e6;
}
.el-pagination__jump {
  color: #a2d4e6;
}
.el-checkbox__inner {
  border: 1px solid #a2d4e6;
}
.el-pagination {
  float: right;
}
.el-table::before {
  height: 0;
}
</style>
