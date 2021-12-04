<script>
  import Button from '@lib/Button.svelte';
  import Blob from './blob/Blob1.svelte';
  import * as jq from 'jquery';
  export let scrollToElement = function (el, ms) {
    var speed = ms ? ms : 600;
    jq('html,body').animate(
      {
        scrollTop: jq(el).offset().top,
      },
      speed
    );
  };
</script>

<div style="height:80vh;">
  <div
    id="blob-wrapper"
    class="
	hidden
	z-10
	md:block
	relative
	dark:filter dark:contrast-125 dark:brightness-110 dark:-hue-rotate-15
	"
  >
    <svg
      width="auto"
      height="100%"
      viewBox="0 0 683 884"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M681.444 386.315C665.565 552.118 554.314 1067.82 163.754 814.21C-74.6997 659.368 275.033 547.012 80.5105 367.4C-92.2252 207.905 32.1209 -23.043 302.756 2.87543C573.391 28.7939 697.322 220.513 681.444 386.315Z"
        fill="url(#paint0_radial_118:45)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_118:45"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(333.706 168.528) rotate(178.917) scale(614.993 832.17)"
        >
          <stop stop-color="#8000FF" />
          <stop offset="1" stop-color="#BD00FF" />
        </radialGradient>
      </defs>
    </svg>
  </div>

  <div class="h-screen">
    <div
      class="w-full flex items-left justify-center flex-col h-4/6
	sm:h-4/5"
    >
      <h1
        class="
	align-left font-secondary font-bold text-5xl mb-4 leading-90 z-40 text-black
	lg:text-7xl
	dark:text-white
	"
      >
        We shape <br /> the future.
      </h1>
      <Button
        text="Learn More"
        extraClass="z-40"
        click={() => {
          scrollToElement(jq('#who-anchor'), 400);
        }}
      />
    </div>
  </div>
</div>

<style>
  #blob-wrapper {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(45%, -25%) rotate(20deg);
    height: 200vh;
  }
</style>
