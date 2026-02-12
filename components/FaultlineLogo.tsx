export default function FaultlineLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="280" height="52" viewBox="0 0 280 52" fill="none" role="img" aria-label="FAULTLINE Signal Audio">
  <defs>
    <mask id="faultCut" maskUnits="userSpaceOnUse">
      <rect x="0" y="0" width="280" height="52" fill="white" />
      <path
        d="M24 18 L140 30"
        stroke="black"
        stroke-width="2.0"
        stroke-linecap="round"
      />
    </mask>
  </defs>

  <text
    x="0"
    y="32"
    font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
    font-size="24"
    font-weight="800"
    letter-spacing="1.4"
    fill="currentColor"
    mask="url(#faultCut)"
  >
    FAULTLINE
  </text>

  <path
    d="M24 18 L140 30"
    stroke="currentColor"
    stroke-opacity="0.32"
    stroke-width="1.2"
    stroke-linecap="round"
  />

  <text
    x="70"
    y="48"
    text-anchor="middle"
    font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
    font-size="10"
    font-weight="600"
    letter-spacing="5.3"
    fill="currentColor"
    opacity="0.6"
  >
    SIGNAL AUDIO
  </text>
</svg>



  );
}

