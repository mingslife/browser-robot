<template>
  <div class="flex p-1 bg-blue-500">
    <button class="flex p-2 bg-transparent rounded text-white hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-transparent">
      <svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="folder"><rect width="24" height="24" opacity="0"/><path d="M19.5 20.5h-15A2.47 2.47 0 0 1 2 18.07V5.93A2.47 2.47 0 0 1 4.5 3.5h4.6a1 1 0 0 1 .77.37l2.6 3.18h7A2.47 2.47 0 0 1 22 9.48v8.59a2.47 2.47 0 0 1-2.5 2.43z"/></g></g></svg>
      <span class="mx-0.5">打开</span>
    </button>
    <button class="flex p-2 bg-transparent rounded text-white hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-transparent">
      <svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="file-add"><rect width="24" height="24" opacity="0"/><path d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2zm.71-7a.79.79 0 0 1-.71-.85V4l3.74 4z"/></g></g></svg>
      <span class="mx-0.5">新建</span>
    </button>
    <button class="flex p-2 bg-transparent rounded text-white hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-transparent">
      <svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="save"><rect width="24" height="24" opacity="0"/><rect x="10" y="17" width="4" height="4"/><path d="M20.12 8.71l-4.83-4.83A3 3 0 0 0 13.17 3H10v6h5a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1V3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h2a3 3 0 0 0 3-3v-7.17a3 3 0 0 0-.88-2.12z"/></g></g></svg>
      <span class="mx-0.5">保存</span>
    </button>
    <button class="flex p-2 bg-transparent rounded text-white hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-transparent">
      <svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="settings-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><circle cx="12" cy="12" r="1.5"/><path d="M20.32 9.37h-1.09c-.14 0-.24-.11-.3-.26a.34.34 0 0 1 0-.37l.81-.74a1.63 1.63 0 0 0 .5-1.18 1.67 1.67 0 0 0-.5-1.19L18.4 4.26a1.67 1.67 0 0 0-2.37 0l-.77.74a.38.38 0 0 1-.41 0 .34.34 0 0 1-.22-.29V3.68A1.68 1.68 0 0 0 13 2h-1.94a1.69 1.69 0 0 0-1.69 1.68v1.09c0 .14-.11.24-.26.3a.34.34 0 0 1-.37 0L8 4.26a1.72 1.72 0 0 0-1.19-.5 1.65 1.65 0 0 0-1.18.5L4.26 5.6a1.67 1.67 0 0 0 0 2.4l.74.74a.38.38 0 0 1 0 .41.34.34 0 0 1-.29.22H3.68A1.68 1.68 0 0 0 2 11.05v1.89a1.69 1.69 0 0 0 1.68 1.69h1.09c.14 0 .24.11.3.26a.34.34 0 0 1 0 .37l-.81.74a1.72 1.72 0 0 0-.5 1.19 1.66 1.66 0 0 0 .5 1.19l1.34 1.36a1.67 1.67 0 0 0 2.37 0l.77-.74a.38.38 0 0 1 .41 0 .34.34 0 0 1 .22.29v1.09A1.68 1.68 0 0 0 11.05 22h1.89a1.69 1.69 0 0 0 1.69-1.68v-1.09c0-.14.11-.24.26-.3a.34.34 0 0 1 .37 0l.76.77a1.72 1.72 0 0 0 1.19.5 1.65 1.65 0 0 0 1.18-.5l1.34-1.34a1.67 1.67 0 0 0 0-2.37l-.73-.73a.34.34 0 0 1 0-.37.34.34 0 0 1 .29-.22h1.09A1.68 1.68 0 0 0 22 13v-1.94a1.69 1.69 0 0 0-1.68-1.69zM12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z"/></g></g></svg>
      <span class="mx-0.5">配置</span>
    </button>
    <button class="flex p-2 bg-transparent rounded text-white hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-transparent" @click.stop="execute">
      <svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="play-circle"><rect width="24" height="24" opacity="0"/><polygon points="11.5 14.6 14.31 12 11.5 9.4 11.5 14.6"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4 11.18l-3.64 3.37a1.74 1.74 0 0 1-1.16.45 1.68 1.68 0 0 1-.69-.15 1.6 1.6 0 0 1-1-1.48V8.63a1.6 1.6 0 0 1 1-1.48 1.7 1.7 0 0 1 1.85.3L16 10.82a1.6 1.6 0 0 1 0 2.36z"/></g></g></svg>
      <span class="mx-0.5">运行</span>
    </button>
  </div>
  <div class="flex flex-col gap-2 p-2">
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
import Core from '@/core'

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
  },
  data () {
    return {
      config: {},
      jobs: [
        { kind: 'page_open', url: 'https://www.bing.com/' },
        { kind: 'page_refresh' },
        { kind: 'delay', duration: 5 },
        { kind: 'page_screenshot', path: '~/Downloads/test-screenshot.png' }
      ],
      code: ''
    }
  },
  methods: {
    execute () {
      let instance = new Core(this.jobs)
      instance.run(this.config)
    }
  }
}
</script>
