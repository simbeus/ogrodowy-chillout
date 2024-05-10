import FotoSegmentWrapper from "./ui/pageSegments/FotoSegmentWrapper";

import Header from "./ui/Header";
import DescriptionSegmentWrapper from "./ui/pageSegments/DescriptionSegmentWrapper";

import ParallaxImage from "./ui/pageSegments/ParallaxImage";
import Footer from "./ui/Footer";
import { listTotalAssets, listTotalImages } from "./api/api";
import UpButton from "./ui/simpleUiComponents/UpButton";
import { CloudinaryResource, Folder, FolderStructure } from "./types/types";
import useGetFolderStructure from "@/utils/useGetFolderStructure";

export default async function Home() {
  const totalImages = await listTotalImages(500);
  const totalAssets = await listTotalAssets(500);

  const combinedAssets = [...totalImages.resources, ...totalAssets.resources];

  const folderStructure = useGetFolderStructure(combinedAssets);
  const fotoTilesFolderStructure = folderStructure["FotoTiles"] as FolderStructure;
  const fotoSegmentNames = Object.keys(fotoTilesFolderStructure);
  const descriptionAssets = folderStructure[
    "Descriptions"
  ] as CloudinaryResource[];

  const oNasFile = descriptionAssets.find((file) => {
    return file.public_id.toLowerCase().includes("onas");
  }) as CloudinaryResource;

  const kontaktFile = descriptionAssets.find((file) => {
    return file.public_id.toLowerCase().includes("kontakt");
  }) as CloudinaryResource;

  const parallaxPhoto = descriptionAssets.find((file) => {
    return file.resource_type === "image";
  }) as CloudinaryResource;

  //TODO: funkcja robiaca kolumny imageTilesow skokowo od szerokosci ekranu, imageTile width = 100%
  //ilosc kolumn = Math.floor(1+szerokosc ekranu/840px) czy cos takiego

  //albo moze zamiast tego co na gorze jakos ogarnac po prostu zeby wielkosc obrazka nie byla taka sztywna

  //TODO dwa: dodac onloading dla fotek!!!!!

  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <Header folders={fotoSegmentNames} />
      <ParallaxImage foto={parallaxPhoto} />
      <UpButton />
      <DescriptionSegmentWrapper
        descriptionTextFile={oNasFile}
        customName="O nas"
      />
      {fotoSegmentNames.map((segmentName, i) => {
        return (
          <FotoSegmentWrapper
            folderStructure={fotoTilesFolderStructure}
            folderName={segmentName}
            key={i}
          />
        );
      })}
      <DescriptionSegmentWrapper
        descriptionTextFile={kontaktFile}
        customName="Kontakt"
      />
      <Footer />
    </div>
  );
}

/**
      <div style={{ position: "absolute", width: "100%" }}>
      <Header folders={fotoFolders} />
      <ParallaxImage foto={parallaxPhoto[0]} />
      <UpButton />
      <DescriptionSegmentWrapper folder="HomeScreen/" customName="O nas" />
      {fotoFolders.map((folder, i) => {
        return <FotoSegmentWrapper folder={folder} key={i} />;
      })}
      <DescriptionSegmentWrapper folder="HomeScreen/" customName="Kontakt" />
      <Footer />
    </div>
 */
