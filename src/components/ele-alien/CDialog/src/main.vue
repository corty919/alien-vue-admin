<!--
 * @Description: 自定义弹出框
 * @Author: Cary
 * @Date: 2020-01-07 15:38:33
 * @FilePath: \alien-docsf:\vue-project\vue-admin-se\src\components\CDialog\src\main.vue
 -->
<template>
  <el-dialog
    ref="mycdialog"
    class="cc-cdialog"
    custom-class="cc-cdialog__container"
    :top="top"
    :title="title"
    :visible.sync="dialogVisible"
    :width="width"
    :destroy-on-close="true"
    :close-on-click-modal="false"
    :before-close="handleBeforeClose"
    @closed="handleCloseAnimatorEnd">
    <div ref="default" />
    <span v-if="isfooter" slot="footer">
      <el-button v-for="(btn, index) in btns" :key="index" :v-bind="btn" @click="handleBtnsClick(btn)">{{ btn['text'] || '按钮' }}</el-button>
      <el-button v-if="!hiddenCancel" @click="handleCancel">{{ cancelButtonText }}</el-button>
      <el-button
        v-if="!hiddenConfirm"
        type="primary"
        :loading="confirmButtonLoading"
        @click="handleConfirm">
        {{ confirmButtonLoading ? confirmButtonLoadingText : confirmButtonText }}
      </el-button>
    </span>
    <span v-if="!isfooter" slot="footer">
      <slot name="footer" />
    </span>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      title: '提示',
      width: '430px',
      top: '20vh',
      isfooter: true,
      dialogVisible: false,
      hiddenCancel: false,
      hiddenConfirm: false,
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      confirmButtonLoadingText: '请求中...',
      confirmButtonLoading: false,
      beforeClose: null,
      btns: []
    }
  },
  created() {
    if (this.btns && Array.isArray(this.btns)) {
      this.btns.map((b, i) => {
        b['id'] = 'dialog_btn_' + i
      })
    }
    if (this.footer) this.isfooter = false
  },
  mounted() {
    this.dialogVisible = true
  },
  methods: {
    handleBeforeClose(done) {
      done()
      this.beforeClose && this.beforeClose('close', this, this.close)
    },

    handleCancel() {
      this.beforeClose && this.beforeClose('cancel', this, this.close)
    },

    handleConfirm() {
      this.beforeClose && this.beforeClose('confirm', this, this.close)
    },

    handleBtnsClick(btn) {
      let id = btn['id'] || btn['name'] || btn['text']
      this.beforeClose && this.beforeClose(id, this, this.close)
      btn.callback && btn.callback(btn)
    },

    hide() {
      this.dialogVisible = false
    },

    close() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
      }
      this.dialogVisible = false
    },

    handleCloseAnimatorEnd() {
      this.close()
    }
  }
}
</script>
<style lang='scss'>
.cc-cdialog__container {
  .el-dialog__footer {
    padding: 10px 15px;
  }
  .el-dialog__headerbtn {
    top: 15px;
  }
  .el-dialog__header {
    padding: 15px 15px
  }
  .el-dialog__body {
    position: relative;
    padding: 0px 15px;
    color: #606266;
    font-size: 14px;
  }
}
.cc-cdialog__fullscreen {

}
</style>
