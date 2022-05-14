<template>
  <div class="leftscroll h-[85vh]">
    <slot />
  </div>
</template>
<style scoped>
.leftscroll {
  overflow: auto;
  direction: rtl;
}

.leftscroll > div {
  direction: ltr;
}
</style>
