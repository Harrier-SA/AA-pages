<template>
  <div class="max-w-4xl mx-auto my-8 p-4 bg-white rounded shadow">
    <iframe
      src="https://www.camsecure.co.uk/webcam/menteith/cam.html"
      allowfullscreen
      class="border-2 border-gray-300 rounded w-full aspect-video"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script setup>
flowplayer.conf = {
  brand: {
    text: 'Camsecure',
    showOnOrigin: true,
  },

  analytics: 'UA-3434229-1',
}
flowplayer.conf.share = false
flowplayer(function (api, root) {
  // announce missing stream
  api.on('error', function (e, api, err) {
    if (err.code === 4 || err.code === 9) {
      $('.fp-message p', root).text('We are sorry, currently no live stream available.')
    }
  })
})

flowplayer(function (api, root) {
  var fsbutton = root.querySelector('.fp-fullscreen')

  // append fullscreen button after HD menu is added on ready
  api.on('ready', function () {
    root.querySelector('.fp-controls').appendChild(fsbutton)
  })
})

flowplayer(function (api, root) {
  // keep large scaled play button visible
  api.on('pause', function () {
    root.querySelector('.fp-play').className += ' fp-visible'
  })
})
</script>

<style lang="scss" scoped></style>
