<template>
  <div class="flex flex-col items-center gap-3 p-3">
    <job-page-open></job-page-open>
    <job-page-refresh></job-page-refresh>
    <job-delay></job-delay>
    <job-page-screenshot></job-page-screenshot>
    <!-- <job-condition></job-condition> -->
    <!-- <job-anchor></job-anchor> -->
    <!-- <job-jump></job-jump> -->
    <div class="w-[360px] px-2 py-3 text-white rounded flex justify-center border-2 border-zinc-300 border-dashed">
      <svg class="w-6 h-6 fill-zinc-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="plus"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/></g></g></svg>
    </div>
  </div>
</template>

<script>
// import JobAnchor from '@/components/JobAnchor'
// import JobCondition from '@/components/JobCondition'
import JobDelay from '@/components/JobDelay'
// import JobJump from '@/components/JobJump'
import JobPageOpen from '@/components/JobPageOpen'
import JobPageRefresh from '@/components/JobPageRefresh'
import JobPageScreenshot from '@/components/JobPageScreenshot'

export default {
  name: 'HomeView',
  components: {
    // JobAnchor,
    // JobCondition,
    JobDelay,
    // JobJump,
    JobPageOpen,
    JobPageRefresh,
    JobPageScreenshot
  }
}
</script>
