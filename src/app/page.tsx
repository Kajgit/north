import Link from "next/link";

const mockUrls = [
  "https://wk65nq7arn.ufs.sh/f/GXFj091HqP3f5AFXHXOw3ra8B27hkAtIW0VGD1xwv6XTdNjb",
  "https://wk65nq7arn.ufs.sh/f/GXFj091HqP3fbzv8b9uBfMgcY8IptU13HmwAN6n5zFRC2Evd",
  "https://wk65nq7arn.ufs.sh/f/GXFj091HqP3fb0IOJqJuBfMgcY8IptU13HmwAN6n5zFRC2Ev",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 bg-white/50">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
      Hello (in progress)
    </main>
  );
}
