<template>
  <header class="Header">
    <div class="logo">
      <span>YS</span>
      <small>FRONTEND DEVELOPER</small>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Fjalla+One');

.Header {
  padding: 5px 0;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 20px #888;
  background-color: #333;
  .logo {
    display: inline-flex;
    flex-direction: column;
    color: white;
    &:hover {
      cursor: pointer;
      color: #f2f2f2;
    }
    &:active {
      color: #ddd;
    }
    span,
    small {
      display: block;
      text-align: center;
    }
    span {
      font-family: 'Fjalla One', sans-serif;
      font-size: 30px;
      font-weight: 900;
      line-height: 35px;
      letter-spacing: 5px;
    }
    small {
      display: block;
      font-family: 'Fjalla One', sans-serif;
      font-size: 13px;
      letter-spacing: 1px;
    }
  }
}
</style>