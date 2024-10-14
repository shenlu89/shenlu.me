import Image from "next/image";
import {
  CONSERVATION_STATUS,
  COUNTRY_NAME,
  IUCN_RED_LIST_URI,
  WIKI_URI,
} from "@/lib/constant";
import Link from "@/components/custom-link";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

const SpeciesItem = async () => {
  const res = await fetch("https://aes.shenlu.me/api/v1/random", { cache: 'no-store' });
  const { scientific_name, common_name, id, conservation_status, iso_code, image } = await res.json()

  return (
    <div className="flex flex-col bg-slate-100 border p-4 space-y-4 relative text-slate-600 items-center rounded w-full"
    >
      <div className="flex space-x-4 justify-between w-full">
        <div className="flex flex-col space-y-2 text-sm no-wrap truncate">
          <div className="flex space-x-1">
            <span className="hidden md:flex">Taxonomy ID:</span>
            <span className="md:hidden flex">#</span>
            <span className="text-black">{id}</span>
          </div>
          <Link
            href={IUCN_RED_LIST_URI + scientific_name.replace(/\s/g, "%20")}
            className="flex space-x-1 "
          >
            <span className="hidden md:flex">Common Name:</span>
            <span className="text-black font-extrabold hover:text-red-600">
              {common_name}
            </span>
          </Link>
          <Link
            href={IUCN_RED_LIST_URI + scientific_name.replace(/\s/g, "%20")}
            className="flex space-x-1"
          >
            <span className="hidden md:flex">Scientific Name:</span>
            <span className="text-black font-bold hover:text-red-600">
              {scientific_name}
            </span>
          </Link>
          <Link
            href={WIKI_URI + COUNTRY_NAME.get(iso_code)}
            className="flex space-x-1 "
          >
            <span className="hidden md:flex">Country:</span>
            <span className="text-black font-bold hover:text-red-600">{`${getUnicodeFlagIcon(
              iso_code
            )} ${COUNTRY_NAME.get(iso_code)}`}</span>
          </Link>
        </div>
        <Link href={WIKI_URI + scientific_name.replace(/\s/g, "_")}>
          <Image
            src={image}
            width={110}
            height={110}
            alt=""
            className="rounded-full"
          />
        </Link>
        <Link
          href={WIKI_URI + CONSERVATION_STATUS.get(conservation_status)}
          className={`flex absolute top-4 right-4 text-sm items-center ${conservation_status} justify-center rounded-full size-8 font-bold`}
        >
          {conservation_status}
        </Link>
      </div>
      <hr className="border w-full border-t-slate-200 border-x-0 border-b-0" />
      <div className="flex justify-between w-full">
        <div className="flex flex-col space-y-2">
          <Link
            href="https://aes.shenlu.me"
            className="flex items-center space-x-2"
          >
            <Image
              className="flex"
              src="/images/aes-logo.svg"
              width={24}
              height={24}
              alt="Amazing Endemic Species"
              priority
            />
            <div className="font-extrabold text-black text-lg">
              Amazing Endemic Species
            </div>
          </Link>
          <span>
            An open-source, community-driven SaaS (Species-as-a-Service)
            application.
          </span>
        </div>
        <div>
          <Image
            width={64}
            height={64}
            alt="QR Code"
            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://aes.shenlu.me`}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SpeciesItem;
