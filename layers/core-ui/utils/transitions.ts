export function $transitionSlideUp(el: HTMLElement, duration: number = 300) {
   el.style.transitionProperty = "height, padding"
   el.style.transitionDuration = duration + "ms"
   el.style.height = el.offsetHeight + "px"
   el.offsetHeight
   el.style.overflow = "hidden"
   el.style.height = "0"
   el.style.paddingTop = "0"
   el.style.paddingBottom = "0"
   window.setTimeout(() => {
      el.style.display = "none"
      el.style.removeProperty("height")
      el.style.removeProperty("padding-top")
      el.style.removeProperty("padding-bottom")
      el.style.removeProperty("overflow")
      el.style.removeProperty("transition-duration")
      el.style.removeProperty("transition-property")
   }, duration)
}

export function $transitionSlideDown(el: HTMLElement, duration: number = 300) {
   el.style.removeProperty("display")
   let display = window.getComputedStyle(el).display
   if (display === "none") display = "block"
   el.style.display = display
   let height = el.offsetHeight
   el.style.overflow = "hidden"
   el.style.height = "0"
   el.style.paddingTop = "0"
   el.style.paddingBottom = "0"
   el.offsetHeight

   el.style.transitionProperty = "height, padding"
   el.style.transitionDuration = duration + "ms"
   el.style.height = height + "px"
   el.style.removeProperty("padding-top")
   el.style.removeProperty("padding-bottom")
   window.setTimeout(() => {
      el.style.removeProperty("height")
      el.style.removeProperty("overflow")
      el.style.removeProperty("transition-duration")
      el.style.removeProperty("transition-property")
   }, duration)
}

export function $transitionFadeOut(el: HTMLElement, duration: number = 300) {
   el.style.transitionProperty = "opacity";
   el.style.transitionDuration = `${duration}ms`;
   el.style.opacity = "1"; // Ensure it starts fully visible

   // Trigger transition to invisible
   el.offsetHeight;
   el.style.opacity = "0";

   window.setTimeout(() => {
      el.style.display = "none";
      el.style.removeProperty("opacity");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
   }, duration);
}

export function $transitionFadeIn(el: HTMLElement, duration: number = 300) {
   // Ensure visibility
   el.style.display = "flex";
   el.style.opacity = "0"; // Start from transparent
   el.style.transitionProperty = "opacity";
   el.style.transitionDuration = `${duration}ms`;

   // Trigger reflow
   el.offsetHeight;

   // Transition to visible
   el.style.opacity = "1";

   window.setTimeout(() => {
      el.style.removeProperty("opacity");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
   }, duration);
}
