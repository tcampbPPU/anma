<template>
  <div class="leftscroll h-[80vh]">
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
