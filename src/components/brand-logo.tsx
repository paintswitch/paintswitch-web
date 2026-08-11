import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  loading?: "eager" | "lazy";
};

export function BrandLogo({ className, loading = "lazy" }: BrandLogoProps) {
  return (
    <Image
      src="/images/paintswitch-logo.svg"
      alt=""
      aria-hidden="true"
      width={915}
      height={524}
      loading={loading}
      className={className}
    />
  );
}
