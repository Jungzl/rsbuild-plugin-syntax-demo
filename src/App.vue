<script lang="ts" setup>
async function test() {
  let res = await fetch('https://api.github.com/users/github')
  res = await res.json()
  console.log(res)
}

await test()

const foo:{bar?:string} = {}
console.log(foo?.bar)
</script>
<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
