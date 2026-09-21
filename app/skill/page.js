export default function SkillPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center max-sm:items-start bg-black">

      <div className="w-[min(1380px,100vw,177.78vh)] aspect-video relative overflow-hidden">

        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/g56LxLFhG1K3fjKwh04f+oqlANxD1-aU.mp4" type="video/mp4" />
        </video>

      </div>

    </div>
  );
}