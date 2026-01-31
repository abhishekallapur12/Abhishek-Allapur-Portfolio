import LaserFlow from "./LaserFlow";

const LaserHeader = () => {
  return (
    <div className="relative w-full h-40 overflow-hidden rounded-t-2xl">
      {/* Laser background */}
      <LaserFlow
        horizontalBeamOffset={0.0}
        verticalBeamOffset={-0.25}
        horizontalSizing={0.9}
        verticalSizing={1.2}
        wispDensity={1}
        wispSpeed={12}
        wispIntensity={4}
        flowSpeed={0.3}
        flowStrength={0.25}
        fogIntensity={0.4}
        fogScale={0.35}
        decay={1.1}
        falloffStart={1.2}
        color="#FF79C6"
      />

      {/* Optional overlay fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black pointer-events-none" />
    </div>
  );
};

export default LaserHeader;
