<template>
  <div class="agency__diagrams">
    <div class="agency__diagrams-item">
      <div class="agency__curcle agency__curcle-1"></div>
      <p>Years of experience</p>
    </div>
    <div class="agency__diagrams-item">
      <div class="agency__curcle agency__curcle-2"></div>
      <p>Awards</p>
    </div>
    <div class="agency__diagrams-item">
      <div class="agency__curcle agency__curcle-3"></div>
      <p>Projects</p>
    </div>
    <div class="agency__diagrams-item">
      <div class="agency__curcle agency__curcle-4"></div>
      <p>Happy clients</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$gray800: #424551;

.agency__diagrams {
  display: flex;
  gap: 45px;
  width: 100%;
  justify-content: center;
}

.agency__diagrams-item {
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    color: $gray800;
  }
}

.agency__curcle {
  width: 148px;
  height: 148px;
  border-radius: 50%;
  position: relative;
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  text-align: center;
  &:after {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - 45%);
    left: calc(50% - 45%);
    width: 90%;
    height: 90%;
    background-color: #fff;
    border-radius: 50%;
  }
}

.agency__curcle-1 {
  background: conic-gradient(#f89828 0% 90%, #fccb92 90% 100%);
  &:after {
    content: '10';
  }
}

.agency__curcle-2 {
  background: conic-gradient(#f52f6e 0% 75%, #fa95b6 75% 100%);
  &:after {
    content: '45';
  }
}

.agency__curcle-3 {
  background: conic-gradient(#5a87fc 0% 85%, #abc2fd 85% 100%);
  &:after {
    content: '540+';
  }
}

.agency__curcle-4 {
  background: conic-gradient(#03cea4 0% 100%);
  &:after {
    content: '100%';
  }
}

@media (max-width: 800px) {
  .agency__diagrams {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .agency__diagrams-item {
    align-items: center;
  }
}

@media (max-width: 600px) {
  .agency__diagrams {
    gap: 20px;
  }
}
</style>
