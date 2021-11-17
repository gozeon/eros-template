<template>
  <div class="message">
    <div class="title tip">系统通知</div>
    <div class="des">
      包含云主机、云数据库、云内存存储、弹性IP、共享带宽、负载均衡、混合云、VPC、大数据托管集群、CDN等全线产品及资源的监控，并在产品更新时同步更新，实时追加监控项。
    </div>
    <div class="time">2020-12-12 12:12:12</div>
  </div>
</template>
<style lang="scss" scoped>
.message {
  padding: 12px 24px;

  .title {
    font-size: 14px;
    line-height: 22px;
    color: var(--neutral-500);
    position: relative;

    &.tip {
      &::before {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: red;
        position: absolute;
        left: -9px;
        bottom: 9px;
      }
    }
  }
  .des {
    font-size: 12px;
    line-height: 14px;
    color: var(--neutral-125);
  }
  .time {
    font-size: 12px;
    line-height: 20px;
    color: var(--neutral-100);
  }

  border-bottom: 1px solid var(--neutral-10);

  &:last-child {
    border-bottom: 0;
  }
}
</style>
