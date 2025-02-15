const aliceTumbling1: Keyframe[] = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

async function animateSequence() {
  const alice10 = document.querySelector<HTMLElement>("#alice1");
  const alice20 = document.querySelector<HTMLElement>("#alice2");
  const alice30 = document.querySelector<HTMLElement>("#alice3");

  if (alice10 && alice20 && alice30) {
    try {
      await alice10.animate(aliceTumbling1, aliceTiming1).finished;
      await alice20.animate(aliceTumbling1, aliceTiming1).finished;
      await alice30.animate(aliceTumbling1, aliceTiming1).finished;
    } catch (err: unknown) {
      if (err instanceof Error)
        alert(`Error when animating ... ${err.message}`);
    }
  } else {
    console.warn("#alice not found");
  }
}

animateSequence();
