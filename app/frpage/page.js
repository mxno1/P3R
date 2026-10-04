export default function Frpage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center max-sm:items-start bg-black">
      <div className="w-[min(1380px,100vw,177.78vh)] aspect-video relative overflow-hidden">
        <img
          
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
}