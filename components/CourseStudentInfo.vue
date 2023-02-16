<template>
  <div
    class="grid grid-cols-2 gap-2 2xl:gap-6 sticky top-12 text-label-primary-dark font-medium"
  >
    <div class="course-student-info-card">
      <img
        class="w-12 h-12 rounded-full"
        src="@/assets/images/avatar.png"
        alt="Avatar"
      />
      <p class="par-1">Даниэль Пинк</p>
    </div>
    <div
      class="course-student-info-card relative before:bg-gray-3-dark before:w-[75%] before:h-full before:absolute before:top-0 before:left-0 z-0"
    >
      <h3 class="h4 font-semibold h-12">
        13 <span class="h6 text-label-secondary-dark">/20</span>
      </h3>
      <p class="par-1">Уроков завершено</p>
    </div>
    <div class="course-student-info-card">
      <h3 class="h4 font-semibold h-12">2</h3>
      <p class="par-1">Урока за сегодня</p>
    </div>
    <div class="course-student-info-card">
      <img
        class="w-12 h-12 rounded-full"
        src="@/assets/images/avatar.png"
        alt="Avatar"
      />
      <p class="par-1">Хасан Ш.</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.course-student-info-card {
  @apply space-y-[14px] bg-gray-3-dark border border-solid border-gray-3-dark rounded-10px p-4;
}
</style>
