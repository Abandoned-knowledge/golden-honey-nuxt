export function animationOnScroll(components: HTMLElement[]) {
  const triggeredBottom = (window.innerHeight / 5) * 4;

  components.forEach((component) => {
    const componentTop = component.getBoundingClientRect().bottom;
    if (componentTop - 200 < triggeredBottom) {
      component.classList.add("animate");
    } else {
      component.classList.remove("animate");
    }
  });
}
