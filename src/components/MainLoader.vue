<template>
    <div class="loader"></div>
</template>

<style lang="scss" scoped>

/* HTML: <div class="loader"></div> */
// CREDITS: Temani Afif 
// link: https://css-loaders.com/dancers/
.loader {
  width: 60px;
  height: 16px;
  display: flex;
  justify-content: space-between;
  animation: l3-0 2s infinite alternate;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loader:before,
.loader:after {
  content: "";
  width: 16px;
  background: #3FB8AF;
  animation: l3-1 1s infinite alternate;
}
.loader:after {
  background: #FF3D7F;
  --s:-1;
}
@keyframes l3-0 {
   0%,40%   {transform: rotate(0)}
   80%,100% {transform: rotate(.5turn)}
}
@keyframes l3-1 {
   80%,100% {transform: translate(calc(var(--s,1)*14px))}
}
</style>